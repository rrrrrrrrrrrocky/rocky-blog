'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';

import Container from '@/components/container';
import Layout from '@/components/layout';

const Write = () => {
  const router = useRouter();

  const [{ author, content, title }, setValue] = useState({
    author: '',
    content: '',
    title: '',
  });
  const uploadFile = async (file: any) => {
    const formData = new FormData();
    formData.append('file', file);

    const res = await fetch('/api/imageUpload', {
      body: formData,
      method: 'POST',
    });

    console.log('res >>>', res);
  };

  const handleChangeFile = (e: any) => {
    const [file] = [...e.target.files];
    uploadFile(file);
  };

  const inputOnChange = (e: any) => {
    const { name, value } = e.target;
    setValue((prev) => ({ ...prev, [name]: value }));
  };

  const onSubmit = async () => {
    console.log({ author, content, title });

    const markdown = `---
    title: ${title}
    excerpt: 'excerpt'
    coverImage: '/assets/blog/preview/cover.jpg'
    date: '2020-03-16T05:35:07.322Z'
    author:
      name: ${author}
      picture: '/assets/blog/authors/joe.jpeg'
    ogImage:
      url: '/assets/blog/preview/cover.jpg'
---
    ${content}
    `;

    const data = {
      fileName: `${new Date()}_${title}`,
      markdown,
    };
    const res = await fetch('/api/upload', {
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
    });
    if (res.ok) {
      router.push('/');
    }
  };

  return (
    <Layout preview={false}>
      <Container>
        <h1 className="my-10 text-2xl">글쓰는 페이지</h1>
        <div className="my-2 flex items-center justify-start border-[1px] border-gray-300 p-4">
          <h3 className="mr-10 w-[100px] text-xl">커버 이미지</h3>

          <input
            accept="image/png, image/jpeg"
            id="input-file"
            type="file"
            onChange={handleChangeFile}
          />
        </div>
        <div className="mb-1 flex items-center justify-start border-[1px] border-gray-300 p-4">
          <h3 className="mr-10 w-[100px] text-xl">타이틀</h3>

          <input
            className="w-full rounded-lg border-[1px] border-gray-200 p-2 outline-none focus:border-blue-500"
            name="title"
            value={title}
            onChange={inputOnChange}
          />
        </div>
        <div className="mb-1 flex items-center justify-start border-[1px] border-gray-300 p-4">
          <h3 className="mr-10 w-[100px] text-xl">저자</h3>

          <input
            className="w-full rounded-lg border-[1px] border-gray-200 p-2 outline-none focus:border-blue-500"
            name="author"
            value={author}
            onChange={inputOnChange}
          />
        </div>

        <div className="mb-1 flex items-center justify-start border-[1px] border-gray-300 p-4">
          <h3 className="mr-10 w-[100px] text-xl">내용</h3>

          <textarea
            className="min-h-[400px] w-full rounded-lg border-[1px] border-gray-200 p-2 outline-none focus:border-blue-500"
            name="content"
            value={content}
            onChange={inputOnChange}
          />
        </div>

        <div className="mt-4 mb-1 flex items-center justify-end">
          <button
            className="rounded-md bg-blue-500 py-3 px-6 text-white hover:bg-blue-600"
            type="submit"
            onClick={onSubmit}
          >
            Submit
          </button>
        </div>
      </Container>
    </Layout>
  );
};

export default Write;
