/**
 * @docs: https://beta.nextjs.org/docs/upgrade-guide
 *  */

import Link from 'next/link';
import { Profiler } from 'react';

import Container from '@/components/container';
import HeroPost from '@/components/hero-post';
import Intro from '@/components/intro';
import MoreStories from '@/components/more-stories';
import { getAllPosts } from '@/lib/api';

const allPosts = getAllPosts([
  'title',
  'date',
  'slug',
  'author',
  'coverImage',
  'excerpt',
]);

const heroPost = allPosts[0];
const morePosts = allPosts.slice(1);

const Page = () => {
  return (
    // <Profiler id="Container" onRender={onRender}>
    <Container>
      <Intro />
      <div className="mt-4 mb-1 flex items-center justify-end">
        <Link
          className="rounded-md bg-blue-500 py-3 px-6 text-white hover:bg-blue-600"
          href="/write"
        >
          글쓰기
        </Link>
      </div>

      {heroPost && (
        <HeroPost
          author={heroPost.author}
          coverImage={heroPost.coverImage}
          date={heroPost.date}
          excerpt={heroPost.excerpt}
          slug={heroPost.slug}
          title={heroPost.title}
        />
      )}
      {morePosts.length > 0 && <MoreStories posts={morePosts} />}
    </Container>
    // </Profiler>
  );
};
export default Page;
