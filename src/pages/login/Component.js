import React from "react";
import { Form, Label } from "reactstrap";
import { PINK_COLOR } from "../../config/constant";
// import { BrowserRouter as  Link } from "react-router-dom";
import logo from '../../assets/logo.png';


export default class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filters: '',
      params: {
        apiKey: 'faf7e5bb',
        s: 'marvel',
        page: 2,
      },
      errorMessage: ""
    };
    this.handleChange = this.handleChange.bind(this);
  }
  componentWillMount() {
    const { s, page, apiKey } = this.state.params;
    this.loadDataListMovie(s, page, apiKey);
  }

  loadDataListMovie(s, page, apiKey) {
    const { dispatch } = this.props;
    let params = {
      apiKey: apiKey,
      s: s,
      page: page,
      
    };
    console.log('params', params)
    const { movieOmdbAction } = this.props.actionss;
    let token = !this.props.home.token ? "" : this.props.home.token;
    movieOmdbAction(dispatch, params);
  }



  handleSubmit() {
    console.log('LOGIN')
  }
  handleClick = (pages) => {
    this.setState({ currentPage: pages })
  }
  handleChange (evt) {
    this.setState({ [evt.target.id]: evt.target.value });
  }

  render() {
    console.log('CEK EMAIL', this.state.email)
    return (
      <div style={{ padding: 20, paddingLeft: 50, paddingRight: 50 }}>
        <Form>
          <div style={{ textAlign: "center", marginBottom: 30 }}>
            <img
              alt="Logo"
              src={!logo ? "" : logo}
              style={{ width: "50%", marginTop: 15 }}
            />
          </div>
          <div style={{ textAlign: "center", marginBottom: 30 }}>
            <Label style={{ color: PINK_COLOR, padding: 10, fontWeight: 'bold', fontSize: 20, textDecoration: 'underline' }} for="exampleEmail">
                SISTEM INFORMASI INVENTORI
            </Label>
          </div>
          {/* <FormGroup>
            <Label for="exampleEmail">Email</Label>
            <Input type="text" onChange={this.handleChange} id="email" />
          </FormGroup>
          <FormGroup>
            <Label for="examplePassword">Password</Label>
            <Input
              onKeyPress={this.handleChange}
              type="password"
              id="password"
            />
          </FormGroup> */}
          {/* <FormGroup style={{ textAlign: "center", paddingTop: 20 }}>
            <Link to="/home">
              <Button
                type="button"
                style={{
                  backgroundColor: "#008c9a",
                  borderColor: "#008c9a",
                  paddingLeft: 75,
                  paddingRight: 75
                }}
              >
              LOGIN
              </Button>
            </Link>
          </FormGroup> */}
        </Form>
      </div>
    )
  }
}
