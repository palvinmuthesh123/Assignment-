import './App.css';
import { useEffect, useState } from 'react';
import FlatList from 'flatlist-react';
import 'bootstrap/dist/css/bootstrap.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Header from './Header';
import SideNav from './SideNav';
import Apps from './App1';

function App() {

  const [cond, setCond] = useState("");
  const [hid, setHid] = useState(true);
  const [change, setChange] = useState(true);

  const people = [
    { firstName: 'Filled Name', eventStart: 'Jan 12, 2024', eventEnd: 'Jan 14, 2024', clientName: 'Muhammad Asad', contactInfo: '+ 1 234 566 7890', Venue: 'Lorem ipsum dolor sit amet' },
    { firstName: 'Filled Name', eventStart: 'Jan 12, 2024', eventEnd: 'Jan 14, 2024', clientName: 'Muhammad Asad', contactInfo: '+ 1 234 566 7890', Venue: 'Lorem ipsum dolor sit amet' },
    { firstName: 'Filled Name', eventStart: 'Jan 12, 2024', eventEnd: 'Jan 14, 2024', clientName: 'Muhammad Asad', contactInfo: '+ 1 234 566 7890', Venue: 'Lorem ipsum dolor sit amet' },
    { firstName: 'Filled Name', eventStart: 'Jan 12, 2024', eventEnd: 'Jan 14, 2024', clientName: 'Muhammad Asad', contactInfo: '+ 1 234 566 7890', Venue: 'Lorem ipsum dolor sit amet' },
    { firstName: 'Filled Name', eventStart: 'Jan 12, 2024', eventEnd: 'Jan 14, 2024', clientName: 'Muhammad Asad', contactInfo: '+ 1 234 566 7890', Venue: 'Lorem ipsum dolor sit amet' },
    { firstName: 'Filled Name', eventStart: 'Jan 12, 2024', eventEnd: 'Jan 14, 2024', clientName: 'Muhammad Asad', contactInfo: '+ 1 234 566 7890', Venue: 'Lorem ipsum dolor sit amet' },
    { firstName: 'Filled Name', eventStart: 'Jan 12, 2024', eventEnd: 'Jan 14, 2024', clientName: 'Muhammad Asad', contactInfo: '+ 1 234 566 7890', Venue: 'Lorem ipsum dolor sit amet' },
    { firstName: 'Filled Name', eventStart: 'Jan 12, 2024', eventEnd: 'Jan 14, 2024', clientName: 'Muhammad Asad', contactInfo: '+ 1 234 566 7890', Venue: 'Lorem ipsum dolor sit amet' },
    { firstName: 'Filled Name', eventStart: 'Jan 12, 2024', eventEnd: 'Jan 14, 2024', clientName: 'Muhammad Asad', contactInfo: '+ 1 234 566 7890', Venue: 'Lorem ipsum dolor sit amet' },
    { firstName: 'Filled Name', eventStart: 'Jan 12, 2024', eventEnd: 'Jan 14, 2024', clientName: 'Muhammad Asad', contactInfo: '+ 1 234 566 7890', Venue: 'Lorem ipsum dolor sit amet' },
    { firstName: 'Filled Name', eventStart: 'Jan 12, 2024', eventEnd: 'Jan 14, 2024', clientName: 'Muhammad Asad', contactInfo: '+ 1 234 566 7890', Venue: 'Lorem ipsum dolor sit amet' },
  ]
  
  useEffect(()=> {
    const { innerWidth: width, innerHeight: height } = window;
    if(width < 360)
    {
      setHid(false);
    }
  })

  const renderPerson = (person, idx) => {
    return (
      <Container
        key={idx}
        className='grad'
        style={{
          backgroundColor: '#282a4f',
          flexDirection: 'column',
          borderWidth: "2px",
          borderStyle: "solid",
          borderTopColor: 'white',
          borderBottomColor: 'white',
          borderLeftColor: '#D175B6',
          borderRightColor: '#D175B6',
        }}
      >
        <Row>
          <Col xs="6" lg="2" sm="4" md="3" style={{ color: 'white', fontSize: '12px' }}>{person.firstName}</Col>
          <Col xs="6" lg="2" sm="4" md="3" style={{ color: 'white', fontSize: '12px' }}>{person.eventStart}</Col>
          <Col xs="6" lg="2" sm="4" md="3" style={{ color: 'white', fontSize: '12px' }}>{person.eventEnd}</Col>
          <Col xs="6" lg="2" sm="4" md="3" style={{ color: 'white', fontSize: '12px' }}>{person.clientName}</Col>
          <Col xs="6" lg="2" sm="4" md="3" style={{ color: 'white', fontSize: '12px' }}>{person.contactInfo}</Col>
          <Col xs="6" lg="2" sm="4" md="3" style={{ color: 'white', fontSize: '12px' }}>{person.Venue}</Col>
        </Row>
      </Container>
    );
  }

  return (
    change ? <div className="App">
      <Header />
      <div
        style={{ height: 'auto', width: '100%' }}>
        <Row style={{ paddingTop: "10px", paddingBottom: '30px' }}>
          <Col xs="12" lg="2" sm="12" md="2" style={hid ? { marginLeft: '4%', padding: '0px' } : { padding: '0px' }}>
            <SideNav fir={true}/>
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
                <Col xs="8" lg="8" sm="8" md="8" style={{ color: 'white', fontSize: "25px", textAlign: "start" }}>Event Requests</Col>
                <Col xs="3" lg="3" sm="3" md="3" className='cen' style={{ color: 'white', alignSelf: 'center' }}>
                  <div style={{ borderRadius: "6px", borderStyle: "solid", borderWidth: "1px", padding: "2px", paddingLeft: "10px", paddingBottom: "4px" }}>
                    <Image src={require('./assets/searchs.png')} style={{ height: '15px' }}></Image>
                    <label style={{ fontSize: '11px', marginLeft: '6px' }}>Search Here</label>
                  </div>
                </Col>
                <Col xs="1" lg="1" sm="1" md="1" style={{ color: 'white', alignSelf: 'center' }} className='cen'>
                  <Image onClick={()=> {setChange(false)}} src={require('./assets/plus.jpg')}></Image>
                </Col>
              </Row>
            </Container>
            <Container
              style={{
                backgroundColor: '#d175b6',
                flexDirection: 'column',
                borderColor: '#D175B6',
                borderWidth: "2",
                paddingBottom: "5px",
                paddingTop: "5px"
              }}
            >
              <Row>
                <Col xs="6" lg="2" sm="4" md="3" style={{ color: 'white' }}>
                  Event Name
                  <Image
                    onClick={() => { setCond('firstName') }}
                    src={require('./assets/Arrow.png')} style={cond == "firstName" ? { height: '20px', width: '20px', marginLeft: '5px', transform: 'rotate(180deg)' } : { height: '20px', width: '20px', marginLeft: '5px' }} />
                </Col>
                <Col xs="6" lg="2" sm="4" md="3" style={{ color: 'white' }}>Event Start</Col>
                <Col xs="6" lg="2" sm="4" md="3" style={{ color: 'white' }}>
                  Event End
                  <Image
                    onClick={() => { setCond('eventEnd') }}
                    src={require('./assets/Arrow.png')} style={cond == 'eventEnd' ? { height: '20px', width: '20px', marginLeft: '5px', transform: 'rotate(180deg)' } : { height: '20px', width: '20px', marginLeft: '5px' }} />
                </Col>
                <Col xs="6" lg="2" sm="4" md="3" style={{ color: 'white' }}>
                  Client Name
                  <Image
                    onClick={() => { setCond('clientName') }}
                    src={require('./assets/Arrow.png')} style={cond == 'clientName' ? { height: '20px', width: '20px', marginLeft: '5px', transform: 'rotate(180deg)' } : { height: '20px', width: '20px', marginLeft: '5px' }} />
                </Col>
                <Col xs="6" lg="2" sm="4" md="3" style={{ color: 'white' }}>Contact Info</Col>
                <Col xs="6" lg="2" sm="4" md="3" style={{ color: 'white' }}>Venue</Col>
              </Row>
            </Container>
            <FlatList
              list={people}
              renderItem={renderPerson}
              renderWhenEmpty={() => <div>List is empty!</div>}
            />
            <Container
              style={{
                backgroundColor: '#000102',
                flexDirection: 'column',
                borderColor: '#D175B6',
                borderWidth: "2px",
                borderStyle: "solid",
                borderBottomLeftRadius: 25,
                borderBottomRightRadius: 25,
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
      </div>
    </div> : <Apps/>
  );
}

export default App;
