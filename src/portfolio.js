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
  title: "Hi, I'm Jinki",
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
  subTitle:
    "A creative problem solver with a passion for designing, planning, and developing innovative solutions. I mostly enjoy working on the front-end, but I am always open to learning new things",
  skills: [
    emoji(
      "⚡ Highly motivated and passionate about learning new technologies. I always look for ways to integrate and share new technologies with others"
    ),
    emoji(
      "⚡ Very detail-oriented and organized. I love to plan and design to create the best user experience"
    ),
    emoji(
      "⚡ Enjoy client to client interaction and working in a team environment. I am a great communicator and love to collaborate with others"
    ),
    emoji(
      "🌟 I love to meet new people, organize hangouts, play sports and do other physical activities! (Golf, Ski, Volleyball, Boardball, Camping, Backpacking and Body Building)"
    ),
    emoji(
      "🌟 I am a big dog person! I have two Australian Labradoodles, Dooly and Lulu"
    ),
    emoji(
      "🌟 I am a very outgoing, creative, energetic and active person. I love to brighten up the room, share my honest opinions and make sure everyone is comfortable"
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
      duration: "May 2022 - December 2024*",
      desc: "GPA: 3.80 / 4.00",
      descBullets: [
        "Completed 8-month Co-Op Work Term — (January - August 2023)",
        "Volunteer: Peer Mentor Team Lead  — (July 2023 - Present)"
      ]
    },
    {
      schoolName: "University of Calgary",
      logo: require("./assets/images/ucalgary.jpg"),
      subHeader: "Bachelor of Arts in Economics",
      duration: "September 2017 - April 2022",
      desc: "GPA: 3.32 / 4.00",
      descBullets: [
        "Volunteer: Society of Undergraduates in Economics Event Coordinator — (September 2017 - 2022)"
      ]
    },
    {
      schoolName: "Haskayne School of Business",
      logo: require("./assets/images/haskayne.webp"),
      subHeader: "Minor in Business Management and Society",
      duration: "September 2017 - April 2022",
      descBullets: [
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
      role: "Junior Software Specialist",
      company: "ENMAX Corporation",
      companylogo: require("./assets/images/ENMAX.jfif"),
      date: "January 2024 – Present",
      desc: "Digital Experience",
      descBullets: [
        "Manage system change processes in an n-tier application environment",
        "Contribute to the continuous improvement of ENMAX internal and external web applications by participating in the planning, design, and development of web-based solutions",
        "Ensure complete and accurate backups of the SharePoint Farms happen on a regular schedule",
        "Manage the plans, schedules, and accuracy of all software environments within the Digital Experience portfolio",
        "Contribute to detailed project plans to define project scope, cost, and timeline",
        "Anticipate, identify, troubleshoot, and resolve application defects and deficiencies",
        "Participate in Change Advisory Board (CAB) meetings to discuss release scope"

      ]
    },
    {
      role: "Project Management, Team Lead",
      company: "ENMAX Corporation",
      companylogo: require("./assets/images/ENMAX.jfif"),
      date: "September 2023 – December 2023",
      desc: "Digital Experience",
      descBullets: [
        "Spearheading the concept of collaborating and partnering ENMAX with post-secondary schools to explore capstone project opportunities, becoming the trailblazer in delivering innovative projects, and setting a precedent for successful cooperation",
        "Led the entire design process, starting from gathering initial business requirements, conducting comprehensive user research, user testing, Figma wireframes and mood boards to overseeing software development and finalizing rollout/re-launch planning for the IT Recognition Portal",
        "Received Work Integrated Learning Scholarship, valued at $2000 per recipient",
        "Promoted organizational change management and introducing new KPIs to increase employee engagement and recognition"
      ]
    },
    {
      role: "Co-Op Student",
      company: "ENMAX Corporation",
      companylogo: require("./assets/images/ENMAX.jfif"),
      date: "January 2023 – August 2023",
      desc: "Digital Experience",
      descBullets: [
        "Pioneered ENMAX's co-op program, infusing youthful energy and cutting-edge practices",
        "Documented enmax.com 2023 updates in release notes and utilized Microsoft Sway to create captivating releases",
        "Managed Service Now daily to track tickets and requests, and delegated tasks to appropriate Microsoft Azure DevOps board team members for timely resolution",
        "Proposed and executed novel UX/UI enhancements on enmax.com and enmax.next",
        "Proposed import/export tool for Azure DevOps and integrated generative AI tools for efficient software development"
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
  subtitle: "Some of the projects and companies I have made",
  projects: [
    {
      image: require("./assets/images/IT_RecognitionPortal.png"),
      projectName: "IT Recognition Portal",
      projectDesc:
        "The ENMAX IT Recognition Portal is a web application that allows ENMAX employees to recognize each other for their hard work and dedication. The application is built using ASP.NET Core 6.0",
      footerLink: [
        {
          name: "Visit Portfolio",
          url: "https://project.jinkilee.ca/ENMAX"
        },
        {
          name: "View Presentation",
          url: "https://sway.office.com/q5o93xDSRl1xy7I7?ref=Link"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/journalApp.png"),
      projectName: "Journal App",
      projectDesc:
        "Look back on your journal entries and the songs you chose. Rediscover how music framed your emotions and experiences, offering a new perspective on your personal journey.",
      footerLink: [
        {
          name: "Visit Page",
          url: "https://project.jinkilee.ca/Journal"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/projectPortfolio.png"),
      projectName: "Project Portfolio",
      projectDesc:
        "A dedicated website to host all my projects, apps, vlogs, project demos, and other digital work",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://project.jinkilee.ca/Projects"
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
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have achieved!",

  achievementsCards: [
    {
      title: "Scholarships and Awards",
      subtitle: "Accumulated over $16,000 in scholarships and awards",
      image: require("./assets/images/scholarship.png"),
      imageAlt: "Scholarship and Awards",
      footerLink: [
        {
          name: "View Scholarships and Awards",
          url: "https://www.linkedin.com/in/jinkilee/details/honors/"
        }
      ]
    },
    {
      title: "AZ 900",
      subtitle: "Microsoft Azure Fundamentals",
      image: require("./assets/images/az900.png"),
      imageAlt: "AZ 900",
      footerLink: [
        {
          name: "View Certificate",
          url: ""
        }
      ]
    },
    {
      title: "Power Engineer - Special Boiler Operator",
      subtitle: "Credential ID: A-92066",
      image: require("./assets/images/absa.png"),
      imageAlt: "Power Engineer - Special Boiler Operator",
      footerLink: [
        {
          name: "View Certification",
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
      title: "Peru - Crawl Outta Love",
      description:
        "Join my Peru backpacking adventure through Arequipa, Lima, Cusco, Machu Picchu, and the Amazon forest, a journey filled with diverse landscapes and unforgettable experiences."
    },
    {
      url: "https://sway.office.com/cUCSN8ErMVeOv633?ref=Link",
      title: "Peru - Step Out",
      description:
        "Follow my solo Peru adventure with Contiki, a journey of self-discovery and celebration in a land of rich culture and stunning scenery."
    },
    {
      url: "https://sway.office.com/cUCSN8ErMVeOv633?ref=Link",
      title: "ENMAX | Digital Experience",
      description:
        "Explore my endeavors and projects during my time at ENMAX, creatively presented using Microsoft Sway."
    },
    {
      url: "https://youtu.be/LvfFysu9W48?si=VBKu2XRzjXart8rb",
      title: "ENMAX | Summer Student Program",
      description:
        "Immerse yourself in a video capturing my involvement in the exciting activities of ENMAX's Summer Student Program."
    },
    {
      url: "https://youtu.be/Cn85cjVAF7o?si=kvVfb_rI2LxibOQR",
      title: "End of Summer 2023",
      description:
        "Watch the final video documenting my Summer 2023, a memorable journey reuploaded and showcased on @boardballsport's Instagram."
    },
    {
      url: "https://youtu.be/XEXQuQ4VqTc?si=bCZIPUQVhyy4j9ib",
      title: "Summer 2023",
      description:
        "Experience the diverse highlights of my Summer 2023, from Stampede and sports to meeting Arizona Zervas. Join the adventure!"
    },
    {
      url: "https://youtu.be/T4aVaJ2iOz8?si=tuJ1MFeJRNeNYEAJ",
      title: "Seoul 2023",
      description:
        "Relive my inaugural visit to Seoul in 2023 as I took a break from work to join my parents during the concluding week of their vacation."
    },
    {
      url: "https://youtu.be/HowRW6dEJ_g?si=a1JZjVnccm-V9cmV",
      title: "Winter 2022",
      description:
        "Embark on a journey through my winter activities in 2022, filled with skiing, skating, and spirited volleyball matches."
    },
    {
      url: "https://youtu.be/eHbgq8gipbk?si=49MRnAxloD8TVERO",
      title: "New Year: 2022 Recap",
      description:
        "A comprehensive video recap encapsulating the essence of my 2022, featuring the varied experiences across all four seasons."
    },
    {
      url: "https://youtu.be/6uVYl-Gg8tM?si=6jZmgjsIG6mhNEkR",
      title: "Healy Pass - Sunrise Hike",
      description:
        "Join me and my friends on a breathtaking sunrise hike to Healy Pass. Our original destination was Lake Moraine, but the adventure took a delightful turn."
    },
    {
      url: "https://youtu.be/MuAWn4t3oYQ?si=3GyU1q9sziG8qYqk",
      title: "Vegas 2022",
      description:
        "Dive into the excitement of my first visit to Las Vegas. A week filled with adventure, laughter, and unforgettable moments with friends."
    },
    {
      url: "https://youtu.be/rs8wx0H8EpM?si=t3SfCCrhQHXNb3nY",
      title: "Fall 2022: Wholesome Fall Moments",
      description:
        "Celebrate the beauty of Fall 2022 with a video recap showcasing precious moments spent with friends, family, and, of course, my beloved doggos."
    },
    {
      url: "https://youtu.be/a1W3MWwPfa4?si=oKN3MGhJVjpvk9Nj",
      title: "Summer 2022: Touching Grass",
      description:
        "Experience the highlights of my Summer 2022 through a vibrant and engaging video recap of the season's adventures and memorable moments."
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "Project Portfolio",
  subtitle: emoji(
    "A dedicated website to host all my projects, apps, vlogs, project demos, and other digital work! 😀"
  ),

  talks: [
    {
      title: "Project Portfolio",
      subtitle: "More details in the link below",
      slides_url: "https://project.jinkilee.ca/Projects",
      event_url: "https://project.jinkilee.ca/Projects"
    }
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
