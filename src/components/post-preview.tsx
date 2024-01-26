'use client';

import Link from 'next/link';

import type Author from '../interfaces/author';
import Avatar from './avatar';
import CoverImage from './cover-image';
import DateFormatter from './date-formatter';

type Props = {
  title: string;
  coverImage: string;
  date: string;
  excerpt: string;
  author: Author;
  slug: string;
};

const PostPreview = ({
  author,
  coverImage,
  date,
  excerpt,
  slug,
  title,
}: Props) => {
  return (
    <div>
      <div className="mb-5">
        <CoverImage slug={slug} src={coverImage} title={title} />
      </div>
      <h3 className="mb-3 text-3xl leading-snug">
        <Link className="hover:underline" href={`/posts/${slug}`}>
          {title}
        </Link>
      </h3>
      <div className="mb-4 text-lg">
        <DateFormatter dateString={date} />
      </div>
      <p className="mb-4 text-lg leading-relaxed">{excerpt}</p>
      <Avatar name={author.name} picture={author.picture} />
    </div>
  );
};

export default PostPreview;
