import {
  // useRef,
  useEffect,
  useState,
} from "react";
import "./VideoStyles.css";
// import video from "../../assets/Hero_Video_HD_Preview.mp4";
// import heroImage from "../../assets/videoImage.jpg";
import cubeImage from "../../assets/Cube.svg";
import Checkbook from "../../assets/checkbook.svg";
import FlagCheck from "../../assets/flag_check.svg";
import FolderSupervised from "../../assets/folder_supervised.svg";
import Payments from "../../assets/payments.svg";
import SirenCheck from "../../assets/siren_check.svg";
import StylusNote from "../../assets/stylus_note.svg";
import LabelSpot from "../../assets/labelSpot.svg";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Line from "../lineComponent/LineComponent";
import { appNavigate } from "../../routes/AppRoutes";
import { useNavigate } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);
const VideoComponent = () => {
  const navigate = useNavigate();
  // const videoRef = useRef<HTMLVideoElement | null>(null);
  const [showOverlay, setShowOverlay] = useState(false);

  useEffect(() => {
    setShowOverlay(true);
    // const videoEl = videoRef.current;
    // if (!videoEl) return;

    // const handleLoadedMetadata = () => {
    //   videoEl.currentTime = 3; // Start at 3s
    // };

    // const handleEnded = () => {
    //   setShowOverlay(true); // Trigger overlays
    // };

    // videoEl.addEventListener("loadedmetadata", handleLoadedMetadata);
    // videoEl.addEventListener("ended", handleEnded);

    // return () => {
    //   videoEl.removeEventListener("loadedmetadata", handleLoadedMetadata);
    //   videoEl.removeEventListener("ended", handleEnded);
    // };
  }, []);

  // Handle video playback time vs scroll position

  // useEffect(() => {
  //   const video = videoRef.current;
  //   if (!video) return;

  //   Initially set to starting position
  //   video.currentTime = 3;

  //   const onMetadata = () => {
  //     // Define the full video duration for the scroll
  //     const videoStart = 0;
  //     const videoEnd = video.duration || 10; // fallback duration if not available

  //     ScrollTrigger.create({
  //       trigger: video,
  //       start: "top top",
  //       end: "bottom+=200 top",
  //       scrub: true,
  //       onUpdate: (self) => {
  //         setShowOverlay(false);

  //         if (self.progress === 0) {
  //           setShowOverlay(true);
  //           // When scroll is at the very top, show frame at 3s
  //           video.currentTime = video.duration;
  //         } else {
  //           // Otherwise map the scroll progress to video time from beginning to end
  //           const time = videoStart + self.progress * (videoEnd - videoStart);
  //           if (time > 3) {
  //             video.currentTime = 3;
  //           } else {
  //             video.currentTime = time;
  //           }
  //         }
  //       },
  //       onLeave: () => {
  //         video.pause(); // Pause the video when scrolling out of view
  //       },
  //     });
  //   };

  //   video.addEventListener("loadedmetadata", onMetadata);

  //   return () => {
  //     video.removeEventListener("loadedmetadata", onMetadata);
  //     ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
  //     video.currentTime = 3; // Reset the video time
  //   };
  // }, []);
  const clickHandler = (name: string) => {
    appNavigate(name, navigate);
  };
  return (
    <div className="video-container">
      {/* <video ref={videoRef} width="100%" height="auto" autoPlay muted>
        <source src={video} type="video/mp4" />
        Your browser does not support the video tag.
      </video> */}
      <img src={cubeImage} alt="" id="video-image" />
      {showOverlay && (
        <div className="label-overlay">
          <div
            className="label label-1"
            onClick={() => clickHandler("HR Management")}
          >
            <img
              className="overlay-icon"
              src={FolderSupervised}
              alt="Human Resources icon"
            />{" "}
            Human Resources
          </div>
          <Line
            startX={30}
            startY={30}
            length={15}
            angle={210}
            id="line1"
            className="line"
          />
          <div className="label-spot1">
            <img src={LabelSpot} alt="Label Spot" className="label-spot-img" />
          </div>
          <div
            className="label label-2"
            onClick={() => clickHandler("Roster Management")}
          >
            <img
              className="overlay-icon"
              src={FlagCheck}
              alt="Performance Management icon"
            />{" "}
            Rostering & Scheduling
          </div>
          <Line
            startX={48}
            startY={8}
            length={3}
            angle={290}
            id="line2"
            className="line"
          />
          <div className="label-spot2">
            <img src={LabelSpot} alt="Label Spot" className="label-spot-img" />
          </div>
          <div className="label label-3">
            <img className="overlay-icon" src={Payments} alt="Payroll icon" />{" "}
            Care Management
          </div>
          <Line
            startX={29}
            startY={70}
            length={15}
            angle={215}
            id="line3"
            className="line"
          />
          <div className="label-spot3">
            <img src={LabelSpot} alt="Label Spot" className="label-spot-img" />
          </div>
          <div
            className="label label-4"
            onClick={() => clickHandler("Accounting")}
          >
            <img
              className="overlay-icon"
              src={Checkbook}
              alt="Account Management icon"
            />
            Accounting
          </div>
          <Line
            startX={68}
            startY={32}
            length={12}
            angle={315}
            id="line4"
            className="line"
          />
          <div className="label-spot4">
            <img src={LabelSpot} alt="Label Spot" className="label-spot-img" />
          </div>
          <div
            className="label label-5"
            onClick={() => clickHandler("Incident Management")}
          >
            <img
              className="overlay-icon"
              src={SirenCheck}
              alt="Incident Register icon"
            />{" "}
            Incident Management
          </div>
          <Line
            startX={51}
            startY={81}
            length={8}
            angle={140}
            id="line5"
            className="line"
          />
          <div className="label-spot5">
            <img src={LabelSpot} alt="Label Spot" className="label-spot-img" />
          </div>
          <div className="label label-6" onClick={() => clickHandler("T-sign")}>
            <img className="overlay-icon" src={StylusNote} alt="T Sign icon" />{" "}
            T Sign
          </div>
          <Line
            startX={68}
            startY={64}
            length={12}
            angle={325}
            id="line6"
            className="line"
          />
          <div className="label-spot6">
            <img src={LabelSpot} alt="Label Spot" className="label-spot-img" />
          </div>
        </div>
      )}
    </div>
  );
};

export default VideoComponent;
