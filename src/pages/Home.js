import React from 'react'
import MainPage from '../components/MainPage'

function Home(props) {
    return (
      <MainPage description={props.description}/>
    )
}

export default Home;
