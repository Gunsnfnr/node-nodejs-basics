const parseEnv = () => {
  let result = "";
  for (const v in process.env) {
    if (v.startsWith("RSS_")) {
      const variableAndValue = `${v}=${process.env[v]}`;
      result =
        result === "" ? variableAndValue : `${result}; ${variableAndValue}`;
    }
  }
  console.log(result);
};

parseEnv();
