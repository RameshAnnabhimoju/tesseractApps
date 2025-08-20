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
        At TesseractApps, we help NDIS providers operate with clarity,
        compliance, and confidence. Here’s a snapshot of our platform’s
        measurable impact across Australia:
      </div>
      <div className="results-cards-container">
        {/* <div className="results-card">
          <div className="results-card-title">#1 in Client Happiness</div>
          <div className="results-card-text">
            Highest rated for ease of use and support among workforce management
            solutions.
          </div>
        </div>
        <div className="results-card">
          <div className="results-card-title">98% Cheers from Readers</div>
          <div className="results-card-text">
            Our community has been raving for it: Workflow automation and a
            great interface.
          </div>
        </div> */}
        {/* <div className="results-card">
          <div className="results-card-title">500+ Active Users</div>
          <div className="results-card-text">
            Supporting thousands of workers, participants, and managers daily —
            streamlining operations at every level.
          </div>
        </div> */}
        <div className="results-card">
          <h2 className="results-card-title">
            2,000+ NDIS Professionals Transformed
          </h2>
          <h3 className="results-card-text">
            Empowering staff and provider teams to work smarter, deliver better
            care, and achieve measurable outcomes every day.
          </h3>
        </div>
        <div className="results-card">
          <h2 className="results-card-title">40% Faster Incident Resolution</h2>
          <h3 className="results-card-text">
            Cases are resolved quicker, alerts are triggered automatically, and
            participants’ safety is consistently improved.
          </h3>
        </div>
        <div className="results-card">
          <h2 className="results-card-title">99.9% Uptime Reliability</h2>
          <h3 className="results-card-text">
            Our Salesforce-powered platform keeps operations running without
            interruption, so teams stay productive, and care remains
            uninterrupted.
          </h3>
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
