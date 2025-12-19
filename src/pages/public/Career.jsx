import React from "react";

const Career = () => {
  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
            Careers at Dragon News
          </h1>
          <p className="mt-4 text-gray-600 max-w-3xl mx-auto">
            Join Dragon News and be part of a dynamic team dedicated to
            responsible journalism, digital innovation, and impactful
            storytelling.
          </p>
        </div>

        {/* Why Work With Us */}
        <div className="grid md:grid-cols-2 gap-10 mb-16 items-center">
          <div>
            <img
              src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d"
              alt="Careers at Dragon News"
              className="rounded-xl shadow-md"
            />
          </div>

          <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-gray-800">
              Why Work With Dragon News?
            </h2>
            <p className="text-gray-600 leading-relaxed">
              At Dragon News, we value integrity, creativity, and teamwork. Our
              newsroom is built on ethical journalism, innovative digital
              strategies, and a passion for delivering accurate news to millions
              of readers.
            </p>

            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Independent and ethical journalism</li>
              <li>Collaborative and inclusive work culture</li>
              <li>Opportunities for growth and learning</li>
              <li>Work on impactful national & global stories</li>
            </ul>
          </div>
        </div>

        {/* Open Positions */}
        <div className="mb-16">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
            Current Openings
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "News Reporter",
                type: "Full Time",
                location: "Remote / Dhaka",
              },
              {
                title: "Sub Editor",
                type: "Full Time",
                location: "Dhaka",
              },
              {
                title: "Digital Content Writer",
                type: "Contract",
                location: "Remote",
              },
              {
                title: "Video Journalist",
                type: "Full Time",
                location: "Hybrid",
              },
              {
                title: "Frontend Developer",
                type: "Full Time",
                location: "Remote",
              },
              {
                title: "Social Media Manager",
                type: "Full Time",
                location: "Dhaka",
              },
            ].map((job, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition"
              >
                <h3 className="text-lg font-semibold text-gray-900">
                  {job.title}
                </h3>
                <p className="text-sm text-gray-500 mt-2">
                  {job.type} • {job.location}
                </p>
                <button className="mt-4 text-sm text-red-600 font-medium hover:underline">
                  View Details →
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* How to Apply */}
        <div className="bg-white rounded-xl shadow p-8 text-center">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            How to Apply
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto mb-6">
            Interested candidates are invited to send their updated CV, cover
            letter, and relevant work samples to our career team. Please mention
            the position name in the subject line.
          </p>

          <p className="text-gray-800 font-medium">
            📧 Email:{" "}
            <span className="text-red-600">career@dragonnews.com</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Career;
