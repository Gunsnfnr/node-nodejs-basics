import { spawn } from "node:child_process";
import path from "node:path";
import { fileURLToPath } from "url";
import { createRequire } from "module";
import stream from "node:stream";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const spawnChildProcess = async (args) => {
  const child = spawn("node", [
    path.join(__dirname, "files", "script.js"),
    ...args,
  ]);

  child.stdout.on("data", (data) => {
    console.log(`stdout:\n${data}`);
  });
  process.stdin.pipe(child.stdin);
};

spawnChildProcess(["someArgument1", "someArgument2"]);
