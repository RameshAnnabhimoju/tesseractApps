import "./ResultsStyles.css";

const ResultsComponent = () => {
  return (
    <div id="results-container">
      <div className="heading">OUR RESULTS</div>
      <div className="subheading">Our best results for the year</div>
      <div className="text results-cards-text">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere vitae
        tenetur impedit? Voluptatem hic ut nam.
      </div>
      <div className="results-cards-container">
        <div className="results-card">
          <div className="results-card-title">No. 1</div>
          <div className="results-card-text">CREDIT RATING</div>
        </div>
        <div className="results-card">
          <div className="results-card-title">0.95%</div>
          <div className="results-card-text">CLASSIFIED LOAN PORTFOLIO</div>
        </div>
        <div className="results-card">
          <div className="results-card-title">388.5%</div>
          <div className="results-card-text">CLASSIFIED LOAN COVERAGE</div>
        </div>
        <div className="results-card">
          <div className="results-card-title">50.4 bn</div>
          <div className="results-card-text">DEPPOSIT</div>
        </div>
        <div className="results-card">
          <div className="results-card-title">8.5 bn</div>
          <div className="results-card-text">Market Capitalization</div>
        </div>
        <div />
        <div className="results-card">
          <div className="results-card-title">6.1 bn</div>
          <div className="results-card-text">Shareholders equity</div>
        </div>
        <div className="results-card">
          <div className="results-card-title">18.51%</div>
          <div className="results-card-text">Capital Adequacy Ratio</div>
        </div>
        <div className="results-card">
          <div className="results-card-title">8.5 bn</div>
          <div className="results-card-text">Market Capitalization</div>
        </div>
      </div>
    </div>
  );
};

export default ResultsComponent;
