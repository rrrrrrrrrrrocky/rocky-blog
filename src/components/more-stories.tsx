'use client';

import type Post from '../interfaces/post';
import PostPreview from './post-preview';

type Props = {
  posts: Post[];
};

const MoreStories = ({ posts }: Props) => {
  return (
    <section>
      <h2 className="mb-8 text-5xl font-bold leading-tight tracking-tighter md:text-7xl">
        More Stories
      </h2>
      <div className="mb-32 grid grid-cols-1 gap-y-20 md:grid-cols-2 md:gap-x-16 md:gap-y-32 lg:gap-x-32">
        {posts.map((post) => (
          <PostPreview
            key={post.slug}
            author={post.author}
            coverImage={post.coverImage}
            date={post.date}
            excerpt={post.excerpt}
            slug={post.slug}
            title={post.title}
          />
        ))}
      </div>
    </section>
  );
};

export default MoreStories;
