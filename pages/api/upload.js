import multer from 'multer';
import { execWithPromise } from '../../utils/cmdUtils';

export const config = {
  api: {
    bodyParser: false,
  },
};

// const uploadd = multer({
//   dest: "../pics/",
//   filename: function (req, file, cb) {
//     cb(null, file.fieldname + "-" + Date.now());
//   },
//   // you might also want to set some limits: https://github.com/expressjs/multer#limits
// });

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'pics/');
  },
  filename: function (req, file, cb) {
    //cb(null, `uploaded_image.${file.originalname.split(".").pop()}`);
    cb(null, `uploaded_image.jpg`);
    // cb(null, file.originalname);
  },
});
var upload = multer({ storage: storage });

export default (req, res) => {
  upload.single('file')(req, {}, (err) => {
    // do error handling here
    if (!err) {
      console.log('Image saved!');
      execWithPromise('python renderImage.py pics/uploaded_image.jpg').then(
        () => {
          res.status(200).send({});
        }
      );
    }
  });
};
