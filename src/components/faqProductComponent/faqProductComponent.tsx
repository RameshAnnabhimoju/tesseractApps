import Accordion from "@mui/material/Accordion";
import "./faqProductStyles.css";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import AccordionDetails from "@mui/material/AccordionDetails";
import { useState } from "react";
import ArrowDown from "../../assets/arrow_down.svg";
interface faqProductionTypes {
  data: {
    question: string;
    answer: string;
    points?: string[];
  }[];
}
const FaqProductComponent = ({ data }: faqProductionTypes) => {
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
  return (
    <div id="faq-product-container">
      {data.map((data, index) => {
        return (
          <Accordion
            key={index}
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
            <AccordionSummary expandIcon={<img src={ArrowDown} alt="arrow" />}>
              <Typography
                sx={{ fontSize: "18px", fontWeight: 600 }}
                component="span"
              >
                {data.question}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography sx={{ fontSize: "14px", fontWeight: 400 }}>
                {data.answer}
              </Typography>
            </AccordionDetails>
          </Accordion>
        );
      })}
    </div>
  );
};

export default FaqProductComponent;
