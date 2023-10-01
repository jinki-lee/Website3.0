/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation


// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Jinki Lee",
  title: "Hi all, I'm Jinki",
  subTitle: emoji(
    "Business graduate and software developer dedicated to innovating creative solutions, transforming digital landscapes through innovative web and mobile applications."
  ),
  resumeLink: require("./assets/Jinki_Lee_Resume_2024.pdf"),
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  linkedin: "https://www.linkedin.com/in/jinkilee/",
  github: "https://github.com/jinki-lee",
  instagram: "https://www.instagram.com/jinki.jpeg/",
  gmail: "jinkilee552@gmail.com",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "Who am I?",
  subTitle: "A creative problem solver with a passion for designing, planning, and developing innovative solutions. I mostly enjoy working on the front-end, but I am always open to learning new things.",
  skills: [
    emoji(
      "⚡ Highly motivated and passionate about learning new technologies. I always look for ways to integrate and share new technologies with others."
    ),
    emoji("⚡ Very detail-oriented and organized. I love to plan and design to create the best user experience"),
    emoji(
      "⚡ Enjoy client to client interaction and working in a team environment. I am a great communicator and love to collaborate with others."
    ),
    emoji(
      "🌟 I love to meet new people, organize hangouts, play sports and do other physical activities! (Golf, Ski, Volleyball, Boardball, Camping, Backpacking and Body Building)."
    ),
    emoji(
      "🌟 I am a big dog person! I have two Australian Labradoodles, Dooly and Lulu."
    ),
    emoji(
      "🌟 I am a very outgoing, creative, energetic and active person. I love to brighten up the room, share my honest opinions and make sure everyone is comfortable."
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "C#",
      fontAwesomeClassname: "fa-solid fa-hashtag"
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "Azure",
      fontAwesomeClassname: "fab fa-microsoft"
    }

  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Southern Alberta Institute of Technology",
      logo: require("./assets/images/sait.png"),
      subHeader: "Diploma in Information Technology - Software Development",
      duration: "May 2022 - April 2024*",
      desc: "GPA: 3.80 / 4.00",
      descBullets: [
        "Completed 8-month Co-Op Work Term — (January - August 2023)",
        "One of three candidates to receive the Alberta Advanced Education and Technology Award for displaying academic excellence and leadership — (August 2022)",
        "Scholarship: Jason Lang Scholarship — (Feb 2023)",
        "Volunteer: Peer Mentor Team Lead  — (July 2023 - Present)"
      ]
    },
    {
      schoolName: "University of Calgary",
      logo: require("./assets/images/ucalgary.jpg"),
      subHeader: "Bachelor of Arts in Economics",
      duration: "September 2017 - April 2022",
      desc: "GPA: 3.32 / 4.00",
      descBullets: ["Jason Lang Scholarship — (September 2020 - February 2021)",
      "Alexander Rutherford Scholarship — (September 2017)"
    ]
    },
    {
      schoolName: "Haskayne School of Business",
      logo: require("./assets/images/haskayne.webp"),
      subHeader: "Minor in Business Management and Society",
      duration: "September 2017 - April 2022",
      descBullets: ["Jason Lang Scholarship — (September 2020 - February 2021)"
    ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Extraverted 70%", //Insert stack or technology you have experience in
      progressPercentage: "70%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Intuitive 58%",
      progressPercentage: "58%"
    },
    {
      Stack: "Feeling 60%",
      progressPercentage: "60%"
    },
    {
      Stack: "Judging 92%",
      progressPercentage: "92%"
    },
    {
      Stack: "Turbulent 60%",
      progressPercentage: "60%"
    }
  ],

  //www.16personalities.com/static/animations/avatars/defaults/protagonist.json
  displayCodersrank: true // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Digital Experience",
      company: "ENMAX Corporation",
      companylogo: require("./assets/images/ENMAX.jfif"),
      date: "January 2023 – August 2023",
      desc: "Co-Op Student",
      descBullets: [
        "⭐Pioneered ENMAX's co-op program, infusing youthful energy and cutting-edge practices",
        "📝 Documented enmax.com 2023 updates in release notes and utilized Microsoft Sway to create captivating releases",
        "🎟️ Managed Service Now daily to track tickets and requests, and delegated tasks to appropriate Microsoft Azure DevOps board team members for timely resolution",
        "💭 Proposed and executed novel UX/UI enhancements on enmax.com and enmax.next",
        "💭 Proposed import/export tool for Azure DevOps and integrated generative AI tools for efficient software development"
      ]
    },
    {
      role: "Capstone Project Developer",
      company: "ENMAX Corporation",
      companylogo: require("./assets/images/ENMAX.jfif"),
      date: "September 2023 – Present",
      desc: "Team Lead",
      descBullets: [
        "⭐ Spearheading the concept of collaborating and partnering ENMAX with post-secondary schools to explore capstone project opportunities, becoming the trailblazer in delivering innovative projects, and setting a precedent for successful cooperation",
        "📝 Led the entire design process, starting from gathering initial business requirements, conducting comprehensive user research, user testing, Figma wireframes and mood boards to overseeing software development and finalizing rollout/re-launch planning for the IT Recognition Portal",
        "💭 Promoted organizational change management and introducing new KPIs to increase employee engagement and recognition",
      ]
    },
    {
      role: "Business Analyst",
      company: "QP",
      companylogo: require("./assets/images/qp.png"),
      date: "May 2017 – Present",
      desc: "Family Owned Business",
      descBullets: ["📖 Gained insights into business operations and processes within a family-owned company, initially starting as a front counter associate",
      "📜 Demonstrated and applied workplace safety, subsequently achieving certification to operate boilers in compliance with Alberta Power Engineers Regulation",
      "📝 Acquired exposure to financial accounting, inventory management, decision-making, and tax planning and compliance for small businesses",
      "🎨 Designed and deployed a company website using React.js",
      "📊 Leveraged Excel workbooks with macros for automating and visualizing budget data, expenses, sales figures, and employee timesheets",
      "💻 Integrated various applications, technologies, and services to enhance digital experience"  
    ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "Some of the projects and companies I have contributed to",
  projects: [
    
    {
      image: require("./assets/images/ENX_Logo_RED2.png"),
      projectName: "IT Recognition Portal",
      projectDesc: "Led the entire design process, starting from gathering initial business requirements, conducting comprehensive user research, analysis, and testing, to overseeing software development and finalizing rollout/re-launch planning for the IT Recognition Portal",
      footerLink: [
        {
          name: "Video Demo - Coming Soon",
          url: ""
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/ENX_Logo_RED2.png"),
      projectName: "Telecom Choice Page",
      projectDesc: "Gathered business and UX requirements from the client and stakeholders, created a Figma wireframe and prototype, and developed a new Telecom Choice page for enmax.com",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://www.enmax.com/generation-wires/transmission-and-distribution/telecom-choice"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/qp2.png"),
      projectName: "Company Website and Application Support",
      projectDesc: "Designed and deployed a company website using React.js. Integrated various applications, technologies, and services to enhance digital experience",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://www.qpcleaners.ca/"
        }
        //  you can add extra buttons here.
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "AZ 900",
      subtitle:
        "Microsoft Azure Fundamentals",
      image: require("./assets/images/az900.png"),
      imageAlt: "AZ 900",
      footerLink: [
        {
          name: "Scheduled to write in Dec 2023",
          url: ""
        }
      ]
    },
    {
      title: "Power Engineer - Special Boiler Operator",
      subtitle:
        "Credential ID: A-92066",
      image: require("./assets/images/absa.png"),
      imageAlt: "Power Engineer - Special Boiler Operator",
      footerLink: [
        {
          name: "Certification",
          url: "https://www.absa.ca/directories/alberta-certi%EF%AC%81ed-power-engineers-directory/"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs and Vlogs",
  subtitle:
    "With Love for Developing cool stuff, I love to visualize and show others what I have learnt and experienced. Videos were created and edited using Adobe Premiere Pro.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://sway.office.com/cUCSN8ErMVeOv633?ref=Link",
      title: "ENMAX | Digital Experience",
      description:
        "A presentation of my work and projects at ENMAX using Microsoft Sway."
    },
    {
      url: "https://youtu.be/LvfFysu9W48?si=VBKu2XRzjXart8rb",
      title: "ENMAX | Summer Student Program",
      description:
        "A video I got to participate in for ENMAX's Summer Student Program."
    },
    {
      url: "https://youtu.be/Cn85cjVAF7o?si=kvVfb_rI2LxibOQR",
      title: "End of Summer 2023",
      description:
        "One last video before the end of my Summer 2023. This video was reuploaded and featured in @boardballsport on Instagram."
    },
    {
      url: "https://youtu.be/XEXQuQ4VqTc?si=bCZIPUQVhyy4j9ib",
      title: "Summer 2023",
      description:
        "A video recap of what my Summer (2023). Stampede, Soccer, Boardball, Volleyball, Golf and Working. Cool fact, I got to to meet Arizona Zervas!"
    },
    {
      url: "https://youtu.be/T4aVaJ2iOz8?si=tuJ1MFeJRNeNYEAJ",
      title: "Seoul 2023",
      description:
        "A video recap of my time first time in Seoul (2023). I got a week off work and joined my parents in their last week of vacation."
    },
    {
      url: "https://youtu.be/HowRW6dEJ_g?si=a1JZjVnccm-V9cmV",
      title: "Winter 2022",
      description:
        "A video recap of how I spend my time in the Winter (2022). Mostly skiing, skating and playing volleyball"
    },
    {
      url: "https://youtu.be/eHbgq8gipbk?si=49MRnAxloD8TVERO",
      title: "New Year: 2022 Recap",
      description:
        "A video recap of my 2022 and the four seasons."
    },
    {
      url: "https://youtu.be/6uVYl-Gg8tM?si=6jZmgjsIG6mhNEkR",
      title: "Healy Pass - Sunrise Hike",
      description:
        "A video recap of a sunrise hike I did with my friends at Healy Pass. We started at 1:00AM to get to Lake Moraine, but it was full, so we went to Healy Pass instead."
    },
    {
      url: "https://youtu.be/MuAWn4t3oYQ?si=3GyU1q9sziG8qYqk",
      title: "Vegas 2022",
      description:
        "A video recap of my first time in Vegas. I went with my friends for a week and we had a blast."
    },
    {
      url: "https://youtu.be/rs8wx0H8EpM?si=t3SfCCrhQHXNb3nY",
      title: "Fall 2022: Wholesome Fall Moments",
      description:
        "A video recap of my Fall (2022). A lot of time spent with friends, family, and my doggos."
    },
    {
      url: "https://youtu.be/a1W3MWwPfa4?si=oKN3MGhJVjpvk9Nj",
      title: "Summer 2022: Touching Grass",
      description:
        "A video recap of my Summer 2022."
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    },
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Do you want to further discuss about my portfolio? My Inbox is open for all.",
  number: "403-998-5029",
  email_address: "jinkilee552@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable
};
