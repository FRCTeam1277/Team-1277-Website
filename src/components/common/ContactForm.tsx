import React, { useState } from "react";
import InputField from "../common/InputField";
import "./ContactForm.css";

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
    notRobot: false,
  });
  const [submitted] = useState(false);

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const { name, value, type } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" && e.target instanceof HTMLInputElement ? e.target.checked : value,
    }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (form.name && form.email && form.message && form.notRobot) {
      const subject = encodeURIComponent(`Contact Form Submission from ${form.name}`);
      const body = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\nMessage:\n${form.message}`);
      window.location.href = `mailto:1277@robotomies.com?subject=${subject}&body=${body}`;
    }
  }

  if (submitted) {
    return <div className="contact-form-success">Thank you for contacting us!</div>;
  }

  return (
    <form className="contact-form neuromorphic" onSubmit={handleSubmit}>
      <InputField label="Name" name="name" value={form.name} onChange={handleChange} required />
      <InputField label="Email" name="email" type="email" value={form.email} onChange={handleChange} required />
      <InputField label="Message" name="message" textarea value={form.message} onChange={handleChange} required />
      <label className="contact-form-checkbox">
        <input type="checkbox" name="notRobot" checked={form.notRobot} onChange={handleChange} required />
        <span>I am not a robot</span>
      </label>
      <button
        className="contact-form-submit"
        type="submit"
        style={{ background: "var(--primary)", color: "var(--inverse-primary)" }}
      >
        Submit
      </button>
    </form>
  );
}
