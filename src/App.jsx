import React from 'react'
import Header from './components/Header/Header'
import Contact from './components/Contact/Contact'
import Experience from './components/Experience/Experience'
import Footer from './components/Footer/Footer'
import Navigation from './components/Navigation/Navigation'
import Services from './components/Services/Services'
import Testimonials from './components/Testimonials/Testimonials'
import About from './components/About/About'
import Portfolio from './components/Portfolio/Portfolio'



const App = () => {
    return (
        <>
            <Header></Header>
            <Navigation></Navigation>
            <About></About>
            <Experience></Experience>
            <Services></Services>
            <Portfolio></Portfolio>
            <Testimonials></Testimonials>
            <Contact></Contact>
            <Footer></Footer>
        </>

    )
}

export default App;