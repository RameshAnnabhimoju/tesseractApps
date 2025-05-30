import "./RequestADemoStyles.css";
const RequestADemo = () => {
  return (
    <div id="request-demo-container">
      <div className="subheading" id="request-demo-heading">
        Request Your Demo
      </div>
      <div className="text" id="request-demo-text">
        Please complete the form below to get started. Our team will be in touch
        within one business day.
      </div>
      <div id="request-demo-content">
        <div id="request-demo-texts">
          <div id="request-demo-upper">
            <div className="request-demo-title">Head Office:</div>
            <div className="request-demo-description">
              TesseractApps <br />
              Canberra, ACT, Australia
            </div>
            <div className="request-demo-title">Phone:</div>
            <div className="request-demo-description">
              1300 252 808 <br />
              02 6133 2800
            </div>
            <div className="request-demo-title">Email:</div>
            <div className="request-demo-description">
              enquiries@tesseractapps.com
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
          <form className="request-demo-form">
            <div
              id="request-demo-full-name"
              className="request-demo-form-element"
            >
              <label htmlFor="fullName">Full Name*</label>
              <input
                type="text"
                id="fullName"
                placeholder="Full name"
                className="request-demo-input"
              />
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
                  placeholder="Email address"
                  className="request-demo-input"
                />
              </div>

              <div
                id="request-demo-phone"
                className="request-demo-form-element"
              >
                <label htmlFor="phone">Phone Number*</label>
                <input
                  type="tel"
                  id="phone"
                  placeholder="Phone number"
                  className="request-demo-input"
                />
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
                placeholder="Organisation"
                className="request-demo-input"
              />
            </div>
            <div id="request-demo-role" className="request-demo-form-element">
              <label htmlFor="role">Your Role*</label>
              <input
                type="text"
                id="role"
                placeholder="Your role"
                className="request-demo-input"
              />
            </div>
            <div className="request-demo-input-group">
              <div
                id="request-demo-areas"
                className="request-demo-form-element"
              >
                <label htmlFor="areas">Areas You’re Interested In*</label>
                <select id="areas" className="request-demo-input">
                  <option value="">-- Select an option --</option>
                  <option value="scheduling">Scheduling</option>
                  <option value="payroll">Payroll</option>
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
                  placeholder="e.g. Monday 10 AM"
                  className="request-demo-input"
                />
              </div>
            </div>
            <button id="request-demo-button" type="submit">
              Submit Request
            </button>
            <p id="request-demo-form-subtext">
              By signing up you agree to our Privacy Policy
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RequestADemo;
