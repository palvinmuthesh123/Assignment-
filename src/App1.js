import './App.css';
import { useState } from "react";
import FlatList from 'flatlist-react';
import 'bootstrap/dist/css/bootstrap.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";
import { ToastContainer } from 'react-toastify';
import Header from './Header';
import SideNav from './SideNav';
import App from './App';

function Apps() {

  const people = [
    { room: 'Meeting Room 1', positions: '12 Positions', date: 'Start from 12 Jan, 2023 - Ends at 15 Jan, 2023' },
    { room: 'Meeting Room 2', positions: '12 Positions', date: 'Start from 12 Jan, 2023 - Ends at 15 Jan, 2023' },
    { room: 'Meeting Room 3', positions: '12 Positions', date: 'Start from 12 Jan, 2023 - Ends at 15 Jan, 2023' },
    { room: 'Meeting Room 4', positions: '12 Positions', date: 'Start from 12 Jan, 2023 - Ends at 15 Jan, 2023' },
    { room: 'Meeting Room 5', positions: '12 Positions', date: 'Start from 12 Jan, 2023 - Ends at 15 Jan, 2023' },
  ]

  const [people1, setPeople1] = useState([
    { position: 'Camera 1 (Video)', time: '9 am - 7 pm', info: 'LP default', quantity: '20', data: "Select Coordinator" },
    { position: 'Camera 1 (Video)', time: '9 am - 7 pm', info: 'LP default', quantity: '20', data: "Select Coordinator" },
    { position: 'Camera 1 (Video)', time: '9 am - 7 pm', info: 'LP default', quantity: '20', data: "Select Coordinator" },
    { position: 'Camera 1 (Video)', time: '9 am - 7 pm', info: 'LP default', quantity: '20', data: "Select Coordinator" },
    { position: 'Camera 1 (Video)', time: '9 am - 7 pm', info: 'LP default', quantity: '20', data: "Select Coordinator" },
    { position: 'Camera 1 (Video)', time: '9 am - 7 pm', info: 'LP default', quantity: '20', data: "Select Coordinator" },
    { position: 'Camera 1 (Video)', time: '9 am - 7 pm', info: 'LP default', quantity: '20', data: "Select Coordinator" },
    { position: 'Camera 1 (Video)', time: '9 am - 7 pm', info: 'LP default', quantity: '20', data: "Select Coordinator" },
  ])

  const [isActive, setIsActive] = useState(false);
  const [isActive1, setIsActive1] = useState(false);
  const [selected1, setIsSelected1] = useState("Select Coordinator");
  const [ind, setInd] = useState(1);
  const [ind1, setInd1] = useState(0);
  const [temp, setTemp] = useState(0);
  const [hid, setHid] = useState(false);
  const [change, setChange] = useState(true);

  const notify = () => {
    toast("Saved...");
    setHid(true);
  };

  function assigning(id, data) {
    var arr = []
    for (var i = 0; i < people1.length; i++) {
      if (i == id) {
        arr.push({
          position: people1[i].position,
          time: people1[i].time,
          info: people1[i].info,
          quantity: people1[i].quantity,
          data: data
        })
      }
      else {
        arr.push(people1[i])
      }
    }
    setPeople1(arr);
  }

  const renderPerson = (person, idx) => {
    console.log(idx, "IIIIIIIIIIIIIIIIIIIIIII")
    return (
      <Container
        key={idx}
        onClick={() => setInd1(idx)}
        className='grad'
        style={(idx == 0) ? {
          background: '#000000',
          flexDirection: 'column',
          borderWidth: "1.5px",
          borderStyle: "solid",
          borderTopWidth: "1.5px",
          borderBottomWidth: "0px",
          borderTopColor: '#D175B6',
          borderBottomColor: '#D175B6',
          borderLeftColor: '#D175B6',
          borderRightColor: '#D175B6',
          padding: "10px",
          borderTopLeftRadius: "8px",
          borderTopRightRadius: "8px",
        } : (idx == person.length - 1) ? {
          background: '#000000',
          flexDirection: 'column',
          borderWidth: "1.5px",
          borderStyle: "solid",
          borderTopWidth: "0px",
          borderBottomWidth: "1.5px",
          borderTopColor: '#D175B6',
          borderBottomColor: '#D175B6',
          borderLeftColor: '#D175B6',
          borderRightColor: '#D175B6',
          padding: "10px",
          borderBottomLeftRadius: "8px",
          borderBottomRightRadius: "8px",
        } : {
          background: '#000000',
          flexDirection: 'column',
          borderWidth: "1.5px",
          borderStyle: "solid",
          borderTopWidth: "0px",
          borderBottomWidth: "0px",
          borderLeftColor: '#D175B6',
          borderRightColor: '#D175B6',
          padding: "10px"
        }}
      >
        <Container style={idx == ind1 ? {
          paddingTop: "7px",
          paddingBottom: "10px",
          background: "#D175B6",
          borderRadius: 8
        } : {
          paddingTop: "7px",
          paddingBottom: "10px",
          background: "#000000",
          borderRadius: 8,
          borderStyle: 'solid',
          borderWidth: '1px',
          borderColor: '#D175B6'
        }}>
          <Row>
            <Col xs="6" lg="6" sm="4" md="6" style={{ color: 'white', fontSize: 13, padding: "0px", marginLeft: '10px', fontWeight: "700" }}>{person.room}</Col>
            <Image src={require('./assets/Star.png')} style={{ height: "15px", width: "18px", padding: "0px" }} />
            <Col xs="6" lg="4" sm="4" md="4" style={idx == ind1 ? { color: 'black', fontSize: 11, padding: "0px", marginLeft: "5px", fontWeight: "900" } : { color: '#D175B6', fontSize: 11, padding: "0px", marginLeft: "5px", fontWeight: "600" }}>{person.positions}</Col>
          </Row>
          <Row>
            <Col xs="12" lg="12" sm="12" md="12" style={{ color: 'white', fontSize: 10 }}>{person.date}</Col>
          </Row>
        </Container>
      </Container>
    );
  }

  const renderPerson1 = (person, idx) => {
    // console.log(idx, "IIIIIIIIIIIIIIIIIIIIIII")
    return (
      <Container
        key={idx}
        className='grad'
        style={{
          // width: '70%',
          background: '#000000',
          flexDirection: 'column',
          borderWidth: "1px",
          borderStyle: "solid",
          borderTopColor: '#D175B6',
          borderBottomColor: '#D175B6',
          borderLeftColor: '#D175B6',
          borderRightColor: '#D175B6',
          textAlign: 'left',
          padding: "3px"
        }}
      >
        <Row>
          <Col xs="6" lg="3" sm="4" md="3" style={{ color: 'white', fontSize: 11, marginTop: 5 }}>{person.position}</Col>
          <Col xs="6" lg="2" sm="4" md="2" style={{ color: 'white', fontSize: 11, marginTop: 5 }}>{person.time}</Col>
          <Col xs="6" lg="2" sm="4" md="2" style={{ color: 'white', fontSize: 11, marginTop: 5 }}>{person.info}</Col>
          <Col xs="6" lg="1" sm="4" md="1" style={{ color: 'white', fontSize: 11, marginTop: 5 }}>{person.quantity}</Col>
          <Col xs="6" lg="4" sm="4" md="4">
            <div className="dropdown">
              <div
                onClick={(e) => {
                  setIsActive(!isActive);
                  setTemp(idx)
                  // assigning(idx);
                }}
                className="dropdown-btn"
              >
                {person.data}
                <span
                  className={isActive && idx == temp ? "fas fa-regular fa-angle-up" : "fas fa-regular fa-angle-down"}
                />
              </div>
              <div
                className="dropdown-content"
                style={{ display: isActive && idx == temp ? "block" : "none", background: 'white' }}
              >
                <div
                  onClick={(e) => {
                    // setIsSelected(e.target.textContent);
                    assigning(idx, e.target.textContent);
                    setIsActive(!isActive);
                  }}
                  className="item"
                >
                  Coordinator One
                </div>
                <div
                  className="item"
                  onClick={(e) => {
                    // setIsSelected(e.target.textContent);
                    assigning(idx, e.target.textContent);
                    setIsActive(!isActive);
                  }}
                >
                  Coordinator Two
                </div>
                <div
                  className="item"
                  onClick={(e) => {
                    // setIsSelected(e.target.textContent);
                    assigning(idx, e.target.textContent);
                    setIsActive(!isActive);
                  }}
                >
                  Coordinator Three
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    );
  }

  return (
    change ? <div className="App">

      <Header />

      <div>
        <div
          style={{ height: 'auto', width: '100%' }}>
          <Row style={{ paddingTop: "10px", paddingBottom: "30px" }}>
            <Col xs="12" lg="2" sm="12" md="2" style={{ marginLeft: '4%', padding: '0px' }}>
              <SideNav />
            </Col>
            <Col xs="12" lg="9" sm="12" md="9">
              <Container
                className='grad'
                style={{
                  flexDirection: 'column',
                  borderColor: '#D175B6',
                  borderWidth: "2px",
                  borderStyle: "solid",
                  borderTopLeftRadius: 25,
                  borderTopRightRadius: 25,
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderBottomColor: 'transparent'
                }}>
                <Row>
                  <Col xs="3" lg="6" sm="3" md="6" style={{ color: 'white', fontSize: "30px", textAlign: "start" }}>Event Name <span style={{ fontSize: 17 }}>(Venue Here)</span></Col>
                </Row>
                <Row style={{ marginTop: 10, marginBottom: 10 }}>
                  <Col xs="6" lg="2" sm="4" md="2" onClick={() => { setInd(0) }} style={ind == 0 ? { color: 'white', fontSize: 12, borderStyle: 'solid', borderWidth: '1px', background: '#D175B6', paddingTop: 5, paddingBottom: 5 } : { color: '#D175B6', fontSize: 12, borderStyle: 'solid', borderWidth: '1px', paddingTop: 5, paddingBottom: 5 }}>Event Details</Col>
                  <Col xs="6" lg="3" sm="4" md="3" onClick={() => { setInd(1) }} style={ind == 1 ? { color: 'white', fontSize: 12, borderStyle: 'solid', borderWidth: '1px', background: '#D175B6', paddingTop: 5, paddingBottom: 5 } : { color: '#D175B6', fontSize: 12, borderStyle: 'solid', borderWidth: '1px', paddingTop: 5, paddingBottom: 5 }}>Assign Coordinator/Coordinator</Col>
                  <Col xs="6" lg="3" sm="4" md="3" onClick={() => { setInd(2) }} style={ind == 2 ? { color: 'white', fontSize: 12, borderStyle: 'solid', borderWidth: '1px', background: '#D175B6', paddingTop: 5, paddingBottom: 5 } : { color: '#D175B6', fontSize: 12, borderStyle: 'solid', borderWidth: '1px', paddingTop: 5, paddingBottom: 5 }}>Session Management</Col>
                  <Col xs="6" lg="2" sm="4" md="2" onClick={() => { setInd(3) }} style={ind == 3 ? { color: 'white', fontSize: 12, borderStyle: 'solid', borderWidth: '1px', background: '#D175B6', paddingTop: 5, paddingBottom: 5 } : { color: '#D175B6', fontSize: 12, borderStyle: 'solid', borderWidth: '1px', paddingTop: 5, paddingBottom: 5 }}>Generate SOW</Col>
                </Row>
                <Row>
                  <Col xs="6" lg="6" sm="4" md="6" style={{ color: 'white', textAlign: 'left' }}>
                    <label style={{ marginTop: 5, marginBottom: 5 }}>Assign Coordinator</label>
                    <div className="dropdown">
                      <div
                        onClick={(e) => {
                          setIsActive1(!isActive1);
                        }}
                        className="dropdown-btn"
                      >
                        {selected1}
                        <span
                          className={isActive1 ? "fas fa-regular fa-angle-up" : "fas fa-regular fa-angle-down"}
                        />
                      </div>
                      <div
                        className="dropdown-content"
                        style={{ display: isActive1 ? "block" : "none", background: 'white' }}
                      >
                        <div
                          style={{ color: 'black' }}
                          onClick={(e) => {
                            setIsSelected1(e.target.textContent);
                            setIsActive1(!isActive1);
                          }}
                          className="item"
                        >
                          Coordinator One
                        </div>
                        <div
                          className="item"
                          style={{ color: 'black' }}
                          onClick={(e) => {
                            setIsSelected1(e.target.textContent);
                            setIsActive1(!isActive1);
                          }}
                        >
                          Coordinator Two
                        </div>
                        <div
                          className="item"
                          style={{ color: 'black' }}
                          onClick={(e) => {
                            setIsSelected1(e.target.textContent);
                            setIsActive1(!isActive1);
                          }}
                        >
                          Coordinator Three
                        </div>
                      </div>
                    </div>
                    <label style={{ fontSize: 12, color: '#D175B6' }}>Add New Coordinator</label>
                  </Col>
                  <Col xs="12" lg="6" sm="12" md="6" style={{ color: 'white', textAlign: 'left', marginLeft: "-5px" }}>
                    Event Name (Venue Here)
                    <Row style={{
                      borderColor: '#D175B6',
                      borderWidth: "1px",
                      borderStyle: "solid",
                      paddingTop: 3,
                      paddingBottom: 3
                    }}>
                      <Col xs="6" lg="6" sm="4" md="6" style={{ fontSize: 12 }}>
                        Start: 12-12-2023
                      </Col>
                      <Col xs="6" lg="6" sm="4" md="6" style={{ fontSize: 12 }}>
                        Ends: 15-12-2023
                      </Col>
                    </Row>
                    <Row style={{
                      borderColor: '#D175B6',
                      borderWidth: "1px",
                      borderStyle: "solid",
                      fontSize: 12,
                      paddingTop: 3,
                      paddingBottom: 3,
                      marginTop: 8
                    }}>
                      Venue Address: Some Location 12,  Name Here, City, State.
                    </Row>
                  </Col>
                </Row>
              </Container>

              <Container
                style={{
                  flexDirection: 'column',
                  borderColor: '#D175B6',
                  borderWidth: "2",
                  paddingBottom: "5px",
                  paddingTop: "5px",
                  borderLeftColor: '#D175B6',
                  borderRightColor: '#D175B6',
                  borderStyle: 'solid',
                  borderBottomColor: 'transparent',
                  borderTopColor: 'transparent'
                }}>
                <Row>
                  <Col xs="12" lg="4" sm="12" md="4" style={{ textAlign: 'left' }}>
                    <label style={{ fontSize: 16, marginTop: 5, marginBottom: 5, color: 'white' }}>Assign Contractor</label>
                    <FlatList
                      list={people}
                      renderItem={renderPerson}
                      renderWhenEmpty={() => <div>List is empty!</div>}
                    />
                  </Col>
                  <Col xs="12" lg="8" sm="12" md="8" style={{ textAlign: 'left', marginTop: "7px" }}>
                    <label style={{ color: 'white', marginBottom: "7px", fontSize: "14px" }}>Positions</label>
                    <Container
                      className='grad'
                      style={{
                        background: '#000000',
                        flexDirection: 'column',
                        borderWidth: "1px",
                        borderStyle: "solid",
                        borderTopColor: '#D175B6',
                        borderBottomColor: '#D175B6',
                        borderLeftColor: '#D175B6',
                        borderRightColor: '#D175B6',
                        textAlign: 'left',
                        paddingTop: 5,
                        paddingBottom: 5,
                        borderTopLeftRadius: "8px",
                        borderTopRightRadius: "8px",
                      }}
                    >
                      <Row>
                        <Col xs="6" lg="3" sm="4" md="3" style={{ color: 'white', fontSize: 11, marginTop: 5, }}>Position</Col>
                        <Col xs="6" lg="2" sm="4" md="2" style={{ color: 'white', fontSize: 11, marginTop: 5, }}>Time</Col>
                        <Col xs="6" lg="2" sm="4" md="2" style={{ color: 'white', fontSize: 11, marginTop: 5, }}>Info</Col>
                        <Col xs="6" lg="1" sm="4" md="1" style={{ color: 'white', fontSize: 11, marginTop: 5, }}>Quantity</Col>
                        <Col xs="6" lg="4" sm="4" md="4"></Col>
                      </Row>
                    </Container>
                    <FlatList
                      list={people1}
                      renderItem={renderPerson1}
                      renderWhenEmpty={() => <div>List is empty!</div>}
                    />
                    <Container
                      style={{
                        backgroundColor: '#000102',
                        flexDirection: 'column',
                        borderColor: '#D175B6',
                        borderWidth: "1px",
                        borderStyle: "solid",
                        borderBottomLeftRadius: '8px',
                        borderBottomRightRadius: '8px',
                        alignItems: 'center',
                        justifyContent: 'center',
                        borderTopColor: 'transparent'
                      }}
                    >
                      <div class="pagination" style={{
                        justifyContent: 'center', fontSize: '12px'
                      }}>
                        <a>&laquo;</a>
                        <a>1</a>
                        <a>2</a>
                        <a>3</a>
                        <a class="active">4</a>
                        <a>&raquo;</a>
                      </div>
                    </Container>
                  </Col>
                </Row>
              </Container>
              <Container style={{
                flexDirection: 'column',
                borderColor: '#D175B6',
                borderWidth: "2px",
                borderStyle: "solid",
                borderBottomLeftRadius: 25,
                borderBottomRightRadius: 25,
                alignItems: 'center',
                justifyContent: 'center',
                borderTopColor: 'transparent',

              }}>
                <Container
                  onClick={() => { setChange(false) }}
                  className='sav' style={{
                    marginTop: "10px",
                    marginBottom: "10px",
                    padding: "10px",
                    borderRadius: "5px",
                    width: "auto",
                    display: "inline-flex",
                    color: "white",
                    paddingLeft: "25px",
                    paddingRight: "25px",
                  }}>
                  Save Edits
                </Container>
              </Container>

            </Col>
          </Row>
        </div>
      </div>
      <ToastContainer
        className="tot"
        autoClose={3000}
        hideProgressBar={true}
      />
    </div> : <App/>
  );
}

export default Apps;
