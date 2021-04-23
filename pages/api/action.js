// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const videosFolder = './Videos/';
const fs = require('fs');
const { execWithPromise } = require('../../utils/cmdUtils');

export default async (req, res) => {
  try {
    if (req.method === 'GET') {
    } else if (req.method === 'POST') {
      const { body } = req;
      console.log(body);
      switch (body.type) {
        case 'displayImage':
          await execWithPromise(
            'python renderImage.py pics/uploaded_image.jpg'
          );
          res.status(200).send(true);
          break;
        case 'playVideo':
          await execWithPromise(
            // `python slowmovie.py -f Psycho.1960.mp4 -d 150 -i 5 -s 5000`
            `python slowmovie.py -f ${body.params}`
          );
          res.status(200).send(true);
          break;
        case 'loadVideos':
          const allVideoFiles = fs.readdirSync(videosFolder).map((fileName) => {
            return fileName;
          });
          res.status(200).json({ videos: allVideoFiles });
          break;
        case 'shutdown':
          //await execWithPromise("sudo shutdown -h now");
          res.status(200).send(true);
          break;
        case 'restart':
          //await execWithPromise("sudo reboot -h now");
          res.status(200).send(true);
          break;
        default:
          res.status(200).send(false);
      }
    }
  } catch (e) {
    console.error(e);
    res.status(502).send(e);
  }
};
