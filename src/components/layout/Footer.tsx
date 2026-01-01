/* eslint-disable @next/next/no-html-link-for-pages */
import Link from "next/link";
import React from "react";
import SVG from "react-inlinesvg";

export default function FooterSection() {
  return (
    <div className="bg-white dark:bg-black">
      <div className="mx-auto max-w-7xl border-t border-gray-200">
        <div className="flex lg:flex-row flex-col justify-between items-center gap-8 py-32">
          <div className="w-1/4">
            <SVG src="/svg/logo.svg" className="" />
            <p className="mt-10 text-gray-500">
              It is a long established fact that from will be distracted by the
              readable from when looking.
            </p>
            <div className="mt-9 inline-flex items-center">
              <SVG src="/svg/mail.svg" className="mr-5" />
              <p className="text-gray-500">uphighdev@gmail.com</p>
            </div>
            <div className="mt-5 flex flex-row">
              <div className="flex flex-col">
                <SVG src="/svg/phone.svg" className="mt-1 mr-5" />
              </div>
              <div className="flex flex-col">
                <p className="text-gray-500">+49 178 3330572</p>
                <p className="mt-2 text-gray-500">+389 72 605415</p>
              </div>
            </div>
          </div>
          <div className="w-2/12 pr-16">
            <h2 className="text-2xl font-bold border-b pb-8 border-gray-200 text-gray-800 dark:text-gray-300">
              Pages
            </h2>
            <div className="mt-5">
              <Link href="/" className="text-gray-500 text-xl">
                <p className="text-gray-500 text-xl">Home</p>
              </Link>
              <Link href="/about">
                <p className="mt-5 text-gray-500 text-xl">About Us</p>
              </Link>
              <Link href="/services">
                <p className="my-5 text-gray-500 text-xl">Services</p>
              </Link>
              <Link href="/contact">
                <p className="text-gray-500 text-xl">Conntact Us</p>
              </Link>
            </div>
          </div>
        </div>
        <div className="flex lg:flex-row flex-col justifty-between items-center gap-8 border-t border-gray-300 py-8">
          <div className="w-8/12">
            <p className="text-black dark:text-gray-300">
              &copy; {new Date().getFullYear()} One Percent Studio | All Rights
              Reservered
            </p>
          </div>
          <div className="w-1/3 text-end">
            <div className="inline-flex space-x-6">
              <a href="/">
                <SVG
                  src="/svg/fb.svg"
                  className="w-5 h-5 fill-current text-gray-900 dark:text-gray-300"
                />
              </a>
              <a href="/">
                <SVG
                  src="/svg/x.svg"
                  className="w-5 h-5 fill-current text-gray-900 dark:text-gray-300"
                />
              </a>
              <a href="/">
                <SVG
                  src="/svg/in.svg"
                  className="w-5 h-5 fill-current text-gray-900 dark:text-gray-300"
                />
              </a>
              <a href="/">
                <SVG
                  src="/svg/ig.svg"
                  className="w-5 h-5 fill-current text-gray-900 dark:text-gray-300"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
