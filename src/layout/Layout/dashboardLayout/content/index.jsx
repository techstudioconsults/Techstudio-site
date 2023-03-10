import img1Grey from '../../../../assets/icons/menu-grey.png'
import img1Light from '../../../../assets/icons/menu-white.png'
import img2Grey from '../../../../assets/icons/cap-grey.png'
import img2Light from '../../../../assets/icons/cap-light.png'
import img3Grey from '../../../../assets/icons/message-gray.png'
import img3Light from '../../../../assets/icons/message-gray.png'
import checklistGrey from '../../../../assets/icons/checklist-grey.png'
import checklistLight from '../../../../assets/icons/checklist-light.png'
import teacherImg4 from '../../../../assets/images/teacher.webp'
import studentImg4 from '../../../../assets/images/db-banner.-img.webp'
import img5 from '../../../../assets/icons/Icon-awesome-folder.png'
import img6 from '../../../../assets/icons/Icon-awesome-tasks.png'
import img7 from '../../../../assets/icons/Icon-awesome-folder-plus.png'
import img8 from '../../../../assets/icons/Icon-material-timelapse.png'

export const DASHBOARD_CONTENT = {
  leftStudentNav: [
    {
      id: 1,
      imgGrey: img1Grey,
      imgLight: img1Light,
      title: `Dashboard`,
      link: `/student/dashboard`,
    },
    {
      id: 2,
      imgGrey: img2Grey,
      imgLight: img2Light,
      title: `Classes`,
      link: `/student/classes`,
    },
    {
      id: 3,
      imgGrey: img3Grey,
      imgLight: img3Light,
      title: `Messages`,
      link: `/student/messages`,
    },
  ],
  leftTeacherNav: [
    {
      id: 1,
      imgGrey: img1Grey,
      imgLight: img1Light,
      title: `Dashboard`,
      link: `/teacher/dashboard`,
    },
    {
      id: 2,
      imgGrey: img2Grey,
      imgLight: img2Light,
      title: `Classes`,
      link: `/teacher/classes`,
    },
    {
      id: 3,
      imgGrey: img3Grey,
      imgLight: img3Light,
      title: `Messages`,
      link: `/teacher/messages`,
    },
    {
      id: 4,
      imgGrey: checklistGrey,
      imgLight: checklistLight,
      title: `Tasks`,
      link: `/teacher/tasks`,
    },
  ],
  leftAdminNav: [
    {
      id: 1,
      imgGrey: img1Grey,
      imgLight: img1Light,
      title: `Dashboard`,
      link: `/admin/dashboard`,
    },
    {
      id: 2,
      imgGrey: img2Grey,
      imgLight: img2Light,
      title: `Classes`,
      link: `/admin/classes`,
    },
    {
      id: 3,
      imgGrey: img3Grey,
      imgLight: img3Light,
      title: `Messages`,
      link: `/admin/messages`,
    },
    {
      id: 4,
      imgGrey: checklistGrey,
      imgLight: checklistLight,
      title: `Tasks`,
      link: `/admin/tasks`,
    },
  ],

  imageList: [
    `https://res.cloudinary.com/kingsleysolomon/image/upload/v1643440809/clapmi/avatar_3_lnfwyk.png`,
    `https://res.cloudinary.com/kingsleysolomon/image/upload/v1643440809/clapmi/avatar_3_lnfwyk.png`,
    `https://res.cloudinary.com/kingsleysolomon/image/upload/v1643440809/clapmi/avatar_3_lnfwyk.png`,
    `https://res.cloudinary.com/kingsleysolomon/image/upload/v1643440809/clapmi/avatar_3_lnfwyk.png`,
    `https://res.cloudinary.com/kingsleysolomon/image/upload/v1643440809/clapmi/avatar_3_lnfwyk.png`,
    `https://res.cloudinary.com/kingsleysolomon/image/upload/v1643440809/clapmi/avatar_3_lnfwyk.png`,
    `https://res.cloudinary.com/kingsleysolomon/image/upload/v1643440809/clapmi/avatar_3_lnfwyk.png`,
    `https://res.cloudinary.com/kingsleysolomon/image/upload/v1643440809/clapmi/avatar_3_lnfwyk.png`,
  ],

  studentBoard: {
    banner: {
      header: {
        img: studentImg4,
        title: `Hello Tomiwa!`,
        desc: `You can be the best you can on this platform. Learn anytime and boost your skills`,
      },
    },

    taskSummary: {
      cards: [
        {
          id: 1,
          img: {
            src: img5,
            accent: `#ECEAFE`,
          },
          title: `Total Tasks`,
          total: 24,
        },
        {
          id: 2,
          img: {
            src: img7,
            accent: `#EBF0E6`,
          },
          title: `Tasks submitted`,
          total: 12,
        },
        {
          id: 3,
          img: {
            src: img6,
            accent: `#D9EDFF`,
          },
          title: `Pending Tasks`,
          total: 12,
        },
        {
          id: 4,
          img: {
            src: img8,
            accent: `#E000171A`,
          },
          title: `Weeks Remaining`,
          total: 7,
        },
      ],
    },

    resources: {
      PDF: [
        { id: 1, title: `Design and Insights.pdf` },
        { id: 2, title: `Design Methodology.xslx` },
        { id: 4, title: `Application for Leave.ppt` },
        { id: 5, title: `Working with colours.docx` },
        { id: 6, title: `Tools and tips.docx` },
        { id: 7, title: `Presenting your design.docx` },
        { id: 8, title: `Portfolio.docx` },
        { id: 9, title: `Portfolio.docx` },
        { id: 10, title: `Portfolio.docx` },
        { id: 11, title: `Portfolio.docx` },
        { id: 12, title: `Portfolio.docx` },
        { id: 13, title: `Portfolio.docx` },
      ],
      video: [
        { id: 1, title: `Design and Insights.pdf` },
        { id: 2, title: `Design Methodology.xslx` },
        { id: 4, title: `Application for Leave.ppt` },
        { id: 5, title: `Working with colours.docx` },
        { id: 6, title: `Tools and tips.docx` },
        { id: 7, title: `Presenting your design.docx` },
        { id: 8, title: `Portfolio.docx` },
        { id: 9, title: `Portfolio.docx` },
        { id: 10, title: `Portfolio.docx` },
        { id: 11, title: `Portfolio.docx` },
        { id: 12, title: `Portfolio.docx` },
        { id: 13, title: `Portfolio.docx` },
      ],
    },

    notification: [
      {
        id: 1,
        type: `video`,
        message: `New video has been uploaded`,
        metaDetails: `By Sorunke Sherif`,
      },
      {
        id: 2,
        type: `message`,
        message: `Your tutor sent you a message`,
        metaDetails: `2:00 pm`,
      },
      {
        id: 3,
        type: `file`,
        message: `New Resources has been uploaded`,
        metaDetails: `By Sorunke Sherif`,
      },
    ],
  },

  teacherDashboard: {
    banner: {
      header: {
        img: teacherImg4,
        title: `Hello Rafiu!`,
        desc: `Welcome to your techstudio dashboard. Time to pass knowledge down to Your students.`,
      },
    },

    taskSummary: {
      cards: [
        {
          id: 1,
          img: {
            src: img5,
            accent: `#ECEAFE`,
          },
          title: `Enrolled Students`,
          total: 24,
        },
        {
          id: 2,
          img: {
            src: img7,
            accent: `#EBF0E6`,
          },
          title: `Tasks assigned`,
          total: 12,
        },
        {
          id: 3,
          img: {
            src: img6,
            accent: `#D9EDFF`,
          },
          title: `Tasks Submitted`,
          total: 12,
        },
        {
          id: 4,
          img: {
            src: img8,
            accent: `#E000171A`,
          },
          title: `Weeks Remaining`,
          total: 7,
        },
      ],
    },

    resources: {
      PDF: [
        { id: 1, title: `Design and Insights.pdf` },
        { id: 2, title: `Design Methodology.xslx` },
        { id: 4, title: `Application for Leave.ppt` },
        { id: 5, title: `Working with colours.docx` },
        { id: 6, title: `Tools and tips.docx` },
        { id: 7, title: `Presenting your design.docx` },
        { id: 8, title: `Portfolio.docx` },
        { id: 9, title: `Portfolio.docx` },
        { id: 10, title: `Portfolio.docx` },
        { id: 11, title: `Portfolio.docx` },
        { id: 12, title: `Portfolio.docx` },
        { id: 13, title: `Portfolio.docx` },
      ],
      video: [
        { id: 1, title: `Design and Insights.pdf` },
        { id: 2, title: `Design Methodology.xslx` },
        { id: 4, title: `Application for Leave.ppt` },
        { id: 5, title: `Working with colours.docx` },
        { id: 6, title: `Tools and tips.docx` },
        { id: 7, title: `Presenting your design.docx` },
        { id: 8, title: `Portfolio.docx` },
        { id: 9, title: `Portfolio.docx` },
        { id: 10, title: `Portfolio.docx` },
        { id: 11, title: `Portfolio.docx` },
        { id: 12, title: `Portfolio.docx` },
        { id: 13, title: `Portfolio.docx` },
      ],
    },

    notification: [
      {
        id: 1,
        type: `video`,
        message: `New video has been uploaded`,
        metaDetails: `By Sorunke Sherif`,
      },
      {
        id: 2,
        type: `message`,
        message: `Your tutor sent you a message`,
        metaDetails: `2:00 pm`,
      },
      {
        id: 3,
        type: `file`,
        message: `New Resources has been uploaded`,
        metaDetails: `By Sorunke Sherif`,
      },
    ],
  },

  adminDashboard: {
    taskSummary: {
      cards: [
        {
          id: 1,
          img: {
            src: img5,
            accent: `#ECEAFE`,
          },
          title: `Enrolled Students`,
          total: 100,
        },
        {
          id: 2,
          img: {
            src: img7,
            accent: `#EBF0E6`,
          },
          title: `Tutors`,
          total: 12,
        },
        {
          id: 3,
          img: {
            src: img6,
            accent: `#D9EDFF`,
          },
          title: `Materials`,
          total: 12,
        },
        {
          id: 4,
          img: {
            src: img8,
            accent: `#E000171A`,
          },
          title: `Outstanding fees`,
          total: 7,
        },
      ],
    },
  },
}
