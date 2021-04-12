// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const videosFolder = "./Videos/";
const fs = require("fs");

export default (req, res) => {
  if (req.method === "GET") {
    const allVideoFiles = fs.readdirSync(videosFolder).map((fileName) => {
      return fileName;
    });
    res.status(200).json({ videos: allVideoFiles });
  } else if (req.method === "POST") {
    const { body } = req;
    switch (body.type) {
      case "shutdown":
        console.log("okkk");
        res.status(200).send(true);
        break;
      default:
        res.status(200).send(false);
    }
  }
};
