import "./FAQStyles.css";
import { faqPageDummyData } from "../../utils/DummyData";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
// import { useState } from "react";
import ArrowDown from "../../assets/arrow_down.svg";
const FAQ = () => {
  // const [expanded, setExpanded] = useState(-1);

  // const handleExpansion = (index: number) => {
  //   setExpanded((prevExpanded) => {
  //     if (prevExpanded === index) {
  //       return -1; // Collapse the currently expanded item
  //     } else {
  //       return index; // Expand the clicked item
  //     }
  //   });
  // };
  return (
    <div id="faq-page-container">
      <div className="heading">FAQ</div>
      <div className="subheading">Answers to your most common questions.</div>
      <div className="text" id="faq-page-text">
        From onboarding to integrations and billing, we’ve compiled clear
        answers to help you navigate our platform confidently.
      </div>
      <div id="faq-page-data-container">
        {faqPageDummyData.map((data, index) => {
          return (
            <>
              <div className="faq-section">{data.section}</div>
              {/* <div id="faq-accordian-container"> */}
              {data.data &&
                data.data.map((subData, subindex) => {
                  return (
                    <div key={index + subindex * 3}>
                      <div className="faq-title">{subData.title}</div>
                      <div id="faq-accordian-container">
                        {subData.faq.map(
                          (
                            faqdata: {
                              question: string;
                              answer: string;
                              points?: string[];
                              conclusion?: string;
                            },
                            faqindex
                          ) => {
                            return (
                              <Accordion
                                key={subindex + faqindex}
                                className="faq-page-accordian"
                                elevation={0}
                                square
                                // expanded={expanded === index}
                                // onChange={() => handleExpansion(index)}

                                sx={{
                                  backgroundColor: "#eaeaea",
                                  marginBottom: "5px",
                                }}
                              >
                                <AccordionSummary
                                  expandIcon={
                                    <img src={ArrowDown} alt="arrow" />
                                  }
                                >
                                  <Typography
                                    sx={{ fontSize: "26px", fontWeight: 600 }}
                                    component="span"
                                  >
                                    {faqdata.question}
                                  </Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                  <Typography
                                    sx={{ fontSize: "18px", fontWeight: 400 }}
                                  >
                                    {faqdata.answer}
                                  </Typography>
                                  <Typography
                                    sx={{ fontSize: "18px", fontWeight: 400 }}
                                  >
                                    {faqdata.points &&
                                      faqdata.points.map(
                                        (pointsData, pointsindex) => {
                                          return (
                                            <ul key={pointsindex}>
                                              <li>{pointsData}</li>
                                            </ul>
                                          );
                                        }
                                      )}
                                  </Typography>
                                  <Typography
                                    sx={{
                                      fontSize: "18px",
                                      fontWeight: 400,
                                      marginTop: "10px",
                                    }}
                                  >
                                    {faqdata.conclusion}
                                  </Typography>
                                </AccordionDetails>
                              </Accordion>
                            );
                          }
                        )}
                      </div>
                    </div>
                  );
                })}
              {data.faq &&
                data.faq.map((faqdata, index) => {
                  return (
                    <Accordion
                      key={index}
                      className="faq-page-accordian"
                      elevation={0}
                      square
                      // expanded={expanded === index}
                      // onChange={() => handleExpansion(index)}
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
                          {faqdata.question}
                        </Typography>
                      </AccordionSummary>
                      <AccordionDetails>
                        <Typography sx={{ fontSize: "18px", fontWeight: 400 }}>
                          {faqdata.answer}
                        </Typography>
                      </AccordionDetails>
                    </Accordion>
                  );
                })}
              {/* </div> */}
            </>
          );
        })}
      </div>
    </div>
  );
};

export default FAQ;
