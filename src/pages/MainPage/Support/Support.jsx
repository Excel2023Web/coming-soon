import React from "react";
import "./Support.css";
import { FiLinkedin, FiMail } from "react-icons/fi";
import { BsTelephone } from "react-icons/bs";
import { contacts } from "../../../data/contacts";
const Support = () => {
  return (
    <div className="support__container">
      <div className="support__main_contnet">
        <h1>Excel MEC Help and Support</h1>
        <h2>Welcome to Excel MEC Support Center</h2>
        <p>
          At Excel MEC, we are committed to providing excellent support to our
          users. You've come to the right place if you have any questions,
          encounter issues, or need assistance. Our support center is designed
          to help you find the information you need quickly and easily.
        </p>
        <h2>Troubleshooting and Technical Support</h2>
        <p>
          Encountering issues? Please email{" "}
          <a
            href="mailto:support@excelmec.org"
            target="_blank"
            rel="noreferrer"
          >
            support@excelmec.org
          </a>
        </p>
        <h2>Contact Us</h2>
        <div className="contact__section">
          {contacts.map((contact, index) => {
            return (
              <div className="contact_card" key={index}>
                <p className="ctct__name">{contact.name}</p>
                <p>{contact.position}</p>
                <div className="ctct__icons_container">
                  <a href={contact.linkedin} target="_blank" rel="noreferrer">
                    {" "}
                    <FiLinkedin />
                  </a>
                  <a
                    href={`mailto:${contact.email}`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {" "}
                    <FiMail />
                  </a>
                  <a
                    href={`tel:${contact.phno}`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <BsTelephone />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        <h2>Account Management</h2>
        <p>
          Need help with your account settings? Find the setting here.{" "}
          <a
            href="https://accounts.excelmec.org"
            target="_blank"
            rel="noreferrer"
          >
            https://accounts.excelmec.org
          </a>
        </p>
      </div>
    </div>
  );
};

export default Support;
