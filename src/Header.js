import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

function Header() {
  return (
    <div className="App">
    <div>
      <Row>
        <Col xs="12" lg="7" sm="12" md="7" style={{textAlign: "left", paddingTop: "10px", paddingBottom: "30px"}}>
          <Image src={require('./assets/logo.png')} style={{ height: "70%", marginLeft: "5%"}}></Image>
        </Col>
        <Col xs="12" lg="5" sm="12" md="5">
          <Row style={{justifyContent: "right", marginRight: "5%"}}>
          <label className='ii' style={{color:'white', display: "flex", width: "10px"}}>i</label>
          <Image src={require('./assets/bell.png')} style={{height: "20px", width: "40px", alignSelf: 'center'}}></Image>
          <div className="alg" style={{display: 'inline', width: 'auto', alignSelf: 'center'}}>
            <label style={{color: 'white', fontSize: "13px"}}>
              Hi, Muhammad Asad
            </label><br/>
            <label style={{color: 'white', fontSize: "13px"}}>
              welcome back!
            </label>
          </div>
          <Image src={require('./assets/profile.png')} style={{height: "65px", width: "85px", alignSelf: 'center'}}></Image>
          </Row>
        </Col>
      </Row>
    </div>
    </div>
  );
}

export default Header;
