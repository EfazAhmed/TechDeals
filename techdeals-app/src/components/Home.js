import React from "react"
import Header from './Header'
import backgroundImage from '../assets/keyboard_bg.jpg'
import downButton from '../assets/down_button.png'
import '../styles/Home.css'


const Home = () => {
    return (
        <div>
            <Header />
            <div className="landingBg">
                <h1 className='title'>TECHDEALS</h1>
                <h3 className='slogan'>FIND EVERYTHING YOU NEED IN TECH</h3>
                <img src={downButton} className='downButton'/>
            </div>
            <div className="landingBg" />


            

        </div>

    )
}

export default Home