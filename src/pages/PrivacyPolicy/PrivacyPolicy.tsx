import "./PrivacyPolicy.css";

const PrivacyPolicy = () => {
  return (
    <div id="privacy-policy-container">
      <div id="privacy-policy-title" className="heading">
        Privacy Policy
      </div>
      <div id="privacy-policy-date" className="text privacy-policy-text">
        Effective Date: 30 July 2025
      </div>
      <p className="text privacy-policy-text">
        At TesseractApps, we take privacy and data protection seriously. This
        Privacy Policy outlines how we collect, use, store, and share your
        information in line with the Privacy Act 1988 (Cth) and the Australian
        Privacy Principles (APPs).
      </p>
      <div className="heading  privacy-policy-heading">
        1. Information We Collect
      </div>
      <div className="subheading  privacy-policy-subheading">
        Upon sign-up or trial access, we may collect:
      </div>
      <ul>
        <li className="text privacy-policy-text">
          Your name, company name, contact details (email, phone).{" "}
        </li>
        <li className="text privacy-policy-text">
          Organisational details for NDIS operations.{" "}
        </li>
        <li className="text privacy-policy-text">
          Usage analytics to improve service performance.{" "}
        </li>
      </ul>

      <div className="heading privacy-policy-heading">
        2. How We Use Your Information
      </div>
      <ul>
        <li className="text privacy-policy-text">
          To provide access to our platform and its features.
        </li>
        <li className="text privacy-policy-text">
          To communicate with you regarding updates, service changes, or
          support.
        </li>
        <li className="text privacy-policy-text">
          To enhance the security, reliability, and efficiency of our software.
        </li>
      </ul>

      <div className="heading privacy-policy-heading">
        3. Data Storage & Security
      </div>
      <ul>
        <li className="text privacy-policy-text">
          All data is securely hosted on Australian-based servers.
        </li>
        <li className="text privacy-policy-text">
          We implement encryption, access control, and monitoring systems to
          protect your data.
        </li>
      </ul>

      <div className="heading privacy-policy-heading">
        4. Disclosure of Personal Information
      </div>
      <div className="subheading privacy-policy-subheading">
        We do <strong>not</strong> sell or rent your personal information.
        Disclosure is only made:
      </div>
      <ul>
        <li className="text privacy-policy-text">With your consent.</li>
        <li className="text privacy-policy-text">
          If required by law or regulation (e.g. NDIS audits).
        </li>
        <li className="text privacy-policy-text">
          To trusted service providers under strict confidentiality agreements.
        </li>
      </ul>

      <div className="heading privacy-policy-heading">5. Your Rights</div>
      <div className="subheading privacy-policy-subheading">You may:</div>
      <ul>
        <li className="text privacy-policy-text">
          Request access to your data.
        </li>
        <li className="text privacy-policy-text">Correct inaccuracies.</li>
        <li className="text privacy-policy-text">
          Request deletion of your account data (subject to regulatory
          obligations).
        </li>
      </ul>
      <div className="text privacy-policy-text">
        Contact us at: sales@tesseractapps.com.au 1300 252 808
      </div>

      <div className="heading privacy-policy-heading">
        6. Cookies and Analytics
      </div>
      <div className="text privacy-policy-text">
        We use cookies to enhance user experience and collect anonymised
        analytics. You can manage cookie settings through your browser.
      </div>

      <div className="heading privacy-policy-heading">
        7. Updates to This Policy
      </div>
      <div className="text privacy-policy-text">
        We may update this policy to reflect operational, legal, or regulatory
        changes. All updates will be posted on this page and, where appropriate,
        notified via email.
      </div>
    </div>
  );
};

export default PrivacyPolicy;
