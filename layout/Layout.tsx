import { NextPage } from 'next';
import { LayoutProps } from './Layout.props';
import { Footer, Header, SideBar } from './index'
import React, { useState } from 'react';
import stls from './Layout.module.css';

const Layout: NextPage<LayoutProps> = ({ children }) => (
  <div className={stls.wrapper}>
    <Header className={stls.header} />
    <SideBar className={stls.sidebar} />
    <div className={stls.component}>
      {children}
    </div>
    <Footer className={stls.footer} />
  </div>
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

