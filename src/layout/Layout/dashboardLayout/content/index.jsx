export const DASHBOARD_CONTENT = {
  leftStudentNav: [
    {
      id: 1,
      icon: `material-symbols:dashboard`,
      title: `Dashboard`,
      link: `/student/dashboard`,
    },
    {
      id: 2,
      icon: `eos-icons:product-classes`,
      title: `Classes`,
      link: `/student/classes`,
    },
    {
      id: 3,
      icon: `mdi:message-group`,
      title: `Messages`,
      link: `/student/messages`,
    },
  ],
  leftTeacherNav: [
    {
      id: 1,
      icon: `material-symbols:dashboard`,
      title: `Dashboard`,
      link: `/tutor/dashboard`,
    },
    {
      id: 2,
      icon: `eos-icons:product-classes`,
      title: `Classes`,
      link: `/tutor/classes/1/class`,
    },
    // {
    //   id: 3,
    //   icon: `mdi:message-group`,
    //   title: `Messages`,
    //   link: `/tutor/messages`,
    // },
    {
      id: 3,
      icon: `fluent:clipboard-task-24-filled`,
      title: `Tasks`,
      link: `/tutor/tasks`,
    },
    {
      id: 4,
      icon: `grommet-icons:resources`,
      title: `Resources`,
      link: `/tutor/resources/all`,
    },
  ],
  leftAdminNav: [
    {
      id: 1,
      icon: `material-symbols:dashboard`,
      title: `Dashboard`,
      link: `/admin/dashboard`,
    },
    {
      id: 2,
      icon: `iconoir:graduation-cap`,
      title: `Courses`,
      link: `/admin/courses`,
    },
    {
      id: 4,
      icon: `eos-icons:product-classes`,
      title: `Classes`,
      link: `/admin/classes`,
    },
    {
      id: 3,
      icon: `grommet-icons:resources`,
      title: `Resources`,
      link: `/admin/resources/all`,
    },
    {
      id: 5,
      icon: `mdi:account-payment`,
      title: `Payment`,
      link: `/admin/payment`,
    },
    {
      id: 6,
      icon: `gridicons:multiple-users`,
      title: `Users`,
      link: `/admin/users`,
    },
    {
      id: 7,
      icon: `material-symbols-light:create-new-folder-rounded`,
      title: `Create`,
      // link: `/admin/create`,
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
        img: `https://res.cloudinary.com/dkszgtapy/image/upload/v1686218525/techstudio-web-app/assets/images/intro-img3_p2sdv6.webp`,
        title: `Hello Tomiwa!`,
        desc: `You can be the best you can on this platform. Learn anytime and boost your skills`,
      },
    },

    taskSummary: {
      cards: [
        {
          id: 1,
          img: {
            src: `fe:users`,
            accent: `#ECEAFE`,
          },
          title: `Total Tasks`,
          total: 24,
        },
        {
          id: 2,
          img: {
            src: ``,
            accent: `#EBF0E6`,
          },
          title: `Tasks submitted`,
          total: 12,
        },
        {
          id: 3,
          img: {
            src: ``,
            accent: `#D9EDFF`,
          },
          title: `Pending Tasks`,
          total: 12,
        },
        {
          id: 4,
          img: {
            src: ``,
            accent: `#E000171A`,
          },
          title: `Weeks Remaining`,
          total: 7,
        },
      ],
    },

    resources: {
      PDF: [
        {
          id: 1,
          title: `Design and Insights.pdf`,
          icon: `bi:file-earmark-pdf-fill`,
          color: `red`,
        },
        {
          id: 2,
          title: `Design Methodology.xslx`,
          icon: `vscode-icons:file-type-excel2`,
          color: `blue`,
        },
        {
          id: 4,
          title: `Application for Leave.ppt`,
          icon: `vscode-icons:file-type-powerpoint2`,
          color: `red`,
        },
        {
          id: 5,
          title: `Working with colours.docx`,
          icon: `bxs:file-doc`,
          color: `blue`,
        },
        {
          id: 6,
          title: `Tools and tips.docx`,
          icon: `bxs:file-doc`,
          color: `blue`,
        },
        {
          id: 7,
          title: `Presenting your design.docx`,
          icon: `bxs:file-doc`,
          color: `blue`,
        },
        { id: 8, title: `Portfolio.docx`, icon: `bxs:file-doc`, color: `blue` },
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
        img: `https://res.cloudinary.com/dkszgtapy/image/upload/v1686218527/techstudio-web-app/assets/images/teacher_f4hm2d.webp`,
        title: `Hello Rafiu!`,
        desc: `Welcome to your techstudio dashboard. Time to pass knowledge down to Your students.`,
      },
    },

    taskSummary: {
      cards: [
        {
          id: 1,
          img: {
            src: `fe:users`,
            accent: `#4847E033`,
            color: `#4847E0`,
          },
          title: `Enrolled Students`,
          total: 100,
        },
        {
          id: 3,
          img: {
            src: `la:chalkboard-teacher`,
            accent: `#56790033`,
            color: `#567900`,
          },
          title: `Class Assigned`,
          total: 12,
        },
        {
          id: 4,
          img: {
            src: `material-symbols:create-new-folder`,
            accent: `#E0001733`,
            color: `#E00017`,
          },
          title: `Task Received`,
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
            src: `fe:users`,
            accent: `#4847E033`,
            color: `#4847E0`,
          },
          title: `Enrolled Students`,
          total: 100,
        },
        {
          id: 2,
          img: {
            src: `la:chalkboard-teacher`,
            accent: `#0266F433`,
            color: `#0266F4`,
          },
          title: `Tutors`,
          total: 12,
        },
        {
          id: 3,
          img: {
            src: `material-symbols:create-new-folder`,
            accent: `#56790033`,
            color: `#567900`,
          },
          title: `Resources`,
          total: 12,
        },
        {
          id: 4,
          img: {
            src: `tabler:currency-naira`,
            accent: `#E0001733`,
            color: `#E00017`,
          },
          title: `Outstanding fees`,
          total: 7,
        },
      ],
    },
  },
}
