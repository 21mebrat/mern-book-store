import React from 'react';
import { Link } from 'react-router-dom';

const CarDrivingSchool = () => {
    return (
        <div className="bg-gray-900 text-white">
          
          {/* Header */}
          <header className="bg-gray-800 p-4 shadow-lg">
            <div className="container mx-auto flex justify-between items-center">
              <h1 className="text-2xl font-bold text-green-400">DriveSchool</h1>
              <nav className="hidden md:flex space-x-6">
                <a href="#home" className="hover:text-green-400">Home</a>
                <a href="#courses" className="hover:text-green-400">Courses</a>
                <a href="#about" className="hover:text-green-400">About Us</a>
                <a href="#contact" className="hover:text-green-400">Contact</a>
              </nav>
              <a
                href="#enroll"
                className="bg-green-400 text-gray-900 px-4 py-2 rounded-md text-sm hover:bg-green-500"
              >
                Enroll Now
              </a>
            </div>
          </header>
    
          {/* Hero Section with Car Driving Image */}
          <section
            className="bg-cover bg-center h-screen flex items-center justify-center text-center"
            style={{
              backgroundImage: 'url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPYSskjYEorvtoUH0voJhd0BJbt5-pb7S3jw&s")',
            }}
          >
            <div className="bg-black bg-opacity-50 p-8">
              <h2 className="text-4xl md:text-6xl font-bold mb-4">
                Learn to Drive with Confidence
              </h2>
              <p className="text-lg md:text-xl text-gray-300 mb-6">
                Professional instructors and flexible schedules tailored for you.
              </p>
              <a
                href="#enroll"
                className="bg-green-400 text-gray-900 px-6 py-3 rounded-lg text-lg hover:bg-green-500"
              >
                Start Your Journey Today!
              </a>
            </div>
          </section>
    
          {/* Services Section */}
          <section className="container mx-auto py-16 px-4" id="courses">
            <h3 className="text-3xl font-bold text-center text-green-400 mb-8">
              Our Services
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-gray-800 p-6 rounded-lg shadow-md text-center">
                <h4 className="text-xl font-semibold text-green-400 mb-2">Beginner Lessons</h4>
                <p className="text-gray-300 mb-4">
                  Learn the basics of driving with our certified instructors.
                </p>
                <a href="#enroll" className="text-green-400 hover:underline">
                  Learn More
                </a>
              </div>
              <div className="bg-gray-800 p-6 rounded-lg shadow-md text-center">
                <h4 className="text-xl font-semibold text-green-400 mb-2">Advanced Courses</h4>
                <p className="text-gray-300 mb-4">
                  Enhance your driving skills with advanced training programs.
                </p>
                <a href="#enroll" className="text-green-400 hover:underline">
                  Learn More
                </a>
              </div>
              <div className="bg-gray-800 p-6 rounded-lg shadow-md text-center">
                <h4 className="text-xl font-semibold text-green-400 mb-2">Road Test Prep</h4>
                <p className="text-gray-300 mb-4">
                  Prepare for your driving test with our expert guidance.
                </p>
                <a href="#enroll" className="text-green-400 hover:underline">
                  Learn More
                </a>
              </div>
            </div>
          </section>
    
          {/* Testimonials Section */}
          <section className="bg-gray-800 py-16 px-4">
            <h3 className="text-3xl font-bold text-center text-green-400 mb-8">
              What Our Students Say
            </h3>
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-gray-900 p-6 rounded-lg shadow-md">
                <p className="text-gray-300 italic mb-4">
                  "The instructors were amazing, and I passed my test on the first try!"
                </p>
                <h4 className="text-green-400 font-bold">- John Doe</h4>
              </div>
              <div className="bg-gray-900 p-6 rounded-lg shadow-md">
                <p className="text-gray-300 italic mb-4">
                  "Highly recommend! The flexible schedule fit perfectly with my busy life."
                </p>
                <h4 className="text-green-400 font-bold">- Jane Smith</h4>
              </div>
              <div className="bg-gray-900 p-6 rounded-lg shadow-md">
                <p className="text-gray-300 italic mb-4">"A fantastic experience from start to finish."</p>
                <h4 className="text-green-400 font-bold">- Alex Brown</h4>
              </div>
            </div>
          </section>
    
          {/* Footer */}
          <footer className="bg-gray-800 py-6">
            <div className="container mx-auto text-center text-gray-400">
              <p>&copy; 2024 DriveSchool. All rights reserved.</p>
            </div>
          </footer>
        </div>
  );
}

export default CarDrivingSchool;
