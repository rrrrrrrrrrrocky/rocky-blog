import fs from 'fs';
import matter from 'gray-matter';
import { join } from 'path';
import util from 'util';

const postsDirectory = join(process.cwd(), '_posts');

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

export function getPostSlugs() {
  const data = '???';

  // const fs_writeFile = util.promisify(fs.writeFile);
  // console.log("🚀 ~ file: api.ts:27 ~ getPostSlugs ~ fs", fs);

  // fs_writeFile(`${postsDirectory}/message.md`, form).catch((error) => {
  //   console.log(error);
  // });
  return fs.readdirSync(postsDirectory);
  // return [];
}

export function getPostBySlug(slug: string, fields: string[] = []) {
  const realSlug = slug.replace(/\.md$/, '');
  const fullPath = join(postsDirectory, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { content, data } = matter(fileContents);

  type Items = {
    [key: string]: string;
  };

  const items: Items = {};

  // Ensure only the minimal needed data is exposed
  fields.forEach((field) => {
    if (field === 'slug') {
      items[field] = realSlug;
    }
    if (field === 'content') {
      items[field] = content;
    }

    if (typeof data[field] !== 'undefined') {
      items[field] = data[field];
    }
  });

  return items;
}

export function getAllPosts(fields: string[] = []) {
  const slugs = getPostSlugs();
  const posts = slugs
    .map((slug) => getPostBySlug(slug, fields))
    // sort posts by date in descending order
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1));
  return posts;
}

export function postPost(fields: string[] = []) {
  const slugs = getPostSlugs();
  const posts = slugs
    .map((slug) => getPostBySlug(slug, fields))
    // sort posts by date in descending order
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1));
  return posts;
}
