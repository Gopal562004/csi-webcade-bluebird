import React, { useState } from "react";

const BeAMentor = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    education: "",
    skills: "",
    domain: "",
    bio: "",
    phone: "",
    website: "",
    linkedin: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form Submitted:", formData);
  };

  return (
    <div className="w-full min-h-screen flex justify-center items-center px-4 mt-6 md:mt-0">
      <div className="bg-white/75 w-full max-w-4xl rounded-lg flex flex-col justify-center items-center py-6 px-4 backdrop-blur-[20px]">
        <h1 className="text-3xl md:text-4xl font-semibold text-[#0066ff]/60 mb-6">
          Mentor Form
        </h1>

        <form
          onSubmit={handleSubmit}
          className="w-full flex flex-col items-center"
        >
          <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Name */}
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your Name"
              className="w-full h-[50px] rounded-md px-3 text-[#000] bg-transparent border-2 border-gray-200 outline-[#06f]"
              required
            />

            {/* Email */}
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your Email"
              className="w-full h-[50px] rounded-md px-3 text-[#000] bg-transparent border-2 border-gray-200 outline-[#06f]"
              required
            />
          </div>

          <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            {/* Education */}
            <input
              type="text"
              id="education"
              name="education"
              value={formData.education}
              onChange={handleChange}
              placeholder="Enter your Education"
              className="w-full h-[50px] rounded-md px-3 text-[#000] bg-transparent border-2 border-gray-200 outline-[#06f]"
            />

            {/* Skills */}
            <input
              type="text"
              id="skills"
              name="skills"
              value={formData.skills}
              onChange={handleChange}
              placeholder="Enter your Skills"
              className="w-full h-[50px] rounded-md px-3 text-[#000] bg-transparent border-2 border-gray-200 outline-[#06f]"
            />
          </div>

          <div className="w-full mt-4">
            {/* Bio */}
            <textarea
              name="bio"
              id="bio"
              value={formData.bio}
              onChange={handleChange}
              placeholder="Tell us about yourself"
              className="w-full h-[70px] rounded-md px-3 text-[#000] bg-transparent border-2 border-gray-200 outline-[#06f]"
            />
          </div>
          {/* Domain */}
          <div className="w-full mt-4">
            <input
              type="text"
              id="domain"
              name="domain"
              value={formData.domain}
              onChange={handleChange}
              placeholder="Enter your Domain (e.g., Web Development, Testing)"
              className="w-full h-[50px] rounded-md px-3 text-[#000] bg-transparent border-2 border-gray-200 outline-[#06f]"
            />
          </div>
          <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            {/* Phone */}
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Phone Number"
              className="w-full h-[50px] rounded-md px-3 text-[#000] bg-transparent border-2 border-gray-200 outline-[#06f]"
            />

            {/* Website */}
            <input
              type="url"
              id="website"
              name="website"
              value={formData.website}
              onChange={handleChange}
              placeholder="Website URL"
              className="w-full h-[50px] rounded-md px-3 text-[#000] bg-transparent border-2 border-gray-200 outline-[#06f]"
            />
          </div>

          <div className="w-full mt-4">
            {/* LinkedIn */}
            <input
              type="url"
              id="linkedin"
              name="linkedin"
              value={formData.linkedin}
              onChange={handleChange}
              placeholder="LinkedIn Profile URL"
              className="w-full h-[50px] rounded-md px-3 text-[#000] bg-transparent border-2 border-gray-200 outline-[#06f]"
            />
          </div>

          {/* Submit Button */}
          <button className="mt-6 text-center inline-flex items-center justify-center w-full max-w-xs h-[48px] rounded-md border-2 border-gray-300 text-gray-500 font-semibold transition-all duration-300 hover:border-[#06f] hover:text-[#06f] focus:outline-none focus:border-[#06f]">
            Submit the Form
          </button>
        </form>
      </div>
    </div>
  );
};

export default BeAMentor;
