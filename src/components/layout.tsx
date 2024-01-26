import { ReactNode } from 'react';

import Alert from './alert';
import Footer from './footer';
import Meta from './meta';

type Props = {
  preview?: boolean;
  children: ReactNode;
};

const Layout = ({ children, preview }: Props) => {
  return (
    <>
      <Meta />
      <div className="min-h-screen">
        <Alert preview={preview} />
        <main>{children}</main>
      </div>
      <Footer />
    </>
  );
};

export default Layout;