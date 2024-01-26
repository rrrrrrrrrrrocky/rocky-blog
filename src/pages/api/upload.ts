// import formidable from "formidable";
// import FormData from "form-data";
import fs from "fs";
import { join } from "path";
import util from "util";

// export const config = {
//   api: {
//     bodyParser: false,
//   },
// };

const postsDirectory = join(process.cwd(), "_posts");

console.log("process.cwd() ", process.cwd());

const form = `---
title: 'test'
excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Praesent elementum facilisis leo vel fringilla est ullamcorper eget. At imperdiet dui accumsan sit amet nulla facilities morbi tempus.'
coverImage: '/assets/blog/preview/cover.jpg'
date: '2020-03-16T05:35:07.322Z'
author:
  name: Joe Haddad
  picture: '/assets/blog/authors/joe.jpeg'
ogImage:
  url: '/assets/blog/preview/cover.jpg'
---

realtest
`;

const upload = async (req, res) => {
  if (req.method !== "POST") {
    res.status(405).send({ message: "Only POST requests allowed" });
    return;
  }

  // not needed in NextJS v12+
  // const body = JSON.parse(req.body);
  // console.log("🚀 ~ req", body);
  // console.log("🚀 ~ res", res);

  const fs_writeFile = util.promisify(fs.writeFile);
  // console.log("🚀 ~ file: api.ts:27 ~ getPostSlugs ~ fs", fs);

  fs_writeFile(
    `${postsDirectory}/${req.body.fileName}.md`,
    req.body.markdown
  ).catch((error) => {
    console.log(error);
  });

  return res.status(201).send(req.body);
  // return fs.readdirSync(postsDirectory);
  // const fileData = await new Promise((resolve, reject) => {
  //   const form = new formidable.IncomingForm({
  //     maxFileSize: 5 * 1024 * 1024,
  //     keepExtensions: true,
  //   });

  //   form.parse(req, (err, fields, files) => {
  //     if (err) return reject(err);
  //     return resolve(files);
  //   });
  // });

  // const formData = new FormData();
  // const file = fileData.file;
  // const readStream = fs.createReadStream(file.filepath);

  // formData.append("file", readStream);

  // const api = await fetch("http://localhost:7777/upload", {
  //   method: "POST",
  //   headers: {
  //     "Content-Type": "multipart/form-data; boundary=" + formData.getBoundary(),
  //   },
  //   data: formData,
  // });

  // const status = api.status;
  // const data = await api.json();

  // console.log(data);

  // if (status === 200) {
  //   res.status(status).json({ success: true });
  // } else {
  //   return res.status(500).json("Unknown Error");
  // }
};

export default upload;
