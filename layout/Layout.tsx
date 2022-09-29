import { NextPage } from 'next';
import { LayoutProps } from './Layout.props';
import { Footer, Header, SideBar } from './index'
import React, { MutableRefObject, useRef } from 'react';
import stls from './Layout.module.css';
import { AppContextProvider, MyContextType } from '../context/AppContext';
import { Up } from '../components';
import { SkipLink } from '../components/SkipLink/SkipLink';

const Layout: NextPage<LayoutProps> = ({ children }) => {

  const focusRef = useRef() as MutableRefObject<HTMLDivElement>;

  return (
    <div className={stls.wrapper} >
      <div />
      <SkipLink
        className={stls.tabContent}
        focusBlock={focusRef}
      />
      <Header className={stls.header} />
      <SideBar className={stls.sidebar} />
      <div
        className={stls.component}
        ref={focusRef}
        tabIndex={0}
      >
        {children}
      </div>
      <Up />
      <Footer className={stls.footer} />
    </div>
  )
};



export function wrapperLayoutHOC<T extends Record<string, unknown> & MyContextType>(Component: React.FC<T>): React.FC<T> {

  return function WrappedComponent(props: T): JSX.Element {
    return (
      <AppContextProvider menu={props.menu} firstCategory={props.firstCategory} >
        <Layout>
          <Component{...props} />
        </Layout>
      </AppContextProvider>
    );
  };

};

