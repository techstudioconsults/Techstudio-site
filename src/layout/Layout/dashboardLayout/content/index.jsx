import img1 from '../../../../assets/icons/menu-white.png'
import img2 from '../../../../assets/icons/cap-grey.png'
import img3 from '../../../../assets/icons/message-gray.png'
import img4 from '../../../../assets/images/db-banner.-img.webp'
import img5 from '../../../../assets/icons/Icon-awesome-folder.png'
import img6 from '../../../../assets/icons/Icon-awesome-tasks.png'
import img7 from '../../../../assets/icons/Icon-awesome-folder-plus.png'
import img8 from '../../../../assets/icons/Icon-material-timelapse.png'

export const DASHBOARD_CONTENT = {
  leftStudentNav: [
    {
      id: 1,
      img: img1,
      title: `Dashboard`,
      link: `/student/dashboard`,
    },
    {
      id: 2,
      img: img2,
      title: `Classes`,
      link: `/student/classes`,
    },
    {
      id: 3,
      img: img3,
      title: `Messages`,
      link: `/student/messages`,
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
        img: img4,
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
  },
}
