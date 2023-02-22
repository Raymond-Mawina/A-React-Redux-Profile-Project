import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import CallIcon from "@mui/icons-material/Call";
import BadgeIcon from "@mui/icons-material/Badge";
import AttachEmailIcon from "@mui/icons-material/AttachEmail";
import VerifiedIcon from "@mui/icons-material/Verified";
import MilitaryTechIcon from "@mui/icons-material/MilitaryTech";
import WorkIcon from "@mui/icons-material/Work";

export const profileDetails = {
  contactBasic: [
    { id: "name", contact: "Jiraiya Hatake", icon: BadgeIcon },
    { id: "number", contact: "0868888888", icon: CallIcon },
  ],
  contactLinks: [
    {
      id: "github",
      link: "https://github.com/Raymond-Mawina",
      icon: GitHubIcon,
    },
    {
      id: "linkedin",
      link: "https://linkedin.com/raymond-mawina",
      icon: LinkedInIcon,
    },
  ],
  email: {
    id: "email",
    link: "rmawina@gmail.com",
    icon: AttachEmailIcon,
  },

  employmentHistory: [
    {
      companyName: "BMW",
      position: "Web Dev",
      duration: "2016-2017",
    },
    {
      companyName: "Audi",
      position: "Web Dev",
      duration: "2017-2019",
    },
    {
      companyName: "Apple",
      position: "Web Dev",
      duration: "2019-2022",
    },
  ],
  hireMeLink: {
    link: "https://raymond-mawina.github.io/",
    icon: WorkIcon,
  },
  memorableStatement:
    "Jiraiya Hatake is a web developer with vast work experience in multiple global companies. He thrives on solving problems and getting challenged to craft innovative solutions.",
  testimonials: [
    {
      name: "Mahlatse",
      testimony:
        "He is considerate, offers advice, and always supports all developers on the team.",
    },
    {
      name: "Loliwe",
      testimony: "Awesome web developer. He has a good work ethic.",
    },
    {
      name: "Edward",
      testimony:
        "Very knowledgeable and always ready to help. One of the most approachable dev team members.",
    },
  ],
  trophiesAndBadges: [
    {
      type: "badge",
      name: "PR reviewer of the week",
      amount: 5,
      icon: VerifiedIcon,
    },
    {
      type: "trophy",
      name: "PR reviewer of the year",
      amount: 1,
      icon: MilitaryTechIcon,
    },
    {
      type: "Badge",
      name: "Tilde reviewer of the month",
      amount: 3,
      icon: VerifiedIcon,
    },
  ],
};
