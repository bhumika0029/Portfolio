import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const form = useRef();
  const [isSent, setIsSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_m7jsn4u",
      "template_c1uiqgu",
      form.current,
      "DMf4M4NZHzHrx2Eo-"
    ).then(
      () => {
        setIsSent(true);
        form.current.reset();
        toast.success("Message sent successfully! ✅", {
          position: "top-right",
          autoClose: 3000,
          theme: "dark",
        });
      },
      (error) => {
        console.error("Error sending message:", error);
        toast.error("Failed to send message. Please try again.", {
          position: "top-right",
          autoClose: 3000,
          theme: "dark",
        });
      }
    );
  };

  return (
    <section
      id="contact"
      className="flex flex-col items-center justify-center py-24
                 px-[12vw] md:px-[7vw] lg:px-[20vw]"
    >
      <ToastContainer />

      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white">CONTACT</h2>
        <div
          className="w-32 h-1 bg-[#00ffff] mx-auto mt-4
                     shadow-[0_0_15px_rgba(0,255,255,0.8)]"
        ></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          I’d love to hear from you — reach out for any opportunities or questions!
        </p>
      </div>

      {/* Contact Form */}
      <div
        className="mt-8 w-full max-w-md bg-[#0d081f]/90 p-6 rounded-2xl
                   border border-cyan-400/30
                   shadow-[0_0_30px_rgba(0,255,255,0.35)]
                   backdrop-blur-md"
      >
        <h3 className="text-xl font-semibold text-white text-center mb-4">
          Connect With Me 🚀
        </h3>

        <form
          ref={form}
          onSubmit={sendEmail}
          className="flex flex-col space-y-4"
        >
          <input
            type="email"
            name="user_email"
            placeholder="Your Email"
            required
            className="w-full p-3 rounded-md bg-[#131025] text-white
                       border border-gray-600
                       focus:outline-none focus:border-[#00ffff]
                       focus:shadow-[0_0_10px_rgba(0,255,255,0.7)]"
          />

          <input
            type="text"
            name="user_name"
            placeholder="Your Name"
            required
            className="w-full p-3 rounded-md bg-[#131025] text-white
                       border border-gray-600
                       focus:outline-none focus:border-[#00ffff]
                       focus:shadow-[0_0_10px_rgba(0,255,255,0.7)]"
          />

          <input
            type="text"
            name="subject"
            placeholder="Subject"
            required
            className="w-full p-3 rounded-md bg-[#131025] text-white
                       border border-gray-600
                       focus:outline-none focus:border-[#00ffff]
                       focus:shadow-[0_0_10px_rgba(0,255,255,0.7)]"
          />

          <textarea
            name="message"
            placeholder="Message"
            rows="4"
            required
            className="w-full p-3 rounded-md bg-[#131025] text-white
                       border border-gray-600
                       focus:outline-none focus:border-[#00ffff]
                       focus:shadow-[0_0_10px_rgba(0,255,255,0.7)]"
          />

          {/* Send Button */}
          <button
            type="submit"
            className="w-full bg-[#00ffff] text-black py-3
                       font-semibold rounded-md
                       hover:bg-cyan-300 transition
                       shadow-[0_0_20px_rgba(0,255,255,0.7)]"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
