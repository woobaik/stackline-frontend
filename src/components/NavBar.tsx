import { Header } from 'antd/lib/layout/layout';
import StackLineLogo from '../assets/images/stackline_logo.svg';

const NavBar = () => {
  return (
    <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
      <div className="logo">
        <img src={StackLineLogo} alt="stackline logo" />
      </div>
    </Header>
  );
};

export default NavBar;
