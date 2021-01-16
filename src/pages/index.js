import React, {useState} from 'react'
import HeroSection from '../components/HeroSection';
import InfoSection from '../components/infoSection';
import NavBar from '../components/NavBar';
import Sidebar from '../components/Sidebar';
import {homeObjOne, homeObjTwo, homeObjThree} from '../components/infoSection/Data';
import Services from '../components/Services';

const Home = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen)
    }

    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <NavBar toggle={toggle}/>
            <HeroSection />
            <InfoSection {...homeObjOne} />
            <InfoSection {...homeObjTwo} />
            <InfoSection {...homeObjThree} />
            <Services />
        </>
    )
}

export default Home
