import React, { Component } from 'react';
import FetchApi from '../utils/fetchAPI';
import { TASK_API, CA_PROFILE_API, Register_API } from '../utils/APIs';
import { toast } from 'react-toastify';
import { AccountSetup } from '../components/registration/Accountsetup.js';
import PersonalDetails from '../components/registration/PersonalDetails.js';
import { Authenticate } from '../utils';
import Head from 'next/head';
export class Registration extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      activeStep: 0,
      toggleEye: false,
      toggleConfirmEye: false,
      full_name: '',
      email: '',
      image_url: '',
      password: '',
      token: '',
      confirm_password: '',
      resend_email: '',
      year: '',
      programme: '',
      role_type: '',
      country: '',
      phone_number: '',
      gender: '',
      enrollment_no: '',
      college: '',
      city: '',
      state: '',
      organisation_name: '',
      industry: '',
      members: '',
      startupName: '',
      social_signup: false,
      school: '',
      current_class: '',
      student_type: '',
    };
  }
  handleAccountSetup = (data) => {
    this.setState({
      email: data.email,
      password: data.password,
      confirm_password: data.confirm_password,
      // social_signup: data.social_signup,
      full_name: data.full_name,
      activeStep: this.state.activeStep + 1,
    });
    // console.log(data);
  };
  handleNext = () => {
    this.setState((state) => ({
      activeStep: state.activeStep + 1,
    }));
  };
  handleBack = (data) => {
    if (this.state.activeStep === 2) {
      this.setState({
        phone_no: data.phone_no,
        gender: data.gender,
        enrollment_no: data.enrollment_no,
        country: data.country,
        states: data.states,
        city: data.city,
        college: data.college,
        programme: data.programme,
        year: data.year,
        about_esummit: data.about_esummit,
        tshirt_size: data.tshirt_size,
        organisation_name: data.organisation_name,
        industry: data.industry,
        members: data.members,
        startupName: data.startupName,
      });
    }
    this.setState((state) => ({
      activeStep: state.activeStep - 1,
    }));
  };
  handleProfile = (data) => {
    this.setState({
      activeStep: this.state.activeStep + 1,
    });
  };
  handleChangeData = (name, val) => {
    this.setState({ [name]: val });
  };
  // goToDashboard = () => {
  //   window.location.href = ''
  // }
  // handleBack = data => {

  // }

  handleReset = () => {
    this.setState({
      activeStep: 0,
    });
  };

  onChange = (e) => {
    const name = e.target.name;
    let value = e.target.value;
    this.setState({ [name]: value });
    console.log(this.state);
  };

  handleDetails = (data) => {
    this.handleFullSubmit();
  };

  handleFullSubmit = () => {
    // console.log(this.state, "aditya-resit");
    this.setState({
      loading: false,
    });
    FetchApi('post', Register_API, this.state, null)
      .then((res) => {
        this.setState({
          loading: false,
        });
        toast.success('Succesfully Registered');
        console.log('Succesfully Registered', res.data);
        // if (res.data.token) {
        //   localStorage.setItem("authToken", res.data.token);
        //   //   this.props.history.push("/dashboard");
        // }
        if (res.data.role_type) {
          localStorage.setItem('userRoleType', res.data.role_type);
        }

        // if (res.data.user) {
        //   localStorage.setItem("user", res.data.user);
        // }
        Authenticate(res.data.user, res.data.token);
        if (String(localStorage.getItem('userRoleType')) === 'CA') {
          window.location.href = '/cap/tasks';
        } else window.location.href = '/nonca/events';
      })
      .catch((err) => {
        this.setState({
          loading: false,
        });
        console.log(err.response.data);
        const errors = err.response.data;
        for (let value of Object.values(errors)) {
          toast.error(value[0]);
        }
      });
  };
  render() {
    const { activeStep } = this.state;

    return (
      <div className='registration-container'>
        <Head className='main-h1'>
          <h1 >E-summit 22 IIT Roorkee Register Page</h1>
          <link rel="alternate" href="https://www.esummit.in/register" hreflang="en-in" /></Head>
        <div className='login-container-bck'>
          <img src={'login/login-bck-img.png'} className='bcki' alt='bcki' />
        </div>
        <div className='register-container-box'>
          <div className='register-box-design1'>
            <img
              alt='design'
              className=''
              src={'login/login-bck-design1.svg'}
            />
          </div>
          <div className='register-box-design2'>
            <img
              alt='design'
              className=''
              src={'login/login-bck-design2.svg'}
            />
          </div>
          <form
            onSubmit={() => {
              console.log(this.state);
            }}
          >
            {activeStep === 0 ? (
              <AccountSetup
                data={this.state}
                handleSubmit={this.handleAccountSetup}
              />
            ) : null}

            {activeStep === 1 ? (
              <PersonalDetails
                handleState={this.state}
                handleBack={this.handleBack}
                handleDetails={this.handleDetails}
                handleDataChange={this.onChange}
                handleSelectDataChange={this.handleChangeData}
                loading={this.state.loading}
              />
            ) : null}

            
          </form>
        </div>
      </div>
    );
  }
}

export default Registration;
