function Services() {
  return (
    <div className="min-h-screen bg-slate-50 px-5 py-16">

      {/* Heading */}
      <div className="mx-auto mb-16 max-w-3xl text-center">
        <p className="mb-4 text-sm font-bold uppercase tracking-[4px] text-blue-600">
          Our Expertise
        </p>

        <h1 className="mb-6 text-4xl font-extrabold tracking-tight text-slate-900 md:text-6xl">
          Our Eye Care Services
        </h1>

        <p className="text-lg leading-8 text-slate-600">
          Professional eye care services designed to support
          your vision and help you maintain healthy eyesight.
        </p>

        <div className="mx-auto mt-8 h-1 w-20 rounded-full bg-blue-600"></div>
      </div>

      {/* Services Grid */}
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">

        {/* Service 1 */}
        <div className="group rounded-2xl border border-slate-200 bg-white p-8 transition duration-300 hover:-translate-y-2 hover:border-blue-300 hover:shadow-xl">
          <p className="mb-5 text-sm font-bold tracking-widest text-blue-600">
            SERVICE 01
          </p>

          <h2 className="mb-4 text-2xl font-bold text-slate-900 transition duration-300 group-hover:text-blue-700">
            Eye Examination
          </h2>

          <p className="leading-7 text-slate-600">
            Routine eye examinations to help monitor your
            eyesight and understand your vision needs.
          </p>

          <div className="mt-7 h-px w-full bg-slate-200"></div>

          <p className="mt-4 text-sm font-semibold text-slate-500">
            Comprehensive Vision Care
          </p>
        </div>

        {/* Service 2 */}
        <div className="group rounded-2xl border border-slate-200 bg-white p-8 transition duration-300 hover:-translate-y-2 hover:border-blue-300 hover:shadow-xl">
          <p className="mb-5 text-sm font-bold tracking-widest text-blue-600">
            SERVICE 02
          </p>

          <h2 className="mb-4 text-2xl font-bold text-slate-900 transition duration-300 group-hover:text-blue-700">
            Vision Testing
          </h2>

          <p className="leading-7 text-slate-600">
            Vision testing to help identify eyesight difficulties
            and determine your vision requirements.
          </p>

          <div className="mt-7 h-px w-full bg-slate-200"></div>

          <p className="mt-4 text-sm font-semibold text-slate-500">
            Clearer Vision Starts Here
          </p>
        </div>

        {/* Service 3 */}
        <div className="group rounded-2xl border border-slate-200 bg-white p-8 transition duration-300 hover:-translate-y-2 hover:border-blue-300 hover:shadow-xl">
          <p className="mb-5 text-sm font-bold tracking-widest text-blue-600">
            SERVICE 03
          </p>

          <h2 className="mb-4 text-2xl font-bold text-slate-900 transition duration-300 group-hover:text-blue-700">
            Eye Health Screening
          </h2>

          <p className="leading-7 text-slate-600">
            Screening services to help identify possible eye
            health concerns and guide further care.
          </p>

          <div className="mt-7 h-px w-full bg-slate-200"></div>

          <p className="mt-4 text-sm font-semibold text-slate-500">
            Supporting Eye Health
          </p>
        </div>

        {/* Service 4 */}
        <div className="group rounded-2xl border border-slate-200 bg-white p-8 transition duration-300 hover:-translate-y-2 hover:border-blue-300 hover:shadow-xl">
          <p className="mb-5 text-sm font-bold tracking-widest text-blue-600">
            SERVICE 04
          </p>

          <h2 className="mb-4 text-2xl font-bold text-slate-900 transition duration-300 group-hover:text-blue-700">
            Glasses Consultation
          </h2>

          <p className="leading-7 text-slate-600">
            Guidance on selecting suitable glasses according
            to your vision requirements.
          </p>

          <div className="mt-7 h-px w-full bg-slate-200"></div>

          <p className="mt-4 text-sm font-semibold text-slate-500">
            Find Your Right Fit
          </p>
        </div>

        {/* Service 5 */}
        <div className="group rounded-2xl border border-slate-200 bg-white p-8 transition duration-300 hover:-translate-y-2 hover:border-blue-300 hover:shadow-xl">
          <p className="mb-5 text-sm font-bold tracking-widest text-blue-600">
            SERVICE 05
          </p>

          <h2 className="mb-4 text-2xl font-bold text-slate-900 transition duration-300 group-hover:text-blue-700">
            Children's Eye Care
          </h2>

          <p className="leading-7 text-slate-600">
            Vision checks designed to help monitor children's
            eyesight as they grow.
          </p>

          <div className="mt-7 h-px w-full bg-slate-200"></div>

          <p className="mt-4 text-sm font-semibold text-slate-500">
            Care for Young Eyes
          </p>
        </div>

        {/* Service 6 */}
        <div className="group rounded-2xl border border-slate-200 bg-white p-8 transition duration-300 hover:-translate-y-2 hover:border-blue-300 hover:shadow-xl">
          <p className="mb-5 text-sm font-bold tracking-widest text-blue-600">
            SERVICE 06
          </p>

          <h2 className="mb-4 text-2xl font-bold text-slate-900 transition duration-300 group-hover:text-blue-700">
            Patient Guidance
          </h2>

          <p className="leading-7 text-slate-600">
            Helpful information about everyday habits that
            support healthy eyesight.
          </p>

          <div className="mt-7 h-px w-full bg-slate-200"></div>

          <p className="mt-4 text-sm font-semibold text-slate-500">
            Guidance You Can Trust
          </p>
        </div>

      </div>

      {/* Bottom Section */}
      <div className="mx-auto mt-20 max-w-6xl rounded-3xl bg-blue-800 px-6 py-14 text-center text-white md:px-16">
        <p className="mb-4 text-sm font-bold uppercase tracking-[4px] text-blue-200">
          Your Vision Matters
        </p>

        <h2 className="mb-5 text-3xl font-extrabold md:text-4xl">
          Give Your Eyes the Care They Deserve
        </h2>

        <p className="mx-auto max-w-2xl leading-8 text-blue-100">
          Learn more about our eye care services and take
          an informed step towards looking after your vision.
        </p>
      </div>

    </div>
  );
}

export default Services;