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
  title: "What I do",
  subTitle: "A creative problem solver with a passion for designing, planning, and developing innovative solutions. I mostly enjoy working on the front-end, but I am always open to learning new things.",
  skills: [
    emoji(
      "⚡ Highly motivated and passionate about learning new technologies. I always look for ways to integrate and share new technologies with others."
    ),
    emoji("⚡ Very detail-oriented and organized. I love to plan and design to create the best user experience"),
    emoji(
      "⚡ Enjoy client to client interaction and working in a team environment. I am a great communicator and love to collaborate with others."
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
        "Jason Lang Scholarship — (Feb 2023)"
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
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: false, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Digital Experience",
      company: "ENMAX Corporation",
      companylogo: require("./assets/images/ENX_Logo_RED.png"),
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
      companylogo: require("./assets/images/ENX_Logo_RED.png"),
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
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
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
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+92-0000000000",
  email_address: "saadpasta70@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
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
