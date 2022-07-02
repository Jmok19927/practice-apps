import React from "react";
import Homepage from "./Homepage.jsx";
import AccountForm from "./AccountForm.jsx";
import AddressForm from "./AddressForm.jsx";
import BillingForm from "./BillingForm.jsx";
import Confirmation from "./Confirmation.jsx";
const axios = require('axios');

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: '',
      userCookie: '',
      page: 0,
      pages: ['', 'Account', 'Address', 'Billing', 'Confirmation'],
      name: null,
      email: null,
      password: null,
      line1: null,
      line2: '',
      city: null,
      state: null,
      zip: null,
      phoneNumber: null,
      creditCard: null,
      expiry: null,
      CVV: null,
      billingZIP: null,
      dbObject: null,
    }
  }

  componentDidMount() {
    console.log('mount post user')
    axios.post("/user", {});
  }

  onChange(event) {
    var currentForm = event.target.name;
    console.log(currentForm, event.target.value)
    this.setState({[currentForm]: event.target.value})
  }

  sendPost() {
    var postObj = {};
    if (this.state.page === 1) {
      postObj.type = "Account";
      postObj.name = this.state.name;
      postObj.email = this.state.email;
      postObj.password = this.state.password;
    }
    if (this.state.page === 2) {
      postObj.type = "Address";
      postObj.line1 = this.state.line1;
      postObj.line2 = this.state.line2;
      postObj.city = this.state.city;
      postObj.state = this.state.state;
      postObj.zip = this.state.zip;
      postObj.phoneNumber = this.state.phoneNumber;
    }
    if (this.state.page === 3) {
      postObj.type = "Billing";
      postObj.creditCard = this.state.creditCard;
      postObj.expiry = this.state.expiry;
      postObj.CVV = this.state.CVV;
      postObj.billingZIP = this.state.billingZIP
    }
    console.log('sendpost get object', JSON.stringify(postObj));
    axios.post("/info", postObj);
  }

  nextPage(event) {
    console.log('entered nextpage')
    this.sendPost();
    if (this.state.page === 3) {
      console.log('do get');
      axios.get("/info").then((data) => {
        console.log('nextpagedata', data.data);
        this.setState({dbObject: data.data})
        this.changePage();
      }).catch();
    } else {
      this.changePage();
    }
  }

  changePage() {
    console.log('dbObject', this.state.dbObject);
    var nextPage = this.state.page + 1;
    if (this.state.page === 4) {
      this.setState({page: 0});
    } else {
      this.setState({page: nextPage});
    }
    setTimeout(() => {
      this.setState({currentPage: this.state.pages[this.state.page]})
    }, 100)
  }

  render() {
    var currentPage = <Homepage next={this.nextPage.bind(this)}/>;
    var page = this.state.currentPage;
    if (page === 'Account') {
      currentPage = <AccountForm change={this.onChange.bind(this)} next={this.nextPage.bind(this)}/>;
    } else if (page === 'Address') {
      currentPage = <AddressForm change={this.onChange.bind(this)} next={this.nextPage.bind(this)}/>;
    } else if (page === 'Billing') {
      currentPage = <BillingForm change={this.onChange.bind(this)} next={this.nextPage.bind(this)}/>;
    } else if (page === 'Confirmation') {
      currentPage = <Confirmation values={this.state.dbObject} change={this.onChange.bind(this)} next={this.nextPage.bind(this)}/>;
    }
    return (
      <div>
        Main App Area
        {currentPage}

      </div>


    )
  }
}

export default App;