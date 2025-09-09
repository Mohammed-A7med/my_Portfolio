import { useState } from "react";
import { useForm } from "react-hook-form";

import Input from "../Shared/Input";
import emailjs from "@emailjs/browser";
import SendIcon from "../Ui-icons/SendIcon";

export default function ContactForm() {
  const [statusMessage, setStatusMessage] = useState(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        data
      );
      setStatusMessage({ type: "success", text: "Message sent successfully!" });
      reset();
    } catch (error) {
      console.error("EmailJS error:", error);
      setStatusMessage({
        type: "error",
        text: "Something went wrong. Please try again.",
      });
    }
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-y-4">
      {/* Name Input */}
      <p>
        <Input
          type="text"
          placeholder="Your Name"
          {...register("name", {
            required: "Name is required",
            minLength: {
              value: 2,
              message: "Name must be at least 2 characters",
            },
          })}
        />
        {errors.name && (
          <p className="text-red-500 text-sm px-1">{errors.name.message}</p>
        )}
      </p>

      {/* Email Input */}
      <p>
        <Input
          type="email"
          placeholder="Your Email"
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: "Please enter a valid email",
            },
          })}
        />
        {errors.email && (
          <p className="text-red-500 text-sm px-1">{errors.email.message}</p>
        )}
      </p>

      {/* Message Textarea */}
      <p>
        <textarea
          placeholder="Your Message"
          maxLength={500}
          className="w-full rounded-md border border-[#272727] bg-[#1c1c1c] 
             px-2 py-1 md:px-3 md:py-2 text-white outline-2 outline-transparent 
             outline-offset-2 transition-all duration-200 ease-in-out 
             focus:border-[#5f93e7] max-h-40 overflow-y-auto"
          {...register("message", {
            required: "Message is required",
            maxLength: {
              value: 500,
              message: "Message cannot exceed 500 characters",
            },
          })}
        ></textarea>
        {errors.message && (
          <p className="text-red-500 text-sm px-1">{errors.message.message}</p>
        )}
      </p>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="px-4 py-2 rounded-md bg-[#5f93e7] hover:bg-blue-500 
           font-semibold transition duration-200"
      >
        {isSubmitting ? (
          "Sending..."
        ) : (
          <>
            <SendIcon />
            Send Message
          </>
        )}
      </button>

      {/* Status Message */}
      {statusMessage && (
        <p
          className={`text-sm text-center px-1 ${
            statusMessage.type === "success" ? "text-green-400" : "text-red-500"
          }`}
        >
          {statusMessage.text}
        </p>
      )}
    </form>
  );
}
