import { existsSync, mkdirSync, mkdtempSync, rmSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { spawnSync } from "node:child_process";
import { fileURLToPath, pathToFileURL } from "node:url";
import { tmpdir } from "node:os";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const outputDir = resolve(root, "public", "cv");
const chromeCandidates = [
  "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe",
  "C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe",
  "C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe",
  "C:\\Program Files\\Microsoft\\Edge\\Application\\msedge.exe",
];

const chrome = chromeCandidates.find((candidate) => existsSync(candidate));

if (!chrome) {
  throw new Error("Could not find Chrome or Edge to render PDFs.");
}

mkdirSync(outputDir, { recursive: true });

const npmExecPath = process.env.npm_execpath;
const buildCommand = npmExecPath ? process.execPath : "npm";
const buildArgs = npmExecPath ? [npmExecPath, "run", "build"] : ["run", "build"];

const build = spawnSync(buildCommand, buildArgs, {
  cwd: root,
  stdio: "inherit",
});

if (build.error) {
  throw build.error;
}

if (build.status !== 0) {
  process.exit(build.status ?? 1);
}

const jobs = [
  {
    input: resolve(root, "dist", "cv-print", "index.html"),
    output: resolve(outputDir, "jordan-amaya-cv-en.pdf"),
  },
  {
    input: resolve(root, "dist", "es", "cv-print", "index.html"),
    output: resolve(outputDir, "jordan-amaya-cv-es.pdf"),
  },
];

for (const job of jobs) {
  const profileDir = mkdtempSync(resolve(tmpdir(), "cv-print-"));
  const render = spawnSync(
    chrome,
    [
      "--headless",
      "--disable-gpu",
      "--no-pdf-header-footer",
      `--user-data-dir=${profileDir}`,
      `--print-to-pdf=${job.output}`,
      pathToFileURL(job.input).href,
    ],
    { cwd: root, stdio: "inherit" },
  );

  rmSync(profileDir, { recursive: true, force: true });

  if (render.error) {
    throw render.error;
  }

  if (render.status !== 0) {
    process.exit(render.status ?? 1);
  }
}
