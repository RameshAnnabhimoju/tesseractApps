import "./Signup.css";
import signupImage from "../../assets/Signup-image.png";
import { useState } from "react";
import Alert from "../../components/alert/Alert";
import { sendEmail } from "../../services/AppService";
const Signup = () => {
  type signupType = {
    firstName: string;
    lastName: string;
    email: string;
    gender: string;
    dateOfBirth: string;
    company: string;
    abn: string;
    // acn: string;
    // ndisProviderID: string;
    // branchCode: string;
    // contactName: string;
    contactNumber: string;
    companyEmail: string;
    streetAddress: string;
    city: string;
    province: string;
    postalCode: string;
    country: string;
  };
  const signupInitialValues = {
    firstName: "",
    lastName: "",
    email: "",
    gender: "",
    dateOfBirth: "",
    company: "",
    abn: "",
    // acn: "",
    // ndisProviderID: "",
    // branchCode: "",
    // contactName: "",
    contactNumber: "",
    companyEmail: "",
    streetAddress: "",
    city: "",
    province: "",
    postalCode: "",
    country: "",
  };
  const [signupData, setSignupData] = useState(signupInitialValues);
  const [signupErrors, setSignupErrors] = useState(signupInitialValues);
  const alertInitialData = {
    heading: "",
    text: "",
    type: "success",
    isOpen: false,
  };
  const [alertData, setAlertData] = useState(alertInitialData);
  const inputChangeHandler = (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = event.target;
    setSignupData({ ...signupData, [name as string]: value });
  };
  const submitHandler = () => {
    let errors: any = {};
    let isValid = true;

    // Loop through all fields
    Object.keys(signupData).forEach((key) => {
      if (!signupData[key as keyof typeof signupData]?.trim()) {
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
    sendEmail(
      "itsupport@tesseractapps.com",
      "Request for free trial signup",
      `${signupData.firstName} has made a request for free trial signup.\n
                First Name: ${signupData.firstName}\n
                Last Name: ${signupData.lastName}\n
                Email: ${signupData.email}\n
                Gender: ${signupData.gender}\n
                Date of Birth: ${signupData.dateOfBirth}\n
                Company: ${signupData.company}\n
                ABN: ${signupData.abn}\n
                
                Company Email: ${signupData.companyEmail}\n
                Street Address: ${signupData.streetAddress}\n
                City: ${signupData.city}\n
                Province: ${signupData.province}\n
                Postal Code: ${signupData.postalCode}\n
                Country: ${signupData.country}`
    )
      .then((response) => {
        console.log("Email sent successfully:", response);
        sendConfirmationEMail();
        // alert("Thank you for your request! We will be in touch soon.");
        setAlertData({
          ...alertData,
          heading: "Request Submitted",
          text: "Thank you for your request! We will be in touch soon.",
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
      signupData.email,
      "Thank You for Signing Up! We’ve Received Your Details",
      `Hi ${signupData.firstName},\n
      \n
      Thank you for signing up with Tesseract Apps!\n
      \n
      We’ve received your details and our team is currently reviewing them. One of our representatives will get in touch with you soon to guide you through the next steps.\n
      \n
      If you have any immediate questions, feel free to reach out to us at [itsupport@tesseractapps.com] or call us at [+61261332819, 1300 252 808].\n
      \n
      We’re excited to connect with you soon!\n
      \n
      Warm regards,\n
      Team TesseractApps\n
      [Our Website: Tesseract]\n
      [+61261332819,02 6133 2800] | [itsupport@tesseractapps.com]\n
      `
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
    <div id="signup-container">
      <Alert setAlertData={setAlertData} alertData={alertData} />
      <div id="signup-image-container">
        <span id="signup-image-text">
          We build simple, so you can deliver smart.
        </span>
        <img src={signupImage} alt="signupImage" id="signup-image" />
      </div>
      <div id="signup-form-container">
        <div id="signup-heading">Get In Touch</div>
        <div id="signup-text">
          We'd love to hear from you, Send us a message and we'll respond as
          soon as possible.
        </div>
        <div id="signup-from">
          <section className="signup-form-section">
            <div className="signup-form-section-heading">
              Personal Information
            </div>

            <div className="signup-form-group">
              <div className="signup-form-input-group">
                div.signuo-form-label-
                <label>First Name</label>
                <span style={{ color: "red" }}>*</span>
                <input
                  type="text"
                  placeholder="Enter your First Name"
                  className={getInputClass("firstName")}
                  name="firstName"
                  onChange={inputChangeHandler}
                />
              </div>

              <div className="signup-form-input-group">
                <label>Last Name</label>
                <input
                  type="text"
                  placeholder="Enter your Last Name"
                  className={getInputClass("lastName")}
                  name="lastName"
                  onChange={inputChangeHandler}
                />
              </div>
            </div>

            <div className="signup-form-input-group">
              <label>Email</label>
              <input
                type="email"
                placeholder="Enter your Email"
                className={getInputClass("email")}
                name="email"
                onChange={inputChangeHandler}
              />
            </div>
            <div className="signup-form-group">
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
            </div>

            <div className="signup-form-section-heading">
              Company Information
            </div>
            <div className="signup-form-group">
              <div className="signup-form-input-group">
                <label>Company</label>
                <input
                  type="text"
                  placeholder="Enter your Company"
                  className={getInputClass("company")}
                  name="company"
                  onChange={inputChangeHandler}
                />
              </div>

              <div className="signup-form-input-group">
                <label>ABN</label>
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
                <label>Contact Number</label>
                <input
                  type="tel"
                  placeholder="Enter Contact Number"
                  className={getInputClass("contactNumber")}
                  name="contactNumber"
                  onChange={inputChangeHandler}
                />
              </div>

              <div className="signup-form-input-group">
                <label>Company Email</label>
                <input
                  type="email"
                  placeholder="Enter Company Email"
                  className={getInputClass("companyEmail")}
                  name="companyEmail"
                  onChange={inputChangeHandler}
                />
              </div>
            </div>
            <div className="signup-form-section-heading">
              Address Information
            </div>

            <div className="signup-form-input-group">
              <label>Street Address</label>
              <input
                type="text"
                placeholder="Enter Street Address"
                className={getInputClass("streetAddress")}
                name="streetAddress"
                onChange={inputChangeHandler}
              />
            </div>
            <div className="signup-form-group">
              <div className="signup-form-input-group">
                <label>City</label>
                <input
                  type="text"
                  placeholder="Enter City"
                  className={getInputClass("city")}
                  name="city"
                  onChange={inputChangeHandler}
                />
              </div>

              <div className="signup-form-input-group">
                <label>Province</label>
                <input
                  type="text"
                  placeholder="Enter Province"
                  className={getInputClass("province")}
                  name="province"
                  onChange={inputChangeHandler}
                />
              </div>
            </div>
            <div className="signup-form-group">
              <div className="signup-form-input-group">
                <label>Postal Code</label>
                <input
                  type="text"
                  placeholder="Enter Postal Code"
                  className={getInputClass("postalCode")}
                  name="postalCode"
                  onChange={inputChangeHandler}
                />
              </div>

              <div className="signup-form-input-group">
                <label>Country</label>
                <input
                  type="text"
                  placeholder="Enter Country"
                  className={getInputClass("country")}
                  name="country"
                  onChange={inputChangeHandler}
                />
              </div>
            </div>
            <div id="signup-button-container">
              <button onClick={submitHandler} id="signup-button">
                Submit Message
              </button>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Signup;
