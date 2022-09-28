import { NextPage } from 'next';
import { LayoutProps } from './Layout.props';
import { Footer, Header, SideBar } from './index'
import React from 'react';
import stls from './Layout.module.css';
import { AppContextProvider, MyContextType } from '../context/AppContext';
import { Up } from '../components';

const Layout: NextPage<LayoutProps> = ({ children }) => {

  

  return (
    <div className={stls.wrapper} >
      <div />
      <Header className={stls.header} />
      <SideBar className={stls.sidebar} />
      <div className={stls.component}>
        <>
          {children}
        </>
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

