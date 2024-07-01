import React, { useState } from "react";
import "./ContactSection.scss";
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const BOT_TOKEN = "7313879684:AAH0lhoKddXhkYP-YO5QnYueauqqT3J9hzE";
const CHAT_ID = "-1002180292093";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let text = "Contact Form Submission:%0A";
    text += `Name: <b>${formData.name}</b>%0A`;
    text += `Email: <b>${formData.email}</b>%0A`;
    text += `Message: <b>${formData.message}</b>`;

    const url = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage?chat_id=${CHAT_ID}&text=${text}&parse_mode=html`;

    const api = new XMLHttpRequest();
    api.open("GET", url, true);
    api.send();

    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <div style={{ marginTop: "80px", padding: "50px" }} className="contact-section container">
      <div className="contact-info">
        <h2 className="contact-info__title">Contact us</h2>
        <p className="contact-info__description">
          Send us your request and we will get in touch with you as soon as possible
        </p>
        <div className="contact-info__details">
          <div className="contact-info__item">
            <div className="contact-info__icon">
              <FaPhoneAlt />
            </div>
            +380 98 782 82 23
          </div>
          <div className="contact-info__item">
            <div className="contact-info__icon">
              <FaEnvelope />
            </div>
            mailmail@gmail.com
          </div>
        </div>
      </div>

      <div className="contact-form">
        <form onSubmit={handleSubmit}>
          <div className="contact-form__group">
            <label className="contact-form__label" htmlFor="name">
              Name
            </label>
            <input
              className="contact-form__input"
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your name"
              required
            />
          </div>
          <div className="contact-form__group">
            <label className="contact-form__label" htmlFor="email">
              E-mail
            </label>
            <input
              className="contact-form__input"
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your email"
              required
            />
          </div>
          <div className="contact-form__group">
            <label className="contact-form__label" htmlFor="message">
              Message
            </label>
            <textarea
              className="contact-form__textarea"
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your message"
              required
            ></textarea>
          </div>
          <div className="contact-form__bottom">
            <button className="contact-form__button" type="submit">
              Send request
            </button>
            <p className="contact-form__privacy">
              By sending request you agree to our <a href="#">Privacy&Policy</a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactSection;
