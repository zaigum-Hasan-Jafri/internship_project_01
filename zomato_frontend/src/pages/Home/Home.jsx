import React from 'react'
import { useState } from 'react'
import DeliverTab from '../../components/Delivery/Delivertab'
import Dining from '../../components/Dinning/Dining'
import NightOut from '../../components/Nightout/NightOut'
import Footer from './Footer'
import Header from './Header'
import TabOpt from './TabOpt'

const Home = () => {
    const [activeTab, setActiveTab] = useState("Delivery")

    const ActiveScreen = (tab) => {
        switch (tab) {
            case "Delivery":
                return<div><DeliverTab/></div>
            case "Dining":
                return<div><Dining/> </div>
            case "NightOut":
                return<div><NightOut/></div>
            default:
                return<div><DeliverTab/> </div>
        }
    }
    return (
        <div className=''>
            <Header />
            <hr />
            <TabOpt activeTab={activeTab} setActiveTab={setActiveTab} />
            {ActiveScreen(activeTab)}
            <hr />
            <Footer />
        </div>
    )
}

export default Home