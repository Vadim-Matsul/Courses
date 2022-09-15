import { NextPage } from 'next';
import { LayoutProps } from './Layout.props';
import { Footer, Header, Main } from './index'
import React, { useState } from 'react';

const Layout: NextPage<LayoutProps> = ({ children }) => (
  <>
    <Header />
    <Main>
      {children}
    </Main>
    <Footer />
  </>
);



export function wrapperLayoutHOC<T extends Record<string, unknown>>(Component: React.FC<T>): React.FC<T> {

  return function WrappedComponent(props: T): JSX.Element {
    return (
      <Layout>
        <Component{...props} />
      </Layout>
    );
  };

};

