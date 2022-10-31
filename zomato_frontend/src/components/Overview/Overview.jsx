import React, { useState } from 'react'
import Collapse from 'react-bootstrap/Collapse';
import Nav from 'react-bootstrap/Nav';
import MealCard from '../Cards/MealCard';

const Overview = ({ data, loading }) => {
    const [about, setAbout] = useState(false);
    const [contact, setContact] = useState(false);
    const [menu, setMenu] = useState(false);

    // console.log(data);

    return (
        <React.Fragment>
            <Nav variant="tabs" >
                <Nav.Item>
                    <Nav.Link onClick={() => setAbout(!about)}
                        aria-controls="about"
                        aria-expanded={about} style={{ fontSize: "22px" }}>About</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link onClick={() => setContact(!contact)}
                        aria-controls="contact"
                        aria-expanded={contact} style={{ fontSize: "22px", }}>Contact</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link onClick={() => setMenu(!menu)}
                        aria-controls="menu"
                        aria-expanded={menu} style={{ fontSize: "22px", }}>Menu</Nav.Link>
                </Nav.Item>
            </Nav>
            <Collapse in={about}>
                <div id="about">
                    <hr className='mt-0 mb-5' />
                    <dl>
                        <dt>Speciality</dt>
                        <dd>- North-Indian, Fast-Food</dd>
                        <dd>- BreakFast, Dinner</dd>
                        <dt>Average Cost</dt>
                        <dd>-Around $6 for one people</dd>
                        <dd>-Around $10 for two people</dd>
                    </dl>
                </div>
            </Collapse>
            <Collapse in={contact}>
                <div id="contact">
                    <hr className='mt-0 mb-5' />
                    <dl>
                        <dt>Address</dt>
                        <dd>-Shop 1, Plot D,  Pitampura, New Delhi Complex, Chincholi, Delhi-110006, Delhi</dd>
                        <dt>Phone no.</dt>
                        <dd>- +xx 1234-1234-56</dd>
                    </dl>
                </div>
            </Collapse>
            <Collapse in={menu}>
                <div id="menu">
                    <div style={{display:"flex", flexWrap:"wrap", justifyContent:"space-around"}}>
                <MealCard data={data} loading={loading}/>
                    </div>
                </div>
            </Collapse>
        </React.Fragment>
    );
}

export default Overview