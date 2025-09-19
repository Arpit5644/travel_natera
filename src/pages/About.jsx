import React from "react";

function About() {
  return (
    <section className="py-12">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-10 text-gray-800">
          About Travel Netra
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {/* What we do */}
          <div className="p-6 shadow-lg rounded-xl bg-white hover:shadow-xl transition duration-300">
            <h3 className="text-2xl font-semibold mb-3 text-indigo-600">
              What We Do
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Travel Netra is a smart travel companion that captures your trip
              details such as origin, destination, travel time, and mode of
              transport. By turning your journeys into data points, we create a
              digital story of your travel experience on an interactive map.
            </p>
          </div>

          {/* Why we do */}
          <div className="p-6 shadow-lg rounded-xl bg-white hover:shadow-xl transition duration-300">
            <h3 className="text-2xl font-semibold mb-3 text-indigo-600">
              Why We Do It
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Collecting accurate travel data is often a challenge. Traditional
              surveys cover only a small portion of the population, making
              traffic and transport planning incomplete. By using mobile
              technology, we simplify this process and ensure more reliable and
              real-time trip data.
            </p>
          </div>

          {/* How it helps */}
          <div className="p-6 shadow-lg rounded-xl bg-white hover:shadow-xl transition duration-300">
            <h3 className="text-2xl font-semibold mb-3 text-indigo-600">
              How It Helps
            </h3>
            <p className="text-gray-700 leading-relaxed">
              The data captured through Travel Netra supports better traffic
              management policies, reduces congestion, and helps planners
              understand real-world travel behavior. This means smarter cities,
              smoother journeys, and improved quality of life for travelers.
            </p>
          </div>

          {/* Our Vision */}
          <div className="p-6 shadow-lg rounded-xl bg-white hover:shadow-xl transition duration-300">
            <h3 className="text-2xl font-semibold mb-3 text-indigo-600">
              Our Vision
            </h3>
            <p className="text-gray-700 leading-relaxed">
              We aim to bridge the gap between travelers and city planners by
              creating a platform where your trips contribute to building safer,
              more efficient, and sustainable transportation systems for the
              future.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
