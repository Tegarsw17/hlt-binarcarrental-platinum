import React from 'react';
import './style.css';
import { Accordion } from 'react-bootstrap';
import { faqData } from '../../../utils/dummyData';
import FAQDropdown from '../FAQDropdown';
const FAQ = ({ id }) => {
  return (
    <div id={id} className="faq-wrapper">
      <div className="faq">
        <div className="faq-title">
          <h2>Frequently Asked Question</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
        </div>
        <div className="faq-accord">
          <Accordion>
            {faqData.map((item, index) => (
              <FAQDropdown
                key={index}
                title={item.title}
                desc={item.desc}
                index={index}
              />
            ))}
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
