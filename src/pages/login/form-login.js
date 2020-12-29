import React from 'react';
import { Col, Row} from "reactstrap";
import PageLogin from './Component'

class LoginFrom extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mobile: false
    };
  }
  render() {
    return (
      <div className="login">
        <Row style={this.state.mobile ? {height:'100vh', alignItems: 'center', justifyContent: 'center'} : {alignItems: 'center', justifyContent: 'center'}}>
          <Col lg="6" md="6" sm="12" xs="12">
            <Row className="FormLogin" style={{width: '100%'}}>
              <PageLogin />
            </Row>
          </Col>
        </Row>
      </div>
    )
  }

}

export default LoginFrom;