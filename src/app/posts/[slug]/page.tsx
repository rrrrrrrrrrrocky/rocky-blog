import ErrorPage from 'next/error';
import Head from 'next/head';
import { useRouter } from 'next/navigation';

import Container from '@/components/container';
import Header from '@/components/header';
import Layout from '@/components/layout';
import PostBody from '@/components/post-body';
import PostHeader from '@/components/post-header';
import PostTitle from '@/components/post-title';
import PostType from '@/interfaces/post';
import { getAllPosts, getPostBySlug } from '@/lib/api';
import { CMS_NAME } from '@/lib/constants';
import markdownToHtml from '@/lib/markdownToHtml';

type Props = {
  post: PostType;
  morePosts: PostType[];
  preview?: boolean;
};

type Params = {
  params: {
    slug: string;
  };
};

const Post = ({ params }: Params) => {
  const post = getPostBySlug(decodeURIComponent(params.slug), [
    'title',
    'date',
    'slug',
    'author',
    'content',
    'ogImage',
    'coverImage',
  ]);
  // const Post = ({ morePosts, post, preview }: Props) => {
  // const router = useRouter();
  // if (!router.isFallback && !post?.slug) {
  //   return <ErrorPage statusCode={404} />;
  // }
  return (
    <Layout preview>
      <Container>
        <Header />

        <article className="mb-32">
          <Head>
            <title>
              {post.title} | Next.js Blog Example with {CMS_NAME}
            </title>
            <meta content={post.ogImage.url} property="og:image" />
          </Head>
          <PostHeader
            author={post.author}
            coverImage={post.coverImage}
            date={post.date}
            title={post.title}
          />
          <PostBody content={post.content} />
        </article>
      </Container>
    </Layout>
  );
};

export default Post;

// export async function getStaticPaths() {
//   const posts = getAllPosts(['slug']);
//   // console.log('🚀 ~ file: page.tsx:94 ~ getStaticPaths ~ posts', posts);
//   // Sun%20Jan%2015%202023%2022:55:19%20GMT+0900%20(한국%20표준시)_타이틀입니다
//   return {
//     fallback: false,
//     paths: posts.map((post) => {
//       // console.log(
//       //   '🚀 ~ file: page.tsx:105 ~ paths:posts.map ~ post',
//       //   encodeURI(post.slug),
//       // );
//       return {
//         params: {
//           slug: post.slug,
//         },
//       };
//     }),
//   };
// }
