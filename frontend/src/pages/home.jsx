import React,{useContext} from 'react'
import Layout from '../components/Layout/Layout'
import Footer from '../components/Footer/Footer'
import Navbar from '../components/Navbar/Navbar';
import myContext from '../context/data/myContext';
import anotherContext from '../context/data/anotherContext';
export default function home() {

  // const context = useContext(myContext);
  // console.log(context);
  // const {state , color} = context;

  // const {username} = useContext(anotherContext);
// console.log(username);

  return (
    <>
      <Layout>
       Home
      </Layout>
    </>
  );
}
