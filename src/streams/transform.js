import * as fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "url";
import { Transform } from "node:stream";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const transform = async () => {
  const reverseTransform = new Transform({
    transform(chunk, encoding, callback) {
      this.push(chunk.toString().split("").reverse().join("") + "\n");
    },
    flush(callback) {
      callback();
    },
  });

  let input = "";
  process.stdin.pipe(reverseTransform).pipe(process.stdout);
  process.stdin.on("data", function (chunk) {
    input += chunk;

    const lines = input.split("\n");
    if (lines.length > 1) {
      process.exit();
    }
  });
};

await transform();
