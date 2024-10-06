import * as fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "url";
import * as os from "os";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const read = async () => {
  const readStream = fs.createReadStream(
    path.join(__dirname, "files/fileToRead.txt")
  );

  readStream.on("data", (dataChunk) => {
    process.stdout.write(`${dataChunk}${os.EOL}`);
  });
};

await read();
