import React, { Component } from "react";
import Select from "react-select";

import state_option from "./json/states.json";
import gender_option from "./json/gender.json";
import citys from "./json/citys.json";
import role_type_option from "./json/profile_type.json";
import college_option from "./json/colleges.json";
import year_option from "./json/year.json";
import programme_option from "./json/programmes.json";
import CustomGradientBtn from "../customGradientBtn";

//CSS styling for react-select
const customStyle = {
  option: (provided, state) => ({
    ...provided,
    borderBottom: "1px solid #F5E4CA !important",
    // color:state.isFocused?"#6f00ff":"white",
    color: state.isSelected
      ? "#000000"
      : state.isFocused
      ? "#000000"
      : "#F5E4CA",
    backgroundColor: state.isFocused ? "#F5E4CA" : "transparent",
  }),
  control: (provided, state) => ({
    ...provided,
    marginBottom: "20px",
    background: "inherit",
    border: "1px solid #F5E4CA",
  }),
  menu: (provided, state) => ({
    // ...provided,
    // borderBottom:"2px solid blue",
    color: "white",
  }),

  singleValue: (style) => ({ ...style, color: "white" }),
};
export class PersonalDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //   name: "",
      school: "",
      current_class: "",
      phone_number: "",
      gender: "",
      enrollment_no: "",
      state: "",
      city: "",
      college: "",
      programme: "",
      year: "",
      organisation_name: "",
      industry: "",
      invite_code: "",
      members: "",
      startupName: "",
      name_error_bool: "",
      name_error: "",
      enroll_error_bool: "",
      enroll_error: "",
      phone_error_bool: "",
      phone_error: "",
      gender_error_bool: "",
      gender_error: "",
      role_type: "",
      profileType_error: "",
      profileType_error_bool: "",
      state_error_bool: "",
      state_error: "",
      city_error_bool: "",
      city_error: "",
      college_error_bool: "",
      college_error: "",
      programme_error_bool: "",
      programme_error: "",
      year_error_bool: "",
      year_error: "",
      organisation_error_bool: "",
      organisation_error: "",
      members_error_bool: "",
      members_error: "",
      startupName_error_bool: "",
      startupName_error: "",
      industry_error_bool: "",
      industry_error: "",
      inviteCode_error_bool: "",
      inviteCode_error: "",
      student_type: "",
    };
  }
  EmptyValidation = (data) => {
    setTimeout(() => {
      switch (data) {
        case "phone_number":
          this.setState({
            phone_error: "Phone Number Cannot be Blank!",
            phone_error_bool: "true",
          });
          break;
        case "gender":
          this.setState({
            gender_error: "Choose a Gender!",
            gender_error_bool: "true",
          });
          break;
        case "enroll":
          this.setState({
            enroll_error: "Enter Enrollment Number !",
            enroll_error_bool: "true",
          });
          break;
        case "state":
          this.setState({
            state_error: "Select A State !",
            state_error_bool: "true",
          });
          break;
        case "city":
          this.setState({
            city_error: "Select A City !",
            city_error_bool: "true",
          });
          break;
        case "college":
          this.setState({
            college_error: "Enter College Name",
            college_error_bool: "true",
          });
          break;
        case "programme":
          this.setState({
            programme_error: "Select Program",
            programme_error_bool: "true",
          });
          break;
        case "year":
          this.setState({
            year_error: "Select Year",
            year_error_bool: "true",
          });
          break;
        case "role_type":
          this.setState({
            profileType_error: "Select Profile Type",
            profileType_error_bool: "true",
          });
          break;
      }
    }, 100);
  };
  handleSubmit = () => {
    if (this.state.phone_number === "") {
      return this.EmptyValidation("phone_number");
    }
    if (this.state.phone_number.length !== 10) {
      return this.phoneValidate();
    }
    if (this.state.gender === "") {
      return this.EmptyValidation("gender");
    }

    if (
      this.state.enrollment_no === "" &&
      this.state.role_type === "IITR Student"
    ) {
      return this.EmptyValidation("enroll");
    }
    if (this.state.state === "" && this.state.role_type !== "IITR Student") {
      return this.EmptyValidation("state");
    }
    if (this.state.city === "" && this.state.role_type !== "IITR Student") {
      return this.EmptyValidation("city");
    }
    if (this.state.role_type === "") {
      return this.EmptyValidation("role_type");
    }
    if (
      (this.state.college === "" && this.state.role_type === "Startup Expo") ||
      this.state.role_type === "Professional"
    ) {
      return this.EmptyValidation("college");
    }
    if (
      this.state.programme === "" &&
      (this.state.role_type === "Non IITR Student" ||
        this.state.role_type === "CampusAmbassador")
    ) {
      return this.EmptyValidation("programme");
    }
    if (
      this.state.year === "" &&
      (this.state.role_type === "Non IITR Student" ||
        this.state.role_type === "CampusAmbassador")
    ) {
      return this.EmptyValidation("year");
    }
    if (
      this.state.organisation_name === "" &&
      this.state.role_type === "Professional"
    ) {
      return this.EmptyValidation("organisation");
    }
    if (this.state.industry === "" && this.state.role_type === "Professional") {
      return this.EmptyValidation("industry");
    }
    const {
      name,
      phone_number,
      gender,
      enrollment_no,
      state,
      city,
      college,
      role_type,
      programme,
      year,
      organisation_name,
      industry,
      members,
      startupName,
      invite_code,
    } = this.state;

    let data = {
      name: name,
      phone_number: phone_number,
      gender: gender,
      enrollment_no: enrollment_no,
      state: state.value,
      city: city.value,
      role_type: role_type.value,
      college: college,
      programme: programme,
      year: year.value,
      organisation_name: organisation_name,
      industry: industry,
      members: members,
      startupName: startupName,
      invite_code: invite_code,
    };
    this.props.handleDetails(data);
  };
  componentDidMount() {
    this.setState({
      name: this.props.handleState.name,
      phone_number: this.props.handleState.phone_number,
      gender: this.props.handleState.gender,
      role_type: this.props.handleState.role_type,
      enrollment_no: this.props.handleState.enrollment_no,
      country: this.props.handleState.country,
      state: this.props.handleState.state,
      city: this.props.handleState.city,
      college: this.props.handleState.college,
      programme: this.props.handleState.programme,
      year: this.props.handleState.year,
      organisation_name: this.props.handleState.organisation_name,
      industry: this.props.handleState.industry,
    });
    const height = window.innerHeight;
    let push = 0 * height;
    window.scroll({ top: push, behavior: "auto" });
    if (this.props.handleState.phone_number !== "") this.phoneValidate();
    if (this.props.handleState.gender !== "") this.genderValidate();
    if (this.props.handleState.state !== "") this.stateValidate();
    if (this.props.handleState.city !== "") this.cityValidate();
    if (this.props.handleState.role_type !== "") this.profileTypeValidate();
  }
  onChange = (e) => {
    const name = e.target.name;
    let value = e.target.value;
    this.setState({ [name]: value });
  };
  getstate = () => {
    return state_option.map((state) => ({
      value: state.name,
      label: state.name,
    }));
  };
  getGender = () => {
    return gender_option.map((gender) => ({
      value: gender.value,
      label: gender.name,
    }));
  };
  getCities = (state) => {
    let cities = citys[state];
    return cities.map((city) => ({ value: city, label: city }));
    // return cities
  };
  getProfileType = () => {
    return role_type_option.map((profile) => ({
      value: profile.value,
      label: profile.name,
    }));
  };
  getYear = () => {
    return year_option.map((year) => ({ value: year.name, label: year.name }));
  };
  getProgrammes = () => {
    return programme_option.map((programme) => ({
      value: programme.name,
      label: programme.name,
    }));
  };
  getCollege = () => {
    return college_option.map((college) => ({
      value: college.name,
      label: college.name,
    }));
  };
  handleGenderChange = (selectedOption) => {
    this.setState({ gender: selectedOption });
  };
  handleStateChange = (selectedOption) => {
    this.setState({ state: selectedOption });
  };
  handleCityChange = (selectedOption) => {
    this.setState({ city: selectedOption });
  };
  handleProfileTypeChange = (selectedOption) => {
    this.setState({ role_type: selectedOption });
  };
  handleProgrammeChange = (selectedOption) => {
    this.setState({ programme: selectedOption });
  };
  handleYearChange = (selectedOption) => {
    this.setState({ year: selectedOption });
  };
  handleCollegeChange = (selectedOption) => {
    this.setState({ college: selectedOption });
  };

  EmptyValidate = (data) => {
    let variable;
    if (data === "phone_number") {
      variable = data.substring(0, 5);
    } else {
      variable = data;
    }
    let variable_error = variable + "_error";
    let variable_error_bool = variable + "_error_bool";
    let error_value = variable;
    let rest_value;
    if (data === "phone_number") {
      rest_value = " number cannot be empty";
    } else if (data === "enroll") {
      rest_value = "Enrollment number cannot be empty";
    } else if (data === "about_esummit" || data === "tshirt") {
      rest_value = "This field cannot be empty";
      error_value = "";
      variable = "";
    } else {
      rest_value = " cannot be empty!";
    }
    this.setState({
      [variable_error]:
        error_value.charAt(0).toUpperCase() + variable.slice(1) + rest_value,
      [variable_error_bool]: "true",
    });
    const height = window.innerHeight;
    let push;
    if (
      data === "city" ||
      data === "programme" ||
      data === "year" ||
      data === "college"
    ) {
      push = 1.4 * height;
    } else {
      push = 0.5 * height;
    }
    window.scroll({ top: push, behavior: "smooth" });
  };
  nameValidate = () => {
    setTimeout(() => {
      if (this.state.name !== "") {
        if (this.state.name.length < 3) {
          this.setState({
            name_error_bool: "true",
            name_error: "* Name should be more than 3 letters",
          });
        } else {
          this.setState({
            name_error_bool: "false",
            name_error: "",
          });
          console.log(this.state.name);
        }
      }
    }, 1000);
  };
  phoneValidate = () => {
    setTimeout(() => {
      if (
        this.state.phone_number.length < 10 ||
        this.state.phone_number.length > 10
      ) {
        this.setState({
          phone_error_bool: "true",
          phone_error: "*Phone number must contain 10 digits",
        });
      } else {
        this.setState({
          phone_error_bool: "false",
          phone_error: "",
        });
      }
    }, 1000);
  };
  genderValidate = () => {
    setTimeout(() => {
      if (this.state.gender !== "") {
        this.setState({
          gender_error_bool: "false",
          gender_error: "",
        });
      }
    }, 1000);
  };
  stateValidate = () => {
    setTimeout(() => {
      if (this.state.state !== "") {
        this.setState({
          state_error_bool: "false",
          state_error: "",
        });
      }
    }, 1000);
  };
  cityValidate = () => {
    setTimeout(() => {
      if (this.state.city !== "") {
        this.setState({
          city_error_bool: "false",
          city_error: "",
        });
      }
    }, 1000);
  };
  profileTypeValidate = () => {
    setTimeout(() => {
      if (this.state.role_type !== "") {
        this.setState({
          profileType_error_bool: "false",
          profileType_error: "",
        });
      }
      // console.log(this.state.role_type)
    }, 1000);
  };
  enrollValidate = () => {
    setTimeout(() => {
      if (this.state.enrollment_no !== "") {
        this.setState({
          enroll_error_bool: "false",
          enroll_error: "",
        });
      }
    }, 1000);
  };
  yearValidate = () => {
    setTimeout(() => {
      if (this.state.year !== "") {
        this.setState({
          year_error_bool: "false",
          year_error: "",
        });
      }
    }, 1000);
  };
  organisationValidate = () => {
    setTimeout(() => {
      if (this.state.organisation_name !== "") {
        this.setState({
          organisation_error_bool: "false",
          organisation_error: "",
        });
      }
    }, 1000);
  };
  programmeValidate = () => {
    setTimeout(() => {
      if (this.state.programme !== "") {
        this.setState({
          programme_error_bool: "false",
          programme_error: "",
        });
      }
    }, 1000);
  };
  collegeValidate = () => {
    setTimeout(() => {
      if (this.state.college !== "") {
        this.setState({
          college_error_bool: "false",
          college_error: "",
        });
      }
    }, 1000);
  };
  industryValidate = () => {
    setTimeout(() => {
      if (this.state.industry !== "") {
        this.setState({
          industry_error_bool: "false",
          industry_error: "",
        });
      }
    }, 1000);
  };
  inviteCodeValidate = () => {
    setTimeout(() => {
      if (this.state.invite_code !== "") {
        this.setState({
          industry_error_bool: "false",
          industry_error: "",
        });
      }
    }, 1000);
  };
  membersValidate = () => {
    setTimeout(() => {
      if (this.state.members !== "") {
        this.setState({
          members_error_bool: "false",
          members_error: "",
        });
      }
    }, 1000);
  };
  startupNameValidate = () => {
    setTimeout(() => {
      if (this.state.startupName !== "") {
        this.setState({
          startupName_error_bool: "false",
          startupName_error: "",
        });
      }
    }, 1000);
  };
  schoolNameValidate = () => {
    setTimeout(() => {
      if (this.state.school !== "") {
        this.setState({
          schoolName_error_bool: "false",
          schoolName_error: "",
        });
      }
    }, 1000);
  };
  classNameValidate = () => {
    setTimeout(() => {
      if (this.state.current_class >= 1 && this.state.current_class <= 12) {
        this.setState({
          phone_error_bool: "false",
          phone_error: "",
        });
      } else {
        this.setState({
          phone_error_bool: "true",
          phone_error: "*Class should lie between 1-12",
        });
      }
    }, 1000);
  };
  render() {
    const {
      name_error_bool,
      name_error,
      gender_error_bool,
      gender_error,
      year_error_bool,
      year_error,
      programme_error_bool,
      programme_error,
      organisation_error_bool,
      organisation_error,
      industry_error_bool,
      industry_error,
      schoolStudent_error,
      state_error_bool,
      state_error,
      city_error_bool,
      city_error,
      college_error_bool,
      college_error,
      enroll_error_bool,
      enroll_error,
      inviteCode_error_bool,
      inviteCode_error,
      members_error_bool,
      members_error,
      startupName_error_bool,
      startupName_error,
      phone_error_bool,
      phone_error,
      role_type,
      profileType_error,
      profileType_error_bool,
      name,
      phone_number,
      gender,
      enrollment_no,
      state,
      city,
      college,
      programme,
      year,
      organisation_name,
      industry,
      members,
      startupName,
      invite_code,
      school,
      current_class,
      schoolName_error_bool,
      schoolName_error,
      className_error_bool,
      className_error,
    } = this.state;
    const { handleDataChange, handleSelectDataChange } = this.props;

    return (
      <div>
        <div id="login-heading">PERSONAL DETAILS</div>
        {/* <div>
          <input
            id="iname"
            className="form"
            type="text"
            placeholder="Enter your Full name"
            name="name"
            autoCorrect="off"
            autoComplete="off"
            autoCapitalize="off"
            value={name}
            onChange={(event) => {
              this.onChange(event);
              this.nameValidate();
            }}
            spellCheck="false"
            required
          />
          <snap className="">
            {name_error_bool === "" ? null : (
              <img
                alt="tick mark"
                src={
                  name_error_bool === "true"
                    ? null
                    : name_error_bool === "false"
                    ? tickMark
                    : null
                }
              />
            )}
          </snap>
        </div> */}
        {/* <div>{name_error}</div> */}
        <div className="mobile-container-personal-form">
          <div>
            <input
              id="iPhone"
              type="number"
              className="register-form"
              placeholder="Phone no."
              name="phone_number"
              autoCorrect="off"
              autoComplete="off"
              autoCapitalize="off"
              value={phone_number}
              onChange={(event) => {
                this.onChange(event);
                this.phoneValidate();
                handleDataChange(event);
              }}
              spellCheck="false"
              required
            />
            {/* <span className="">
              {phone_error_bool === "" ? null : (
                <img
                  alt="correc/wrong"
                  src={
                    phone_error_bool === "true"
                      ? null
                      : phone_error_bool === "false"
                      ? tickMark
                      : null
                  }
                />
              )}
            </span> */}
          </div>
          <div className="error_msg">{phone_error}</div>
        </div>
        <div className="mobile-container-personal-form">
          <div>
            <Select
              styles={customStyle}
              value={gender}
              onChange={(event) => {
                this.handleGenderChange(event);
                this.genderValidate();
                handleSelectDataChange("gender", event.value);
              }}
              options={this.getGender()}
              placeholder="Gender"
              name="gender"
            />
            {/* <span>
              {gender_error_bool === "" ? null : (
                <img
                  alt="correc/wrong"
                  src={
                    gender_error_bool === "true"
                      ? null
                      : gender_error_bool === "false"
                      ? tickMark
                      : null
                  }
                />
              )}
            </span> */}
          </div>
          <div className="error_msg">{gender_error}</div>
        </div>
        <div className="mobile-container-personal-form">
          <div>
            <Select
              styles={customStyle}
              value={state}
              className="select_style"
              onChange={(event) => {
                this.handleStateChange(event);
                this.stateValidate();
                handleSelectDataChange("state", event.value);
              }}
              options={this.getstate()}
              placeholder="State"
              name="state"
            />
            {/* <span>
              {state_error_bool === "" ? null : (
                <img
                  alt="correc/wrong"
                  src={
                    state_error_bool === "true"
                      ? null
                      : state_error_bool === "false"
                      ? tickMark
                      : null
                  }
                />
              )}
            </span> */}
          </div>
          <div className="error_msg">{state_error}</div>
        </div>
        <div className="mobile-container-personal-form">
          <div>
            <Select
              styles={customStyle}
              className="select_style"
              value={city}
              onChange={(event) => {
                this.handleCityChange(event);
                this.cityValidate();
                handleSelectDataChange("city", event.value);
              }}
              options={state === "" ? [] : this.getCities(state.value)}
              placeholder="City"
              name="city"
            />
            {/* <span>
              {city_error_bool === "" ? null : (
                <img
                  alt="correc/wrong"
                  src={
                    city_error_bool === "true"
                      ? null
                      : city_error_bool === "false"
                      ? tickMark
                      : null
                  }
                />
              )}
            </span> */}
          </div>
          <div className="error_msg">{city_error}</div>
        </div>

        <div className="mobile-container-personal-form">
          <div>
            <Select
              styles={customStyle}
              className="select_style"
              id="irole_type"
              value={role_type}
              onChange={(event) => {
                this.handleProfileTypeChange(event);
                this.profileTypeValidate();
                handleSelectDataChange("role_type", event.value);
                if (event.label == "Non IITR Student") {
                  handleSelectDataChange("student_type", "NONIITR");
                }
                if (event.label == "IITR Student") {
                  handleSelectDataChange("student_type", "IITR");
                  handleSelectDataChange("college", "IITR");
                }
              }}
              options={this.getProfileType()}
              placeholder="Profile Type"
              name="role_type"
            />
            {/* <span>
              {profileType_error_bool === "" ? null : (
                <img
                  alt="tick mark"
                  src={
                    profileType_error_bool === "true"
                      ? null
                      : profileType_error_bool === "false"
                      ? tickMark
                      : null
                  }
                />
              )}
            </span> */}
          </div>
          <div className="error_msg">{profileType_error}</div>
        </div>
        {role_type.label === "IITR Student" ? (
          <div>
            <div className="mobile-container-personal-form">
              <div>
                <input
                  id="iEnrollment"
                  type="number"
                  className="register-form"
                  placeholder="Enrollment no."
                  name="enrollment_no"
                  autoCorrect="off"
                  autoComplete="off"
                  autoCapitalize="off"
                  value={enrollment_no}
                  onChange={(event) => {
                    this.onChange(event);
                    this.enrollValidate();
                    handleDataChange(event);
                  }}
                  spellCheck="false"
                  required
                />
                {/* <span>
                  {enroll_error_bool === "" ? null : (
                    <img
                      alt="tick mark"
                      src={
                        enroll_error_bool === "true"
                          ? null
                          : enroll_error_bool === "false"
                          ? tickMark
                          : null
                      }
                    />
                  )}
                </span> */}
                <div className="error_msg">{enroll_error}</div>
              </div>
            </div>
            <div className="mobile-container-personal-form">
              <Select
                styles={customStyle}
                className="select_style"
                value={year}
                onChange={(event) => {
                  this.handleYearChange(event);
                  this.yearValidate();
                }}
                options={this.getYear()}
                placeholder="Year"
                name="year"
              />
              {/* <span className="">
                {year_error_bool === "" ? null : (
                  <img
                    alt="correc/wrong"
                    src={
                      year_error_bool === "true"
                        ? null
                        : year_error_bool === "false"
                        ? tickMark
                        : null
                    }
                  />
                )}
              </span> */}
            </div>
            <div className="error_msg">{year_error}</div>
            <div className="mobile-container-personal-form">
              <Select
                styles={customStyle}
                className="select_style"
                value={programme}
                onChange={(event) => {
                  this.handleProgrammeChange(event);
                  this.programmeValidate();
                }}
                options={this.getProgrammes()}
                placeholder="Branch"
              />
              {/* <span className="">
                {programme_error_bool === "" ? null : (
                  <img
                    alt="correc/wrong"
                    src={
                      programme_error_bool === "true"
                        ? null
                        : programme_error_bool === "false"
                        ? tickMark
                        : null
                    }
                  />
                )}
              </span> */}
            </div>
            <div className="error-msg">{programme_error}</div>
          </div>
        ) : null}
        {role_type.label === "Non IITR Student" ||
        role_type.label === "CampusAmbassador" ? (
          <div className="mobile-container-personal-form">
            <div className="">
              <input
                id="inputCollege"
                type="text"
                className="register-form"
                placeholder="College Name"
                name="college"
                autoCorrect="off"
                autoComplete="off"
                autoCapitalize="off"
                value={college}
                onChange={(event) => {
                  this.onChange(event);
                  this.collegeValidate();
                  handleDataChange(event);
                }}
                spellCheck="false"
                required
              />
              {/* <span className="">
                {college_error_bool === "" ? null : (
                  <img
                    alt="correc/wrong"
                    src={
                      college_error_bool === "true"
                        ? null
                        : college_error_bool === "false"
                        ? tickMark
                        : null
                    }
                  />
                )}
              </span> */}

              {/* <span className="">
                {college_error_bool === "" ? null : (
                  <img
                    alt="correc/wrong"
                    src={
                      college_error_bool === "true"
                        ? null
                        : college_error_bool === "false"
                        ? tickMark
                        : null
                    }
                  />
                )}
              </span> */}
              <div className="error-msg">{college_error}</div>
            </div>

            <div className="mobile-container-personal-form">
              <Select
                styles={customStyle}
                className="select_style"
                value={year}
                onChange={(event) => {
                  this.handleYearChange(event);
                  this.yearValidate();
                }}
                options={this.getYear()}
                placeholder="Year of study"
              />
              {/* <span className="">
                {year_error_bool === "" ? null : (
                  <img
                    alt="correc/wrong"
                    src={
                      year_error_bool === "true"
                        ? null
                        : year_error_bool === "false"
                        ? tickMark
                        : null
                    }
                  />
                )}
              </span> */}
              <div className="error-msg">{year_error}</div>
            </div>
            <div className="mobile-container-personal-form">
              <input
                id="inviteCode"
                type="text"
                className="register-form"
                placeholder="Invite Code"
                name="invite_code"
                autoCorrect="off"
                autoComplete="off"
                autoCapitalize="off"
                value={invite_code}
                onChange={(event) => {
                  this.onChange(event);
                  this.inviteCodeValidate();
                  handleDataChange(event);
                }}
                spellCheck="false"
                required
              />
              {/* <span className="">
                {year_error_bool === "" ? null : (
                  <img
                    alt="correc/wrong"
                    src={
                      year_error_bool === "true"
                        ? null
                        : year_error_bool === "false"
                        ? tickMark
                        : null
                    }
                  />
                )}
              </span> */}
              <div className="error-msg">{year_error}</div>
            </div>
          </div>
        ) : null}
        {role_type.label === "Professional" ? (
          <div>
            <div className="mobile-container-personal-form">
              <div>
                <input
                  id="iCompany"
                  type="text"
                  className="register-form"
                  placeholder="Organization/Company Name"
                  name="organisation_name"
                  autoCorrect="off"
                  autoComplete="off"
                  autoCapitalize="off"
                  value={organisation_name}
                  onChange={(event) => {
                    this.onChange(event);
                    this.organisationValidate();
                    handleDataChange(event);
                  }}
                  spellCheck="false"
                  required
                />
                {/* <span className="">
                  {organisation_error_bool === "" ? null : (
                    <img
                      alt="correc/wrong"
                      src={
                        organisation_error_bool === "true"
                          ? null
                          : organisation_error_bool === "false"
                          ? tickMark
                          : null
                      }
                    />
                  )}
                </span> */}
              </div>
              <div className="error-msg">{organisation_error}</div>
            </div>
            <div className="mobile-container-personal-form">
              <div>
                <input
                  id="iIndustry"
                  type="text"
                  className="register-form"
                  placeholder="Industry"
                  name="industry"
                  autoCorrect="off"
                  autoComplete="off"
                  autoCapitalize="off"
                  value={industry}
                  onChange={(event) => {
                    this.onChange(event);
                    this.industryValidate();
                    handleDataChange(event);
                  }}
                  spellCheck="false"
                  required
                />
                {/* <span className="">
                  {industry_error_bool === "" ? null : (
                    <img
                      alt="correc/wrong"
                      src={
                        industry_error_bool === "true"
                          ? null
                          : industry_error === "false"
                          ? tickMark
                          : null
                      }
                    />
                  )}
                </span> */}
              </div>
              <div className="error-msg">{industry_error}</div>
            </div>
          </div>
        ) : null}
        {role_type.label === "School Student" ? (
          <div className="mobile-container-personal-form">
            <div>
              <input
                id="iSchoolName"
                type="text"
                placeholder="School Name"
                className="register-form"
                name="school"
                autoCorrect="off"
                autoComplete="off"
                autoCapitalize="off"
                value={school}
                onChange={(event) => {
                  this.onChange(event);
                  this.schoolNameValidate();
                  handleDataChange(event);
                }}
                spellCheck="false"
                required
              />
              {/* <span className="">
                {members_error_bool === "" ? null : (
                  <img
                    alt="correc/wrong"
                    src={
                      members_error_bool === "true"
                        ? null
                        : members_error_bool === "false"
                        ? tickMark
                        : null
                    }
                  />
                )}
              </span> */}
            </div>
            <div className="error-msg">{schoolName_error}</div>
            <div className="mobile-container-personal-form">
              <input
                id="iClassName"
                type="text"
                placeholder="Class(1-12)"
                className="register-form"
                name="current_class"
                autoCorrect="off"
                autoComplete="off"
                autoCapitalize="off"
                value={current_class}
                onChange={(event) => {
                  this.onChange(event);
                  this.classNameValidate();
                  handleDataChange(event);
                }}
                spellCheck="false"
                required
              />
              {/* <span className="">
                {startupName_error_bool === "" ? null : (
                  <img
                    alt="correc/wrong"
                    src={
                      startupName_error_bool === "true"
                        ? null
                        : startupName_error_bool === "false"
                        ? tickMark
                        : null
                    }
                  />
                )}
              </span> */}
            </div>
            <div className="error-msg">{startupName_error}</div>

            <div className="error-msg">{schoolStudent_error}</div>
          </div>
        ) : null}
        {role_type.label === "Startup Expo" ? (
          <div className="mobile-container-personal-form">
            <div>
              <input
                id="iMembers"
                type="text"
                placeholder="Members"
                className="register-form"
                name="members"
                autoCorrect="off"
                autoComplete="off"
                autoCapitalize="off"
                value={members}
                onChange={(event) => {
                  this.onChange(event);
                  this.membersValidate();
                }}
                spellCheck="false"
                required
              />
              {/* <span className="">
                {members_error_bool === "" ? null : (
                  <img
                    alt="correc/wrong"
                    src={
                      members_error_bool === "true"
                        ? null
                        : members_error_bool === "false"
                        ? tickMark
                        : null
                    }
                  />
                )}
              </span> */}
            </div>
            <div className="error-msg">{members_error}</div>
            <div className="mobile-container-personal-form">
              <input
                id="iStartup"
                type="text"
                placeholder="Startup Name"
                className="register-form"
                name="startup"
                autoCorrect="off"
                autoComplete="off"
                autoCapitalize="off"
                value={startupName}
                onChange={(event) => {
                  this.onChange(event);
                  this.startupNameValidate();
                }}
                spellCheck="false"
                required
              />
              {/* <span className="">
                {startupName_error_bool === "" ? null : (
                  <img
                    alt="correc/wrong"
                    src={
                      startupName_error_bool === "true"
                        ? null
                        : startupName_error_bool === "false"
                        ? tickMark
                        : null
                    }
                  />
                )}
              </span> */}
            </div>
            <div className="error-msg">{startupName_error}</div>
            <div>
              <input
                id="iIndustry"
                type="text"
                placeholder="Industry"
                className="register-form"
                name="industry"
                autoCorrect="off"
                autoComplete="off"
                autoCapitalize="off"
                value={industry}
                onChange={(event) => {
                  this.onChange(event);
                  this.industryValidate();
                }}
                spellCheck="false"
                required
              />
              {/* <span className="">
                {industry_error_bool === "" ? null : (
                  <img
                    alt="correc/wrong"
                    src={
                      industry_error_bool === "true"
                        ? null
                        : industry_error === "false"
                        ? tickMark
                        : null
                    }
                  />
                )}
              </span> */}
            </div>
            <div className="error-msg">{industry_error}</div>
          </div>
        ) : null}
        <div className="mobile-submit-container">
          {/* <Button
                    class_name="button"
                    onClick={this.handleBack}
                    buttontext="Back"
                >
                </Button> */}

          {this.props.loading ? (
            <img
              src={LoaderSpin}
              style={{ width: "50px", backgroundColor: "#19072C" }}
            />
          ) : (
            <div className="login-button" onClick={this.handleSubmit}>
              <CustomGradientBtn text={"SUBMIT"} />
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default PersonalDetails;
