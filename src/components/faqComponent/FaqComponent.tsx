import "./FaqStyles.css";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import ArrowDown from "../../assets/arrow_down.svg";
const FaqComponent = () => {
  const [expanded, setExpanded] = useState(-1);

  const handleExpansion = (index: number) => {
    setExpanded((prevExpanded) => {
      if (prevExpanded === index) {
        return -1; // Collapse the currently expanded item
      } else {
        return index; // Expand the clicked item
      }
    });
  };
  const accordiaDummyData = [
    {
      id: 1,
      question: "What is Lorem Ipsum?",
      answer:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
      id: 2,
      question: "Why do we use it?",
      answer:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    },
    {
      id: 3,
      question: "Where does it come from?",
      answer:
        "Contrary to popular belief, Lorem Ipsum is not simply random text.",
    },
    {
      id: 4,
      question: "Where can I get some?",
      answer: "There are many variations of passages of Lorem Ipsum available.",
    },
    {
      id: 5,
      question: "Where can I get some?",
      answer: "There are many variations of passages of Lorem Ipsum available.",
    },
  ];
  return (
    <div id="faq-container">
      <div className="heading">FAQ's</div>
      <div className="subheading">Frequently Asked Questions</div>
      <div className="text" id="faq-text">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex optio
        magnam voluptates nulla!
      </div>
      <div id="accordian-container">
        {accordiaDummyData.map((data, index) => {
          return (
            <Accordion
              key={data.id}
              className="faq-accordian"
              elevation={0}
              square
              expanded={expanded === index}
              onChange={() => handleExpansion(index)}
              sx={{
                backgroundColor: "#eaeaea",
                marginBottom: "5px",
              }}
            >
              <AccordionSummary
                expandIcon={<img src={ArrowDown} alt="arrow" />}
              >
                <Typography
                  sx={{ fontSize: "26px", fontWeight: 600 }}
                  component="span"
                >
                  {data.question}
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography sx={{ fontSize: "18px", fontWeight: 400 }}>
                  {data.answer}
                </Typography>
              </AccordionDetails>
            </Accordion>
          );
        })}
      </div>
    </div>
  );
};
export default FaqComponent;
