import React from "react";

const teamMembers = [
  {
    role: "Software Engineer",
    name: "John Doe",
    img: "https://readymadeui.com/team-1.webp",
  },
  {
    role: "Web Developer",
    name: "Mark Adair",
    img: "https://readymadeui.com/team-2.webp",
  },
  {
    role: "Web Designer",
    name: "Simon Konecki",
    img: "https://readymadeui.com/team-3.webp",
  },
  {
    role: "Web Designer",
    name: "Eleanor",
    img: "https://readymadeui.com/team-4.webp",
  },
  {
    role: "Software Engineer",
    name: "Alen",
    img: "https://readymadeui.com/team-5.webp",
  },
  {
    role: "Software Developer",
    name: "Sophia",
    img: "https://readymadeui.com/team-6.webp",
  },
];

const MeetOurTeam = () => {
  return (
    <div className="p-4 bg-gray-900 text-white">
      <div className=" mx-auto container">
        <div className="text-center">
          <h2 className="text-center bg-gray-900 text-emerald-400 text-3xl md:4xl lg:5xl font-semibold">Meet Our Team</h2>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-12 max-sm:justify-center max-md:max-w-xl max-sm:max-w-xs mx-auto">
          {teamMembers.map((member, idx) => (
            <div
              key={idx}
              className="bg-gray-800 p-3 border border-gray-700 rounded-lg hover:shadow-lg transition"
            >
              <div className="bg-gray-200 aspect-square rounded-lg overflow-hidden">
                <img
                  src={member.img}
                  alt={member.name}
                  className="w-full h-full object-cover object-top"
                />
              </div>

              <div className="text-center mt-4 mb-1">
                <h4 className="text-sm font-medium text-white">{member.role}</h4>
                <p className="text-xs mt-1.5 text-gray-300 font-medium">
                  {member.name}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MeetOurTeam;
