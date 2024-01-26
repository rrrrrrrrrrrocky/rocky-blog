import { EXAMPLE_PATH } from '../lib/constants';
import Container from './container';

const Footer = () => {
  return (
    <footer className="border-t border-neutral-200 bg-neutral-50">
      <Container>
        <div className="flex flex-col items-center py-28 lg:flex-row">
          <h3 className="mb-10 text-center text-4xl font-bold leading-tight tracking-tighter lg:mb-0 lg:w-1/2 lg:pr-4 lg:text-left lg:text-[2.5rem]">
            Statically Generated with Next.js.
          </h3>
          <div className="flex flex-col items-center justify-center lg:w-1/2 lg:flex-row lg:pl-4">
            <a
              className="mx-3 mb-6 border border-black bg-black py-3 px-12 font-bold text-white transition-colors duration-200 hover:bg-white hover:text-black lg:mb-0 lg:px-8"
              href="https://nextjs.org/docs/basic-features/pages"
            >
              Read Documentation
            </a>
            <a
              className="mx-3 font-bold hover:underline"
              href={`https://github.com/vercel/next.js/tree/canary/examples/${EXAMPLE_PATH}`}
            >
              View on GitHub
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
