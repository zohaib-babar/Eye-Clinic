function About() {
  return (
    <div className="bg-blue-50 min-h-screen py-12 px-5">

      {/* About Heading */}
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold text-blue-900 mb-4">
          About Our Clinic
        </h1>

        <p className="text-gray-600">
          Learn more about EyeCare Clinic and our mission.
        </p>
      </div>

      {/* About Content */}
      <div className="max-w-5xl mx-auto bg-white p-8 rounded-lg shadow-md">

        <h2 className="text-2xl font-bold text-blue-800 mb-4">
          Who We Are
        </h2>

        <p className="text-gray-600 leading-7 mb-6">
          EyeCare Clinic is dedicated to providing quality eye care
          and vision services. We aim to make eye care simple and
          comfortable for everyone.
        </p>

        <h2 className="text-2xl font-bold text-blue-800 mb-4">
          Our Mission
        </h2>

        <p className="text-gray-600 leading-7 mb-6">
          Our mission is to help people take care of their eyesight
          through eye examinations, vision testing, and professional
          eye care services.
        </p>

        <h2 className="text-2xl font-bold text-blue-800 mb-4">
          Why Choose Us?
        </h2>

        <ul className="list-disc pl-6 text-gray-600 space-y-2">
          <li>Friendly and welcoming environment</li>
          <li>Eye examination and vision testing</li>
          <li>Care for patients of different ages</li>
          <li>Focus on patient comfort and satisfaction</li>
        </ul>

      </div>

    </div>
  );
}

export default About;
