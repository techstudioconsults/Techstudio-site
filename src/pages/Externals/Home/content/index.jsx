import accessbank from '@assets/images/access-bank.png'
import btc from '@assets/images/btc.png'
import joseph from '@assets/images/joseph.jpg'
import peter from '@assets/images/peter.jpg'
import pwc from '@assets/images/pwc.png'
import rilwan from '@assets/images/rilwan.jpg'
import stutern from '@assets/images/stutern.png'
import ubabank from '@assets/images/uba.png'

import interSwitch from '../../../../assets/images/interSwitch_png.png'

export const HOME_CONTENT = {
  hero: {
    title: [`Unlock Your Tech Potential With Us Today`],
    description: `Transform Your Career and Become a Skilled Tech Professional by Enrolling with techStudio Academy.`,
  },

  sectionTwo: {
    header: {
      title: [`Why Techstudio?`],
      title2: [`We Are Customer-Centric`],
      description: [`We give our students an all round experience by providing extra value to ensure you excel in your chosen course.`],
    },
    cards: [
      {
        image: `https://techstudio.nyc3.cdn.digitaloceanspaces.com/External-page-assets/Images/learning-enviroment.webp`,
        imageLow: `https://techstudio.nyc3.cdn.digitaloceanspaces.com/External-page-assets/Images/learning-enviroment.webp`,
        title: `Great learning Environment`,
        description: `We provide you with the best learning facility you can lay
        your eyes on. All our classes are conducive, en-suite and
        equipped with high-speed internet and the latest
technologies for learning.`,
      },
      {
        image: `https://techstudio.nyc3.cdn.digitaloceanspaces.com/External-page-assets/Images/expirenced-tutors.webp`,
        imageLow: `https://techstudio.nyc3.cdn.digitaloceanspaces.com/External-page-assets/Images/expirenced-tutors.webp`,
        title: `Experienced Tutor`,
        description: `Our tutors are highly skilled professionals that are chosen based on industry experience and teaching ability. Our support team provides students with guidance and tips on building a top-notch portfolio that woos employers.`,
      },
      {
        image: `https://techstudio.nyc3.cdn.digitaloceanspaces.com/External-page-assets/Images/career-support.webp`,
        imageLow: `https://techstudio.nyc3.cdn.digitaloceanspaces.com/External-page-assets/Images/career-support.webp`,
        title: `Career Support`,
        description: `We offer you the best support - either while you’re
        learning or after you’ve graduated. Our support team
        provides students with guidance and tips on building a
        top-notch portfolio that woos employers. `,
      },
    ],
  },

  sectionThree: {
    header: {
      title: `WHAT WE OFFER`,
      topic: `Certified Tech Training Courses`,
      description: `Explore our extensive selection of highly sought-after beginner-friendly tech courses, meticulously designed to empower and inspire learners at every step of their educational journey.`,
    },
    //carosel
    cards: [
      {
        image: `https://techstudio.nyc3.cdn.digitaloceanspaces.com/External-page-assets/Images/product-design.png`,
        imageLow: `https://techstudio.nyc3.cdn.digitaloceanspaces.com/External-page-assets/Images/product-design.png`,
        title: `Product Design (UI/UX)`,
        description: `Learn to design and deliver digital products that serve clients' needs and solve users' problems. Understand the fundamentals and tools of design like problem definition, user research, prototyping, and more.`,
        path: `/course/product-design`,
      },
      {
        image: `https://techstudio.nyc3.cdn.digitaloceanspaces.com/External-page-assets/Images/fullstack.png`,
        imageLow: `https://techstudio.nyc3.cdn.digitaloceanspaces.com/External-page-assets/Images/fullstack.png`,
        title: `Fullstack Development`,
        description: `We teach the important skills required to jumpstart your career as a web developer. With 24 intense weeks of on-campus training, you learn to think and build like software developers. `,
        path: `/course/fullstack`,
      },
      {
        image: `https://techstudio.nyc3.cdn.digitaloceanspaces.com/External-page-assets/Images/data-science.svg`,
        imageLow: `https://techstudio.nyc3.cdn.digitaloceanspaces.com/External-page-assets/Images/data-science.svg`,
        title: `Data Science`,
        description: `Learn to build predictive models, understand data visualisation and pattern recognition. You'll learn to use leading methods to wrangle large data sets to forecast trends, generate information and strategy. `,
        path: '/course/data-science',
      },
      // {
      //   image: `https://res.cloudinary.com/kingsleysolomon/image/upload/v1685525999/techstudio/Group_1000002405_6_befhxh.png`,
      //   title: `Mobile Developement`,
      //   description: `Lorem ipsum dolor sit amet consectetur. Urna adipiscing risus faucibus ut vulputate malesuada eget. In leo commodo auctor facilisi. Leo nisl justo in eu volutpat eu in. `,
      //   path: `/course/mobile`,
      // },
      {
        image: `https://techstudio.nyc3.cdn.digitaloceanspaces.com/External-page-assets/Images/frontend.png`,
        imageLow: `https://techstudio.nyc3.cdn.digitaloceanspaces.com/External-page-assets/Images/frontend.png`,
        title: `Frontend Engineering`,
        description: ` You’ll learn all you need to know to become a Frontend Developer and build interesting portfolios while learning the fundamentals of HTML, CSS, JavaScript and React. `,
        path: `/course/frontend`,
      },

      {
        image: `https://techstudio.nyc3.cdn.digitaloceanspaces.com/External-page-assets/Images/cyber-security.png`,
        imageLow: `https://techstudio.nyc3.cdn.digitaloceanspaces.com/External-page-assets/Images/cyber-security.png`,
        title: `Cyber Security`,
        description: ` You will learn the best practices of securing networks, systems and data. We will help you get hands-on experience with essential cybersecurity tools and technologies.`,
        path: `/course/cyber-security`,
      },
      {
        image: `https://res.cloudinary.com/doejcrfso/image/upload/v1713466711/IG%20Marketing%20gifs/igm_jxsem6.png`,
        imageLow: `https://res.cloudinary.com/doejcrfso/image/upload/v1713466711/IG%20Marketing%20gifs/igm_jxsem6.png`,
        title: `Digital Marketing `,
        description: ` 
        Our experienced instructors will guide you through the journey of becoming a sought-after marketing professional, covering digital marketing fundamentals and advanced strategies.
        `,
        path: `/course/digital-marketing`,
      },
    ],
  },

  sectionFour: {
    articleOne: {
      title: `LIFE AFTER TRAINING`,
      topic: `Where Our Graduates Work`,
      description: `Our talented graduates flourish in leading companies across the globe, making significant contributions to both their personal growth and the organizations they serve. They work in industries ranging from Information technology to Telecommunication, and more.`,
      companies: [ubabank, accessbank, pwc, btc, stutern, interSwitch],
    },

    body: {
      title: `What Our Graduates Say`,

      testimonials: [
        {
          message: `I came into techStudio Academy with practically no prior knowledge in software development. However, within a few weeks, I was able to grasp the crux of software development and also master the soft skills required for being a software developer. So far so good, the skills acquired have given me a mind-blowing push in my career as a software developer.`,

          profile: {
            image: joseph,
            name: `JOSEPH DARAMOLA`,
            job: `Frontend Developer`,
          },
        },
        {
          message: `TechStudio Academy has been one of the big push I needed to get in the real world space. I had an immense learning that was really different from the self learning I started with. The learning was fun and there were some internship job opportunities that were presented to us. I got my first gig immediately after the program. Thank you TechStudio for that push I needed.`,

          profile: {
            image: peter,
            name: `PETER EDEAWE`,
            job: `Software Developer`,
          },
        },
        {
          message: `I bless the day the Instagram algorithm pop up TechStudio Academy to my news feed. I read through their curriculum and other details about the Bootcamp and I told myself this is the opportunity I've been waiting for. I wasn't disappointed, the environment was well ventilated and conducive, with competent instructors. Here I am today at OT&T Consulting, fulfilling my dreams thanks to TechStudio Academy.`,

          profile: {
            image: rilwan,
            name: `RILWAN AJIBOLA`,
            job: `Software Developer`,
          },
        },
      ],
    },

    header: {
      caption: `TAKE A COURSE`,
      title: [`Acquire a tech skill to transcend your current earning status`],
      subTitle: `We provide high-quality and affordable technology training to meet our students’ needs. Also, we ensure all our students are equipped with the necessary tech skills for related work opportunities at the end of the program.`,
    },
  },

  sectionFive: {
    lists: [
      {
        id: 1,
        title: `Apply`,
        desc: `At TechStudio we offer a variety of courses designed to build your skills and professionally improve you. All you have to do is apply.`,
      },
      {
        id: 2,
        title: `Get Admitted`,
        desc: `Once we confirm your payment for the program, we reserve your spot. You will go through the onboarding process before the program starts.`,
      },
      {
        id: 3,
        title: `Start classes`,
        desc: `Be sure to attend the introductory classes, this will play a huge role in your subsequent learning stages. You’ll participate in projects, personal tasks and group works; this is a way for our tutors to evaluate your skills, growth, and knowledge. We have provided a conducive learning environment and modern learning facilities for you, so you may have ease of learning.`,
      },
    ],
  },

  sectionSix: {
    header: {
      caption: `Need help choosing a course?`,
      title: `Talk To An Expert`,
      description: `Are you indecisive about what course to choose?
Would you like to talk to a Tech expert over any tech related issue? We have professionals in place who are ready and willing to be of help.`,
    },
  },

  sectionSeven: {
    header: {
      title: [`Subscribe To  `, ` Our Newsletter`],
      subTitle: `Subscribe to our monthly newsletter and be among the first to be notified on an update of the App`,
    },

    upcomingClasses: [
      {
        image: `https://techstudio.nyc3.cdn.digitaloceanspaces.com/External-page-assets/Images/class-section.png`,
        imageLow: `https://techstudio.nyc3.cdn.digitaloceanspaces.com/External-page-assets/Images/class-section.png`,
        title: `Javascript Fullstack Web Development`,
        description: `With 24 intense weeks of on-campus training, you will learn to think and build like software developers. You move from understanding programming fundamentals to launching full-stack web apps. You do all these while learning to solve everyday problems with constructive, well-written programs`,
        location: `Physical & Online`,
        date: `7 / 08 / 2023`,
        duration: `24 Weeks`,
      },
      {
        image: `https://techstudio.nyc3.cdn.digitaloceanspaces.com/External-page-assets/Images/class-section.png`,
        imageLow: `https://techstudio.nyc3.cdn.digitaloceanspaces.com/External-page-assets/Images/class-section.png`,
        title: `Product Design & UI/UX Immersive`,
        description: `In this program, you will learn to design and deliver digital products that serve clients' needs and solve users' problems. You will understand the fundamental techniques and tools of design like problem definition, user research, prototyping, testing, and more.`,
        location: `Physical`,
        date: `7 / 08 / 2023`,
        duration: `12 Weeks`,
      },
      {
        image: `https://techstudio.nyc3.cdn.digitaloceanspaces.com/External-page-assets/Images/class-section.png`,
        imageLow: `https://techstudio.nyc3.cdn.digitaloceanspaces.com/External-page-assets/Images/class-section.png`,
        title: `Data Science & Analysis`,
        description: `In this program, you will learn to build predictive models, understand data visualisation and pattern recognition. You'll learn to use leading methods to wrangle large data sets to forecast trends, generate information and inform strategy.`,
        location: `Physical`,
        date: `7 / 08 / 2023`,
        duration: `12 Weeks`,
      },
    ],
  },
}
