import "./RequestADemoStyles.css";
const RequestADemo = () => {
  return (
    <div id="request-demo-container">
      <div className="subheading" id="request-demo-heading">
        Shedule a free demo
      </div>
      <div className="text" id="request-demo-text">
        How can HRLink make your HR headaches disappear? Schedule a free demo
        and get your questions answered.
      </div>
      <div id="request-demo-content">
        <div id="request-demo-texts">
          <div>
            <div id="request-demo-quote">
              "Our favorite things about HRLink are the ewasy-to-use UI and its
              well-fit recruitment features. Their team is also always available
              to help we are in need of support."
            </div>
            <div id="request-demo-quote-author">Jerome Bell</div>
            <div id="request-demo-quote-author-position">
              HR Executiove - PayUp
            </div>
          </div>
          <div id="request-demo-text-bottom">
            HRLink isn't just an HR software; it's a realm of possibilities.
            Explore our extensive features, including recruitment, onboarding,
            HR analytics, and more, tailored to meet your unique needs.
          </div>
        </div>
        <div id="request-demo-form">
          <div id="request-demo-name">
            <div
              id="request-demo-first-name"
              className="request-demo-form-element"
            >
              <label htmlFor="firstName">First Name*</label>
              <input
                type="text"
                id="firstName"
                placeholder="First name"
                className="request-demo-input"
              />
            </div>
            <div
              id="request-demo-last-name"
              className="request-demo-form-element"
            >
              <label htmlFor="lastName">Last name*</label>
              <input
                type="text"
                id="lastName"
                placeholder="Last name"
                className="request-demo-input"
              />
            </div>
          </div>
          <div id="request-demo-email" className="request-demo-form-element">
            <label htmlFor="email">Work email*</label>
            <input
              type="text"
              id="email"
              placeholder="Work email"
              className="request-demo-input"
            />
          </div>
          <div id="request-demo-occupation">
            <div
              id="request-demo-comapnySize"
              className="request-demo-form-element"
            >
              <label htmlFor="companySize">Company Size*</label>
              <select className="request-demo-select" required>
                <option value="">Company Size</option>
                <option>10</option>
                <option>20</option>
              </select>
            </div>
            <div
              id="request-demo-industry"
              className="request-demo-form-element"
            >
              <label htmlFor="industry">Industry*</label>
              <select className="request-demo-select" required>
                <option value="">Your company industry</option>
                <option>Medical</option>
                <option>Software</option>
              </select>
            </div>
          </div>
          <div id="primaryChallenge" className="request-demo-form-element">
            <label htmlFor="primaryChallenge">
              Primary challenge which want to solve with HR software*
            </label>
            <select className="request-demo-select" required>
              <option value="">Select</option>
              <option>Medical</option>
              <option>Software</option>
            </select>
          </div>
          <div id="whenRollOut" className="request-demo-form-element">
            <label htmlFor="whenRollOut">
              When do yoy want to roll out an HR System*
            </label>
            <select className="request-demo-select" required>
              <option value="">Select</option>
              <option>Medical</option>
              <option>Software</option>
            </select>
          </div>
          <button id="request-demo-button">Get Free Demo</button>
        </div>
      </div>
    </div>
  );
};

export default RequestADemo;
