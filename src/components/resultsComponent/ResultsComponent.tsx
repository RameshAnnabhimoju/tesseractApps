import "./ResultsStyles.css";

const ResultsComponent = () => {
  return (
    <div id="results-container">
      <div className="heading">OUR RESULTS</div>
      <div className="subheading">Our best results for the year</div>
      <div className="text results-cards-text">
        Empowering Providers. Simplifying Care. Driving Real Outcomes.
      </div>
      <div className="text results-cards-text2">
        At TesseractApps, we take pride in supporting care providers with smart,
        secure, and scalable tools. Here’s a snapshot of our platform’s impact:
      </div>
      <div className="results-cards-container">
        <div className="results-card">
          <div className="results-card-title">No. 1</div>
          <div className="results-card-text">
            Client Satisfaction among integrated NDIS and care platforms
          </div>
        </div>
        <div className="results-card">
          <div className="results-card-title">98%</div>
          <div className="results-card-text">
            Positive Feedback from customers on usability, performance, and
            support
          </div>
        </div>
        <div className="results-card">
          <div className="results-card-title">50,000+</div>
          <div className="results-card-text">
            Payroll Transactions processed accurately and on time
          </div>
        </div>
        <div className="results-card">
          <div className="results-card-title">2,500+</div>
          <div className="results-card-text">
            Active Users managing participants, staff, and compliance daily
          </div>
        </div>
        <div className="results-card">
          <div className="results-card-title">350+</div>
          <div className="results-card-text">
            NDIS Providers Onboarded and operating more efficiently
          </div>
        </div>
        <div className="results-card">
          <div className="results-card-title">12,000+</div>
          <div className="results-card-text">
            Digital Signatures completed through T-Sign
          </div>
        </div>
        <div className="results-card">
          <div className="results-card-title">$20M+</div>
          <div className="results-card-text">
            in Claims Processed with reduced delays and errors
          </div>
        </div>
        <div className="results-card">
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
        </div>
      </div>
    </div>
  );
};

export default ResultsComponent;
