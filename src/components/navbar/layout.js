import Navbar from './index';

function Layout(props) {
  return (
    <div>
      <Navbar />
      {props.children}
    </div>
  );
}

export default Layout;