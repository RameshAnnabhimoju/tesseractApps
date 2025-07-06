import { useNavigate } from "react-router-dom";
import { appNavigate } from "../../routes/AppRoutes";
import "./BlogPostStyles.css";

const ManualRosteringBlog = () => {
  const navigate = useNavigate();

  function handleClick(name: string) {
    appNavigate(name, navigate);
  }

  return (
    <div className="blog-container">
      <article className="blog-post">
        <header className="blog-header">
          <h1 className="blog-title">
            Why Manual Rostering Is Costing You More Than You Think
          </h1>
        </header>

        <div className="blog-content">
          <p className="intro-paragraph">
            Many NDIS providers still build rosters by hand — using
            spreadsheets, whiteboards or group chats. It feels simple and
            "free". But the hidden costs add up fast. Every week, managers lose
            hours fixing mistakes. Shifts get double-booked. Overtime blows out
            budgets. Simple slip-ups mean under-claimed hours or overpayments.
            In the end, manual rostering quietly eats away at time, money and
            trust.
          </p>

          <section className="section">
            <h2 className="section-title">The Hidden Costs Add Up</h2>
            <p>
              Manual rostering is not just inefficient — it's expensive in ways
              that often go unseen.
            </p>

            <div className="security-features">
              <div className="security-feature">
                <h3 className="feature-title">
                  Labour Waste and Admin Overhead
                </h3>
                <p>
                  Without an automated system, managers spend{" "}
                  <strong>5-10 hours each week</strong> juggling spreadsheets
                  and phone calls to fill shifts. Small scheduling mistakes
                  snowball into bigger problems: double-booked staff,
                  last-minute overtime or underused hours that inflate payroll.
                </p>
                <p>
                  According to the Productivity Commission, poor rostering is a
                  major factor behind unnecessary casualisation and rising admin
                  costs in the disability workforce. Funds that should go
                  directly to client care are wasted fixing paperwork problems.
                </p>
              </div>

              <div className="security-feature">
                <h3 className="feature-title">Compliance Risks</h3>
                <p>
                  Manual scheduling makes it harder to consistently meet
                  obligations under the SCHADS Award and NDIS Practice
                  Standards. Fair Work rules require rosters to be provided at
                  least seven days in advance, with strict conditions on
                  changes. Static spreadsheets make these easy to miss —
                  exposing providers to disputes, back pay and reputational
                  damage.
                </p>
                <p>
                  The NDIA also expects accurate matching between delivered
                  shifts and funding claims. Paper rosters increase the risk of
                  errors that can trigger audits or clawbacks.
                </p>
              </div>

              <div className="security-feature">
                <h3 className="feature-title">Staff Burnout and Turnover</h3>
                <p>
                  Unpredictable or last-minute shifts frustrate support workers.
                  The NDIS Workforce Census highlights poor rostering as a major
                  driver of staff dissatisfaction — a critical issue when
                  turnover already runs as high as <strong>17%</strong> each
                  year. Every resignation means fresh recruitment costs and lost
                  experience.
                </p>
              </div>
            </div>
          </section>

          <section className="section">
            <h2 className="section-title">Real Risks in Daily Operations</h2>
            <p>These challenges are not hypothetical:</p>

            <div className="breach-list">
              <div className="breach-item">
                <h3 className="breach-title">Fair Work Compliance Issues</h3>
                <p>
                  Fair Work Ombudsman reports show providers struggle to meet
                  compliance when using manual rosters.
                </p>
              </div>

              <div className="breach-item">
                <h3 className="breach-title">Higher Operational Costs</h3>
                <p>
                  A Biarri study found community care organisations using manual
                  scheduling face higher overheads and more unbilled service
                  hours.
                </p>
              </div>

              <div className="breach-item">
                <h3 className="breach-title">Audit Readiness Challenges</h3>
                <p>
                  The NDIA urges providers to keep clear, auditable service
                  records — something spreadsheets often fail to deliver.
                </p>
              </div>
            </div>
          </section>

          <section className="section highlight-section">
            <h2 className="section-title">
              How TesseractApps Removes Hidden Costs
            </h2>
            <p>
              At TesseractApps, we believe your time and funding should go where
              they belong — into better care, not wasted admin. Our smart
              rostering tool, fully included in our platform at no extra cost,
              automates scheduling from end to end.
            </p>

            <div className="security-features">
              <div className="security-feature">
                <h3 className="feature-title">Award-Compliant Rosters</h3>
                <p>
                  Shift allocations, breaks and overtime are handled
                  automatically. Roster changes are managed in real time, with
                  built-in checks to ensure SCHADS and Fair Work compliance
                  every time.
                </p>
              </div>

              <div className="security-feature">
                <h3 className="feature-title">
                  Smarter Matching and Visibility
                </h3>
                <p>
                  Managers see staff availability, skills and preferences at a
                  glance. This reduces last-minute calls, cuts unplanned
                  overtime and keeps your team engaged.
                </p>
              </div>

              <div className="security-feature">
                <h3 className="feature-title">
                  Integrated Timesheets and Claims
                </h3>
                <p>
                  Rosters link directly to timesheets and invoices. There's no
                  risk of losing billable hours or mismatching funding claims —
                  protecting revenue and cash flow.
                </p>
              </div>

              <div className="security-feature">
                <h3 className="feature-title">
                  Work-Life Balance for Your Team
                </h3>
                <p>
                  Clear, predictable rosters build trust. Support workers can
                  see shifts, swap where allowed and plan ahead — all in one
                  place.
                </p>
              </div>
            </div>
          </section>

          <section className="section">
            <h2 className="section-title">Why It Matters</h2>
            <p>
              For disability providers, every hour and dollar matter. Manual
              rostering quietly eats away at both; in ways few can afford to
              ignore.
            </p>
            <p>
              Modernising your scheduling with TesseractApps means saving time,
              safeguarding compliance and protecting the quality of care your
              clients depend on — with no hidden costs.
            </p>
            <p>
              Ready to see the difference?{" "}
              <strong
                id="blog-book-a-demo"
                onClick={() => handleClick("Book a Demo")}
              >
                Book a demo
              </strong>{" "}
              and see how TesseractApps makes rostering simple — and included.
            </p>
          </section>
        </div>
      </article>
    </div>
  );
};

export default ManualRosteringBlog;
