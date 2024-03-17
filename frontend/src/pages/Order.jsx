import React from 'react'
import Layout from '../components/Layout/Layout'
import { useContext } from 'react'
import myContext from '../context/data/myContext';

export default function Order() {
  const context = useContext(myContext);
  const {name,age} = context;
  return (
    <Layout>Order
      <h1>Name: {name}</h1>
      <h1>Age: {age}</h1>
    </Layout>
  )
}
