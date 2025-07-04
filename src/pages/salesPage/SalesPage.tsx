import "./SalesPageStyles.css";
import { sendEmail } from "../../services/AppService";
import { useState } from "react";
type demoFormType = {
  fullName: string;
  email: string;
  phone: string;
  organisation: string;
  role: string;
  areas: string;
  preferredTime: string;
};
const demoFormInitialState: demoFormType = {
  fullName: "",
  email: "",
  phone: "",
  organisation: "",
  role: "",
  areas: "",
  preferredTime: "",
};
const demoFormErrorState: demoFormType = {
  fullName: "Required",
  email: "Required",
  phone: "Required",
  organisation: "Required",
  role: "Required",
  areas: "Required",
  preferredTime: "Required",
};
const SalesPage = () => {
  const [formData, setFormData] = useState(demoFormInitialState);
  const [formErrors, setFormErrors] = useState(demoFormInitialState);
  const [checkbox, setCheckbox] = useState(false);
  function handleCheckboxChange() {
    setCheckbox(!checkbox);
  }
  function handleInputChange(
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) {
    const { name, value } = event.target;
    console.log("Input changed:", name, value);
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  }
  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    // Here you would typically handle form submission, e.g., send data to a server
    console.log("Form submitted:", formData);

    if (!checkbox) {
      alert("Please agree to the Privacy Policy before submitting.");
      return;
    }

    // Validate all required fields
    const requiredFields = [
      "fullName",
      "email",
      "phone",
      "organisation",
      "role",
      "areas",
      "preferredTime",
    ];

    const errors: Partial<demoFormType> = {};
    let hasError = false;

    for (const field of requiredFields) {
      if (!formData[field as keyof demoFormType]) {
        errors[field as keyof demoFormType] =
          demoFormErrorState[field as keyof demoFormType];
        hasError = true;
      } else {
        errors[field as keyof demoFormType] = "";
      }
    }

    setFormErrors((prev) => ({
      ...prev,
      ...errors,
    }));

    if (hasError) {
      return;
    }

    if (!hasError && checkbox) {
      sendEmail(
        formData.email,
        "Demo Request",
        `${formData.fullName} has requested a demo.\n
            Full Name: ${formData.fullName}\n
            Email: ${formData.email}\n
            Phone: ${formData.phone}\n
            Organisation: ${formData.organisation}\n
            Role: ${formData.role}\n
            Areas of Interest: ${formData.areas}\n
            Preferred Time: ${formData.preferredTime}
            `
      )
        .then((response) => {
          console.log("Email sent successfully:", response);
          alert("Thank you for your request! We will be in touch soon.");
        })
        .catch((error) => {
          console.error("Error sending email:", error);
          alert(
            "There was an error sending your request. Please try again later."
          );
        });
    }

    // Reset the form after submission
    // setFormData(demoFormInitialState);
  }
  return (
    <div id="request-demo-container">
      <div className="heading">Try for free</div>

      <div id="request-demo-content">
        <div id="request-demo-texts">
          <div id="request-demo-upper">
            <div className="request-demo-title">Contact Sales:</div>
            <div className="request-demo-description">
              Call us:: ‪+61261332818‬ <br />
              Available: Mon - Fri, 9:00 AM to 5:30 PM
            </div>
            <div className="request-demo-title">Or Email:</div>
            <div className="request-demo-description">
              sales@tesseractapps.com
            </div>
          </div>
          <div id="request-demo-lower">
            <div className="request-demo-title">Not Ready to Talk Yet?</div>
            <div className="request-demo-description">
              You can start a free trial or get in touch with our team for more
              information.
            </div>
          </div>
        </div>
        <div id="request-demo-form">
          <form className="request-demo-form" onSubmit={handleSubmit}>
            <div
              id="request-demo-full-name"
              className="request-demo-form-element"
            >
              <label htmlFor="fullName">Full Name*</label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                placeholder="Full name"
                className={
                  "request-demo-input " + (formErrors.fullName ? "error" : "")
                }
                value={formData.fullName}
                onChange={handleInputChange}
              />
              {/* <div className="error-text">{formErrors.fullName}</div> */}
            </div>
            <div className="request-demo-input-group">
              <div
                id="request-demo-email"
                className="request-demo-form-element"
              >
                <label htmlFor="email">Email Address*</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  autoComplete="email"
                  placeholder="Email address"
                  className={
                    "request-demo-input " + (formErrors.email ? "error" : "")
                  }
                  value={formData.email}
                  onChange={handleInputChange}
                />
                {/* <div className="error-text">{formErrors.email}</div> */}
              </div>

              <div
                id="request-demo-phone"
                className="request-demo-form-element"
              >
                <label htmlFor="phone">Phone Number*</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  autoComplete="tel"
                  placeholder="Phone number"
                  className={
                    "request-demo-input " + (formErrors.phone ? "error" : "")
                  }
                  value={formData.phone}
                  onChange={handleInputChange}
                />
                {/* <div className="error-text">{formErrors.phone}</div> */}
              </div>
            </div>
            <div
              id="request-demo-organisation"
              className="request-demo-form-element"
            >
              <label htmlFor="organisation">Organisation*</label>
              <input
                type="text"
                id="organisation"
                name="organisation"
                autoComplete="organization"
                placeholder="Organisation"
                className={
                  "request-demo-input " +
                  (formErrors.organisation ? "error" : "")
                }
                value={formData.organisation}
                onChange={handleInputChange}
              />
              {/* <div className="error-text">{formErrors.organisation}</div> */}
            </div>
            <div id="request-demo-role" className="request-demo-form-element">
              <label htmlFor="role">Your Role*</label>
              <input
                type="text"
                id="role"
                name="role"
                autoComplete="role"
                placeholder="Your role"
                className={
                  "request-demo-input " + (formErrors.role ? "error" : "")
                }
                value={formData.role}
                onChange={handleInputChange}
              />
              {/* <div className="error-text">{formErrors.role}</div> */}
            </div>
            <div className="request-demo-input-group">
              <div
                id="request-demo-areas"
                className="request-demo-form-element"
              >
                <label htmlFor="areas">Areas You’re Interested In*</label>
                {/* <div className="error-text">{formErrors.areas}</div> */}
                <select
                  id="areas"
                  className={
                    "request-demo-input " + (formErrors.areas ? "error" : "")
                  }
                  name="areas"
                  onChange={handleInputChange}
                >
                  <option value="">-- Select an option --</option>
                  <option value="scheduling">Scheduling</option>
                  <option value="payroll">Accounting</option>
                  <option value="hr">HR</option>
                  <option value="ndis">NDIS Features</option>
                </select>
              </div>

              <div
                id="request-demo-preferred-time"
                className="request-demo-form-element"
              >
                <label htmlFor="preferredTime">Preferred Demo Time*</label>
                <input
                  type="time"
                  id="preferredTime"
                  name="preferredTime"
                  autoComplete="time"
                  placeholder="e.g. Monday 10 AM"
                  className={
                    "request-demo-input " +
                    (formErrors.preferredTime ? "error" : "")
                  }
                  value={formData.preferredTime}
                  onChange={handleInputChange}
                />
                {/* <div className="error-text">{formErrors.preferredTime}</div> */}
              </div>
            </div>
            <button id="request-demo-button" type="submit">
              Submit Request
            </button>
            <div id="request-demo-form-subtext">
              <input
                type="checkbox"
                name="agree-checkbox"
                id="request-demo-agree-checkbox"
                className="request-demo-checkbox"
                checked={checkbox}
                onChange={handleCheckboxChange}
              />
              <p>By signing up you agree to our Privacy Policy</p>
              {/* <div className="error-text">{formErrors.agreeCheckbox}</div> */}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SalesPage;
