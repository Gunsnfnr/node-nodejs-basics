import { pipeline } from "node:stream/promises";
import * as fs from "node:fs";
import * as zlib from "node:zlib";
import path from "node:path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const decompress = async () => {
  await pipeline(
    fs.createReadStream(path.join(__dirname, "files", "archive.gz")),
    zlib.createUnzip(),
    fs.createWriteStream(path.join(__dirname, "files", "fileToCompress.txt"))
  );
  console.log("Unzipped successfully.");
};

await decompress();
