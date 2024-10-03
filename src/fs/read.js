import { access, readFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const read = async () => {
  try {
    await access(path.join(__dirname, "files", "fileToRead.txt"));

    const contents = await readFile(
      path.join(__dirname, "files", "fileToRead.txt"),
      {
        encoding: "utf8",
      }
    );
    console.log(contents);
  } catch (err) {
    throw new Error("FS operation failed");
  }
};

await read();
