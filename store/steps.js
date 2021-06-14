const jobs_projects = [
  {
    ref: "monk",
    title: "Fullstack Developer (Python - Javascript)",
    resume: "Monk.ai, Dec 2020 - Now",
    previewMedia: "/images/logos/monk.png",
    skills: ["Python", "Flask", "React", "React native"], // Skills list associated to the experience e.g: [C++, JS, PYTHON, Java] etc..
  },
  {
    ref: "nimbleways",
    title: "React Native developer",
    resume: "Nimbleways (Monk.ai), Jan 2020 - Mars 2021",
    previewMedia: "/images/logos/nimbleways.png",
    skills: ["React native", "Typescript", "Styled comp.", "Jest"], // Skills list associated to the experience e.g: [C++, JS, PYTHON, Java] etc..
  },
  {
    ref: "creaweb",
    title: "Frontend - Web Integrator (PHP)",
    resume: "Nimbleways (Monk.ai), Oct 2020 - Dec 2021",
    previewMedia: "/images/logos/creaweb.png",
    skills: ["PHP", "Integration Web", "Wordpress"], // Skills list associated to the experience e.g: [C++, JS, PYTHON, Java] etc..
  },
  {
    ref: "buttertech",
    title: "Fullstack Developer (Entry level)",
    resume: "Buttertech, Mars 2017 - Jan 2020",
    previewMedia: "/images/logos/buttertech.png",
    skills: ["Python - Flask", "VueJs", "ReactJs", "GCP"], // Skills list associated to the experience e.g: [C++, JS, PYTHON, Java] etc..
  },
];
export const state = () => ({
  list: [
    {
      ref: "education",
      year: 2017,
      title: "Education",
      icon: "/images/icons/diploma_icon.png", // Icon displayed near the chip
      projects: [
        {
          ref: "memoire_master_badb",
          title: "Mémoire M2, Business Analystics & Big Data",
          resume:
            "Etude et développement d'une solution de vérification de signature manuscrite",
          previewMedia: "/images/passionate.jpg",
          skills: "", // Skills list associated to the experience e.g: [C++, JS, PYTHON, Java] etc..
        },
        {
          ref: "memoire_master_2",
          title: "Memoire Master 2, Traffic analysis with Computer Vision",
          resume:
            "Sujet Mémoire: Conception et Mise en place d'une solution de comptage de vehicules par videosurveillance ",
          previewMedia:
            "https://www.ecopertica.com/wp-content/uploads/2019/04/190321_MT180_theo.jpg",
          skills: "", // Skills list associated to the experience e.g: [C++, JS, PYTHON, Java] etc..
        },
        {
          ref: "pfe_master_1", // Dialogs ID
          title: "PFE Master 1, IAAS Architecture on a Private Cloud",
          resume:
            "Conception et Mise en place d'une architecture de cloud computing IAAS",
          previewMedia:
            "https://sites.google.com/site/log792gti792/_/rsrc/1450208518738/home/PFE%20wordle.png?height=255&width=400",
          skills: "", // Skills list associated to the experience e.g: [C++, JS, PYTHON, Java] etc..
        },
      ], // Project lists with skills
    },
    {
      ref: "interships",
      year: 2020,
      title: "Interships",
      icon: "/images/icons/internship_icon.png",
      projects: [],
    },
    {
      ref: "certifications",
      year: 2020,
      title: "Certifications",
      icon: "/images/icons/certificate_icon.png",
      projects: [],
    },
    {
      ref: "experiences",
      year: 2019,
      title: "Jobs & Experiences",
      icon: "/images/icons/job_icon.png",
      projects: jobs_projects,
    },
    {
      ref: "recent_work",
      year: new Date().getFullYear(),
      title: "Recent works & Activities",
      icon: "/images/icons/lab_icon.png",
      projects: [
        {
          ref: "first_se_cdi",
          title: "(Open to work) Fullstack developer",
          resume: "Listening to the market",
          previewMedia: "/images/projects/Portfolio.png",
          skills: "Contact me", // Skills list associated to the experience e.g: [C++, JS, PYTHON, Java] etc..
        },
        ...jobs_projects,
      ],
    },
  ],
});

export const mutations = {};

export const getters = {};

export const actions = {};
