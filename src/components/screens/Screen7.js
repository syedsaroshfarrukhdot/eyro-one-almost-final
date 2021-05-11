import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import { Form, Col } from "react-bootstrap";
const Default = ({ setForm, formData, navigation }) => {
  const [validated, setValidated] = useState(false);
  const [value, setValue] = useState("");
  const [value1, setValue1] = useState("");
  const [value2, setValue2] = useState("");
  const [ssnValues, setSSNValue] = React.useState({
    ssn1: "",
    ssn2: "",
    ssn3: "",
  });

  const handleSubmit = async (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    setValidated(true);

    if (form.checkValidity() === true) {
      event.preventDefault();
      formData.Day = value;
      formData.Month = value1;
      formData.Year = value2;

      console.log(value);
      console.log(value1);
      console.log(value2);
    
    }
  };
  const focusMove = (event) => {
    let { maxLength, value, min, max, name } = event.target;
    const [fieldName, fieldIndex] = name.split("-");
    if (value.length >= maxLength) {
      // Check if it's not the last input field
      if (parseInt(fieldIndex, 10) < 3) {
        // Get the next input field
        const nextSibling = document.querySelector(
          `input[name=ssn-${parseInt(fieldIndex, 10) + 1}]`
        );

        // If found, focus the next field
        if (nextSibling !== null) {
          nextSibling.focus();
        }
      }
    }
  };
  const handleChange = (event) => {
    let { maxLength, value, min, max, name } = event.target;

    value = Math.max(Number(min), Math.min(Number(max), Number(value)));
    setValue(value);
  };
  const handleChange1 = (event) => {
    let { value, min, max } = event.target;

    value = Math.max(Number(min), Math.min(Number(max), Number(value)));

    setValue1(value);
  };
  const handleChange2 = (event) => {
    let { value, min, max } = event.target;
    value = Math.max(Number(min), Math.min(Number(max), Number(value)));

    setValue2(value);
  };

  return (
    <div className="container mb-5 colored step6 step7 d-flex flex-column  justify-content-center align-items-center">
      <h4 style={{ fontWeight: 400 }}>
        Wie ist <strong>Ihr Geburtsdatum?</strong>
        <br />
      </h4>

      <main className="row default_wrapper">
        <section>
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
              <Form.Row className="form-row-custom">
                <Form.Group
                  controlId="formGridFname"
                  className="form-group-custom"
                >
                  <Form.Label className="form-label-custom">Tag</Form.Label>
                  <Form.Control
                    required
                    name="ssn-1"
                    maxLength={2}
                    className="form-m-d"
                    value={value}
                    label="TT"
                    max={31}
                    placeholder="TT"
                    onChange={(event) => {
                      handleChange(event);
                      focusMove(event);
                    }}
                  />
                </Form.Group>
                <Form.Group
                  controlId="formGridFname"
                  className="form-group-custom"
                >
                  <Form.Label className="form-label-custom">Monat</Form.Label>

                  <Form.Control
                    required
                    name="ssn-2"
                    maxLength={2}
                    className="form-m-d"
                    label="MM"
                    placeholder="MM"
                    value={value1}
                    max={12}
                    onChange={(event) => {
                      handleChange1(event);
                      focusMove(event);
                    }}
                  />
                </Form.Group>
                <Form.Group
                  controlId="formGridFname"
                  className="form-group-custom"
                >
                  <Form.Label className="form-label-custom">Jahr</Form.Label>

                  <Form.Control
                    required
                    name="ssn-3"
                    className="form-y"
                    max={2021}
                    label="JJJJ"
                    value={value2}
                    placeholder="JJJJ"
                    onChange={(event) => {
                      handleChange2(event);
                      focusMove(event);
                    }}
                  />
                </Form.Group>
              </Form.Row>
            </Form>
        </section>
        <Link  style={{ margin: "0 10px", width: "100%"}} to="/Step8">
          <button class="btns7">
            <i class="fas fa-angle-right" aria-hidden="true"></i> WEITER
          </button>
        </Link>
        <p className="pp text-center">
        <i className="fas fa-lock mr-1" aria-hidden="true"></i>
        Ihre Daten werden vertraulich behandelt und nicht an Dritte
        weitergegeben.
      </p>
      </main>
    </div>
  );
                  }
export default Default;
