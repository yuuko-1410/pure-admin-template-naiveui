module.exports = {
  generator: [
    {
      input: "http://localhost:8080/openapi.yaml",
      type: "auto",
      output: "src/api",
      global: "Apis"
    }
  ]
};
