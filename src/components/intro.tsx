import { CMS_NAME } from '../lib/constants';

const Intro = () => {
  return (
    <section className="my-16 flex flex-col items-center md:mb-12 md:flex-row md:justify-between">
      <h1 className="text-5xl font-bold leading-tight tracking-tighter md:pr-8 md:text-8xl">
        Blog.
      </h1>
      <h4 className="mt-5 text-center text-lg md:pl-8 md:text-left">
        A statically generated blog example using{' '}
        <a
          className="underline transition-colors duration-200 hover:text-blue-600"
          href="https://nextjs.org/"
        >
          Next.js
        </a>{' '}
        and {CMS_NAME}.
      </h4>
    </section>
  );
};

export default Intro;
