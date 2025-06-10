import "./ResultsStyles.css";

const ResultsComponent = () => {
  return (
    <div id="results-container">
      <div className="heading">OUR RESULTS</div>
      <div className="subheading">Our best results for the year!</div>
      <div className="text results-cards-text">
        Empowering Providers. Simplifying Care. Driving Real Outcomes.
      </div>
      <div className="text results-cards-text2">
        At Tesseract Apps, we are committed to helping NDIS care providers and
        IT businesses operate with greater clarity, compliance, and confidence.
        Here’s a snapshot of our platform’s measurable impact across Australia.
      </div>
      <div className="results-cards-container">
        <div className="results-card">
          <div className="results-card-title">#1 in Client Satisfaction</div>
          <div className="results-card-text">
            Among integrated NDIS and workforce platforms — thanks to intuitive
            design, fast support, and continuous improvement.
          </div>
        </div>
        <div className="results-card">
          <div className="results-card-title">98% Positive Feedback</div>
          <div className="results-card-text">
            From users who value our seamless user experience, performance, and
            automation across HR, payroll, and compliance
          </div>
          x
        </div>
        <div className="results-card">
          <div className="results-card-title">500+ Active Users</div>
          <div className="results-card-text">
            Supporting thousands of workers, participants, and managers daily —
            streamlining operations at every level.
          </div>
        </div>
        {/* <div className="results-card">
          <div className="results-card-title">2,500+</div>
          <div className="results-card-text">
            Active Users managing participants, staff, and compliance daily
          </div>
        </div> */}
        {/* <div className="results-card">
          <div className="results-card-title">
            350+ NDIS Providers Onboarded
          </div>
          <div className="results-card-text">
            From small teams to large care organisations, TesseractApps scales
            with your business as you grow.
          </div>
        </div> */}
        <div className="results-card">
          <div className="results-card-title">Support in Under 30s</div>
          <div className="results-card-text">
            By a responsive support team that understands your urgency,
            delivering fast help.
          </div>
        </div>
        <div className="results-card">
          <div className="results-card-title">
            40% Faster Incident Reporting
          </div>
          <div className="results-card-text">
            Thanks to real-time mobile logs, auto-alerts, and compliance
            dashboards — improving oversight and response times.
          </div>
        </div>
        <div className="results-card">
          <div className="results-card-title">99.9% Platform Uptime</div>
          <div className="results-card-text">
            Reliability you can count on. Always-on access across desktop and
            mobile — built on Salesforce infrastructure
          </div>
        </div>
        {/* <div className="results-card">
          <div className="results-card-title">40%</div>
          <div className="results-card-text">
            Faster Incident Reporting, improving compliance response times
          </div>
        </div>
        <div className="results-card">
          <div className="results-card-title">99.9%</div>
          <div className="results-card-text">
            Platform Uptime, ensuring always-on access for teams across
            Australia
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default ResultsComponent;
