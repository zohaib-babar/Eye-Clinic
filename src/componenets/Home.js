// function Home() {
//   return (
//     <div className="bg-blue-100 min-h-screen">

//       {/* Hero Section */}
//       <section className="text-center py-20 px-5">

//         <h1 className="text-4xl font-bold text-blue-900 mb-4">
//           Welcome to EyeCare Clinic
//         </h1>

//         <p className="text-gray-600 text-lg mb-6">
//           We care for your eyes and your vision.
//         </p>

//         <button className="bg-blue-700 text-white px-6 py-3 rounded-lg hover:bg-blue-800">
//           Book an Appointment
//         </button>

//       </section>

//       {/* About Section */}
//       <section className="bg-white py-12 px-5 text-center">

//         <h2 className="text-2xl font-bold text-blue-900 mb-4">
//           Your Vision, Our Priority
//         </h2>

//         <p className="text-gray-600 max-w-2xl mx-auto">
//           We provide eye examinations and vision care services
//           to help you maintain healthy eyesight.
//         </p>

//       </section>

//     </div>
//   );
// }

// export default Home;

function Home() {
  return (
    <div className="bg-blue-100 min-h-screen">

      {/* Hero Section */}
      <section className="text-center py-20 px-5">

        <h1 className="text-4xl font-bold text-blue-900 mb-4">
          Welcome to EyeCare Clinic
        </h1>

        <p className="text-gray-600 text-lg mb-6">
          We care for your eyes and your vision.
        </p>

        <a
          href="#contact"
          className="inline-block bg-blue-700 text-white px-6 py-3 rounded-lg hover:bg-blue-800 transition"
        >
          Book an Appointment
        </a>

      </section>

      {/* About Section */}
      <section className="bg-white py-12 px-5 text-center">

        <h2 className="text-2xl font-bold text-blue-900 mb-4">
          Your Vision, Our Priority
        </h2>

        <p className="text-gray-600 max-w-2xl mx-auto">
          We provide eye examinations and vision care services
          to help you maintain healthy eyesight.
        </p>

      </section>

    </div>
  );
}

export default Home;
