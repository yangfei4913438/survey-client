import React, { FC, PropsWithChildren } from 'react';
import Head from 'next/head';
import Script from 'next/script';

interface PropsType extends PropsWithChildren {
  title: string;
  desc?: string;
  css?: string;
  js?: string;
}

const PageWrapper: FC<PropsType> = (props: PropsType) => {
  const { title, desc = '', css = '', js = '', children } = props;

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name='description' content={desc} />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/stars.svg' />
        <style>{css}</style>
      </Head>
      <main className={'w-screen h-screen flex-col flex items-center py-12'}>{children}</main>
      <Script id='page-js'>{js}</Script>
    </>
  );
};

export default PageWrapper;
