export const state = () => ({
  list: [{
    ref: 'education',
    year: 2017,
    title: 'Education',
    icon: '/images/icons/diploma_icon.png', // Icon displayed near the chip
    projects: [{
      ref: 'pfe_master_1', // Dialogs ID
      title: 'PFE Master 1, IAAS Private Cloud',
      resume: "Mise en place d\'une architecture de cloud computing",
      previewMedia: 'https://sites.google.com/site/log792gti792/_/rsrc/1450208518738/home/PFE%20wordle.png?height=255&width=400',
      skills: '', // Skills list associated to the experience e.g: [C++, JS, PYTHON, Java] etc..
    }, {
      ref: 'these_master_2',
      title: 'These Master 2, Computer Vision',
      resume: 'Sujet Memoire: Conception et Mise en place d\'une solution de comptage de vehicules par videosurveillance ',
      previewMedia: 'https://www.ecopertica.com/wp-content/uploads/2019/04/190321_MT180_theo.jpg',
      skills: '', // Skills list associated to the experience e.g: [C++, JS, PYTHON, Java] etc..
    }] // Project lists with skills
  }, {
    ref: 'interships',
    year: 2020,
    title: 'Interships',
    icon: '/images/icons/internship_icon.png',
    projects: []
  }, {
    ref: 'certifications',
    year: 2020,
    title: 'Certifications',
    icon: '/images/icons/certificate_icon.png',
    projects: []
  }, {
    ref: 'experiences',
    year: 2019,
    title: 'Jobs & Experiences',
    icon: '/images/icons/job_icon.png',
    projects: []
  }, {
    ref: 'recent_work',
    year: new Date().getFullYear(),
    title: 'Recent works & Activities',
    icon: '/images/icons/lab_icon.png',
    projects: [{
        ref: 'first_se_cdi',
        title: '(CDI) Sofware Engineer - ASAP',
        resume: 'Looking for a developer fulltime job, in a big-data oriented business',
        previewMedia: 'https://d2slcw3kip6qmk.cloudfront.net/marketing/blogs/tech/internship-blog-post/internship-blog-post-image@2x.png',
        skills: '', // Skills list associated to the experience e.g: [C++, JS, PYTHON, Java] etc..
      }, {
        ref: 'first_ds_intership',
        title: '(Intern) Data Science Internship - ASAP ',
        resume: 'Looking for first-entry Data Science Job or Internship',
        previewMedia: 'https://med.unhas.ac.id/sinovia/wp-content/uploads/2019/04/S__9175043-1024x682.jpg',
        skills: '', // Skills list associated to the experience e.g: [C++, JS, PYTHON, Java] etc..
      }
    ]
  }, ]
})

export const mutations = {}

export const getters = {}

export const actions = {}
