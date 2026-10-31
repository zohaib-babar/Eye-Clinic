function Contact() {
  return (
    <div className="min-h-screen bg-slate-50 px-5 py-16">

      {/* Page Heading */}
      <div className="mx-auto mb-14 max-w-3xl text-center">
        <p className="mb-4 text-sm font-bold uppercase tracking-[4px] text-blue-600">
          Get In Touch
        </p>

        <h1 className="mb-5 text-4xl font-extrabold text-slate-900 md:text-6xl">
          Contact Us
        </h1>

        <p className="text-lg leading-8 text-slate-600">
          Have a question about our eye care services?
          Get in touch with us. We would love to hear from you.
        </p>

        <div className="mx-auto mt-8 h-1 w-20 rounded-full bg-blue-600"></div>
      </div>

      {/* Contact Content */}
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 lg:grid-cols-2">

        {/* Contact Information */}
        <div className="rounded-3xl bg-blue-800 p-8 text-white md:p-10">

          <h2 className="mb-5 text-3xl font-bold">
            Let's Talk
          </h2>

          <p className="mb-10 leading-8 text-blue-100">
            We are here to help you with your questions about
            eye care and appointments.
          </p>

          <div className="mb-8 border-b border-blue-600 pb-6">
            <h3 className="mb-3 text-lg font-bold">
              Our Location
            </h3>

            <p className="leading-7 text-blue-100">
              GTTI 465 Samundri, Faislabad
            </p>
          </div>

          <div className="mb-8 border-b border-blue-600 pb-6">
            <h3 className="mb-3 text-lg font-bold">
              Phone Number
            </h3>

            <p className="leading-7 text-blue-100">
              +923248604353
            </p>
          </div>

          <div>
            <h3 className="mb-3 text-lg font-bold">
              Email Address
            </h3>

            <p className="break-words leading-7 text-blue-100">
              zohaibbabar3388@gmail.com
            </p>
          </div>

        </div>

        {/* Contact Form */}
        <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm md:p-10">

          <h2 className="mb-3 text-2xl font-bold text-slate-900">
            Send Us a Message
          </h2>

          <p className="mb-8 leading-7 text-slate-600">
            Fill out the form below and let us know how we can help.
          </p>

          <form>

            {/* Name */}
            <div className="mb-6">
              <label
                htmlFor="name"
                className="mb-2 block font-semibold text-slate-700"
              >
                Full Name
              </label>

              <input
                type="text"
                id="name"
                name="name"
                placeholder="Enter your full name"
                required
                className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
              />
            </div>

            {/* Email */}
            <div className="mb-6">
              <label
                htmlFor="email"
                className="mb-2 block font-semibold text-slate-700"
              >
                Email Address
              </label>

              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email address"
                required
                className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
              />
            </div>

            {/* Subject */}
            <div className="mb-6">
              <label
                htmlFor="subject"
                className="mb-2 block font-semibold text-slate-700"
              >
                Subject
              </label>

              <input
                type="text"
                id="subject"
                name="subject"
                placeholder="Enter message subject"
                required
                className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
              />
            </div>

            {/* Message */}
            <div className="mb-7">
              <label
                htmlFor="message"
                className="mb-2 block font-semibold text-slate-700"
              >
                Your Message
              </label>

              <textarea
                id="message"
                name="message"
                rows="5"
                placeholder="Write your message here..."
                required
                className="w-full resize-y rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
              ></textarea>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full rounded-xl bg-blue-700 px-6 py-4 font-bold text-white transition duration-300 hover:bg-blue-800"
            >
              Send Message
            </button>

          </form>

        </div>

      </div>

      {/* Bottom Section */}
      <div className="mx-auto mt-16 max-w-6xl text-center">
        <h2 className="mb-4 text-2xl font-bold text-slate-900">
          Your Vision, Our Priority
        </h2>

        <p className="text-slate-600">
          Thank you for choosing EyeCare Clinic.
        </p>
      </div>

    </div>
  );
}

export default Contact;
