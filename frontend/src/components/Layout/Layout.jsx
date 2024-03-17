import React from 'react'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
export default function Layout({ children  }) {
  return (
    <div>
      <Navbar></Navbar>
      <div className="content">{children}</div>

      <Footer></Footer>
    </div>
  );
}


// comon components
// children = special prop