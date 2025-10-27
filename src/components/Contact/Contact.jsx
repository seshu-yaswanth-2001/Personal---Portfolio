import { useState } from "react";
// import { db } from "@/server/firebase";
// import { collection, addDoc, Timestamp } from "firebase/firestore";
import { contactConfig } from "@/config/config";
import "./contact.css";
import { toast } from "sonner";

// const initialForm = {
//   name: "",
//   email: "",
//   message: "",
// };

const Contact = () => {
  const [sending, setSending] = useState(false);

  // const handleChange = (e) => {
  //   setForm({ ...form, [e.target.name]: e.target.value });
  // };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   setSending(true);
  //   setResult(null);
  //   try {
  //     await addDoc(collection(db, "contacts"), {
  //       ...form,
  //       timestamp: Timestamp.now(),
  //     });
  //     setResult("Message sent successfully!");
  //     setForm(initialForm);
  //   } catch (err) {
  //     setResult("Failed to send! Try again.");
  //   }
  //   setSending(false);
  // };

  const handleClick = (e) => {
    e.preventDefault();
    setSending(true);
    setTimeout(() => {
      toast.success("Your message was submitted!", {
        style: {
          backgroundColor: "green",
          color: "white",
        },
        duration: 3000,
      });
      setSending(false);
    }, 2000);
  };

  return (
    <div className="contact">
      <h2>Get in Touch</h2>
      <p>
        Please contact me directly at{" "}
        <a className="mail" href="mailto:seshuyaswanthreddy.k@gmail.com">
          seshuyaswanthreddy.k@gmail.com
        </a>{" "}
        or through this form.
      </p>

      <form className="form-container" onSubmit={handleClick}>
        {contactConfig.map((field) => (
          <div className="form-group" key={field.id}>
            <label htmlFor={field.name}>{field.label}</label>
            {field.type !== "textarea" ? (
              <input
                className="input"
                type={field.type}
                name={field.name}
                id={field.name}
                placeholder={field.placeholder}
                autoComplete={field.autoComplete}
                required={field.required}
              />
            ) : (
              <textarea
                className="textarea"
                name={field.name}
                id={field.name}
                placeholder={field.placeholder}
                required={field.required}
              />
            )}
          </div>
        ))}
        <button type="submit" className="submit" disabled={sending}>
          {sending ? "Sending..." : "Send Message"}
        </button>
      </form>
    </div>
  );
};

export default Contact;
