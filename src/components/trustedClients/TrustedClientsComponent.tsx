import "./TrustedClientsStyles.css";
// import company1 from "../../assets/company-1.webp";
import company2 from "../../assets/company-2.webp";
// import company3 from "../../assets/company-3.webp";
import company4 from "../../assets/company-4.webp";
import company5 from "../../assets/company-5.webp";
// import company6 from "../../assets/company-6.webp";
// import company7 from "../../assets/company-7.webp";
import company8 from "../../assets/ANA Logo.webp";
import company9 from "../../assets/FRAMILY VENTURES Final.webp";
import company10 from "../../assets/PINNACLE Final.webp";
import company13 from "../../assets/logo13.webp";
import company14 from "../../assets/NEXUS Final.webp";
// import company15 from "../../assets/Bright Path Psychosocial & disability Services Pty Ltd.webp";
import company16 from "../../assets/Blessing Care and Support Pty Ltd.webp";
import company17 from "../../assets/Clear Choice Clinic Pty Ltd.webp";
// import company18 from "../../assets/I've Got You Empowerment Pty Ltd.webp";
import company19 from "../../assets/ImprovedAbility.webp";
import company20 from "../../assets/RCG-Logo_2[12038376].webp";
import company21 from "../../assets/Company-YDCS-.webp";
// import company19 from "../../assets/Aussie Care Health Services Pty Ltd.webp";

import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

const TrustedClientsComponent = () => {
  const companiesImages = [
    // company1,
    company2,
    company10,
    company13,
    company4,
    company5,
    // company7,
    company8,
    company9,
    company14,
    // company15,
    company16,
    company17,
    // company18,
    company19,
    company20,
    company21,
  ];

  const animation = { duration: 20000, easing: (t: number) => t };

  const [sliderRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    renderMode: "performance",
    drag: false,
    slides: {
      perView: 2,
      spacing: 30,
    },
    breakpoints: {
      "(min-width: 640px)": {
        slides: { perView: 3, spacing: 30 },
      },
      "(min-width: 768px)": {
        slides: { perView: 4, spacing: 40 },
      },
      "(min-width: 1024px)": {
        slides: { perView: 5, spacing: 50 },
      },
      "(min-width: 1280px)": {
        slides: { perView: 6, spacing: 60 },
      },
    },
    created(s) {
      s.moveToIdx(5, true, animation);
    },
    updated(s) {
      s.moveToIdx(s.track.details.abs + 5, true, animation);
    },
    animationEnded(s) {
      s.moveToIdx(s.track.details.abs + 5, true, animation);
    },
  });

  return (
    <div id="trusted-clients-container">
      <div className="heading trusted-clients-heading">
        Our Most <br /> Trusted Clients
      </div>
      <div ref={sliderRef} className="keen-slider clients-swiper">
        {companiesImages.map((logo, index) => (
          <div key={index} className="keen-slider__slide">
            <img loading="lazy"
              src={logo}
              alt={`Client logo ${index + 1}`}
              className="clients-slider-image"
              
              decoding="async"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrustedClientsComponent;
