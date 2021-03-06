import React from 'react';
import Areas from './Areas';
import Header from './header';
import Footer from './footer';
import MediaQuery from 'react-responsive';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import data from '../../data.json';
import TenantContainer from './tenant-container.js';
const generateKey = () => Math.random();
export default class Manager extends React.Component {
  constructor(props) {
    super(props);
  }
  componentWillMount() {
    this.setState(JSON.parse(localStorage.getItem('podpodpod')) || data);
  }
  render() {
    console.log(this.state);
    return (
      <div style={{minHeight: '100%', position: 'relative'}}>
        <Header />
        <MediaQuery query='(min-device-width: 1224px)'>
          <h1 style={{fontFamily: 'Roboto', fontWeight: 100, color: 'white', display: 'block', width: '80%', position: 'absolute', top: 0, marginLeft: '10%', textAlign: 'center', zIndex: 10}}> Leasing Director{'\''}s Dashboard </h1>
        </MediaQuery>
        <div style={{paddingBottom: '4em'}}>
          {this.state.tenants.map((tenant, tenantIndex) => <TenantContainer tenantIndex={tenantIndex} areas={this.state.areas} tenant={tenant} key={generateKey()} />)}
        </div>
        <Footer />
      </div>
    );
  }
}
