import React from "react";

const Contact = () => {
  return (
    <section className="relative text-gray-700 body-font">
      <div className="container flex flex-wrap px-5 py-12 mx-auto sm:flex-no-wrap">
        <div className="relative flex items-end justify-start p-10 overflow-hidden bg-gray-300 rounded-lg lg:w-2/3 md:w-1/2 sm:mr-10">
          <iframe
            width="100%"
            height="100%"
            className="absolute inset-0"
            frameBorder="0"
            title="map"
            marginHeight="0"
            marginWidth="0"
            scrolling="no"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d435518.6817839106!2d74.05418918633279!3d31.483220874943807!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39190483e58107d9%3A0xc23abe6ccc7e2462!2sLahore%2C%20Punjab%2C%20Pakistan!5e0!3m2!1sen!2s!4v1599066238839!5m2!1sen!2s"
          ></iframe>
          <div className="relative flex flex-wrap py-6 bg-white">
            <div className="px-6 lg:w-1/2">
              <h2 className="text-sm font-medium tracking-widest text-gray-900 title-font">ADDRESS</h2>
              <p className="leading-relaxed">Wapda Town, Lahore </p>
            </div>
            <div className="px-6 mt-4 lg:w-1/2 lg:mt-0">
              <h2 className="text-sm font-medium tracking-widest text-gray-900 title-font">EMAIL</h2>
              <a className="leading-relaxed text-indigo-500">azhariqbal2942@gmail.com </a>
              <h2 className="mt-4 text-sm font-medium tracking-widest text-gray-900 title-font">PHONE</h2>
              <p className="leading-relaxed">0322 8703020</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col w-full mt-8 bg-white lg:w-1/3 md:w-1/2 md:ml-auto md:py-8 md:mt-0">
          <h2 className="mb-1 text-lg font-medium text-gray-900 title-font">Feedback</h2>
          <p className="mb-5 leading-relaxed text-gray-600">
            Post-ironic portland shabby chic echo park, banjo fashion axe
          </p>
          <input
            className="px-4 py-2 mb-4 text-base bg-white border border-gray-400 rounded focus:outline-none focus:border-indigo-500"
            placeholder="Name"
            type="text"
          />
          <input
            className="px-4 py-2 mb-4 text-base bg-white border border-gray-400 rounded focus:outline-none focus:border-indigo-500"
            placeholder="Email"
            type="email"
          />
          <textarea
            className="h-32 px-4 py-2 mb-4 text-base bg-white border border-gray-400 rounded resize-none focus:outline-none focus:border-indigo-500"
            placeholder="Message"
          ></textarea>
          <button className="px-6 py-2 text-lg text-white bg-indigo-500 border-0 rounded focus:outline-none hover:bg-indigo-600">
            Button
          </button>
          <p className="mt-3 text-xs text-gray-500">
            Chicharrones blog helvetica normcore iceland tousled brook viral artisan.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
