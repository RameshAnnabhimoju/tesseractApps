import "./PrivacyPolicy.css";
import { useMetaTags } from "../../utils/useMetaTags";

const PrivacyPolicy = () => {
  useMetaTags({
    title: "Privacy Policy | Data Protection | TesseractApps Australia",
    description: "TesseractApps privacy policy. Learn how we collect, use, and protect your personal information. Data hosted securely in Australia, compliant with Privacy Act 1988."
  });

  return (
    <div id="privacy-policy-container">
      <div id="privacy-policy-title" className="heading">
        Privacy Policy
      </div>
      <div id="privacy-policy-date" className="text privacy-policy-text">
        Effective Date: 2/10/2024
      </div>

      <div className="text privacy-policy-text">
        Company Name: Tesseract Apps
      </div>
      <div className="text privacy-policy-text">
        Website: https://tesseractapps.com.au/
      </div>
      <div className="text privacy-policy-text">
        Services: NDIS Software Provider, Payroll Companies
      </div>

      <p className="text privacy-policy-text">
        At Tesseract Apps, we are committed to protecting your privacy and
        ensuring the security of your personal information. This Privacy Policy
        outlines how we collect, use, disclose, and safeguard your data when you
        use our website and services. By accessing https://tesseractapps.com.au/
        or utilizing our services, you agree to the practices described in this
        policy.
      </p>

      <div className="heading privacy-policy-heading">
        1. Information We Collect
      </div>
      <div className="subheading privacy-policy-subheading">
        Personal Information:
      </div>
      <ul>
        <li className="text privacy-policy-text">Name</li>
        <li className="text privacy-policy-text">Email address</li>
        <li className="text privacy-policy-text">Phone number</li>
        <li className="text privacy-policy-text">Address</li>
        <li className="text privacy-policy-text">Payment information</li>
        <li className="text privacy-policy-text">
          Other identifiable information that you provide voluntarily
        </li>
      </ul>

      <div className="subheading privacy-policy-subheading">
        Non-Personal Information:
      </div>
      <ul>
        <li className="text privacy-policy-text">Browser type and version</li>
        <li className="text privacy-policy-text">Operating system</li>
        <li className="text privacy-policy-text">
          Pages visited on our website
        </li>
        <li className="text privacy-policy-text">Time and date of visits</li>
        <li className="text privacy-policy-text">IP address</li>
        <li className="text privacy-policy-text">Other technical data</li>
      </ul>

      <div className="heading privacy-policy-heading">
        2. How We Use Your Information
      </div>
      <div className="text privacy-policy-text">
        We use the collected information for various purposes, including:
      </div>
      <ul>
        <li className="text privacy-policy-text">
          Providing and managing our services
        </li>
        <li className="text privacy-policy-text">Processing transactions</li>
        <li className="text privacy-policy-text">
          Improving our website and services
        </li>
        <li className="text privacy-policy-text">
          Communicating with you about updates, offers, and promotions
        </li>
        <li className="text privacy-policy-text">
          Responding to your inquiries and providing customer support
        </li>
        <li className="text privacy-policy-text">
          Analyzing usage trends to enhance user experience
        </li>
        <li className="text privacy-policy-text">
          Complying with legal obligations
        </li>
      </ul>

      <div className="heading privacy-policy-heading">
        3. Sharing Your Information
      </div>
      <div className="text privacy-policy-text">
        We do not sell, trade, or otherwise transfer your personal information
        to outside parties, except in the following circumstances:
      </div>
      <ul>
        <li className="text privacy-policy-text">With your consent</li>
        <li className="text privacy-policy-text">
          To trusted third parties who assist us in operating our website and
          services, as long as they agree to keep your information confidential
        </li>
        <li className="text privacy-policy-text">
          To comply with legal requirements, such as responding to subpoenas,
          court orders, or other legal processes
        </li>
        <li className="text privacy-policy-text">
          To protect our rights, property, or safety, and that of our users or
          others
        </li>
      </ul>

      <div className="heading privacy-policy-heading">4. Data Security</div>
      <div className="text privacy-policy-text">
        We implement a variety of security measures to maintain the safety of
        your personal information. These measures include:
      </div>
      <ul>
        <li className="text privacy-policy-text">
          Using encryption technologies
        </li>
        <li className="text privacy-policy-text">
          Regularly updating our software and security protocols
        </li>
        <li className="text privacy-policy-text">
          Limiting access to personal information to authorized personnel only
        </li>
      </ul>

      <div className="heading privacy-policy-heading">5. Your Rights</div>
      <div className="text privacy-policy-text">You have the right to:</div>
      <ul>
        <li className="text privacy-policy-text">
          Access the personal information we hold about you
        </li>
        <li className="text privacy-policy-text">
          Request the correction of inaccurate or incomplete data
        </li>
        <li className="text privacy-policy-text">
          Request the deletion of your personal information
        </li>
        <li className="text privacy-policy-text">
          Object to the processing of your data
        </li>
        <li className="text privacy-policy-text">
          Withdraw consent at any time
        </li>
      </ul>
      <div className="text privacy-policy-text">
        To exercise these rights, please contact us using the information
        provided below.
      </div>

      <div className="heading privacy-policy-heading">
        6. Cookies and Tracking Technologies
      </div>
      <div className="text privacy-policy-text">
        We use cookies and similar tracking technologies to enhance your
        experience on our website. You can choose to disable cookies through
        your browser settings; however, this may affect your ability to use
        certain features of our site.
      </div>

      <div className="heading privacy-policy-heading">7. Third-Party Links</div>
      <div className="text privacy-policy-text">
        Our website may contain links to third-party websites. We are not
        responsible for the privacy practices of these sites. We encourage you
        to read the privacy policies of any linked websites you visit.
      </div>

      <div className="heading privacy-policy-heading">
        8. Changes to This Privacy Policy
      </div>
      <div className="text privacy-policy-text">
        We may update this Privacy Policy from time to time. Any changes will be
        posted on this page, and the effective date will be updated accordingly.
        We encourage you to review this policy periodically to stay informed
        about how we are protecting your information.
      </div>

      <div className="heading privacy-policy-heading">
        9. Geolocation Privacy Policy
      </div>
      <div className="subheading privacy-policy-subheading">
        I. Collection of Geolocation Data
      </div>
      <div className="text privacy-policy-text">
        To sign in for shifts, geolocation services must be enabled on your
        device. You will only be able to sign in if you are within a 400-meter
        radius of the assigned shift location. Additionally, once signed in,
        your location will be tracked at every 100-meter interval to monitor
        your presence at the location during the shift.
      </div>

      <div className="subheading privacy-policy-subheading">
        II. Purpose of Geolocation Data
      </div>
      <div className="text privacy-policy-text">
        We collect your geolocation data for the following purposes: Verifying
        your proximity to the shift location to enable sign-in. Monitoring your
        location while on shift to ensure compliance and safety. Enhancing
        service functionality, such as providing accurate attendance and shift
        records.
      </div>

      <div className="subheading privacy-policy-subheading">
        III. Your Control Over Geolocation
      </div>
      <div className="text privacy-policy-text">
        You may manage your geolocation settings through your device. However,
        disabling location services will restrict certain features, including
        the ability to sign in for shifts. By using our services with
        geolocation enabled, you consent to the collection and use of your
        location data as outlined.
      </div>

      <div className="subheading privacy-policy-subheading">
        IV. Data Security
      </div>
      <div className="text privacy-policy-text">
        Your location data is encrypted and stored securely, accessible only to
        authorized personnel for the purposes described in this policy. We do
        not share your geolocation data with third parties without your consent,
        except where required by law.
      </div>

      <div className="subheading privacy-policy-subheading">
        V. Data Retention
      </div>
      <div className="text privacy-policy-text">
        Geolocation data is only retained for as long as necessary to fulfill
        its intended purposes, such as verifying shift attendance and
        maintaining accurate records. Once this data is no longer required, it
        is securely deleted. User has the right to request access to, correction
        of, or deletion of their location data.
      </div>

      <div className="subheading privacy-policy-subheading">
        VI. Clear Communication to Users
      </div>
      <div className="text privacy-policy-text">
        It is essential that our app effectively informs users about their data
        privacy. This includes providing straightforward explanations of what
        data is collected, how it is used, and who it is shared with.
        Transparent communication builds trust and ensures users feel secure
        while using the app.
      </div>

      <div className="subheading privacy-policy-subheading">
        VII. Up-to-Date Privacy Policy
      </div>
      <div className="text privacy-policy-text">
        Our app&apos;s privacy policy is regularly reviewed and updated to
        reflect current practices and legal requirements. It clearly outlines
        how location data is collected, used, and stored, ensuring users
        understand the implications of their location data usage. This supports
        compliance maintenance and reassures our users regarding their privacy
        rights.
      </div>

      <div className="subheading privacy-policy-subheading">
        VIII. Location-Based Services (LBS) for Our Application
      </div>
      <div className="text privacy-policy-text">
        Our application incorporates Location-Based Services (LBS) to enhance
        user experience and functionality through the following feature:
        Real-Time Monitoring: Tracks users&apos; locations during shifts to
        ensure compliance and safety.
      </div>

      <div className="heading privacy-policy-heading">10. Contact Us</div>
      <div className="text privacy-policy-text">Tesseract</div>
      <div className="text privacy-policy-text">
        Email: sales@tesseractapps.com
      </div>
      <div className="text privacy-policy-text">Phone: 1300 252 808</div>
      <div className="text privacy-policy-text">
        Address: TesseractApps, Bruce ACT 2617
      </div>
    </div>
  );
};

export default PrivacyPolicy;
