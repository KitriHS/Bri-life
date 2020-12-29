import React from 'react';
import { Container } from 'reactstrap';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Login from '../pages/login/form-login'
import homes from '../pages/login/index'
import { connect } from "react-redux";

class RootComponent extends React.Component {

  render() {
    return (
      <Router>
         <Container fluid style={{ margin: 0, padding: 0, backgroundColor: '#FFFFFF' }}>
          <div style={{ display: 'flex', flexDirection: 'column', marginBottom: 0 }}>
            <Container style={{ minHeight: '90vh', backgroundColor: '#FFFFFF'}}>
              {/* <BrowserRouter>
                <Switch> */}
                  <Route path="/" component={Login}/>
                  <Route path="/home" component={homes}/>
                {/* </Switch>
              </BrowserRouter> */}
            </Container>
          </div>
         </Container>
      </Router>
    )
  }
}
function mapStateToProps(state){
  return{
    homes:state.homes
  };
}
const mapDispatchToProps = (dispatch) => {
  return {  dispatch, homes };
}

export default connect (mapStateToProps, mapDispatchToProps)(RootComponent);