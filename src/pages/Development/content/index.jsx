import frontendImg from '../../../assets/images/frontend.webp'
import fullstack from '../../../assets/images/fullstack.webp'
import uiux from '../../../assets/images/uiux.webp'
import datascience from '../../../assets/images/datascience.webp'
import mobile from '../../../assets/images/android.webp'
import numberOne from '../../../assets/images/numberOne.webp'
import numberTwo from '../../../assets/images/numberTwo.webp'
import numberThree from '../../../assets/images/numberThree.webp'

// this data would also be used in the intro page.

export const DEVELOPMENT_CONTENT = {
  frontendDevelopment: {
    hero: {
      title: `Frontend Web Development`,
      subTitle: `Let’s help you become a professional frontend web developer. You’ll learn all you need to know to become a Frontend Developer and build interesting portfolios while learning the fundmentals of HTML, CSS, JavaScript and React.`,
      img: frontendImg,
    },

    sectionTwo: {
      header: {
        title: `Our process`,
      },
      cards: [
        {
          img: numberOne,
          text: `We teach the important skills required to jumpstart your career as a web developer. With 5 straight weeks of web training, you learn to think and build like frontend developers.`,
        },
        {
          img: numberTwo,
          text: `You move from understanding web basics to launching Single Page Applications (SPAs). You’ll be taught to build smart SPAs using vanilla JavaScript that interacts with user inputs.`,
        },
        {
          img: numberThree,
          text: `And finally, you’ll learn the fundamentals of working as a team; collaborate with other group members of the class to build, change, maintain, and secure an application. Track your team development process using Version Control Systems.`,
        },
      ],
    },

    sectionFour: {
      header: {
        title: `What you will learn`,
      },
      list: [
        {
          id: 1,
          title: `Fundamentals`,
          desc: `The first phase of this bootcamp is to help you appreciate the fundamentals of web development, understanding structure, design and getting comfortable coding in HTML, CSS and Sass.`,
        },
        {
          id: 2,
          title: `Using Boostrap`,
          desc: `You’ll learn speedup your development and layout mobile-ready webpages using the most popular CSS Framework - Boostrap 4. You’ll understand how to automatically create responsive websites that render perfectly on all display platforms.`,
        },
        {
          id: 3,
          title: `JavaScript Basics`,
          desc: `After mastering the fundamentals, the focus shifts towards frontend programming where you learn the basics of JavaScript. In this section, you’ll be introduced to data structures, data types, control structures and conditionals.`,
        },
        {
          id: 4,
          title: `JavaScript and the DOM`,
          desc: `After taking care of the fundamentals, you’ll learn to interact with the Document Object Model (DOM), listen to user interactions and add change the contents of a webpage.`,
        },
        {
          id: 5,
          title: `Object-Oriented JavaScript`,
          desc: `You’ll learn to build real-life applications using object-oriented JavaScript techniques. You’ll also learn the major improvements of JavaScript in the form of ES6.`,
        },
        {
          id: 6,
          title: `React Library`,
          desc: `You’ll be introduced to the most popular JavaScript library - the REACT library. You’ll learn to build a React application from scratch, utilizing the react components to manage the user interface.`,
        },
        {
          id: 7,
          title: `Developer Tools & Testing`,
          desc: `You’ll be introduced to the Chrome Developers’ Tool and how to use it to debug and maintain your application. Learn to use testing to help build app features.`,
        },
        {
          id: 8,
          title: `Version Control`,
          desc: `You’ll learn to use the Git version control system, collaborate with other team members and push your projects to GitHub using Git`,
        },
        {
          id: 9,
          title: `Production Deployment`,
          desc: `You’ll be taught how to deploy your production ready project to a public web server to be accessed by everyone in the online community.`,
        },
      ],
    },
  },
  UIUXDevelopment: {
    hero: {
      title: `User Interface & user experience Design`,
      subTitle: `Learn to design and deliver digital products that serve clients’ needs and solve users’ problems. Understand the fundamental techniques and tools of design like problem definition, user research, prototyping, testing, and more.`,
      img: uiux,
    },

    sectionTwo: {
      header: {
        title: `Our process`,
      },
      cards: [
        {
          img: numberOne,
          text: `We teach the important skills required to jumpstart your career as a product designer. With 10 straight weeks of training, you learn to think, build and solve complex UI/UX challenges.`,
        },
        {
          img: numberTwo,
          text: `You move from understanding the core principles of effective design to applying tactics like wireframing, low- and high-fidelity prototyping, usability testing, and user interface design to build a portfolio of intuitive digital products.`,
        },
        {
          img: numberThree,
          text: `You’ll learn the fundamentals of working as a team; sharpen your communication skills and collaborate with web development teams to build, change, maintain, and successfully execute cross-functional UI/UX projects.`,
        },
      ],
    },

    sectionFour: {
      header: {
        title: `What you will learn`,
      },
      list: [
        {
          id: 1,
          title: `Fundamentals`,
          desc: `You’ll participate in a wide-range of design projects where you’ll gain hands-on experience with the fundamentals of design methodology. You’ll identify the problems, develop solutions, and create prototypes and wireframes using standard design tools including Figma and Balsamiq.`,
        },
        {
          id: 2,
          title: `Research And Strategy`,
          desc: `You’ll learn to plan research to understand users’ needs, behaviour, and motivation. You’ll learn to communicate complicated interactions visually maps, featuring ideal personas that represent real users, after which you’ll be able to translate your findings into product design using wireframing and prototyping.`,
        },
        {
          id: 3,
          title: `Responsive Design Basics`,
          desc: `You’ll be able to apply standard design principles to develop both low and high fidelity websites and applications. In the design process, you’ll learn to make use of grids and breakpoints to make sure your projects are responsive across different screen sizes, ensuring a perfect user experience.`,
        },
        {
          id: 4,
          title: `User Interface Design`,
          desc: `With your knowledge of usability design learnt earlier, you’ll be taught how to master the intricacies of colour, typography, and images. You’ll learn to use Figma and Adobe Illustrator to craft out professional interfaces. You’ll also be taught different methods for designing and maintaining UI pattern libraries.`,
        },
        {
          id: 5,
          title: `Product Design`,
          desc: `You’ll learn to create realistic visualizations of your project using high fidelity design mockups, and push them into a visually appealing and functional portfolio. Finally, you’ll be taught the latest industry trends and tools to help you push your skills in the UX Design job market.`,
        },
        {
          id: 6,
          title: `Final Project`,
          desc: `In order to complete your Product Design certificate, you’ll design and develop a web and mobile application, from concept to a clickable prototype. This gives you a hands-on experience, you apply essential tactics - like wireframing and user research - you’ve learnt to produce a working prototype.`,
        },
      ],
    },
  },
  fullStackDevelopment: {
    hero: {
      title: `Fullstack Web Development`,
      subTitle: `Let’s help you become a professional frontend web developer. You’ll learn all you need to know to become a Frontend Developer and build interesting portfolios while learning the fundmentals of HTML, CSS, JavaScript and React.`,
      img: fullstack,
    },

    sectionTwo: {
      header: {
        title: `Our process`,
      },
      cards: [
        {
          img: numberOne,
          text: `In 12 weeks, you’ll be a professional full-stack developer, able to build real-time interactive and dynamic applications. We teach fullstack JavaScript because growing in popularity every day and it’s here to stay.`,
        },
        {
          img: numberTwo,
          text: `You’ll get your hands dirty by building real life websites,APIs, and data-driven apps to gain confidence and sharpen yours skills. You’ll also collaborate with classmates on a range of projects to add to your portfolio.`,
        },
        {
          img: numberThree,
          text: `You graduate with a valued portfolio required to launch your career. All our students receive career guidance and mentorship with the support of our career counselors through every step of their job search.`,
        },
      ],
    },

    sectionFour: {
      header: {
        title: `What you will learn`,
      },
      list: [
        {
          id: 1,
          title: `Fundamentals`,
          desc: `The first phase of this bootcamp is to help you appreciate the fundamentals of software development, understanding programming fundamentals to launching full-stack web apps.`,
        },
        {
          id: 2,
          title: `JavaScript`,
          desc: `You’ll be taught to build smart, data-driven web applications using JavaScript and it’s backend counterpart - PHP`,
        },
        {
          id: 3,
          title: `MySQL`,
          desc: `Work with the famous web-based SQL database MySQL to integrate data into your project; connect with other third-party applications using API calls.`,
        },
        {
          id: 4,
          title: `Work with a team`,
          desc: `And finally, you’ll learn the fundamentals of working as a team; collaborate with other group members of the class to build, change, maintain, and secure an application. Track your team development process using Version Control Systems.`,
        },
      ],
    },
  },
  datascience: {
    hero: {
      title: `Data Science Immersive With Python`,
      subTitle: `Get your hands dirty working with complex data. Dive into the Python programming language, understand data analysis and statistical modeling using Python, after which you move into machine learning and algorithms.`,
      img: datascience,
    },

    sectionTwo: {
      header: {
        title: `Our process`,
      },
      cards: [
        {
          img: numberOne,
          text: `You learn the skills needed to skyrocket your career as a data analyst/scientist. You have 10 straight weeks of training to predict trends and generate informed predictive models.`,
        },
        {
          img: numberTwo,
          text: `You’ll learn the fundamentals of the Python programming language and it’s usage in analysing complex data. You’ll build and refine machine learning models to predict patterns from data sets and complete hands-on exercises to reinforce the newly learned skills.`,
        },
        {
          img: numberThree,
          text: `You’ll learn the fundamentals of being a true data analyst; you work with a team, sharpen your communication skills and collaborate with members through real-world projects.`,
        },
      ],
    },

    sectionFour: {
      header: {
        title: `What you will learn`,
      },
      list: [
        {
          id: 1,
          title: `Python Programming`,
          desc: `You learn to write programs in one of the most popular programming language for data science and analysis - Python. You’ll be taught the fundamental components of programming - data structures, functions, conditionals and loops, error handling, Object-Oriented programming, and how to import and use different packages.`,
        },
        {
          id: 2,
          title: `Web Scraping`,
          desc: `You’ll learn to scrap websites, using bots to mine data, in order to manipulate and analyze them. You’ll learn to use the browser automation tool - Selenium to craw into sites, pull data from web forums and social media for analysis.`,
        },
        {
          id: 3,
          title: `SQL With Python`,
          desc: `You’ll learn the fundamentals of SQL - most programming popular language used to query relational databases. Understand SQL and its Syntax, learn to use SQL statements and perform the CRUD operations on Postgres database. You’ll connect the Postgres database to Python with performing the CRUD operation on it using Python.`,
        },
        {
          id: 4,
          title: `Data Analysis And Visualization`,
          desc: `You make use of Python most popular data analysis library - Pandas to analyse, organise, clean, sort, filter, and aggregate data. You’ll learn to perform Exploratory Data Analysis(EDA) with Pandas. You’ll setup data visualization using Matplotlib.`,
        },
        {
          id: 5,
          title: `Introduction To Machine Learning`,
          desc: `Understand the basics of Machine Learning and Machine Learning Algorithms, learn to create supervised and unsupervised models and how to Preprocess for accurate analysis.`,
        },
        {
          id: 6,
          title: `Final Project`,
          desc: `In order to complete your Data Science Immersive with Python certification, you’ll create a real-world project that’ll give you hands-on experience, and more importantly start your career as a data scientist/analyst.`,
        },
      ],
    },
  },
  mobileDevelopment: {
    hero: {
      title: `Mobile Development (IOS & Android)`,
      subTitle: `Whether you want to pursue a career as a Mobile App Developer, a Freelancer, or an Entrepreneur, this program prepares you adequately for that.`,
      img: mobile,
    },

    sectionTwo: {
      header: {
        title: `Our process`,
      },
      cards: [
        {
          img: numberOne,
          text: `In this foundational Mobile App Development course, you’ll learn the fundamentals of Dart, including object-oriented programming (OOP) - a concept that can be applied beyond Mobile App Development.`,
        },
        {
          img: numberTwo,
          text: `In this foundational Mobile App Development course, you’ll learn the fundamentals of Dart, including object-oriented programming (OOP) - a concept that can be applied beyond Mobile App Development.`,
        },
        {
          img: numberThree,
          text: `You’ll go through each process in the app development lifecycle so as to build a fully functional mobile app that can be deployed on both the Android and iOS platforms.`,
        },
      ],
    },

    sectionFour: {
      header: {
        title: `What you will learn`,
      },
      list: [
        {
          id: 1,
          title: `Fundamentals`,
          desc: `The first weeks of this bootcamp is to help you appreciate the fundamentals of mobile app development using Dart and Flutter. You’ll be comfortable writing pure Dart codes. You’ll also be introduced to Object Oriented Programming (OOP) in Dart to encapsulate both data and functionality. You’ll create, access, and modify objects to have a strong foundation for OOP.`,
        },
        {
          id: 2,
          title: `Version Control`,
          desc: `You’ll learn to use the Git version control system, collaborate with other team members and push your projects to GitHub using Git`,
        },
        {
          id: 3,
          title: `Introduction to Flutter`,
          desc: `After mastering the fundamentals of Dart, the focus shifts towards Flutter. You’ll learn about widgets and its importance to creating hybrid mobile applications. You’ll learn when different types of widgets and when to use them. You’ll be introduced to design concepts and common design patterns across different mobile devices.`,
        },
        {
          id: 4,
          title: `Routing and Navigation`,
          desc: `You’ll learn what routing is and why it’s one of the core concepts of mobile application development. You’ll learn how to navigate from one page to the other, how to use named routes and using push and pop methods.`,
        },
        {
          id: 5,
          title: `FireBase Integration`,
          desc: `Modern mobile applications need querying real-time data for interactivity. You’ll spend considerable time learning Flutter integration with FireBase. You’ll be exposed to querying the database to perform the CRUD functions - Create, Read, Update and Delete resources.`,
        },
        {
          id: 6,
          title: `Production Deployment`,
          desc: `You’ll be taught how to deploy your production ready mobile app to the Android and iOS app stores to be accessed by everyone in the mobile community.`,
        },
      ],
    },
  },
}
