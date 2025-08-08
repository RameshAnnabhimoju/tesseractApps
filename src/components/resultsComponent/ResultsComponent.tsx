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
        </div>
        {/* <div className="results-card">
          <div className="results-card-title">500+ Active Users</div>
          <div className="results-card-text">
            Supporting thousands of workers, participants, and managers daily —
            streamlining operations at every level.
          </div>
        </div> */}
        <div className="results-card">
          <div className="results-card-title">50+ NDIS Providers converted</div>
          <div className="results-card-text">
            From startups to national networks, TesseractApps grows as your
            grow.
          </div>
        </div>
        <div className="results-card">
          <div className="results-card-title">
            40% Faster Resolution of Incidents
          </div>
          <div className="results-card-text">
            Log events as you please, generate corresponding alerts, and solve
            cases more quickly than ever.
          </div>
        </div>
        <div className="results-card">
          <div className="results-card-title">99.9% Uptime Guarantee</div>
          <div className="results-card-text">
            Built on Salesforce, our platform is rock-solid reliable and
            constantly updated, so you are always ready to drive your mission
            forward.
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
