import { NextPage } from 'next';
import { MainProps } from './Main.props';
import { SideBar } from './SideBar/SideBar';


export const Main: NextPage<MainProps> = ({ children, ...props }) => (
  <main {...props}>
    <SideBar />
    <div>
      {children}
    </div>
  </main>
)

