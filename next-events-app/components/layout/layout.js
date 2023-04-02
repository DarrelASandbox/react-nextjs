import MainHeader from './main-header';

const Layout = (props) => (
  <>
    <main>
      <MainHeader />
      {props.children}
    </main>
  </>
);

export default Layout;
