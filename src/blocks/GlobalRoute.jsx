import { Outlet } from 'react-router-dom';

import Header from 'blocks/Header';
import Footer from 'blocks/footer/Footer';

const GlobalRoute = () => {
  return (
    <>
      <Header main={true} />
      <Outlet />
      <Footer />
    </>
  )
}

export default GlobalRoute
