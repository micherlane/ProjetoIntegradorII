import { diskStorage } from "multer";
import { join } from "path";

const path = join(__dirname, '..','..','..', 'uploads')

export const storage = diskStorage({
    destination: path,
    filename: (req, file, callback) => {
      callback(null, generateFilename(file));
    }
  });
  
  function generateFilename(file) {
    return `${Date.now()}.${file.originalname}`;
  }
  