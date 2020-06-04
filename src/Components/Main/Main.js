import React from 'react';
import GetRecipe from './APIPanel/APIPanel'
import Footer from './Footer/Footer'
import './Main.css';


class Main extends React.Component {
    render () {
        return (
       <div>
        <GetRecipe/>
        <Footer/>
       </div>
        )
    }
}

export default Main;