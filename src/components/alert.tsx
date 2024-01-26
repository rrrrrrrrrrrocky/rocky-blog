import { clsx } from 'clsx';

import { EXAMPLE_PATH } from '../lib/constants';
import Container from './container';

type Props = {
  preview?: boolean;
};

const Alert = ({ preview }: Props) => {
  return (
    <div
      className={clsx('border-b', {
        'bg-neutral-50 border-neutral-200': !preview,
        'bg-neutral-800 border-neutral-800 text-white': preview,
      })}
    >
      <Container>
        <div className="py-2 text-center text-sm">
          {preview ? (
            <>
              This page is a preview.{' '}
              <a
                className="underline transition-colors duration-200 hover:text-teal-300"
                href="/api/exit-preview"
              >
                Click here
              </a>{' '}
              to exit preview mode.
            </>
          ) : (
            <>
              The source code for this blog is{' '}
              <a
                className="underline transition-colors duration-200 hover:text-blue-600"
                href={`https://github.com/vercel/next.js/tree/canary/examples/${EXAMPLE_PATH}`}
              >
                available on GitHub
              </a>
              .
            </>
          )}
        </div>
      </Container>
    </div>
  );
};

export default Alert;
