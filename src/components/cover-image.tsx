'use client';

import { clsx } from 'clsx';
import Link from 'next/link';

type Props = {
  title: string;
  src: string;
  slug?: string;
};

const CoverImage = ({ slug, src, title }: Props) => {
  const image = (
    <img
      alt={`Cover Image for ${title}`}
      className={clsx('shadow-sm', {
        'hover:shadow-lg transition-shadow duration-200': slug,
      })}
      src={src}
    />
  );
  return (
    <div className="sm:mx-0">
      {slug ? (
        <Link as={`/posts/${slug}`} href="/posts/[slug]">
          {image}
        </Link>
      ) : (
        image
      )}
    </div>
  );
};

export default CoverImage;
