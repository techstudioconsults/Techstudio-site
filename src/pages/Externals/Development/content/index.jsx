// this data would also be used in the intro page.

export const DEVELOPMENT_CONTENT = {
  frontendDevelopment: {
    hero: {
      title: `Frontend Web Development`,
      subTitle: `Let’s help you become a professional frontend web developer. You’ll learn all you need to know to become a Frontend Developer and build interesting portfolios while learning the fundamentals of HTML, CSS, JavaScript and React.`,
      // img: frontendImg,
      img: `https://res.cloudinary.com/dkszgtapy/image/upload/v1686218833/techstudio-web-app/assets/images/Group_1000002400_ocntit_pqduyw.png`,
    },

    sectionTwo: {
      header: {
        title: `Our process`,
      },
      cards: [
        {
          img: `https://res.cloudinary.com/dkszgtapy/image/upload/v1686218526/techstudio-web-app/assets/images/numberOne_iorpb9.webp`,
          text: `We teach the important skills required to jumpstart your career as a web developer. With 5 straight weeks of web training, you learn to think and build like frontend developers.`,
        },
        {
          img: `https://res.cloudinary.com/dkszgtapy/image/upload/v1686218526/techstudio-web-app/assets/images/numberTwo_tjclgg.webp`,
          text: `You move from understanding web basics to launching Single Page Applications (SPAs). You’ll be taught to build smart SPAs using vanilla JavaScript that interacts with user inputs.`,
        },
        {
          img: `https://res.cloudinary.com/dkszgtapy/image/upload/v1686218526/techstudio-web-app/assets/images/numberThree_ludnkx.webp`,
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
          classname: `A`,
          title: `Introduction To HTML And CSS`,
          desc: `This unit provides a solid foundation in web development, covering both HTML and CSS. Students will learn how to create well-structured HTML documents using tags, elements, and attributes. They will also explore CSS syntax and style rules to customize the appearance of web pages. Topics include text styling, backgrounds, borders, and images. Additionally, students will discover CSS layout techniques, such as floats and CSS grid, to create different page layouts. They will also explore Bootstrap, utilizing its pre-built components and responsive grid system for attractive and mobile-friendly layouts. Practical exercises reinforce learning.`,
          caption: `UNIT 1`,
          bgColor: null,
          img: `https://res.cloudinary.com/dkszgtapy/image/upload/c_scale,w_500/v1691824654/ef8cee473a4c1cb9b25c71c27a8c0331_hnj8jo.gif`,
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
          img: `https://res.cloudinary.com/dkszgtapy/image/upload/c_scale,w_500/v1691612902/jsgif_a3c5xb.gif`,
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
          img: `https://res.cloudinary.com/dkszgtapy/image/upload/c_scale,w_500/v1691612888/da2fe599df4887abd3716910e400dc31_d4ocrr.gif`,
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
          img: `https://res.cloudinary.com/dkszgtapy/image/upload/c_scale,w_500/v1691612871/efe5303e3ebc2ebe40271df657a5c1fe_1_c6upyg.gif`,
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
          img: `https://res.cloudinary.com/dkszgtapy/image/upload/c_scale,w_500/v1691612857/b61e3c4e5d43466ee7bc75e2591fcbeb_r1augy.gif`,
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
          title: `Version Control and Deployment`,
          desc: `Version control systems like Git play a crucial role in managing code changes over time. They provide a structured way to track modifications, maintain a history of changes, and enable multiple developers to work on the same codebase simultaneously. With version control, developers can create branches to work on different features or bug fixes independently`,
          caption: `UNIT 6`,
          bgColor: `light-blue-ii`,
          img: `https://res.cloudinary.com/dkszgtapy/image/upload/c_scale,w_500/v1691612844/1b675dbc3d6997b36a5b81d4eb14d4c1_shwnuv.gif`,
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
        date: `T/A`,
        price: `250000`,
      },
      weekend: {
        time: `12`,
        date: `T/A`,
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
        title: `Our process`,
      },
      cards: [
        {
          img: `https://res.cloudinary.com/dkszgtapy/image/upload/v1686218526/techstudio-web-app/assets/images/numberOne_iorpb9.webp`,
          text: `We teach the important skills required to jumpstart your career as a product designer. With 12 straight weeks of training, you learn to think, build and solve complex UI/UX challenges.`,
        },
        {
          img: `https://res.cloudinary.com/dkszgtapy/image/upload/v1686218526/techstudio-web-app/assets/images/numberTwo_tjclgg.webp`,
          text: `We move from understanding the core principles of effective design to applying tactics like wireframing, low and high-fidelity prototyping, usability testing and user interface design to build a portfolio of intuitive digital products. `,
        },
        {
          img: `https://res.cloudinary.com/dkszgtapy/image/upload/v1686218526/techstudio-web-app/assets/images/numberThree_ludnkx.webp`,
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
          img: `https://res.cloudinary.com/dkszgtapy/image/upload/c_scale,w_500/v1691612899/07ff30b600c0f2706c5451a2bb74a12c_qwqqy8.gif`,
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
          img: `https://res.cloudinary.com/dkszgtapy/image/upload/c_scale,w_500/v1691612898/20e286636ecf529af409f599f0dbb9c2_xak8qt.gif`,
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
          img: `https://res.cloudinary.com/dkszgtapy/image/upload/c_scale,w_500/v1691612867/f6aa748c292967dfccf0921abea475aa_dghyct.gif`,
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
          desc: `Unit 4 focuses on User Experience (UX), encompassing the design process, user research, collaboration, wireframing, and usability testing. Students gain an understanding of Design Thinking as a design process, conduct user research to gather valuable feedback for creating user personas and journey maps. They collaborate and brainstorm to generate ideas, employing techniques like Information Architecture and user flows. Students then translate these ideas into tangible wireframes. Lastly, they conduct rigorous usability tests on the final design to ensure a seamless user experience before delivering the project.
`,
          bgColor: `blue`,
          img: `https://res.cloudinary.com/dkszgtapy/image/upload/c_scale,w_500/v1691612899/6a5404804f053237d5da254518054a43_ewbc4s.gif`,
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
          desc: `This Unit is dedicated to the Capstone Project, where students apply their acquired knowledge and skills to create a comprehensive design solution. The unit encompasses creating case studies to articulate the problem statement and provide an overview of the product. Following the design thinking stages, students iterate on their prototype, incorporating feedback and refining their design. Rigorous testing ensures the effectiveness and usability of the prototype. Finally, students showcase their work through a compelling pitch or presentation, demonstrating their understanding of the project's objectives, process, and outcomes. This unit allows students to showcase their creativity, problem-solving abilities, and presentation skills, culminating in a tangible representation of their product design journey.`,
          bgColor: `white`,
          img: `https://res.cloudinary.com/dkszgtapy/image/upload/c_scale,w_500/v1691612899/b1194eb483bb1aa573963decdf539d06_si9be3.gif`,
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
      weekday: {
        time: `12`,
        date: `August 7, 2023`,
        price: `250000`,
      },
      weekend: {
        time: `12`,
        date: `August 5, 2023`,
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
        title: `Our process`,
      },
      cards: [
        {
          img: `https://res.cloudinary.com/dkszgtapy/image/upload/v1686218526/techstudio-web-app/assets/images/numberOne_iorpb9.webp`,
          text: `In 24 weeks, you’ll be a professional Fullstack developer, able to build real-time interactive and dynamic applications. We teach Fullstack JavaScript because growing in popularity every day and it’s here to stay.`,
        },
        {
          img: `https://res.cloudinary.com/dkszgtapy/image/upload/v1686218526/techstudio-web-app/assets/images/numberTwo_tjclgg.webp`,
          text: `You’ll get your hands dirty by building real life websites,APIs, and data-driven apps to gain confidence and sharpen yours skills. You’ll also collaborate with classmates on a range of projects to add to your portfolio.`,
        },
        {
          img: `https://res.cloudinary.com/dkszgtapy/image/upload/v1686218526/techstudio-web-app/assets/images/numberThree_ludnkx.webp`,
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
          img: `https://res.cloudinary.com/dkszgtapy/image/upload/c_scale,w_500/v1691612899/b1194eb483bb1aa573963decdf539d06_si9be3.gif`,
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
          img: `https://res.cloudinary.com/dkszgtapy/image/upload/c_scale,w_500/v1691612871/efe5303e3ebc2ebe40271df657a5c1fe_1_c6upyg.gif`,
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
          img: `https://res.cloudinary.com/dkszgtapy/image/upload/c_scale,w_500/v1691612873/0f275453bbb7a1cda2b321c5ae7d848d_kzxd0x.gif`,
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
          img: `https://res.cloudinary.com/dkszgtapy/image/upload/c_scale,w_500/v1691612907/ef227f1c0fef5a971f588a90254df2e8_kuddcv.gif`,
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
          img: `https://res.cloudinary.com/dkszgtapy/image/upload/c_scale,w_500/v1691612857/b61e3c4e5d43466ee7bc75e2591fcbeb_r1augy.gif`,
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
          img: `https://res.cloudinary.com/dkszgtapy/image/upload/c_scale,w_500/v1691612844/1b675dbc3d6997b36a5b81d4eb14d4c1_shwnuv.gif`,
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
          img: `https://res.cloudinary.com/dkszgtapy/image/upload/c_scale,w_500/v1691823803/52f3a298d97a1f4c61987e149b3b902a_jjwbcv.gif`,
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
          img: `https://res.cloudinary.com/dkszgtapy/image/upload/c_scale,w_500/v1691824028/946c7e70f69e3802e82188b0ea507963_wuqnf2.gif`,
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
      ],
    },

    duration: {
      online: {
        time: `16`,
        date: `August 7, 2023`,
        price: `200000`,
      },
      weekday: {
        time: `24`,
        date: `August 7, 2023`,
        price: `500000`,
      },
      weekend: {
        time: `16`,
        date: `August 5, 2023`,
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
      title: `Data Science Immersive With Python`,
      subTitle: `Get your hands dirty working with Excel and complex data. Dive into the Python programming language, understand data analysis and statistical modeling using Python, after which you move into machine learning and algorithms.`,
      img: `https://res.cloudinary.com/dkszgtapy/image/upload/v1687070589/techstudio-web-app/assets/images/Group_1000002401_tpwtbe.png`,
    },

    sectionTwo: {
      header: {
        title: `Our process`,
      },
      cards: [
        {
          img: `https://res.cloudinary.com/dkszgtapy/image/upload/v1686218526/techstudio-web-app/assets/images/numberOne_iorpb9.webp`,
          text: `You will learn the skills needed to skyrocket your career as a data analyst/scientist. You'll have 12 straight weeks of training to predict trends and generate informed predictive models.`,
        },
        {
          img: `https://res.cloudinary.com/dkszgtapy/image/upload/v1686218526/techstudio-web-app/assets/images/numberTwo_tjclgg.webp`,
          text: `You’ll learn the fundamentals of the Python programming language and it’s usage in analysing complex data. You’ll build and refine machine learning models to predict patterns from data sets and complete hands-on exercises to reinforce the newly learned skills.`,
        },
        {
          img: `https://res.cloudinary.com/dkszgtapy/image/upload/v1686218526/techstudio-web-app/assets/images/numberThree_ludnkx.webp`,
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
          bgColor: `red`,
          img: `https://res.cloudinary.com/dkszgtapy/image/upload/v1687740338/techstudio-web-app/assets/images/Data_analysis_2_rchbol.gif`,
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
          img: `https://res.cloudinary.com/dkszgtapy/image/upload/v1687128488/techstudio-web-app/assets/images/pana_sgxtms.svg`,
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
          title: `Python Basics`,
          desc: `Students delve into Python programming, acquiring a strong foundation in this widely-used language for data analysis. They learn to install Anaconda, explore in-built functions, work with different data types, manipulate strings, use variables and operators, implement loops, and import modules for enhanced functionality. Practical exercises empower students to write Python code proficiently, analyze large datasets, and create visual representations of data.`,
          bgColor: `primary`,
          img: `https://res.cloudinary.com/dkszgtapy/image/upload/v1687128499/techstudio-web-app/assets/images/rafiki_jkdsfc.svg`,
          tagAttr: [
            {
              bgColor: `blue`,
              img: `logos:python`,
              text: `Python`,
            },
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
          title: `Python NumPy`,
          desc: `Students delve into NumPy, a vital Python library for numerical data analysis and scientific computing. They gain hands-on experience by importing the library and utilizing array functions. Through practical exercises, they learn to create one-dimensional and two-dimensional arrays, enabling efficient manipulation and analysis of complex numerical data. By mastering NumPy, students acquire essential skills for advanced data analysis, modeling, and scientific computations in Python.`,
          bgColor: `blue`,
          img: `https://res.cloudinary.com/dkszgtapy/image/upload/v1687128519/techstudio-web-app/assets/images/pana_xxryex.svg`,
          tagAttr: [
            {
              bgColor: `white`,
              img: `logos:python`,
              text: `Python`,
            },
            {
              bgColor: `white`,
              img: `logos:numpy`,
              text: `Numpy`,
            },
          ],
        },
        {
          id: 5,
          classname: `E`,
          caption: `UNIT 5`,
          title: `Python Pandas`,
          desc: `In this unit, students delve into Pandas, a powerful Python library for data manipulation and analysis. They learn to convert sequences and dictionaries into DataFrame tables using the .DataFrame function. Students gain practical skills in importing files and converting them into DataFrames. They explore various DataFrame operations such as retrieving index and columns, using head and tail methods, accessing specific columns, counting values, summing columns vertically and horizontally, locating values in cells or positions, extracting rows based on conditions, creating columns based on conditions, and utilizing the groupby function.`,
          bgColor: `white`,
          img: `https://res.cloudinary.com/dkszgtapy/image/upload/v1687128524/techstudio-web-app/assets/images/rafiki_dexbmz.png`,
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
          id: 6,
          classname: `F`,
          caption: `UNIT 6`,
          title: `Python Plotly`,
          desc: `Students delve into Plotly and Plotly Express, Python libraries renowned for interactive data visualization. They acquire practical skills in creating a variety of charts, including bar charts for categorical comparisons, line charts for trend analysis, area charts for cumulative data, pie charts for proportions, and donut charts with a center hole. By mastering Plotly, students unlock the ability to design captivating and interactive visualizations that effectively convey data insights.`,
          bgColor: `light-blue-ii`,
          img: `https://res.cloudinary.com/dkszgtapy/image/upload/v1687128568/techstudio-web-app/assets/images/amico_uj3blm.svg`,
          tagAttr: [
            {
              bgColor: `blue`,
              img: `logos:python`,
              text: `Python`,
            },
            {
              bgColor: `white`,
              img: `devicon:plotly`,
              text: `Plotly`,
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
        date: `August 7, 2023`,
        price: `250000`,
      },
      weekend: {
        time: `12`,
        date: `August 5, 2023`,
        price: `250000`,
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
  //       title: `Our process`,
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
  //         text: `You’ll go through each process in the app development lifecycle so as to build a fully functional mobile app that can be deployed on both the Android and iOS platforms.`,
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
  // classname: `A`,
  //         title: `Fundamentals`,
  //         desc: `The first weeks of this bootcamp is to help you appreciate the fundamentals of mobile app development using Dart and Flutter. You’ll be comfortable writing pure Dart codes. You’ll also be introduced to Object Oriented Programming (OOP) in Dart to encapsulate both data and functionality. You’ll create, access, and modify objects to have a strong foundation for OOP.`,
  //       },
  //       {
  //         id: 2,
  // classname: `A`,
  //         title: `Version Control`,
  //         desc: `You’ll learn to use the Git version control system, collaborate with other team members and push your projects to GitHub using Git`,
  //       },
  //       {
  //         id: 3,
  // classname: `A`,
  //         title: `Introduction to Flutter`,
  //         desc: `After mastering the fundamentals of Dart, the focus shifts towards Flutter. You’ll learn about widgets and its importance to creating hybrid mobile applications. You’ll learn when different types of widgets and when to use them. You’ll be introduced to design concepts and common design patterns across different mobile devices.`,
  //       },
  //       {
  //         id: 4,
  // classname: `A`,
  //         title: `Routing and Navigation`,
  //         desc: `You’ll learn what routing is and why it’s one of the core concepts of mobile application development. You’ll learn how to navigate from one page to the other, how to use named routes and using push and pop methods.`,
  //       },
  //       {
  //         id: 5,
  // classname: `A`,
  //         title: `FireBase Integration`,
  //         desc: `Modern mobile applications need querying real-time data for interactivity. You’ll spend considerable time learning Flutter integration with FireBase. You’ll be exposed to querying the database to perform the CRUD functions - Create, Read, Update and Delete resources.`,
  //       },
  //       {
  //         id: 6,
  // classname: `A`,
  //         title: `Production Deployment`,
  //         desc: `You’ll be taught how to deploy your production ready mobile app to the Android and iOS app stores to be accessed by everyone in the mobile community.`,
  //       },
  //     ],
  //   },
  // },
}
