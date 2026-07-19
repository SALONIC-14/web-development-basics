import React from 'react'
import Cards from './components/Cards'

const App = () => {
 const profile = [
  {
    id: 1,
    rate: "$42/hr",
    name: "Marko van Kooh",
    role: "Mobile Designer",
    occupation: "Freelancer",
    skills: ["PHP", "Android", "IOS", "+2"],
    description: "Creative mobile designer focused on clean UI and smooth user experiences.",
    img: "https://tse1.mm.bing.net/th/id/OIP.DAESgfzid22YsGMfWU7o6gHaHa?pid=Api&h=220&P=0"
  },
  {
    id: 2,
    rate: "$35/hr",
    name: "John Carter",
    role: "Frontend Developer",
    occupation: "Freelancer",
    skills: ["React", "JS", "CSS", "+3"],
    description: "Builds responsive websites with modern frontend technologies and animations.",
    img: "https://randomuser.me/api/portraits/men/32.jpg"
  },
  {
    id: 3,
    rate: "$50/hr",
    name: "Emma Stone",
    role: "UI/UX Designer",
    occupation: "Freelancer",
    skills: ["Figma", "UI", "UX", "+1"],
    description: "Designs intuitive user journeys with strong visual storytelling skills.",
    img: "https://randomuser.me/api/portraits/women/44.jpg"
  },
  {
    id: 4,
    rate: "$60/hr",
    name: "Alex Brown",
    role: "Backend Developer",
    occupation: "Freelancer",
    skills: ["Node", "Mongo", "API", "+4"],
    description: "Specializes in scalable backend systems and secure API development.",
    img: "https://randomuser.me/api/portraits/men/45.jpg"
  },
  {
    id: 5,
    rate: "$48/hr",
    name: "Sophia Lee",
    role: "Graphic Designer",
    occupation: "Freelancer",
    skills: ["PS", "AI", "Canva", "+2"],
    description: "Creates bold branding assets and modern visual identities for businesses.",
    img: "https://randomuser.me/api/portraits/women/12.jpg"
  },
  {
    id: 6,
    rate: "$39/hr",
    name: "David Kim",
    role: "App Developer",
    occupation: "Freelancer",
    skills: ["Flutter", "Dart", "Firebase", "+2"],
    description: "Develops cross-platform mobile apps with high performance and clean code.",
    img: "https://randomuser.me/api/portraits/men/20.jpg"
  },
  {
    id: 7,
    rate: "$55/hr",
    name: "Olivia White",
    role: "Data Analyst",
    occupation: "Freelancer",
    skills: ["Python", "SQL", "PowerBI", "+2"],
    description: "Transforms raw data into actionable business insights and dashboards.",
    img: "https://randomuser.me/api/portraits/women/22.jpg"
  },
  {
    id: 8,
    rate: "$44/hr",
    name: "James Wilson",
    role: "Web Designer",
    occupation: "Freelancer",
    skills: ["HTML", "CSS", "JS", "+2"],
    description: "Designs elegant and responsive websites optimized for user engagement.",
    img: "https://randomuser.me/api/portraits/men/60.jpg"
  },
  {
    id: 9,
    rate: "$52/hr",
    name: "Mia Davis",
    role: "Content Writer",
    occupation: "Freelancer",
    skills: ["SEO", "Blogs", "Copy", "+1"],
    description: "Writes persuasive and SEO-friendly content that improves conversions.",
    img: "https://randomuser.me/api/portraits/women/31.jpg"
  },
  {
    id: 10,
    rate: "$58/hr",
    name: "Noah Taylor",
    role: "DevOps Engineer",
    occupation: "Freelancer",
    skills: ["AWS", "Docker", "CI/CD", "+2"],
    description: "Automates deployments and manages reliable cloud infrastructure.",
    img: "https://randomuser.me/api/portraits/men/72.jpg"
  },
  {
    id: 11,
    rate: "$46/hr",
    name: "Lily Green",
    role: "Video Editor",
    occupation: "Freelancer",
    skills: ["Premiere", "AE", "Editing", "+2"],
    description: "Edits cinematic videos with smooth transitions and engaging pacing.",
    img: "https://randomuser.me/api/portraits/women/56.jpg"
  },
  {
    id: 12,
    rate: "$65/hr",
    name: "Ethan Scott",
    role: "AI Engineer",
    occupation: "Freelancer",
    skills: ["ML", "Python", "DL", "+5"],
    description: "Builds intelligent AI systems using machine learning and deep learning.",
    img: "https://randomuser.me/api/portraits/men/80.jpg"
  }
];

  return (
    <div className='parent'>
       {profile.map(function(elem){
        return <Cards 
        rate={elem.rate} 
        img={elem.img}
        name={elem.name}
        role={elem.role}
        occupation={elem.occupation}
        skills={elem.skills}
        description={elem.description}

        />
        })}
    </div>
  )
}

export default App
