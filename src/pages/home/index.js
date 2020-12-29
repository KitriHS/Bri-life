import React from "react";
import { BrowserRouter as Router, Route, Link, withRouter } from "react-router-dom";
import { Row, Col, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

// SCREEN
import Report from '../report/index.js'

const routes = [
  {
    path: "/home",
    exact: true,
    main: () => <Report/>
  },
];


class Home extends React.Component {

    constructor(props) {
      super(props)
      this.state = {
        currentPage: 'home'
      }
    }

    _handleChangePages = (pages) => {
      this.setState({ currentPage: pages })
    }
    
    render() {
      return (
        <Router>
            <Row>
                  <Col className="sectionSideBar" lg="3" md="3" sm="12" xs="12">
                      <div className="sidebarMenuSection">
                          <Row className="HeadingTitle">
                              Menu Utama
                          </Row>
                          <Row className="pt30">
                              <Link onClick={ () => this._handleChangePages('home') } 
                                className={ (this.state.currentPage === 'home') ? "menuActive" : "menuNormal" } 
                                to="/home">Data Po</Link>
                          </Row>
                      </div>
                  </Col>
                  <Col className="sectionContent" lg="9" md="9" sm="12" xs="12">
                      { routes.map((route, index) => (
                            <Route
                              key={index}
                              path={route.path}
                              exact={route.exact}
                              component={route.main}
                            />
                        )) }
                  </Col>
              </Row>
          </Router>
      )
    }
}

export default Home