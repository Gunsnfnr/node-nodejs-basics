import * as fsPromises from "node:fs/promises";
import { access } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const rename = async () => {
  try {
    await fsPromises.rename(
      path.join(__dirname, "files", "wrongFilename.txt"),
      path.join(__dirname, "files", "properFilename.md")
    );
  } catch (err) {
    throw new Error("FS operation failed");
  }
};

await rename();
