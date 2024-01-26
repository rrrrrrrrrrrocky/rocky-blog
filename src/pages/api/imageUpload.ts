import FormData from 'form-data';
import formidable from 'formidable';
import fs from 'fs';

export const config = {
  api: {
    bodyParser: false,
  },
};

const imageUpload = async (req, res) => {
  const fileData = await new Promise((resolve, reject) => {
    const form = new formidable.IncomingForm({
      keepExtensions: true,
      maxFileSize: 5 * 1024 * 1024,
    });

    form.parse(req, (err, fields, files) => {
      if (err) return reject(err);
      return resolve(files);
    });
  });

  const formData = new FormData();
  // const file = fileData.file;
  // const readStream = fs.createReadStream(file.filepath);

  // formData.append("file", readStream);

  const api = await fetch('http://localhost:3000/imageUpload', {
    headers: {
      'Content-Type': `multipart/form-data; boundary=${formData.getBoundary()}`,
    },
    method: 'POST',
    // data: formData,
  });

  const { status } = api;
  const data = await api.json();

  console.log('data >>>', data);

  if (status === 200) {
    res.status(status).json({ success: true });
  } else {
    return res.status(500).json('Unknown Error');
  }
};

export default imageUpload;
