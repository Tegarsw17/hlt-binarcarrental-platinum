import React from 'react';
import { Accordion } from 'react-bootstrap';
import './style.css';
const FAQDropdown = ({ index, title, desc }) => {
  return (
    <Accordion.Item eventKey={index.toString()}>
      <Accordion.Header>{title}</Accordion.Header>
      <Accordion.Body>{desc}</Accordion.Body>
    </Accordion.Item>
  );
};

export default FAQDropdown;
