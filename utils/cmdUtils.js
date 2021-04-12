const { exec } = require("child_process");

const execWithPromise = (command) =>
  new Promise((resolve, reject) => {
    exec(command, (error, stdout, stderr) => {
      if (error) {
        reject(`error: ${error.message}`);
      }
      if (stderr) {
        reject(`stderr: ${stderr}`);
      }
      resolve(`stdout: ${stdout}`);
    });
  });

module.exports = {
  execWithPromise,
};
