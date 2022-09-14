import { NextPage } from 'next';
import { LayoutProps } from './Layout.props';
import { Footer, Header, Main } from './index'

export const Layout: NextPage<LayoutProps> = ({ children }) => (
  <>
    <Header />
    <Main>
      {children}
    </Main>
    <Footer />
  </>
);
