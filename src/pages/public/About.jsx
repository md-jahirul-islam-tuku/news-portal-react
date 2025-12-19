import React from "react";

const About = () => {
  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
            About Dragon News
          </h1>
          <p className="mt-4 text-gray-600 max-w-3xl mx-auto">
            Dragon News is a trusted digital news portal committed to delivering
            accurate, timely, and unbiased news from around the world.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          {/* Image */}
          <div>
            <img
              src="https://images.unsplash.com/photo-1504711434969-e33886168f5c"
              alt="Dragon News Portal"
              className="rounded-xl shadow-md"
            />
          </div>

          {/* Text */}
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-gray-800">
              Who We Are
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Dragon News is an independent online news platform dedicated to
              responsible journalism. We cover national and international news,
              politics, economy, technology, sports, and social issues with
              honesty and transparency.
            </p>

            <h2 className="text-2xl font-semibold text-gray-800">
              Our Mission
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Our mission is to keep people informed with fact-based reporting
              and in-depth analysis. We aim to empower readers by providing
              reliable information that helps them understand the world better.
            </p>

            <h2 className="text-2xl font-semibold text-gray-800">
              Our Core Values
            </h2>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Accuracy and credibility in reporting</li>
              <li>Editorial independence and neutrality</li>
              <li>Timely and up-to-date news coverage</li>
              <li>Respect for ethical journalism standards</li>
            </ul>
          </div>
        </div>

        {/* Footer Note */}
        <div className="mt-12 text-center">
          <p className="text-gray-600 max-w-4xl mx-auto">
            At Dragon News, we believe that truth matters. Our team works
            tirelessly to ensure that our readers receive news that is fair,
            verified, and free from misinformation.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
