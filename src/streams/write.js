import * as fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "url";
import readline from "node:readline";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const write = async () => {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  const writeStream = fs.createWriteStream(
    path.join(__dirname, "files/fileToWrite.txt")
  );
  rl.on("line", (typedText) => {
    if (typedText.match(/^exit$/i)) {
      rl.close();
    } else writeStream.write("\n" + typedText);
  });

  rl.on("SIGINT", () => rl.close());
};

await write();
