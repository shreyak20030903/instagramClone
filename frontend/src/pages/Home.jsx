import React from 'react'
import NavBar from '../components/NavBar';
import TopUsers from '../components/TopUsers';
import BottomNav from '../components/BottomNav';
import Posts from '../components/Posts';
const Home = () => {
  return (
    <>
      <NavBar/>
      <TopUsers/>
      <Posts/>
      <BottomNav/>
    </>
  )
}

export default Home;
