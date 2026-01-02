"use client";
import { FormEvent, useRef } from "react";
import { useRouter } from "next/navigation";
import emailjs from "@emailjs/browser";

export default function ContactForm() {
  const form = useRef<HTMLFormElement>(null);
  const router = useRouter();

  const sendEmail = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!form.current) return;

    emailjs
      .sendForm(
        "Your_Service_ID",
        "your_template_ID",
        form.current,
        "Your_Public_Key"
      )
      .then(
        () => {
          router.push("/success");
        },
        (error) => {
          console.error(error.text);
        }
      );
  };
  return (
    <form ref={form as React.RefObject<HTMLFormElement>} onSubmit={sendEmail}>
      <div className="flex lg:flex-row flex-col justifty-between items-center gap-8 justify-center mt-16">
        <div className="w-10/12">
          <div className="bg-white rounded-3xl px-20 py-24">
            <div className="flex lg:flex-row flex-col justifty-between items-center gap-8">
              <div className="w-1/2">
                <p className="text-gray-900 font-bold">Full Name *</p>
                <input
                  type="text"
                  placeholder="John Doe"
                  className="mt-4 w-full border border-gray-300 rounded-3xl text-gray-500 placeholder-gray-300 p-8"
                />
                <p className="mt-12 text-gray-900 font-bold">Company *</p>
                <input
                  type="text"
                  placeholder="John Doe"
                  className="mt-4 w-full border border-gray-300 rounded-3xl text-gray-500 placeholder-gray-300 p-8"
                />
              </div>
              <div className="w-1/2">
                <p className="text-gray-900 font-bold">Your Email *</p>
                <input
                  type="text"
                  placeholder="example@yourmail.com"
                  className="mt-4 w-full border border-gray-300 rounded-3xl text-gray-500 placeholder-gray-300 p-8"
                />
                <p className="mt-12 text-gray-900 font-bold">Subject *</p>
                <input
                  type="text"
                  placeholder="Your Company name here"
                  className="mt-4 w-full border border-gray-300 rounded-3xl text-gray-300 placeholder-gray-300 p-8"
                />
              </div>
            </div>
            <div className="flex lg:flex-row flex-col justifty-between items-center gap-8 mt-12">
              <div className="w-full text-center">
                <p className="text-gray-900 text-start font-bold">Message *</p>
                <textarea
                  name=""
                  id=""
                  cols={30}
                  rows={8}
                  placeholder="Your Message Here..."
                  className="w-full mt-4 border border-gray-300 rounded-3xl text-gray-500 placeholder-gray-300 p-8"
                />
                <button
                  type="submit"
                  className="mt-20 px-14 py-6 rounded-[40px] bg-gray-900 text-white"
                >
                  Send Message
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}
