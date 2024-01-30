import './App.css';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';

function SideNav(props) {

    const [show, setShow] = useState(false);
    const [show1, setShow1] = useState(false);
    const [selected, setIsSelected] = useState("Events");


    return (
            <Container
                style={{
                    borderRadius: 10, borderColor: '#D175B6', borderStyle: 'solid', borderWidth: '1px', padding: '10px', height: '100%',
                }}>
                <div className="dropdown">
                    <div
                        onClick={(e) => {
                            setShow(!show);
                        }}
                        className="dropdown-btn"
                        style={{ color: '#D175B6', borderRadius: 10, borderColor: '#D175B6', borderStyle: 'solid', borderWidth: '1px', paddingTop: '10px', paddingBottom: '10px', fontSize: '15px' }}
                    >
                        {selected}
                        <span
                            className={!show ? "fas fa-regular fa-angle-up" : "fas fa-regular fa-angle-down"}
                        />
                    </div>
                </div>

                {!show ? <><div className="dropdown rig row" style={{
                    justifyContent: "right", marginRight: "1px"
                }}>
                    <Image src={require('./assets/branch.png')} style={{ width: '20%', width: "5%", height: "18px", padding: "0px", marginTop: "7px" }}></Image>
                    <div
                        className="dropdown-btn"
                        style={{ color: '#D175B6', borderRadius: 7, borderColor: '#D175B6', borderStyle: 'solid', borderWidth: '1px', paddingTop: '5px', paddingBottom: '5px', fontSize: '10px', marginTop: '5px', width: '75%' }}
                    >
                        New Requests
                    </div>
                </div>

                    <div className="dropdown rig row" style={{
                        justifyContent: "right", marginRight: "1px"
                    }}>
                        <Image src={require('./assets/branch.png')} style={{ width: '20%', width: "5%", height: "33px", padding: "0px", marginTop: "-13px" }}></Image>
                        <div
                            className="dropdown-btn"
                            style={{ color: 'white', paddingTop: '5px', paddingBottom: '5px', fontSize: '10px', width: '75%', marginTop: '5px', border: '0px' }}
                        >
                            Event Estimate
                            <span style={{ borderRadius: 100, height: '17px', width: '17px', background: 'white', color: '#D175B6', fontSize: '10px', textAlign: 'center' }}>9</span>
                        </div>

                    </div>

                    <div className="dropdown rig row" style={{
                        justifyContent: "right", marginRight: "1px"
                    }}>
                        <div
                            className="dropdown-btn"
                            style={{ color: 'white', paddingTop: '5px', paddingBottom: '5px', fontSize: '10px', width: '75%', marginTop: '5px', border: '0px' }}
                        >
                            Partial Requests
                        </div>

                    </div></> : null}

                <div className="dropdown rig">
                    <div
                        className="dropdown-btn"
                        style={{ color: 'white', paddingTop: '10px', paddingBottom: '10px', fontSize: '14px', width: '90%', border: '0px' }}
                    >
                        Positions
                    </div>
                </div>

                <div className="dropdown rig">
                    <div
                        className="dropdown-btn"
                        style={{ color: 'white', paddingTop: '10px', paddingBottom: '10px', fontSize: '14px', width: '90%', border: '0px' }}
                    >
                        Contractors
                    </div>
                </div>

                <div className="dropdown rig">
                    <div
                        onClick={(e) => {
                            setShow1(!show1);
                        }}
                        className="dropdown-btn"
                        style={{ color: 'white', paddingTop: '10px', paddingBottom: '10px', fontSize: '14px', width: '90%', border: '0px' }}
                    >
                        Users
                        <span
                            className={!show1 ? "fas fa-regular fa-angle-up" : "fas fa-regular fa-angle-down"}
                        />
                    </div>
                </div>

                {!show1 ? <><div className="dropdown rig row" style={{
                    justifyContent: "right", marginRight: "1px"
                }}>
                    <Image src={require('./assets/branch.png')} style={{ width: '20%', width: "5%", height: "20px", padding: "0px", marginTop: "-1px" }}></Image>
                    <div
                        className="dropdown-btn"
                        style={{ color: 'white', paddingTop: '5px', paddingBottom: '5px', fontSize: '10px', width: '75%', marginTop: '10px', border: '0px' }}
                    >
                        Admins
                    </div>

                </div>

                    <div className="dropdown rig row" style={{
                        justifyContent: "right", marginRight: "1px", marginTop: "-6px"
                    }}>
                        <Image src={require('./assets/branch.png')} style={{ width: '20%', width: "5%", height: "35px", padding: "0px", marginTop: "-12px" }}></Image>
                        <div
                            className="dropdown-btn"
                            style={{ color: 'white', paddingTop: '5px', paddingBottom: '5px', fontSize: '10px', width: '75%', marginTop: '10px', border: '0px' }}
                        >
                            Clients
                        </div>

                    </div>

                    <div className="dropdown rig row" style={{
                        justifyContent: "right", marginRight: "1px", marginTop: "-6px"
                    }}>
                        <Image src={require('./assets/branch.png')} style={{ width: '20%', width: "5%", height: "35px", padding: "0px", marginTop: "-12px" }}></Image>
                        <div
                            className="dropdown-btn"
                            style={{ color: 'white', paddingTop: '5px', paddingBottom: '5px', fontSize: '10px', width: '75%', marginTop: '10px', border: '0px' }}
                        >
                            Coordinators
                        </div>

                    </div></> : null}

                <div className="dropdown rig">
                    <div
                        className="dropdown-btn"
                        style={{ color: 'white', paddingTop: '10px', paddingBottom: '10px', fontSize: '14px', width: '90%', border: '0px' }}
                    >
                        Profile
                    </div>
                </div>

            </Container>
    );
}

export default SideNav;
