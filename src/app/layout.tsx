/* eslint-disable @next/next/no-sync-scripts */
'use client';

import '@/styles/dist.css';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Script from 'next/script';
import type { ReactNode } from 'react';

// import { RecoilRoot } from 'recoil';
// import { DOMAIN } from '@/config';
import reactQueryOptions from '@/config/reactQueryOptions';

const RootLayout = ({ children }: { children: ReactNode }) => {
  const queryClient = new QueryClient(reactQueryOptions);

  return (
    <html className="bg-tp-gray-100" lang="ko">
      <head>
        <meta charSet="utf-8" />
        <meta content="Rocky`s Blog" name="description" />
        <meta content="width=device-width" name="viewport" />
        <meta content="initial-scale=1, maximum-scale=5.0, minimum-scale=1.0, user-scalable=no" />
        <title>Rocky`s Blog</title>
        {/* <script src={DOMAIN.KAKAO_ADDRESS} /> */}
        {/* use client 사용 시에만 next/script 태그 사용 가능 */}
        {/* <Script src={DOMAIN.KAKAO_ADDRESS} strategy="lazyOnload" /> */}
      </head>
      <QueryClientProvider client={queryClient}>
        {/* <RecoilRoot> */}
        <body>
          <div className="relative min-h-screen" id="root">
            <main>{children}</main>
          </div>
          <div className="relative" id="portal-root">
            {/* TODO: ReactPortal로 만들면 페이지 이동 시 children 다시 못가져옴 */}
            <div id="bottom-sheet-default" />
            <div id="bottom-sheet-footer" />
          </div>
          {/* <div className="relative" id="portal-root" /> */}
        </body>
        {/* </RecoilRoot> */}
      </QueryClientProvider>
    </html>
  );
};

export default RootLayout;
