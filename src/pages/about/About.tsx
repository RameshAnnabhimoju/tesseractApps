import "./About.css";
import aboutOurCompanyImage from "../../assets/about-our-company.png";
import aboutOurTeamImage from "../../assets/about-team-image.png";
import RevanthImage from "../../assets/REVANTH-CEO.png";
import sureshImage from "../../assets/SURESH-COFOUNDER.png";
import KranthiImage from "../../assets/KRANTHI KAKKERLA - CO FOUNDER.jpg";
import NagendraImage from "../../assets/NAGENDRA - CO FOUNDER.jpg";
import sumanthImage from "../../assets/SUMANTH-COFOUNDER.png";
import ContactInformationCard from "../../components/contactInformationCard/ContactInformationCard";
const About = () => {
  return (
    <div id="about-container">
      <div id="about-our-comapany-container">
        <img
          src={aboutOurCompanyImage}
          alt="about our company"
          id="about-our-comapany-image"
        />
        <div id="about-our-comapany-text-container">
          <div id="about-our-company-heading">Our Company</div>
          <div id="about-our-company-text">
            TesseractApps started in 2022 from a conversation that revealed
            common frustrations in care management and NDIS compliance. <br />
            <br />
            In 2023, we built our platform with input from real care providers.
            We tested features in actual workflows, refined processes, and
            removed unnecessary complexity. <br />
            <br />
            By mid-2024, T-NDIS beta launched. Providers gave feedback that
            shaped the system for day-to-day operations. <br />
            <br />
            In January 2025, TesseractApps became fully operational and ready
            for the market. <br />
            <br />
            Today, TesseractApps offers a Salesforce-based platform that helps
            you save time, reduce errors, and stay compliant. You manage staff,
            participants, and services in one place, track operations in real
            time, and focus on delivering quality care instead of managing
            paperwork. Every feature reflects what care providers need to run
            their services efficiently and confidently. <br />
            <br />
          </div>
        </div>
      </div>
      <div id="about-vision-mission-container">
        <div id="about-vision-container" className="about-vision-mission">
          <div className="about-vision-mission-heading">Our Mission</div>
          <div className="about-vision-mission-text">
            To empower businesses worldwide with innovative, role-specific
            people management software that is accessible across industries,
            enabling streamlined operations and enhanced productivity.
          </div>
        </div>
        <div id="about-mission-container" className="about-vision-mission">
          <div className="about-vision-mission-heading">Our Vision</div>
          <div className="about-vision-mission-text">
            To revolutionise the future of business management, fostering
            collaboration, efficiency, and growth through technology that adapts
            to the ever-changing needs of industries and their people.
          </div>
        </div>
      </div>
      <div id="about-our-team-container">
        <div id="about-our-team-heading">
          From concept to code, we craft high-performance solutions that push
          businesses beyond limits.
        </div>
        <div id="about-our-team-text">
          Tesseractapps is where technology meets purpose. From NDIS and ICT
          applications to HR and Accounting operations, we design, develop, and
          deliver custom solutions that help businesses achieve their goals with
          precision and innovation.
        </div>
        <div id="about-our-team-title">Our Team</div>
        <img
          src={aboutOurTeamImage}
          alt="about our team"
          id="about-our-team-image"
        />
        <div id="about-image-overlay-container">
          <div id="about-image-overlay-heading">
            The people behind the platform.
          </div>
          <div id="about-image-overlay-text">
            Tesseract Apps is led by a diverse team of technologists, product
            specialists, and industry experts committed to solving real-world
            challenges. Their collective experience in workforce management,
            compliance, and innovative technology ensures that our solutions
            stay ahead of the curve.
          </div>
          <div id="about-image-overlay-links-container">
            <div className="about-image-overlay-link">Team</div>
            <div className="about-image-overlay-link">Event 1</div>
            <div className="about-image-overlay-link">Event 2</div>
            <div className="about-image-overlay-link">Event 3</div>
            <div className="about-image-overlay-link">Event 4</div>
            <div className="about-image-overlay-link">Event 5</div>
            <div className="about-image-overlay-link">Event 6</div>
            <div className="about-image-overlay-link">Event 7</div>
          </div>
        </div>
      </div>
      <div id="about-team-images-container">
        <div id="about-team-image-Heading">Management</div>
        <div id="about-team-images-line" />
      </div>
      <div id="about-team-images">
        <div className="about-team-image-card">
          <img
            src={RevanthImage}
            alt="Revanth Image"
            className="about-team-image-card-image"
          />
          <div className="about-team-image-card-text">
            <div className="about-team-image-card-name">Revanth</div>
            <div className="about-team-image-card-designation">
              Founder & CEO
            </div>
          </div>
        </div>

        <div className="about-team-image-card">
          <img
            src={KranthiImage}
            alt="Revanth Image"
            className="about-team-image-card-image"
          />
          <div className="about-team-image-card-text">
            <div className="about-team-image-card-name">Kranthi</div>
            <div className="about-team-image-card-designation">Co Founder</div>
          </div>
        </div>

        <div className="about-team-image-card">
          <img
            src={NagendraImage}
            alt="Nagendra Image"
            className="about-team-image-card-image"
          />
          <div className="about-team-image-card-text">
            <div className="about-team-image-card-name">Nagendra</div>
            <div className="about-team-image-card-designation">Co Founder</div>
          </div>
        </div>

        <div className="about-team-image-card">
          <img
            src={sumanthImage}
            alt="Sumanth Image"
            className="about-team-image-card-image"
          />
          <div className="about-team-image-card-text">
            <div className="about-team-image-card-name">Sumanth</div>
            <div className="about-team-image-card-designation">Co Founder</div>
          </div>
        </div>

        <div className="about-team-image-card">
          <img
            src={sureshImage}
            alt="Suresh Image"
            className="about-team-image-card-image"
          />
          <div className="about-team-image-card-text">
            <div className="about-team-image-card-name">Suresh</div>
            <div className="about-team-image-card-designation">Co Founder</div>
          </div>
        </div>
      </div>
      <div id="about-careers-container">
        <div id="about-careers-heading">Are You Looking for opportunity ? </div>
        <div id="about-careers-text">
          TesseractApps is building the future of care and workforce technology.
          We are growing quickly and looking for people who are passionate about
          creating practical solutions that make a difference for providers and
          participants. Our team values innovation, collaboration, and a strong
          focus on user needs.
        </div>
        <div id="about-careers-text">Current Openings: None</div>
        {/* <button id="about-careers-button">Send your resume</button> */}
      </div>
      <div id="about-contact-us-container">
        <div id="about-contact-us-heading">Contact Us</div>
        <div id="about-contact-us-text">
          Whether you want to learn more about our platform or need support, our
          team is here to help.
        </div>
        <ContactInformationCard />
      </div>
    </div>
  );
};

export default About;
