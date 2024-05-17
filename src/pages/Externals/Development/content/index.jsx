// this data would also be used in the intro page.
import tag1 from '@assets/icons/numberOne_iorpb9_sbfndr.webp'
import tag3 from '@assets/icons/numberThree_ludnkx_ml62k7.webp'
import tag2 from '@assets/icons/numberTwo_tjclgg_aiqtvs.webp'

export const DEVELOPMENT_CONTENT = {
  frontendDevelopment: {
    hero: {
      title: `Frontend Engineering Immersive`,
      subTitle: `Let’s help you become a professional frontend web developer. You’ll learn all you need to know to become a Frontend Developer and build interesting portfolios while learning the fundamentals of HTML, CSS, JavaScript and React.`,
      // img: frontendImg,
      img: null,
    },

    sectionTwo: {
      header: {
        title: `Our Process`,
      },
      cards: [
        {
          img: tag1,
          text: `We teach the important skills required to jumpstart your career as a web developer. With 5 straight weeks of web training, you learn to think and build like frontend developers.`,
        },
        {
          img: tag2,
          text: `You move from understanding web basics to launching Single Page Applications (SPAs). You’ll be taught to build smart SPAs using vanilla JavaScript that interacts with user inputs.`,
        },
        {
          img: tag3,
          text: `And finally, you’ll learn the fundamentals of working as a team; collaborate with other group members of the class to build, change, maintain, and secure an application. Track your team development Process using Version Control Systems.`,
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
          classname: `A`,
          title: `Introduction To HTML And CSS`,
          desc: `This unit provides a solid foundation in web development, covering both HTML and CSS. Students will learn how to create well-structured HTML documents using tags, elements, and attributes. They will also explore CSS syntax and style rules to customize the appearance of web pages. Topics include text styling, backgrounds, borders, and images. Additionally, students will discover CSS layout techniques, such as floats and CSS grid, to create different page layouts. They will also explore Bootstrap, utilizing its pre-built components and responsive grid system for attractive and mobile-friendly layouts. Practical exercises reinforce learning.`,
          caption: `UNIT 1`,
          bgColor: null,
          img: `https://techstudio.nyc3.cdn.digitaloceanspaces.com/External-page-assets/GIFS/writing-code.gif`,
          tagAttr: [
            {
              bgColor: `blue`,
              img: `vscode-icons:file-type-vscode`,
              text: `Visual Studio Code`,
            },
            {
              bgColor: `blue`,
              img: `vscode-icons:file-type-html`,
              text: `HTML`,
            },
            {
              bgColor: `blue`,
              img: `vscode-icons:file-type-css`,
              text: `CSS`,
            },
          ],
        },
        {
          id: 2,
          classname: `B`,
          title: `JavaScript Basic`,
          desc: `Throughout the course of this unit, students will embark on a journey into the fundamentals of JavaScript, unlocking the potential to create engaging and interactive web experiences. By delving into the core concepts and syntax of JavaScript, students will gain a comprehensive understanding of how to leverage this powerful programming language to build dynamic and responsive web pages. They will explore topics such as variables, data types, conditional statements, loops, functions, arrays, objects, and DOM manipulation.`,
          caption: `UNIT 2`,
          bgColor: `light-blue-ii`,
          img: `https://techstudio.nyc3.cdn.digitaloceanspaces.com/External-page-assets/GIFS/js-file-document.gif`,
          tagAttr: [
            {
              bgColor: `blue`,
              img: `vscode-icons:file-type-vscode`,
              text: `Visual Studio Code`,
            },
            {
              bgColor: `blue`,
              img: `logos:javascript`,
              text: `Javascript`,
            },
          ],
        },
        {
          id: 3,
          classname: `C`,
          title: `Object-Oriented JavaScript`,
          desc: `Object-oriented JavaScript is a programming paradigm that focuses on organizing code into objects, which encapsulate data and methods. It provides a way to create reusable and modular code, making it easier to manage and maintain complex applications.
          In object-oriented JavaScript, students will learn how to create objects, define their properties and methods, and establish relationships between objects through inheritance. They will explore concepts such as encapsulation, where data and methods are bundled together within objects to control access and ensure data integrity.`,
          caption: `UNIT 3`,
          bgColor: `white`,
          img: `https://techstudio.nyc3.cdn.digitaloceanspaces.com/External-page-assets/GIFS/js-javascript.gif`,
          tagAttr: [
            {
              bgColor: `blue`,
              img: `vscode-icons:file-type-vscode`,
              text: `Visual Studio Code`,
            },
            {
              bgColor: `blue`,
              img: `logos:javascript`,
              text: `Javascript`,
            },
          ],
        },
        {
          id: 4,
          classname: `D`,
          title: `The DOM`,
          desc: `The Document Object Model (DOM) is an API (Application Programming Interface) that allows you to interact with HTML and XML documents programmatically. It is primarily associated with JavaScript, as JavaScript is the most commonly used programming language for web development and has built-in support for the DOM.`,
          caption: `UNIT 4`,
          bgColor: `blue`,
          img: `https://techstudio.nyc3.cdn.digitaloceanspaces.com/External-page-assets/GIFS/javascript-programming-language.gif`,
          tagAttr: [
            {
              bgColor: `white`,
              img: `vscode-icons:file-type-vscode`,
              text: `Visual Studio Code`,
            },
            {
              bgColor: `white`,
              img: `logos:javascript`,
              text: `Javascript`,
            },
            {
              bgColor: `white`,
              img: `vscode-icons:file-type-html`,
              text: `HTML`,
            },
          ],
        },
        {
          id: 5,
          classname: `E`,
          title: `The REACT Library`,
          desc: `React has gained immense popularity as a JavaScript library for creating robust and interactive user interfaces. Its core philosophy revolves around a component-based architecture, empowering developers to build reusable UI components that encapsulate specific functionality. By breaking down the user interface into modular components, React enables code reusability, enhances maintainability, and facilitates collaborative development.`,
          caption: `UNIT 5`,
          bgColor: `white`,
          img: `https://techstudio.nyc3.cdn.digitaloceanspaces.com/External-page-assets/GIFS/react-js.gif`,
          tagAttr: [
            {
              bgColor: `blue`,
              img: `vscode-icons:file-type-vscode`,
              text: `Visual Studio Code`,
            },
            {
              bgColor: `blue`,
              img: `logos:react`,
              text: `React`,
            },
          ],
        },
        {
          id: 6,
          classname: `F`,
          title: `Next JS`,
          desc: `Next js is built on React. It elevates web development with efficient rendering and routing, offering server-side rendering and automatic code splitting for optimal performance. By extending React's component-based approach to pages, it simplifies dynamic routing. With server-side rendering, pages are pre-rendered on the server, boosting speed and SEO. Empowering developers with data fetching and routing control, Next js enables seamless creation of high-performance web applications.`,
          caption: `UNIT 6`,
          bgColor: `light-blue-ii`,
          img: `https://res.cloudinary.com/kingsleysolomon/image/upload/v1699890898/techstudio/GIFS/coding_c5w12z.gif`,
          tagAttr: [
            {
              bgColor: `white`,
              img: `vscode-icons:file-type-vscode`,
              text: `Visual Studio Code`,
            },
            {
              bgColor: `white`,
              img: `devicon:nextjs`,
              text: `Nextjs`,
            },
            {
              bgColor: `white`,
              img: `devicon:vercel`,
              text: `Vercel`,
            },
          ],
        },
        {
          id: 7,
          classname: `G`,
          title: `Version Control and Deployment`,
          desc: `Version control systems like Git play a crucial role in managing code changes over time. They provide a structured way to track modifications, maintain a history of changes, and enable multiple developers to work on the same codebase simultaneously. With version control, developers can create branches to work on different features or bug fixes independently`,
          caption: `UNIT 7`,
          bgColor: `light-blue-ii`,
          img: `https://res.cloudinary.com/kingsleysolomon/image/upload/v1699890638/techstudio/GIFS/git_treare.gif `,
          tagAttr: [
            {
              bgColor: `white`,
              img: `vscode-icons:file-type-vscode`,
              text: `Visual Studio Code`,
            },
            {
              bgColor: `white`,
              img: `devicon:git`,
              text: `Git`,
            },
            {
              bgColor: `white`,
              img: `devicon:github`,
              text: `GitHub`,
            },
          ],
        },
        {
          id: 8,
          classname: `H`,
          title: `Capstone Project`,
          desc: `In this unit, the project enables you to demonstrate multiple skills you have learned to develop a real life project. Students apply their Frontend Engineering skills to create a web application that is dynamic and real life worthy from choosing your library, creating folder structure, coding, testing, deployment, user experience enhancement, and a final presentation, showcasing their comprehensive understanding and abilities in frontend engineering.`,
          caption: `UNIT 8`,
          bgColor: `blue`,
          img: `https://res.cloudinary.com/kingsleysolomon/image/upload/v1699879053/techstudio/images/Market_launch_j1iogl_pa6fcd.gif`,
          tagAttr: [
            {
              bgColor: `white`,
              img: `vscode-icons:file-type-vscode`,
              text: `Visual Studio Code`,
            },
            {
              bgColor: `white`,
              img: `logos:react`,
              text: `React`,
            },
            {
              bgColor: `white`,
              img: `mdi:github`,
              text: `GitHub`,
            },
          ],
        },
      ],
    },

    duration: {
      online: {
        time: `N/A`,
        date: `N/A`,
        price: `0`,
      },
      weekend: {
        time: `12`,
        date: `June 15, 2024`,
        price: `250000`,
      },
      weekday: {
        time: `12`,
        date: `June 17, 2024`,
        price: `250000`,
      },
      span: {
        weekday: `Mon - wed (10am - 5pm)`,
        weekend: `Sat - Sun (10am - 5pm)`,
      },
    },
  },
  UIUXDevelopment: {
    hero: {
      title: `User Interface & User Experience design`,
      subTitle: `Learn to design and deliver digital products that serve clients’ needs and solve users problems. Understand the fundamental techniques and tools of design like problem definition, user research, prototyping, testing and more. `,
      img: `https://res.cloudinary.com/dkszgtapy/image/upload/v1687070587/techstudio-web-app/assets/images/Group_1000002401_2_j47uli.png`,
    },

    sectionTwo: {
      header: {
        title: `Our Process`,
      },
      cards: [
        {
          img: tag1,
          text: `We teach the important skills required to jumpstart your career as a product designer. With 12 straight weeks of training, you learn to think, build and solve complex UI/UX challenges.`,
        },
        {
          img: tag2,
          text: `We move from understanding the core principles of effective design to applying tactics like wireframing, low and high-fidelity prototyping, usability testing and user interface design to build a portfolio of intuitive digital products. `,
        },
        {
          img: tag3,
          text: `You’ll learn the fundamentals of working as a team; sharpen your communication skills and collaborate with web development teams to build, change, maintain and successfully execute cross-functional UI/UX projects.`,
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
          classname: `A`,
          caption: `UNIT 1`,
          title: `Introduction To Product Design`,
          desc: `Unit 1 provides students with a comprehensive introduction to product design. It acquaints them with the fundamental principles, elements, and tools necessary for successful design. The unit emphasizes the primary purpose of product design, which is to create innovative solutions that cater to user needs and evoke emotions. Through engaging lectures and interactive discussions, students gain a deep understanding of the impact that well-designed products can have on society and individuals.`,
          bgColor: `red`,
          img: `https://techstudio.nyc3.cdn.digitaloceanspaces.com/External-page-assets/GIFS/man-placing-ui-ux-design-elements-on-application.gif`,
          tagAttr: [
            {
              bgColor: `blue`,
              img: `logos:figma`,
              text: `Figma`,
            },
          ],
        },
        {
          id: 2,
          classname: `B`,
          caption: `UNIT 2`,
          title: `User Interface / Visual Design`,
          desc: `Unit 2 focuses on User Interface (UI) and Visual Design, aiming to create engaging digital experiences. Students learn to create low-fidelity wireframes, convert them to high-fidelity wireframes, design mobile/web app interfaces, and develop responsive web designs. This unit equips students with the skills to visualize and refine design concepts, create user-friendly interfaces, and adapt designs to different devices. By mastering UI and Visual Design principles and techniques, students are prepared to craft captivating digital experiences that seamlessly blend aesthetics and functionality. Additionally, they gain proficiency in using Auto Layouts, constraints, and resizing frames for design`,
          bgColor: `light-blue-ii`,
          img: `https://techstudio.nyc3.cdn.digitaloceanspaces.com/External-page-assets/GIFS/male-mobile-application-designer-working-on-design-project.gif`,
          tagAttr: [
            {
              bgColor: `white`,
              img: `logos:figma`,
              text: `Figma`,
            },
            {
              bgColor: `white`,
              img: `line-md:iconify1`,
              text: `Iconify`,
            },
            {
              bgColor: `white`,
              img: `ri:unsplash-fill`,
              text: `Unsplash`,
            },
          ],
        },
        {
          id: 3,
          classname: `C`,
          caption: `UNIT 3`,
          title: `Interaction Design: Breathing Life into Visual Experiences`,
          desc: `Unit 3 explores Interaction Design, emphasizing the addition of interactivity and animation to visual designs. Students learn to animate components or elements, prototype design pages, create interactive components, and test interactions using Figma. This unit equips students with the skills to bring their designs to life through motion and interactivity, enhancing user engagement and creating seamless user experiences.`,
          bgColor: `primary`,
          img: `https://techstudio.nyc3.cdn.digitaloceanspaces.com/External-page-assets/GIFS/man-working-on-app-ui.gif`,
          tagAttr: [
            {
              bgColor: `blue`,
              img: `logos:figma`,
              text: `Figma`,
            },
          ],
        },
        {
          id: 4,
          classname: `D`,
          caption: `UNIT 4`,
          title: `User Experience: Crafting Seamless User Journeys`,
          desc: `Unit 4 focuses on User Experience (UX), encompassing the design Process, user research, collaboration, wireframing, and usability testing. Students gain an understanding of Design Thinking as a design Process, conduct user research to gather valuable feedback for creating user personas and journey maps. They collaborate and brainstorm to generate ideas, employing techniques like Information Architecture and user flows. Students then translate these ideas into tangible wireframes. Lastly, they conduct rigorous usability tests on the final design to ensure a seamless user experience before delivering the project.
`,
          bgColor: `blue`,
          img: `https://techstudio.nyc3.cdn.digitaloceanspaces.com/External-page-assets/GIFS/male-designer-creating-a-mobile-ui-design.gif`,
          tagAttr: [
            {
              bgColor: `white`,
              img: `logos:figma`,
              text: `FigJam`,
            },
            {
              bgColor: `white`,
              img: `flat-color-icons:document`,
              text: `Google Forms`,
            },
          ],
        },
        {
          id: 5,
          classname: `E`,
          caption: `UNIT 5`,
          title: `Capstone Project: Bringing Ideas to Life`,
          desc: `This Unit is dedicated to the Capstone Project, where students apply their acquired knowledge and skills to create a comprehensive design solution. The unit encompasses creating case studies to articulate the problem statement and provide an overview of the product. Following the design thinking stages, students iterate on their prototype, incorporating feedback and refining their design. Rigorous testing ensures the effectiveness and usability of the prototype. Finally, students showcase their work through a compelling pitch or presentation, demonstrating their understanding of the project's objectives, Process, and outcomes. This unit allows students to showcase their creativity, problem-solving abilities, and presentation skills, culminating in a tangible representation of their product design journey.`,
          bgColor: `white`,
          img: `https://techstudio.nyc3.cdn.digitaloceanspaces.com/External-page-assets/GIFS/man-placing-ui-ux-design-elements-on-application.gif`,
          tagAttr: [
            {
              bgColor: `blue`,
              img: `logos:figma`,
              text: `Figma`,
            },
            {
              bgColor: `blue`,
              img: `devicon:behance`,
              text: `Behance`,
            },
            {
              bgColor: `blue`,
              img: `flat-color-icons:dribbble`,
              text: `Dribbble`,
            },
          ],
        },
      ],
    },

    duration: {
      online: {
        time: `N/A`,
        date: `N/A`,
        price: `0`,
      },
      weekend: {
        time: `12`,
        date: `June 17, 2024`,
        price: `250000`,
      },
      weekday: {
        time: `12`,
        date: `June 15, 2024`,
        price: `250000`,
      },
      span: {
        weekday: `Mon - wed (10am - 5pm)`,
        weekend: `Sat - Sun (10am - 5pm)`,
      },
    },
  },
  fullStackDevelopment: {
    hero: {
      title: `Fullstack Web Development`,
      subTitle: `Let’s help you become a professional Fullstack web developer. You’ll learn all you need to know to become a Fullstack Developer and build interesting portfolios while learning the fundmentals of HTML, CSS, JavaScript, React, Mongo DB, Express and hosting on Vercel.`,
      img: `https://res.cloudinary.com/dkszgtapy/image/upload/v1687070588/techstudio-web-app/assets/images/Group_1000002401_1_ngoo2o.png`,
    },

    sectionTwo: {
      header: {
        title: `Our Process`,
      },
      cards: [
        {
          img: tag1,
          text: `In 24 weeks, you’ll be a professional Fullstack developer, able to build real-time interactive and dynamic applications. We teach Fullstack JavaScript because growing in popularity every day and it’s here to stay.`,
        },
        {
          img: tag2,
          text: `You’ll get your hands dirty by building real life websites,APIs, and data-driven apps to gain confidence and sharpen yours skills. You’ll also collaborate with classmates on a range of projects to add to your portfolio.`,
        },
        {
          img: tag3,
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
          classname: `A`,
          caption: `UNIT 1`,
          title: `Introduction To HTML And CSS`,
          desc: `This unit provides a solid foundation in web development, covering both HTML and CSS. Students will learn how to create well-structured HTML documents using tags, elements, and attributes. They will also explore CSS syntax and style rules to customize the appearance of web pages. Topics include text styling, backgrounds, borders, and images. Additionally, students will discover CSS layout techniques, such as floats and CSS grid, to create different page layouts. They will also explore Bootstrap, utilizing its pre-built components and responsive grid system for attractive and mobile-friendly layouts. Practical exercises reinforce learning.`,
          bgColor: `red`,
          img: `https://techstudio.nyc3.cdn.digitaloceanspaces.com/External-page-assets/GIFS/writing-code.gif`,
          tagAttr: [
            {
              bgColor: `blue`,
              img: `vscode-icons:file-type-vscode`,
              text: `Visual Studio Code`,
            },
            {
              bgColor: `blue`,
              img: `vscode-icons:file-type-html`,
              text: `HTML`,
            },
            {
              bgColor: `blue`,
              img: `vscode-icons:file-type-css`,
              text: `CSS`,
            },
          ],
        },
        {
          id: 2,
          classname: `B`,
          caption: `UNIT 2`,
          title: `Java Script Basic`,
          desc: `Throughout the course of this unit, students will embark on a journey into the fundamentals of JavaScript, unlocking the potential to create engaging and interactive web experiences. By delving into the core concepts and syntax of JavaScript, students will gain a comprehensive understanding of how to leverage this powerful programming language to build dynamic and responsive web pages. They will explore topics such as variables, data types, conditional statements, loops, functions, arrays, objects, and DOM manipulation.`,
          bgColor: `light-blue-ii`,
          img: `https://techstudio.nyc3.cdn.digitaloceanspaces.com/External-page-assets/GIFS/javascript-programming-language.gif`,
          tagAttr: [
            {
              bgColor: `white`,
              img: `vscode-icons:file-type-vscode`,
              text: `Visual Studio Code`,
            },
            {
              bgColor: `white`,
              img: `logos:javascript`,
              text: `Javascript`,
            },
          ],
        },
        {
          id: 3,
          classname: `C`,
          caption: `UNIT 3`,
          title: `Object-Oriented JavaScript`,
          desc: `Object-oriented JavaScript is a programming paradigm that focuses on organizing code into objects, which encapsulate data and methods. It provides a way to create reusable and modular code, making it easier to manage and maintain complex applications.
In object-oriented JavaScript, students will learn how to create objects, define their properties and methods, and establish relationships between objects through inheritance. They will explore concepts such as encapsulation, where data and methods are bundled together within objects to control access and ensure data integrity.`,
          bgColor: `primary`,
          img: `https://techstudio.nyc3.cdn.digitaloceanspaces.com/External-page-assets/GIFS/js-javascript.gif`,
          tagAttr: [
            {
              bgColor: `blue`,
              img: `vscode-icons:file-type-vscode`,
              text: `Visual Studio Code`,
            },
            {
              bgColor: `blue`,
              img: `logos:javascript`,
              text: `Javascript`,
            },
          ],
        },
        {
          id: 4,
          classname: `D`,
          caption: `UNIT 4`,
          title: `The DOM`,
          desc: `Unit 4 dives into the exploration of the Document Object Model (DOM), an essential API for interacting programmatically with HTML and XML documents. The unit focuses on the DOM's association with JavaScript, the widely used programming language for web development, known for its built-in support for the DOM. Students learn how to leverage the DOM to manipulate and interact with web content dynamically.`,
          bgColor: `blue`,
          img: `https://techstudio.nyc3.cdn.digitaloceanspaces.com/External-page-assets/GIFS/js-file-document.gif`,
          tagAttr: [
            {
              bgColor: `white`,
              img: `vscode-icons:file-type-vscode`,
              text: `Visual Studio Code`,
            },
            {
              bgColor: `white`,
              img: `logos:javascript`,
              text: `Javascript`,
            },
            {
              bgColor: `white`,
              img: `vscode-icons:file-type-html`,
              text: `HTML`,
            },
          ],
        },
        {
          id: 5,
          classname: `E`,
          caption: `UNIT 5`,
          title: `The REACT Library`,
          desc: `Unit 5 focuses on the popular JavaScript library, React, known for its ability to create powerful and interactive user interfaces. React has gained immense popularity due to its component-based architecture, which allows developers to build reusable UI components that encapsulate specific functionalities. By breaking down the user interface into modular components, React promotes code reusability, improves maintainability, and facilitates collaborative development.`,
          bgColor: `white`,
          className: `react-img`,
          img: `https://techstudio.nyc3.cdn.digitaloceanspaces.com/External-page-assets/GIFS/react-js.gif`,
          tagAttr: [
            {
              bgColor: `blue`,
              img: `vscode-icons:file-type-vscode`,
              text: `Visual Studio Code`,
            },
            {
              bgColor: `blue`,
              img: `logos:react`,
              text: `React`,
            },
          ],
        },
        {
          id: 6,
          classname: `F`,
          caption: `UNIT 6`,
          title: `Version Control`,
          desc: `This Unit of the curriculum explores the importance of version control systems, with a particular focus on Git. Version control systems like Git play a crucial role in managing code changes over time. They provide a structured framework for tracking modifications, maintaining a comprehensive history of changes, and facilitating collaborative development by enabling multiple developers to work on the same codebase simultaneously.`,
          bgColor: `light-blue-ii`,
          img: `https://techstudio.nyc3.cdn.digitaloceanspaces.com/External-page-assets/GIFS/git.gif`,
          tagAttr: [
            {
              bgColor: `white`,
              img: `devicon:git`,
              text: `Git`,
            },
            {
              bgColor: `white`,
              img: `devicon:github`,
              text: `GitHub`,
            },
            {
              bgColor: `white`,
              img: `ph:terminal-fill`,
              text: `Terminal`,
            },
            // {
            //   bgColor: `white`,
            //   img: `vscode-icons:file-type-node`,
            //   text: `Node JS`,
            // },
          ],
        },
        {
          id: 7,
          classname: `G`,
          caption: `UNIT 7`,
          title: `Node JS`,
          desc: `Node JS is a backend or server-side framework that uses JavaScript code outside a web browser. Server-side JavaScript is becoming more prevalent in the industry, with web frameworks such as Node.js and Express making it simple to create and deploy complex, data-driven web applications. This course will prepare you to use such frameworks and show you how to integrate them with NoSQL databases such as MongoDB.`,
          bgColor: `white`,
          img: `https://techstudio.nyc3.cdn.digitaloceanspaces.com/External-page-assets/GIFS/node.gif`,
          tagAttr: [
            {
              bgColor: `blue`,
              img: `vscode-icons:file-type-vscode`,
              text: `Visual Studio Code`,
            },
            {
              bgColor: `blue`,
              img: `vscode-icons:file-type-node`,
              text: `Node JS`,
            },
          ],
        },
        {
          id: 8,
          classname: `H`,
          caption: `UNIT 8`,
          title: `Deployment`,
          desc: `In this comprehensive unit, students delve into the art of deploying web applications using three prominent platforms: GitHub, Netlify, and Heroku. They gain hands-on experience in version control, automation, and best practices for production environments. Throughout the curriculum, students learn to optimize deployments, scale applications, and ensure efficient error handling. By mastering these skills, they become proficient in successfully deploying web apps to meet the demands of real-world scenarios.`,
          bgColor: `blue`,
          img: `https://res.cloudinary.com/kingsleysolomon/image/upload/v1699879053/techstudio/images/Market_launch_j1iogl_pa6fcd.gif`,
          tagAttr: [
            {
              bgColor: `white`,
              img: `mdi:github`,
              text: `GitHub`,
            },
            {
              bgColor: `white`,
              img: `skill-icons:heroku`,
              text: `Heroku`,
            },
            {
              bgColor: `white`,
              img: `skill-icons:netlify-light`,
              text: `Netlify`,
            },
          ],
        },
        {
          id: 9,
          classname: `I`,
          caption: `UNIT 9`,
          title: `Capstone Project
          `,
          desc: `In this unit, students apply their Full-stack web development skills to create a web application, from
          choosing your library, creating folder structure, coding, testing, deployment, user experience enhancement, and a final presentation, showcasing their comprehensive understanding and abilities in web development.`,
          bgColor: `white`,
          img: `https://res.cloudinary.com/kingsleysolomon/image/upload/v1699890564/techstudio/GIFS/Frame_1000002483_ww93xt.gif`,
          tagAttr: [
            {
              bgColor: `blue`,
              img: `vscode-icons:file-type-vscode`,
              text: `Visual Studio Code`,
            },
            {
              bgColor: `blue`,
              img: `logos:react`,
              text: `React`,
            },
            {
              bgColor: `blue`,
              img: `mdi:github`,
              text: `GitHub`,
            },
          ],
        },
      ],
    },

    duration: {
      online: {
        time: `16`,
        date: `February 5, 2024`,
        price: `200000`,
      },
      weekend: {
        time: `24`,
        date: `June 17, 2024`,
        price: `500000`,
      },
      weekday: {
        time: `16`,
        date: `June 15, 2024`,
        price: `300000`,
      },
      span: {
        weekday: `Mon - Thur (10am - 5pm)`,
        weekend: `Sat - Sun (10am - 5pm)`,
      },
    },
  },
  datascience: {
    hero: {
      title: `Data Science Immersive with Python and Machine Learning`,
      subTitle: `Get your hands dirty working with Excel and complex data. Dive into the Python programming language, understand data analysis and statistical modeling using Python, after which you move into machine learning and algorithms.`,
      img: `https://res.cloudinary.com/dkszgtapy/image/upload/v1687070589/techstudio-web-app/assets/images/Group_1000002401_tpwtbe.png`,
    },

    sectionTwo: {
      header: {
        title: `Our Process`,
      },
      cards: [
        {
          img: tag1,
          text: `You will learn the skills needed to skyrocket your career as a data analyst/scientist. You'll have 12 straight weeks of training to predict trends and generate informed predictive models.`,
        },
        {
          img: tag2,
          text: `You’ll learn the fundamentals of the Python programming language and it’s usage in analysing complex data. You’ll build and refine machine learning models to predict patterns from data sets and complete hands-on exercises to reinforce the newly learned skills.`,
        },
        {
          img: tag3,
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
          classname: `A`,
          caption: `UNIT 1`,
          title: `Introduction to Microsoft Excel - Objectives`,
          desc: `In this unit, Students learn Microsoft Excel fundamentals, including installation, workbook creation, environment navigation, and the importance of Excel. They explore formulas, functions (arithmetic, text, logical, date), data organization (sorting, filtering, validation), analysis (conditional formatting, Power Query, Power Pivot), and pivot table creation. Practical skills for data management and analysis are gained. Throughout the unit, students gain practical skills in using Microsoft Excel for data management, analysis, and reporting..`,
          bgColor: `white`,
          img: `https://techstudio.nyc3.cdn.digitaloceanspaces.com/External-page-assets/GIFS/microsoft-excel%20(1).gif`,
          tagAttr: [
            {
              bgColor: `blue`,
              img: `vscode-icons:file-type-excel`,
              text: `Microsoft Excel`,
            },
          ],
        },
        {
          id: 2,
          classname: `B`,
          caption: `UNIT 2`,
          title: `Introduction to SQL`,
          desc: `This unit introduces students to SQL, a programming language used for accessing databases. They learn the basics of SQL, including its purpose, types of databases, and concepts of DBMS and RDBMS. Students gain practical skills in creating and managing databases and tables, including inserting records and altering table structures. They also explore SQL statements for selecting columns, updating data, applying constraints, and sorting values. Throughout the unit, students develop a solid foundation in SQL fundamentals for working with databases.`,
          bgColor: `light-blue-ii`,
          img: `https://techstudio.nyc3.cdn.digitaloceanspaces.com/External-page-assets/GIFS/sql-file-format-extension%20(1).gif`,
          tagAttr: [
            {
              bgColor: `white`,
              img: `devicon:mysql-wordmark`,
              text: `SQL`,
            },
          ],
        },
        {
          id: 3,
          classname: `C`,
          caption: `UNIT 3`,
          title: `Introduction to Power BI`,
          desc: `Students will learn how to pre-process and transform data(data cleaning) before creating visually appealing and interactive visualization and dashboards by utilizing business intelligence. As a data analyst/scientist you can convey insights effectively and predict business trends communicating your findings to those who will make better decisions. The role of a data analyst/scientist has become increasingly important as businesses have become more data-driven. They help businesses make sense of the vast amount of data that they collect.`,
          bgColor: `white`,
          img: `https://techstudio.nyc3.cdn.digitaloceanspaces.com/External-page-assets/GIFS/python%20(1).gif`,
          tagAttr: [
            {
              bgColor: `blue`,
              img: `logos:microsoft-power-bi`,
              text: `Power Bi`,
            },
          ],
        },
        {
          id: 4,
          classname: `D`,
          caption: `UNIT 4`,
          title: `Python Basics`,
          desc: `Students delve into Python programming, acquiring a strong foundation in this widely-used language for data analysis. They learn to install Anaconda, explore in-built functions, work with different data types, manipulate strings, use variables and operators, implement loops, and import modules for enhanced functionality. Practical exercises empower students to write Python code proficiently, analyze large datasets, and create visual representations of data.`,
          bgColor: `blue`,
          img: `https://techstudio.nyc3.cdn.digitaloceanspaces.com/External-page-assets/GIFS/python-programming-language%20(1).gif`,
          tagAttr: [
            {
              bgColor: `white`,
              img: `logos:python`,
              text: `Python`,
            },
          ],
        },
        {
          id: 5,
          classname: `E`,
          caption: `UNIT 5`,
          title: `Python NumPy`,
          desc: `Students delve into NumPy, a vital Python library for numerical data analysis and scientific computing. They gain hands-on experience by importing the library and utilizing array functions. Through practical exercises, they learn to create one-dimensional and two-dimensional arrays, enabling efficient manipulation and analysis of complex numerical data. By mastering NumPy, students acquire essential skills for advanced data analysis, modeling, and scientific computations in Python.`,
          bgColor: `white`,
          img: `https://techstudio.nyc3.cdn.digitaloceanspaces.com/External-page-assets/GIFS/python%20(2).gif`,
          tagAttr: [
            {
              bgColor: `blue`,
              img: `logos:python`,
              text: `Python`,
            },
            {
              bgColor: `blue`,
              img: `logos:numpy`,
              text: `Numpy`,
            },
          ],
        },
        {
          id: 6,
          classname: `F`,
          caption: `UNIT 6`,
          title: `Python Pandas`,
          desc: `In this unit, students delve into Pandas, a powerful Python library for data manipulation and analysis. They learn to convert sequences and dictionaries into DataFrame tables using the .DataFrame function. Students gain practical skills in importing files and converting them into DataFrames. They explore various DataFrame operations such as retrieving index and columns, using head and tail methods, accessing specific columns, counting values, summing columns vertically and horizontally, locating values in cells or positions, extracting rows based on conditions, creating columns based on conditions, and utilizing the groupby function.`,
          bgColor: `light-blue-ii`,
          img: `https://techstudio.nyc3.cdn.digitaloceanspaces.com/External-page-assets/GIFS/python%20(2).gif`,
          tagAttr: [
            {
              bgColor: `blue`,
              img: `logos:python`,
              text: `Python`,
            },
            {
              bgColor: `white`,
              img: `logos:pandas-icon`,
              text: `Pandas`,
            },
          ],
        },
        {
          id: 7,
          classname: `G`,
          caption: `UNIT 7`,
          title: `Python Plotly`,
          desc: `Students delve into Plotly and Plotly Express, Python libraries renowned for interactive data visualization. They acquire practical skills in creating a variety of charts, including bar charts for categorical comparisons, line charts for trend analysis, area charts for cumulative data, pie charts for proportions, and donut charts with a center hole. By mastering Plotly, students unlock the ability to design captivating and interactive visualizations that effectively convey data insights.`,
          bgColor: `light-blue-ii`,
          img: `https://techstudio.nyc3.cdn.digitaloceanspaces.com/External-page-assets/GIFS/python.gif`,
          tagAttr: [
            {
              bgColor: `blue`,
              img: `logos:python`,
              text: `Python`,
            },
            {
              bgColor: `blue`,
              img: `devicon:plotly`,
              text: `Plotly`,
            },
          ],
        },
        {
          id: 8,
          classname: `H`,
          caption: `UNIT 8`,
          title: `Machine Learning Basic`,
          desc: `Machine learning (ML) is the subset of artificial intelligence (AI) that focuses on building systems that learn—or improve performance—based on the data they consume, computers to learn and make predictions or decisions without being explicitly programmed. Artificial intelligence is a broad term that refers to systems or machines that mimic human intelligence. Machine learning and AI are often discussed together, and the terms are sometimes used interchangeably, but they don’t mean the same thing. An important distinction is that although all machine learning is AI, not all AI is machine learning.`,
          bgColor: `blue`,
          img: `https://techstudio.nyc3.cdn.digitaloceanspaces.com/External-page-assets/GIFS/brain-chip.gif`,
          tagAttr: [
            {
              bgColor: `white`,
              img: `carbon:machine-learning-model`,
              text: `ML Model`,
            },
          ],
        },
        {
          id: 9,
          classname: `I`,
          caption: `UNIT 9`,
          title: `Capstone Project`,
          desc: `In this capstone project, students leverage their proficiency in Excel, Power BI, SQL, Python, and Machine Learning to analyze complex datasets, develop data-driven insights, create interactive visualizations, design and implement predictive models, and present their findings, culminating in a comprehensive demonstration of their data science expertise and problem-solving abilities. The key components are: Data collection, Data cleaning, Data summarization, Data interpretation, Data  presentation.`,
          bgColor: `white`,
          img: `https://res.cloudinary.com/kingsleysolomon/image/upload/v1699890564/techstudio/GIFS/Frame_1000002483_ww93xt.gif`,
          tagAttr: [
            {
              bgColor: `blue`,
              img: `carbon:machine-learning-model`,
              text: `ML Model`,
            },
          ],
        },
      ],
    },

    duration: {
      online: {
        time: `N/A`,
        date: `N/A`,
        price: `0`,
      },
      weekend: {
        time: `12`,
        date: `June 17, 2024`,
        price: `250000`,
      },
      weekday: {
        time: `12`,
        date: `June 15, 2024`,
        price: `250000`,
      },

      span: {
        weekday: `Mon - wed (10am - 5pm)`,
        weekend: `Sat - Sun (10am - 5pm)`,
      },
    },
  },
  cyberSecurity: {
    hero: {
      title: `Introduction to Cyber Security `,
      subTitle: `The significance of cybersecurity in today's increasingly digital environment cannot be emphasized. This extensive course provides an overview of the basic ideas, approaches, and methods needed to protect networks, information systems, and digital assets.`,
      img: `https://res.cloudinary.com/dkszgtapy/image/upload/v1687070589/techstudio-web-app/assets/images/Group_1000002401_tpwtbe.png`,
    },

    sectionTwo: {
      header: {
        title: `Our Process`,
      },
      cards: [
        {
          img: tag1,
          text: `You'll explore the realm of digital threats and defense mechanisms. Starting with foundational cybersecurity knowledge, you'll cover essential terminology, concepts, and practices vital for securing digital systems. `,
        },
        {
          img: tag2,
          text: `Progressing further, you'll tackle risk management, mastering techniques to identify and mitigate vulnerabilities across diverse organizational settings. `,
        },
        {
          img: tag3,
          text: `You will learn about the complex structure of security measures, covering network reinforcement, encryption methods, access control, and system strengthening for creating resilient information systems.`,
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
          classname: `A`,
          caption: `UNIT 1`,
          title: `Introduction to Cybersecurity`,
          desc: `
          In this unit, students will learn about the fundamentals of cybersecurity, including the CIA triad, the necessity of cybersecurity, data types and states, the ramifications of security breaches, real-world breach examples, hands-on security breach laboratories, various threats, attack types, vulnerabilities, risk assessment, and insights into potential careers in the cybersecurity field`,
          bgColor: `white`,
          img: `https://techstudio.nyc3.cdn.digitaloceanspaces.com/External-page-assets/GIFS/Cybersecurity%20(1).gif`,
          tagAttr: [
            {
              bgColor: `blue`,
              // img: `vscode-icons:file-type-excel`,
              text: `Cyber security basics`,
            },
          ],
        },
        {
          id: 2,
          classname: `B`,
          caption: `UNIT 2`,
          title: `Fundamentals of Networking`,
          desc: `
          In this unit, students will delve into networking essentials, covering topics such as network structures, devices, OSI and TCP/IP models, network topologies, subnetting, routing, wireless network vulnerabilities, core network security principles, troubleshooting techniques, and a practical demonstration on setting up a network.`,
          bgColor: `light-blue-ii`,
          img: `https://techstudio.nyc3.cdn.digitaloceanspaces.com/External-page-assets/GIFS/Network%20Security.gif`,
          tagAttr: [
            {
              bgColor: `white`,
              // img: `devicon:mysql-wordmark`,
              text: `WireShark Cisco Packet Tracer`,
            },
          ],
        },
        {
          id: 3,
          classname: `C`,
          caption: `UNIT 3`,
          title: `Social Engineering`,
          desc: `In this unit, students will explore social engineering comprehensively, encompassing its definition, purpose, common goals, scenarios, psychological principles involved, various attack types, human-based threats, and effective defense strategies against social engineering exploits.`,
          bgColor: `white`,
          img: `https://techstudio.nyc3.cdn.digitaloceanspaces.com/External-page-assets/GIFS/Cybersecurity%20(3).gif`,
          tagAttr: [
            {
              bgColor: `blue`,
              // img: `logos:microsoft-power-bi`,
              text: `SET Maltego`,
            },
          ],
        },
        {
          id: 4,
          classname: `D`,
          caption: `UNIT 4`,
          title: `Access Controls and Biometric`,
          desc: `In this unit, students will delve into the realm of access control and biometric security, covering topics such as definitions, significance, authorization, authentication, identification verification during enrollment, various access control models and lists, an introduction to biometrics, modalities of biometric systems, challenges in biometric security, and real-world case studies illustrating these concepts in action.`,
          bgColor: `blue`,
          img: `https://techstudio.nyc3.cdn.digitaloceanspaces.com/External-page-assets/GIFS/Cybersecurity%20(4).gif`,
          tagAttr: [
            {
              bgColor: `white`,
              // img: `logos:python`,
              text: `Fingerprint SDKs`,
            },
          ],
        },
        {
          id: 5,
          classname: `E`,
          caption: `UNIT 5`,
          title: `Operating System Security`,
          desc: `In this unit, students will explore Operating Systems (OS) comprehensively, covering key aspects such as its definition, purpose, components, file system architecture, interfaces (CLI vs. GUI), different OS types (Mobile, Server), an introduction to Virtualization focusing on Virtual Machines, detailed insights into Windows and Linux OS, access controls within OS, and strategies for OS hardening to enhance system security`,
          bgColor: `white`,
          img: `https://techstudio.nyc3.cdn.digitaloceanspaces.com/External-page-assets/GIFS/Cybersecurity%20Issue%20(1).gif`,
          tagAttr: [
            {
              bgColor: `blue`,
              // img: `logos:python`,
              text: `SELinux`,
            },
            {
              bgColor: `blue`,
              // img: `logos:numpy`,
              text: `Windows Security Features`,
            },
          ],
        },
        {
          id: 6,
          classname: `F`,
          caption: `UNIT 6`,
          title: `Cryptography`,
          desc: `
          In this unit, students will gain comprehensive knowledge about cryptography, encompassing its definition, historical context, the differentiation between symmetric and asymmetric encryption, the role of hash functions, understanding digital signatures, and the importance of key management within cryptographic systems.`,
          bgColor: `light-blue-ii`,
          img: `https://techstudio.nyc3.cdn.digitaloceanspaces.com/External-page-assets/GIFS/Cybersecurity.gif`,
          tagAttr: [
            {
              bgColor: `blue`,
              // img: `logos:python`,
              text: `OpenSSL`,
            },
            {
              bgColor: `white`,
              // img: `logos:pandas-icon`,
              text: `Python Cryptodome`,
            },
          ],
        },
        {
          id: 7,
          classname: `G`,
          caption: `UNIT 7`,
          title: `Security policies and Procedures`,
          desc: `In this unit, students will delve into essential aspects of cybersecurity incident management, encompassing incident response protocols, disaster recovery strategies, business continuity planning, and understanding regulatory compliance frameworks governing cybersecurity.`,
          bgColor: `light-blue-ii`,
          img: `https://techstudio.nyc3.cdn.digitaloceanspaces.com/External-page-assets/GIFS/Cybersecurity%20Issue.gif`,
          tagAttr: [
            {
              bgColor: `blue`,
              // img: `logos:python`,
              text: `NIST`,
            },
            {
              bgColor: `blue`,
              // img: `devicon:plotly`,
              text: `ISO/IEC 27001`,
            },
          ],
        },
        {
          id: 8,
          classname: `H`,
          caption: `UNIT 8`,
          title: `Web Security`,
          desc: `
          In this unit, students will explore fundamental web technologies, study prevalent web attacks, gain insights into the Open Web Application Security Project (OWASP), and understand key principles of web application security.`,
          bgColor: `blue`,
          img: `https://res.cloudinary.com/doejcrfso/image/upload/v1704796029/Cybersecurity_2_tys00c.gif`,
          tagAttr: [
            {
              bgColor: `white`,
              // img: `carbon:machine-learning-model`,
              text: `ML Model`,
            },
          ],
        },
      ],
    },

    duration: {
      online: {
        time: `N/A`,
        date: `N/A`,
        price: `0`,
      },
      weekday: {
        time: `12`,
        date: `June 15, 2024`,
        price: `250000`,
      },
      weekend: {
        time: `12`,
        date: `June 17, 2024`,
        price: `250000`,
      },

      span: {
        weekday: `Mon - wed (10am - 5pm)`,
        weekend: `Sat - Sun (10am - 5pm)`,
      },
    },
  },
  digitalMarketing: {
    hero: {
      title: `Digital Marketing Immersive `,
      subTitle: `Let’s equip you with practical, hands-on expertise that will help you become a highly sought-after marketing professional.
      From mastering the fundamentals of digital marketing to delving deep into advanced strategies, our experienced instructors will guide you through every step of the journey.
      `,
      img: `https://res.cloudinary.com/dkszgtapy/image/upload/v1687070589/techstudio-web-app/assets/images/Group_1000002401_tpwtbe.png`,
    },

    sectionTwo: {
      header: {
        title: `Our Process`,
      },
      cards: [
        {
          img: tag1,
          text: `We understand that every student is unique, with different learning styles and goals. That's why we tailor our approach to ensure that each participant receives a personalized learning experience. Whether you're a complete beginner or an experienced professional, our instructors will work closely with you to identify your strengths, address your weaknesses, and help you achieve your objectives.
          `,
        },
        {
          img: tag2,
          text: `We believe in learning by doing. That's why our digital marketing course is designed to be highly interactive and hands-on. From day one, you'll be actively engaged in practical exercises, real-world simulations, and collaborative projects that mirror the challenges you'll face in the field.`,
        },
        {
          img: tag3,
          text: `Our curriculum is carefully crafted to align with the latest industry trends, best practices, and emerging technologies in digital marketing. Whether you're interested in SEO, social media marketing, content creation, or email automation, you'll find relevant and up-to-date content that equips you with the skills and knowledge to excel in your career.  `,
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
          classname: `A`,
          caption: `UNIT 1`,
          title: `Introduction to Digital Marketing`,
          desc: `Gain a comprehensive understanding of the digital marketing landscape, including key concepts, terminology, and trends shaping the industry.
          We will explore the various digital marketing channels available, from content creation and social media marketing to email marketing and beyond. You will learn how to develop a digital marketing strategy that aligns with business objectives and target audience preferences for maximum impact and results.
          `,
          bgColor: `null`,
          img: `https://res.cloudinary.com/doejcrfso/image/upload/v1713456181/IG%20Marketing%20gifs/MArketing_ng0p4c.gif`,
        },
        {
          id: 2,
          classname: `B`,
          caption: `UNIT 2`,
          title: `Content Marketing`,
          desc: `Dive deep into the art and science of content creation, distribution, and optimization to attract, engage, and convert your target audience. Master the principles of storytelling, audience segmentation, and content amplification to create compelling and resonant content across diverse platforms and formats. You’ll be exposed to advanced content marketing techniques, such as influencer collaboration, user-generated content campaigns, and content repurposing strategies to maximize reach and ROI.
          `,
          bgColor: `light-blue-ii`,
          img: `https://res.cloudinary.com/doejcrfso/image/upload/v1713455605/IG%20Marketing%20gifs/Content_Creation_1_xrq4hd.gif`,
        },
        {
          id: 3,
          classname: `C`,
          caption: `UNIT 3`,
          title: `Social Media Marketing`,
          desc: `Develop a comprehensive understanding of social media platforms, algorithms, and best practices to effectively leverage them for brand building, engagement, and lead generation. Learn how to develop and execute a social media marketing strategy tailored to your business goals, target audience demographics, and industry vertical. Also, we will explore advanced social media marketing tactics, including influencer partnerships, community management, and paid advertising campaigns, to drive measurable results and ROI.
          `,
          bgColor: `white`,
          img: `https://res.cloudinary.com/doejcrfso/image/upload/v1713456203/IG%20Marketing%20gifs/After_sales_koqilf.gif`,
          // img: `https://res.cloudinary.com/doejcrfso/image/upload/v1713455949/IG%20Marketing%20gifs/Offers_Chest_c038sf.gif`,
        },
        {
          id: 4,
          classname: `D`,
          caption: `UNIT 4`,
          title: `Instagram marketing`,
          desc: `Deep dive into Instagram's unique features, tools, and algorithms to optimize your presence and engagement on the platform. Master the art of storytelling through visual content, leveraging Instagram's photo and video formats to capture attention and foster authentic connections with your audience.
          You will discover advanced Instagram marketing strategies, such as hashtag optimization, Instagram Stories, IGTV, and influencer collaborations, to elevate your brand's visibility and impact on the platform. 
          `,
          bgColor: `blue`,
          img: `https://res.cloudinary.com/doejcrfso/image/upload/v1713455748/IG%20Marketing%20gifs/Instagram_hm19hx.gif`,
        },
        {
          id: 5,
          classname: `E`,
          caption: `UNIT 5`,
          title: `Ads Conversion`,
          desc: `You will learn how to design and implement high-converting ad campaigns across various digital channels, including search engines, social media platforms, and display networks. Explore the fundamentals of ad targeting, bidding strategies, ad copywriting, and creative optimization to maximize ad performance and ROI. We will dive into analytics and conversion tracking to measure the effectiveness of your ad campaigns, identify areas for improvement, and optimize your conversion funnel for better results.
          `,
          bgColor: `white`,
          img: `https://res.cloudinary.com/doejcrfso/image/upload/v1713455753/IG%20Marketing%20gifs/Ads_aeeiti.gif`,
        },
        {
          id: 6,
          classname: `F`,
          caption: `UNIT 6`,
          title: `Branding`,
          desc: `Understand the principles of branding, brand identity, and brand positioning, and how they influence consumer perceptions, preferences, and loyalty. You will learn how to develop a strong brand strategy that encompasses brand purpose, values, voice, and visual identity to differentiate your brand and create meaningful connections with your target audience. Also, we will be exploring case studies of successful brands and branding campaigns to glean insights into effective brand-building strategies and apply them to your own brand development efforts.
          `,
          bgColor: `light-blue-ii`,
          img: `https://res.cloudinary.com/doejcrfso/image/upload/v1713456308/IG%20Marketing%20gifs/Branding_1_te993b.gif`,
        },
        {
          id: 7,
          classname: `G`,
          caption: `UNIT 7`,
          title: `Prospecting and sales`,
          desc: `Master the art of prospecting, lead generation, and customer acquisition through targeted outreach, relationship building, and persuasive communication techniques. Learn how to identify and qualify leads, overcome objections, and close sales effectively through consultative selling and relationship-based approaches. Explore the principles of sales psychology, negotiation tactics, and objection handling to increase your sales conversion rates and drive revenue growth for your business.`,
          bgColor: `light-blue-ii`,
          img: `https://res.cloudinary.com/doejcrfso/image/upload/v1713455613/IG%20Marketing%20gifs/Prospect_ggnaup.gif`,
        },
        {
          id: 8,
          classname: `H`,
          caption: `UNIT 8`,
          title: `After Sales`,
          desc: `Understand the importance of customer retention and loyalty in sustaining long-term business success and profitability. Learn how to deliver exceptional post-purchase experiences, including onboarding, customer support, and ongoing engagement, to nurture customer relationships and drive repeat business. Explore strategies for upselling, cross-selling, and customer advocacy to maximize lifetime customer value and turn satisfied customers into brand ambassadors and advocates.
          `,
          bgColor: `blue`,
          img: `https://res.cloudinary.com/doejcrfso/image/upload/v1713456203/IG%20Marketing%20gifs/After_sales_koqilf.gif`,
        },
        {
          id: 9,
          classname: `I`,
          caption: `UNIT 9`,
          title: `Email Marketing
          `,
          desc: `Master the fundamentals of email marketing, including list building, segmentation, email design, and deliverability best practices, to drive engagement and conversions.
          Learn how to create personalized and targeted email campaigns that resonate with your audience's needs, preferences, and interests, and drive them to take action.
          Explore the power of email automation and lifecycle marketing to streamline your email marketing efforts, increase efficiency, and deliver relevant content at every stage of the customer journey.
          `,
          bgColor: `white`,
          img: `https://res.cloudinary.com/doejcrfso/image/upload/v1713455753/IG%20Marketing%20gifs/Ads_aeeiti.gif`,
        },
        // {
        //   id: 9,
        //   classname: `I`,
        //   caption: `UNIT 9`,
        //   title: `Email Marketing`,
        //   desc: `Master the fundamentals of email marketing, including list building, segmentation, email design, and deliverability best practices, to drive engagement and conversions.
        //   Learn how to create personalized and targeted email campaigns that resonate with your audience's needs, preferences, and interests, and drive them to take action.
        //   Explore the power of email automation and lifecycle marketing to streamline your email marketing efforts, increase efficiency, and deliver relevant content at every stage of the customer journey.

        //   `,
        //   bgColor: `blue`,
        //   img: `https://res.cloudinary.com/doejcrfso/image/upload/v1713455605/IG%20Marketing%20gifs/Content_Creation_1_xrq4hd.gif`,
        // },
      ],
    },

    duration: {
      online: {
        time: `N/A`,
        date: `N/A`,
        price: `0`,
      },
      weekend: {
        time: `12`,
        date: `June 17, 2024`,
        price: `250000`,
      },
      weekday: {
        time: `12`,
        date: ` June 15 2024`,
        price: `N/A`,
      },

      span: {
        weekday: `Mon - wed (10am - 5pm)`,
        weekend: `Sat - Sun (10am - 5pm)`,
      },
    },
  },
  // mobileDevelopment: {
  //   hero: {
  //     title: `Mobile Development (IOS & Android)`,
  //     subTitle: `Whether you want to pursue a career as a Mobile App Developer, a Freelancer, or an Entrepreneur, this program prepares you adequately for that.`,
  //     img: mobile,
  //   },

  //   sectionTwo: {
  //     header: {
  //       title: `Our Process`,
  //     },
  //     cards: [
  //       {
  //         img: numberOne,
  //         text: `In this foundational Mobile App Development course, you’ll learn the fundamentals of Dart, including object-oriented programming (OOP) - a concept that can be applied beyond Mobile App Development.`,
  //       },
  //       {
  //         img: numberTwo,
  //         text: `In this foundational Mobile App Development course, you’ll learn the fundamentals of Dart, including object-oriented programming (OOP) - a concept that can be applied beyond Mobile App Development.`,
  //       },
  //       {
  //         img: numberThree,
  //         text: `You’ll go through each Process in the app development lifecycle so as to build a fully functional mobile app that can be deployed on both the Android and iOS platforms.`,
  //       },
  //     ],
  //   },

  //   sectionFour: {
  //     header: {
  //       title: `What you will learn`,
  //     },
  //     list: [
  //       {
  //         id: 1,
  //         classname: `A`,
  //         title: `Fundamentals`,
  //         desc: `The first weeks of this bootcamp is to help you appreciate the fundamentals of mobile app development using Dart and Flutter. You’ll be comfortable writing pure Dart codes. You’ll also be introduced to Object Oriented Programming (OOP) in Dart to encapsulate both data and functionality. You’ll create, access, and modify objects to have a strong foundation for OOP.`,
  //       },
  //       {
  //         id: 2,
  //         classname: `A`,
  //         title: `Version Control`,
  //         desc: `You’ll learn to use the Git version control system, collaborate with other team members and push your projects to GitHub using Git`,
  //       },
  //       {
  //         id: 3,
  //         classname: `A`,
  //         title: `Introduction to Flutter`,
  //         desc: `After mastering the fundamentals of Dart, the focus shifts towards Flutter. You’ll learn about widgets and its importance to creating hybrid mobile applications. You’ll learn when different types of widgets and when to use them. You’ll be introduced to design concepts and common design patterns across different mobile devices.`,
  //       },
  //       {
  //         id: 4,
  //         classname: `A`,
  //         title: `Routing and Navigation`,
  //         desc: `You’ll learn what routing is and why it’s one of the core concepts of mobile application development. You’ll learn how to navigate from one page to the other, how to use named routes and using push and pop methods.`,
  //       },
  //       {
  //         id: 5,
  //         classname: `A`,
  //         title: `FireBase Integration`,
  //         desc: `Modern mobile applications need querying real-time data for interactivity. You’ll spend considerable time learning Flutter integration with FireBase. You’ll be exposed to querying the database to perform the CRUD functions - Create, Read, Update and Delete resources.`,
  //       },
  //       {
  //         id: 6,
  //         classname: `A`,
  //         title: `Production Deployment`,
  //         desc: `You’ll be taught how to deploy your production ready mobile app to the Android and iOS app stores to be accessed by everyone in the mobile community.`,
  //       },
  //     ],
  //   },
  // },
}

// In this immersive program, you'll uncover the secrets behind crafting magnetic branding, mastering the art of ad creation, how to create compelling offers and ignite your creativity in content development, Whether you're a savvy entrepreneur hungry for business growth or a content creator eager to make your mark, this course is to help you hit your sales target consistently.
