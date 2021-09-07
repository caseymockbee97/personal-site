import { Button, ButtonGroup, Card } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import resume from "../assets/Master_Resume_2021.pdf";
import { Document, Page } from "react-pdf/dist/esm/entry.webpack";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";

export default function ResumeView(props) {
  const resumeWidth = 600;
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  useEffect(() => {
    props.modifyCurrentView("Resume");
  }, [props]);

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };

  const handleIncrement = () => {
    if (pageNumber + 1 <= numPages) {
      setPageNumber((prev) => prev + 1);
    }
  };
  const handleDecrement = () => {
    if (pageNumber > 1) {
      setPageNumber((prev) => prev - 1);
    }
  };
  return (
    <div
      style={{
        width: `${resumeWidth}px`,
        margin: "0 auto",
      }}
    >
      <Card
        style={{
          marginTop: "5px",
        }}
      >
        <Document
          file={resume}
          onLoadSuccess={onDocumentLoadSuccess}
          renderMode="svg"
          width={resumeWidth}
        >
          <Page pageNumber={pageNumber} />
        </Document>
      </Card>
      <div
        style={{
          width: `${resumeWidth}px`,
          display: "flex",
          justifyContent: "center",
          marginBottom: "5px",
          position: "fixed",
          bottom: "10px",
        }}
      >
        <ButtonGroup variant="contained" color="primary">
          <Button onClick={handleDecrement} disabled={pageNumber === 1}>
            <ArrowBackIcon />
          </Button>
          <Button disabled>
            {pageNumber} of {numPages}
          </Button>
          <Button onClick={handleIncrement} disabled={pageNumber === numPages}>
            <ArrowForwardIcon />
          </Button>
        </ButtonGroup>
      </div>
    </div>
  );
}
