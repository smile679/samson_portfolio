import { useReducer } from "react";
import emailjs from "@emailjs/browser";
import Reveal from "@/components/motions/Reveal";
import RevealX from "@/components/motions/RevealX";

const ContactMe = () => {
  function setMail(mail, action) {
    if (action.type === "Name") {
      return { ...mail, Name: action.payload };
    }
    if (action.type === "Email") {
      return { ...mail, Email: action.payload };
    }
    if (action.type === "Message") {
      return { ...mail, Message: action.payload };
    }
    if (action.type === "reset") {
      return { Name: "", Email: "", Message: "" };
    }
    return mail;
  }

  function setError(error, action) {
    if (action.type === "name") {
      return { ...error, Name: action.payload };
    }
    if (action.type === "email") {
      return { ...error, Email: action.payload };
    }
    if (action.type === "message") {
      return { ...error, Message: action.payload };
    }
    if (action.type === "reset") {
      return { Name: "", Email: "", Message: "" };
    }
  }

  const [mail, dispatchMail] = useReducer(setMail, {
    Name: "",
    Email: "",
    Message: "",
  });
  const [error, dispatchError] = useReducer(setError, {
    Name: "",
    Email: "",
    Message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
    // const TEMPLATE_KEY = import.meta.env.VITE_EMAILJS_TEMPLATE_KEY;
    // const SERVICE_KEY = import.meta.env.VITE_EMAILJS_SERVICE_KEY;

    let isValid = true;

    if (!mail.Name) {
      dispatchError({ type: "name", payload: "Invalid Name!" });
      isValid = false;
    } else if (mail.Name.length <= 3) {
      dispatchError({ type: "name", payload: "sorry, Name too Short!" });
      isValid = false;
    } else {
      dispatchError({ type: "name", payload: "" });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!mail.Email) {
      dispatchError({ type: "email", payload: "Email required!" });
      isValid = false;
    } else if (!emailRegex.test(mail.Email)) {
      dispatchError({ type: "email", payload: "Invalid Email!" });
      isValid = false;
    } else {
      dispatchError({ type: "email", payload: "" });
    }

    if (!mail.Message) {
      dispatchError({ type: "message", payload: "Invalid Message!" });
      isValid = false;
    } else if (mail.Message.length <= 20) {
      dispatchError({ type: "message", payload: "Sorry, Message too short!" });
      isValid = false;
    } else {
      dispatchError({ type: "message", payload: "" });
    }

    if (isValid) {
      const templateParams = {
        name: mail.Name,
        email: mail.Email,
        message: mail.Message,
        title: "contact via portfolio",
        time: new Date().toLocaleString(),
      };

      emailjs
        .send(
          import.meta.env.VITE_EMAILJS_SERVICE_KEY,
          import.meta.env.VITE_EMAILJS_TEMPLATE_KEY,
          templateParams,
          import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
        )
        .then(() => {
          dispatchError({ type: "reset" });
          dispatchMail({ type: "reset" });
          alert("Message sent successfully!");
        })
        .catch((error) => {
          console.error("EmailJS error:", error);
          alert("Failed to send message. Please try again.");
        });
    }
  };

  return (
    <section className="w-full max-w-6xl mx-auto center pt-10 sm:pt-20" id="contact-button">
      <Reveal>
        <div className="flex flex-row items-center pt-10">
          <svg
            className="w-8 h-8 sm:w-10 sm:h-10 mr-3 text-gray-200 hover:hover:-translate-y-0.5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              fill-rule="evenodd"
              d="M12 5a7 7 0 0 0-7 7v1.17c.313-.11.65-.17 1-.17h2a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1H6a3 3 0 0 1-3-3v-6a9 9 0 0 1 18 0v6a3 3 0 0 1-3 3h-2a1 1 0 0 1-1-1v-6a1 1 0 0 1 1-1h2c.35 0 .687.06 1 .17V12a7 7 0 0 0-7-7Z"
              clip-rule="evenodd"
            />
          </svg>
          <h2 className="text-3xl text-shadow-gray-800 text-shadow-lg tracking-wider">
            Get In <span className="text-emerald-500">Touch</span>
          </h2>
        </div>
      </Reveal>
      <div className="grid grid-cols-1 md:grid-cols-2">
        <Reveal>
          <div className="w-full px-5 pt-10">
            <form className="center" onSubmit={handleSubmit}>
              <h3>Write me a message</h3>
              <div className="w-full relative">
                <p
                  className="absolute left-2.5 -bottom-2.5 text-[0.8rem] text-red-500"
                  id="name-error"
                >
                  {error.Name}
                </p>
                <input
                  className="w-full text-emerald-600 font-bold bg-gray-200 py-2 sm:py-3 my-3 rounded-md px-3
                  placeholder:mx-5 outline-none shadow-gray-800 shadow-sm"
                  type="text"
                  placeholder="Your Name"
                  value={mail.Name}
                  onChange={(e) =>
                    dispatchMail({ type: "Name", payload: e.target.value })
                  }
                />
              </div>
              <div className="w-full relative">
                <p
                  className="absolute left-2.5 -bottom-2.5 text-[0.8rem] text-red-500"
                  id="email-error"
                >
                  {error.Email}
                </p>
                <input
                  className="w-full text-emerald-600 font-bold bg-gray-200 py-2 sm:py-3 my-3 rounded-md px-3
                  placeholder:mx-5 outline-none shadow-gray-800 shadow-sm"
                  type="email"
                  placeholder="Your Email"
                  value={mail.Email}
                  onChange={(e) =>
                    dispatchMail({ type: "Email", payload: e.target.value })
                  }
                />
              </div>
              <div className="w-full relative">
                <p
                  className="absolute left-2.5 -bottom-2 text-[0.8rem] text-red-500"
                  id="message-error"
                >
                  {error.Message}
                </p>
                <p
                  className="absolute right-2.5 -bottom-2 text-[0.9rem] text-white font-bold"
                  id="message-error"
                >
                  {mail.Message.length} / 20 Characters
                </p>
                <textarea
                  className="w-full h-30 text-emerald-600 font-bold bg-gray-200 py-3 my-3 rounded-md px-3
                   placeholder:mx-5 outline-none shadow-gray-800 shadow-md "
                  placeholder="Your Message"
                  value={mail.Message}
                  onChange={(e) =>
                    dispatchMail({ type: "Message", payload: e.target.value })
                  }
                />
              </div>
              <button type="submit" className="button w-full my-5">
                {" "}
                Send{" "}
              </button>
            </form>
          </div>
        </Reveal>
        <div>
          <RevealX>
            <img
              className="w-full object-cover drop-shadow-emerald-600 drop-shadow-lg hover:drop-shadow-emerald-500
              hover:drop-shadow-2xl hover:scale-101"
              src={
                "https://res.cloudinary.com/dineyc77u/image/upload/v1763842914/It_q7ienw.png"
              }
              alt="it man"
            />
          </RevealX>
        </div>
      </div>
      <div>
        <p className="text-white text-sm pt-20 pb-2">
          {`© ${new Date().getFullYear()} Samson Gidey. All rights reserved.`}
        </p>
      </div>
    </section>
  );
};

export default ContactMe;
