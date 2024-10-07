import * as fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const read = async () => {
  const readStream = fs.createReadStream(
    path.join(__dirname, "files/fileToRead.txt")
  );

  readStream.on("data", (dataChunk) => {
    process.stdout.write(`${dataChunk}\n`);
  });
};

await read();
