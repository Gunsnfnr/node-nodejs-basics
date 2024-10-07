import * as fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "url";
import { createHash } from "node:crypto";
import { stdout } from "node:process";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const calculateHash = async () => {
  const readStream = fs.createReadStream(
    path.join(__dirname, "files/fileToCalculateHashFor.txt")
  );

  const hash = createHash("sha256");

  readStream.on("data", (dataChunk) => {
    hash.update(dataChunk);
    console.log(hash.digest("hex"));
  });
};

await calculateHash();
