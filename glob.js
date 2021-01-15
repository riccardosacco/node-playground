const glob = require("glob");
const fs = require("fs");

// options is optional
glob("*/*.js", (err, files) => {
  // files is an array of filenames.
  // If the `nonull` option is set, and nothing
  // was found, then files is ["**/*.js"]
  // er is an error object or null.
  console.log(files);

  files.forEach((file) => {
    const fileContent = fs.readFileSync(file);

    console.log(fileContent.toString());
  });
});
