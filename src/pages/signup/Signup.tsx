import "./Signup.css";
// import signupImage from "../../assets/Signup-image.png";
import closeIcon from "../../assets/close.png";
import { useState } from "react";
import Alert from "../../components/alert/Alert";
import { sendEmail, sendTextEmail } from "../../services/AppService";
// import logo_small from "../../assets/tesseract_logo_small.png";
// import signinBackground from "../../assets/Signin-background.png";
import { Dialog } from "@mui/material";
import {
  signupConfirmationEmailTemplate,
  signupEmaiTemplate,
} from "../../utils/emailTemplates";
import Slide from "@mui/material/Slide";
import { useNavigate } from "react-router-dom";

const Signup = ({
  dialog,
  // setDialog,
  handleDialog,
}: {
  dialog: boolean;
  setDialog: React.Dispatch<React.SetStateAction<boolean>>;
  handleDialog: (value?: boolean | undefined) => void;
}) => {
  type signupType = {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    // gender: string;
    // dateOfBirth: string;
    company: string;
    abn: string;
    // acn: string;
    // ndisProviderID: string;
    // branchCode: string;
    // contactName: string;
    industry: string;
    features: string[];
    demo: string;
    // contactNumber: string;
    // companyEmail: string;
    // streetAddress: string;
    // city: string;
    // province: string;
    // postalCode: string;
    // country: string;
  };

  type signupErrorsTypes = {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    // gender: string;
    // dateOfBirth: string;
    company: string;
    abn: string;
    // acn: string;
    // ndisProviderID: string;
    // branchCode: string;
    // contactName: string;
    industry: string;
    features: string;
    demo: string;
    // contactNumber: string;
    // companyEmail: string;
    // streetAddress: string;
    // city: string;
    // province: string;
    // postalCode: string;
    // country: string;
    [key: string]: string; // Add index signature
  };

  const signupInitialValues = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    // gender: "",
    // dateOfBirth: "",
    company: "",
    abn: "",
    // acn: "",
    // ndisProviderID: "",
    // branchCode: "",
    // contactName: "",
    industry: "",
    features: [],
    demo: "",
    // contactNumber: "",
    // companyEmail: "",
    // streetAddress: "",
    // city: "",
    // province: "",
    // postalCode: "",
    // country: "",
  } as signupType;

  const signupErrorsInitialValues = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    // gender: "",
    // dateOfBirth: "",
    company: "",
    abn: "",
    // acn: "",
    // ndisProviderID: "",
    // branchCode: "",
    // contactName: "",
    industry: "",
    features: "",
    demo: "",
    // contactNumber: "",
    // companyEmail: "",
    // streetAddress: "",
    // city: "",
    // province: "",
    // postalCode: "",
    // country: "",
  } as signupErrorsTypes;
  const [signupData, setSignupData] = useState(signupInitialValues);
  const [signupErrors, setSignupErrors] = useState(signupErrorsInitialValues);
  const alertInitialData = {
    heading: "",
    text: "",
    type: "success",
    isOpen: false,
  };
  const navigate = useNavigate();
  // console.log("signupData ", signupData);
  // console.log("signupErrors ", signupErrors);
  const [alertData, setAlertData] = useState(alertInitialData);

  const inputChangeHandler = (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = event.target;

    setSignupData((prevData) => {
      // Handle features array separately
      if (name === "features" && Array.isArray(prevData.features)) {
        const exists = prevData.features.includes(value);

        const updatedFeatures = exists
          ? prevData.features.filter((f) => f !== value)
          : [...prevData.features, value];

        return {
          ...prevData,
          features: updatedFeatures,
        };
      }

      // Default update for single values
      return {
        ...prevData,
        [name]: value,
      };
    });
  };

  const submitHandler = () => {
    const errors = {} as signupErrorsTypes;
    let isValid = true;

    // Loop through all fields
    Object.keys(signupData).forEach((key) => {
      const value = signupData[key as keyof typeof signupData];
      if (typeof value === "string") {
        if (!value.trim()) {
          errors[key] = "This field is required";
          isValid = false;
        } else {
          errors[key] = "";
        }
      } else if (Array.isArray(value)) {
        if (value.length === 0) {
          errors[key] = "This field is required";
          isValid = false;
        } else {
          errors[key] = "";
        }
      } else if (value === null || value === undefined || value === "") {
        errors[key] = "This field is required";
        isValid = false;
      } else {
        errors[key] = "";
      }
    });

    setSignupErrors(errors);

    if (!isValid) {
      setAlertData({
        ...alertData,
        heading: "Validation Error",
        text: "Please fill in all required fields.",
        type: "fail",
        isOpen: true,
      });
      return; // stop here if there are errors
    }
    sendRequestEmail();
  };
  const sendRequestEmail = () => {
    sendTextEmail(
      signupEmaiTemplate.email,
      signupEmaiTemplate.subject,
      signupEmaiTemplate.body({
        firstName: signupData.firstName,
        lastName: signupData.lastName,
        phone: signupData.phone,
        email: signupData.email,
        company: signupData.company,
        abn: signupData.abn,
        industry: signupData.industry,
        features: signupData.features.toString(),
        demo: signupData.demo,
      })
    )
      .then((response) => {
        console.log("Email sent successfully:", response);
        sendConfirmationEMail();
        // alert("Thank you for your request! We will be in touch soon.");
        setAlertData({
          ...alertData,
          heading: "Request Submitted",
          text: "Thank you for Signing Up! We will be in touch soon to provide login credentials. Keep an eye on youe inbox!",
          type: "success",
          isOpen: true,
        });
      })
      .catch((error) => {
        console.error("Error sending email:", error);
        // alert(
        //   "There was an error sending your request. Please try again later."
        // );
        setAlertData({
          ...alertData,
          heading: "Request Failed",
          text: "There was an error sending your request. Please try again later.",
          type: "fail",
          isOpen: true,
        });
      });
  };
  const sendConfirmationEMail = () => {
    sendEmail(
      signupData.firstName + " " + signupData.lastName,
      signupData.email,
      signupConfirmationEmailTemplate.subject,
      signupConfirmationEmailTemplate.text(signupData.firstName),
      signupConfirmationEmailTemplate.html(signupData.firstName)
    )
      .then((response) => {
        console.log("Confirmation email sent successfully:", response);
      })
      .catch((error) => {
        console.error("Error sending confirmation email:", error);
      });
  };
  const getInputClass = (field: keyof signupType) =>
    "signup-form-input" + (signupErrors[field] ? " error" : "");
  return (
    <Dialog
      open={dialog}
      onClose={() => {
        handleDialog(false);
      }}
      fullScreen
      slots={{ transition: Slide }}
      slotProps={{ transition: { direction: "up" } }}
      sx={{ margin: "auto", maxWidth: "1920px" }}
    >
      {/* <div id="dialog-header">
        <div id="navbar-logo">
          <img src={logo_small} alt="tesseract logo" />
          TesseractApps
        </div>
        <img
          src={closeIcon}
          alt="close icon"
          id="dialog-close-icon"
          onClick={() => handleDialog(false)}
        />
      </div> */}
      <img
        src={closeIcon}
        alt="close icon"
        id="dialog-close-icon"
        onClick={() => {
          navigate(-1);
          setTimeout(() => {
            handleDialog(false);
          }, 100);
        }}
      />
      <div id="signup-container">
        <Alert setAlertData={setAlertData} alertData={alertData} />
        {/* <div id="signup-image-container">
          <span id="signup-image-text">
            We build simple, so you can deliver smart.
          </span>
          <img src={signupImage} alt="signupImage" id="signup-image" />
        </div> */}
        <div id="signup-image-container"></div>
        <div id="signup-form-container">
          <div id="signup-heading">Sign Up for Free</div>
          <div id="signup-text">You're One Step Away! Just Add Your Info</div>
          <div id="signup-from">
            <section className="signup-form-section">
              <div className="signup-form-section-heading">
                Step-1 : Personal Details
              </div>

              <div className="signup-form-group">
                <div className="signup-form-input-group">
                  <div className="signup-input-label">
                    <label>First Name</label>
                    <span style={{ color: "red" }}>*</span>
                  </div>
                  <input
                    type="text"
                    placeholder="Enter your First Name"
                    className={getInputClass("firstName")}
                    name="firstName"
                    onChange={inputChangeHandler}
                  />
                </div>

                <div className="signup-form-input-group">
                  <div className="signup-input-label">
                    <label>Last Name</label>
                    <span style={{ color: "red" }}>*</span>
                  </div>
                  <input
                    type="text"
                    placeholder="Enter your Last Name"
                    className={getInputClass("lastName")}
                    name="lastName"
                    onChange={inputChangeHandler}
                  />
                </div>
              </div>

              {/* <div className="signup-form-input-group">
                <label>Email</label>
                <input
                  type="email"
                  placeholder="Enter your Email"
                  className={getInputClass("email")}
                  name="email"
                  onChange={inputChangeHandler}
                />
              </div> */}
              {/* <div className="signup-form-group">
                <div className="signup-form-input-group">
                  <label>Gender</label>
                  <select
                    className={getInputClass("gender")}
                    name="gender"
                    onChange={inputChangeHandler}
                  >
                    <option value="">Select Gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="non-binary">Non-Binary</option>
                    <option value="prefer not to say">Prefer Not to Say</option>
                  </select>
                </div>

                <div className="signup-form-input-group">
                  <label>Date of Birth</label>
                  <input
                    type="date"
                    className={getInputClass("dateOfBirth")}
                    name="dateOfBirth"
                    onChange={inputChangeHandler}
                  />
                </div>
              </div> */}
              <div className="signup-form-group">
                <div className="signup-form-input-group">
                  <div className="signup-input-label">
                    <label>Phone Number</label>
                    <span style={{ color: "red" }}>*</span>
                  </div>
                  <input
                    type="text"
                    className={getInputClass("phone")}
                    name="phone"
                    placeholder="Enter Phone Number"
                    onChange={inputChangeHandler}
                  />
                </div>

                <div className="signup-form-input-group">
                  <div className="signup-input-label">
                    <label>Email</label>
                    <span style={{ color: "red" }}>*</span>
                  </div>
                  <input
                    type="email"
                    className={getInputClass("email")}
                    name="email"
                    placeholder="Enter Email"
                    onChange={inputChangeHandler}
                  />
                </div>
              </div>
              <div className="signup-form-section-heading">
                Step-2 : Company Information
              </div>
              <div className="signup-form-group">
                <div className="signup-form-input-group">
                  <div className="signup-input-label">
                    <label>Company</label>
                    <span style={{ color: "red" }}>*</span>
                  </div>
                  <input
                    type="text"
                    placeholder="Enter your Company"
                    className={getInputClass("company")}
                    name="company"
                    onChange={inputChangeHandler}
                  />
                </div>

                <div className="signup-form-input-group">
                  <div className="signup-input-label">
                    <label>ABN</label>
                    <span style={{ color: "red" }}>*</span>
                  </div>
                  <input
                    type="text"
                    placeholder="Enter your ABN"
                    className={getInputClass("abn")}
                    name="abn"
                    onChange={inputChangeHandler}
                  />
                </div>
              </div>
              {/* <div className="signup-form-group">
              <div className="signup-form-input-group">
                <label>ACN</label>
                <input
                  type="text"
                  placeholder="Enter your ACN"
                  className={getInputClass("acn")}
                  name="acn"
                  onChange={inputChangeHandler}
                />
              </div>

              <div className="signup-form-input-group">
                <label>NDIS Provider ID</label>
                <input
                  type="text"
                  placeholder="Enter your NDIS Provider ID"
                  className={getInputClass("ndisProviderID")}
                  name="ndisProviderID"
                  onChange={inputChangeHandler}
                />
              </div>
            </div> */}
              {/* <div className="signup-form-group">
              <div className="signup-form-input-group">
                <label>Branch Code</label>
                <input
                  type="text"
                  placeholder="Enter your Branch Code"
                  className={getInputClass("branchCode")}
                  name="branchCode"
                  onChange={inputChangeHandler}
                />
              </div>

              <div className="signup-form-input-group">
                <label>Contact Name</label>
                <input
                  type="text"
                  placeholder="Enter Contact Name"
                  className={getInputClass("contactName")}
                  name="contactName"
                  onChange={inputChangeHandler}
                />
              </div>
            </div> */}
              <div className="signup-form-group">
                <div className="signup-form-input-group">
                  <div className="signup-input-label">
                    <label>What industry do you serve?</label>
                    <span style={{ color: "red" }}>*</span>
                  </div>
                  <select
                    className={getInputClass("industry")}
                    name="industry"
                    onChange={inputChangeHandler}
                  >
                    <option value="">Select Industry</option>
                    <option value="NDIS Provider">NDIS Provider</option>
                    <option value="Aged Care Service">Aged Care Service</option>
                    <option value="Childcare">Childcare</option>
                    <option value="Allied Health">Allied Health</option>
                    <option value="Home & Community Care">
                      Home & Community Care
                    </option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                <div className="signup-form-input-group"></div>
                {/* <div className="signup-form-input-group">
                  <label>Company Email</label>
                  <input
                    type="email"
                    placeholder="Enter Company Email"
                    className={getInputClass("companyEmail")}
                    name="companyEmail"
                    onChange={inputChangeHandler}
                  />
                </div> */}
              </div>

              <div className="signup-form-section-heading">
                Step-3 : Feature References
              </div>
              <div className="signup-form-group">
                <div className="signup-form-input-group">
                  <div className="signup-input-label">
                    <label>
                      What features does your business work with / deliver ?
                    </label>
                    <span style={{ color: "red" }}>*</span>
                  </div>
                  <div id="signup-form-input-checkbox-container">
                    <div className="signup-form-input-container">
                      <input
                        type="checkbox"
                        placeholder="Enter Street Address"
                        className="signup-input-checkbox"
                        name="features"
                        value="Roster & Schedule"
                        onChange={inputChangeHandler}
                      />
                      <label>Roster & Schedule</label>
                    </div>
                    <div className="signup-form-input-container">
                      <input
                        type="checkbox"
                        placeholder="Enter Street Address"
                        className="signup-input-checkbox"
                        name="features"
                        value="Timesheet"
                        onChange={inputChangeHandler}
                      />
                      <label>Timesheet & Payroll</label>
                    </div>
                    <div className="signup-form-input-container">
                      <input
                        type="checkbox"
                        placeholder="Enter Street Address"
                        className="signup-input-checkbox"
                        name="features"
                        value="Admin Console"
                        onChange={inputChangeHandler}
                      />
                      <label>Admin Console</label>
                    </div>
                    <div className="signup-form-input-container">
                      <input
                        type="checkbox"
                        placeholder="Enter Street Address"
                        className="signup-input-checkbox"
                        name="features"
                        value="Access Control Panel"
                        onChange={inputChangeHandler}
                      />
                      <label>Access Control Panel</label>
                    </div>
                    <div className="signup-form-input-container">
                      <input
                        type="checkbox"
                        placeholder="Enter Street Address"
                        className="signup-input-checkbox"
                        name="features"
                        value="HR Operation"
                        onChange={inputChangeHandler}
                      />
                      <label>HR Operations</label>
                    </div>
                    <div className="signup-form-input-container">
                      <input
                        type="checkbox"
                        placeholder="Enter Street Address"
                        className="signup-input-checkbox"
                        name="features"
                        value="Digital Signatures"
                        onChange={inputChangeHandler}
                      />
                      <label>Digital Signatures</label>
                    </div>
                    <div className="signup-form-input-container">
                      <input
                        type="checkbox"
                        placeholder="Enter Street Address"
                        className="signup-input-checkbox"
                        name="features"
                        value="Reporting & Dashboard"
                        onChange={inputChangeHandler}
                      />
                      <label>Reporting & Dashboard</label>
                    </div>
                    <div className="signup-form-input-container">
                      <input
                        type="checkbox"
                        placeholder="Enter Street Address"
                        className="signup-input-checkbox"
                        name="features"
                        value="NDIS Claims & Invoicing"
                        onChange={inputChangeHandler}
                      />
                      <label>NDIS Claims & Invoicing</label>
                    </div>
                  </div>
                </div>
              </div>
              <div className="signup-form-section-heading">
                Step-4 : Demo Preference
              </div>
              <div className="signup-form-group">
                <div className="signup-form-input-group">
                  <div className="signup-input-label">
                    <label>
                      Would you like to schedule a demo to explore your trial
                      access with TesseractApps?
                    </label>
                    <span style={{ color: "red" }}>*</span>
                  </div>
                  <div className="signup-form-input-container">
                    <input
                      type="radio"
                      placeholder="Enter Street Address"
                      className="signup-input-radio"
                      name="demo"
                      value="yes"
                      onChange={inputChangeHandler}
                    />
                    <label>Yes - I'd like to book a demo</label>
                  </div>
                  <div className="signup-form-input-container">
                    <input
                      type="radio"
                      placeholder="Enter Street Address"
                      className="signup-input-radio"
                      name="demo"
                      value="no"
                      onChange={inputChangeHandler}
                    />
                    <label>No - I prefer to explore on my own</label>
                  </div>
                </div>
              </div>
              <div className="signup-text-conditions">
                No credit card required
              </div>
              <div id="signup-button-container">
                <button onClick={submitHandler} id="signup-button">
                  Submit
                </button>
              </div>
            </section>
          </div>
        </div>
      </div>
    </Dialog>
  );
};

export default Signup;
