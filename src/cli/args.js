const parseArgs = () => {
  let result = "";
  result = process.argv.reduce((acc, arg, index, arr) => {
    if (arg.startsWith("--")) {
      const argWithValue = `${arg.slice(2)} is ${arr[index + 1]}`;
      acc = acc === "" ? argWithValue : `${acc}, ${argWithValue}`;
    }
    return acc;
  }, "");
  console.log(result);
};

parseArgs();
