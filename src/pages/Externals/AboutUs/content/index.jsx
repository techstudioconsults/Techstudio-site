// import img2 from '../../../../assets/images/about-img2.webp'
// import img3 from '../../../../assets/images/about-img3.webp'
// import img4 from '../../../../assets/images/about-img4.webp'
// import img5 from '../../../../assets/images/about-img5.webp'

import icon1 from '../../../../assets/icons/clock.png'
import icon2 from '../../../../assets/icons/Insurance.png'
import icon3 from '../../../../assets/icons/money-bag.png'
import icon4 from '../../../../assets/icons/noun_colleague_3249817.png'
import icon5 from '../../../../assets/icons/noun_Learning_2531760.png'
import icon6 from '../../../../assets/icons/noun_workspace_799121.png'

import AboutSec2Img01 from '../../../../assets/images/AboutSec2Img01.png'
import AboutSec2Img02 from '../../../../assets/images/AboutSec2Img02.png'
import AboutSec2Img03 from '../../../../assets/images/AboutSec2Img03.png'
import AboutSec2Img04 from '../../../../assets/images/AboutSec2Img04.png'

import AboutSec4Img01 from '../../../../assets/images/AboutSec4Img01.png'
import AboutSec4Img02 from '../../../../assets/images/AboutSec4Img02.png'
import AboutSec4Img03 from '../../../../assets/images/AboutSec4Img03.png'
import AboutSec4Img04 from '../../../../assets/images/AboutSec4Img04.png'
import AboutSec4Img05 from '../../../../assets/images/AboutSec4Img05.png'
import AboutSec4Img06 from '../../../../assets/images/AboutSec4Img06.png'

export const ABOUT_CONTENT = {
  hero: {
    caption: `KNOW US MORE`,
    title: `About Techstudio`,
    description1: `Tech Studio Academy is a tech training company based in Lagos, Nigeria, founded in 2017 with the objective of providing cost-effective and high-quality tech education to aspiring young people in the country.`,
    description2: ` Over the past four years, the academy has trained over 1000 students through both online and in-person classes, and has helped them achieve their career goals in the tech industry. Our instructors are carefully selected based on both industry experience and teaching ability, ensuring that our students receive the best possible education.`,
    description3: `We envision becoming a leading and preferred technology training provider in Nigeria, responding to the needs of the industry. Our mission is to provide high-quality and affordable technology training that meets the needs of our students.`,
  },

  sectionTwo: {
    images: [
      {
        id: 1,
        src: AboutSec2Img01,
      },
      {
        id: 2,
        src: AboutSec2Img02,
      },
      {
        id: 3,
        src: AboutSec2Img03,
      },
      {
        id: 4,
        src: AboutSec2Img04,
      },
    ],
  },

  sectionThree: {
    header: {
      title: `Driven by our core values`,
      subTitle: `We are advocates of growth, progress and career advancement.`,
    },
    cards: [
      {
        icon: icon1,
        title: `Flexibility`,
        desc: `We offer weekdays, weekends, and online classes which enable you to learn at your own pace and convenience.`,
      },
      {
        icon: icon6,
        title: `Condusive Environment`,
        desc: `We have provided an exquisite learning environment so you may have ease of learning.`,
      },
      {
        icon: icon3,
        title: `Affordable tuition fees`,
        desc: `We have initiated all of our programs to be affordable, and our payment method can be paid in three installments. Terms & conditions applied.`,
      },
      {
        icon: icon5,
        title: `Learning & Development`,
        desc: `We have in place modern learning facilities and technologies to ease your learning. Also ensure you engage in projects to develop your skills.`,
      },
      {
        icon: icon4,
        title: `Great Colleaggues`,
        desc: `Your contemporaries will be great and inquisitive minds like you. Willing to learn and effect real change. Also, you’ll have the opportunity to network among your peers.`,
      },
      {
        icon: icon2,
        title: `Certificates`,
        desc: `You’ll receive a valuable certificate of participation at the end of the program.`,
      },
    ],
  },

  sectionFour: {
    header: {
      title: `Meet the team`,
      subTitle: `Lorem ipsum dolor sit amet consectetur. Urna adipiscing risus faucibus ut vulputate malesuada eget. In leo commodo auctor facilisi. Le nisl justo in eu volutpat eu in. Sit urna nulla mi dee.`,
    },

    cards: [
      {
        img: AboutSec4Img01,
        name: `Wasiu Yusuf`,
        job: `COO`,
      },
      {
        img: AboutSec4Img02,
        name: `Tosin Sanya`,
        job: `HR/ Admin Lead`,
      },
      {
        img: AboutSec4Img03,
        name: `Hafeez Kekere-Ekun`,
        job: `Product Lead`,
      },
      {
        img: AboutSec4Img04,
        name: `Hussein Oyelaja`,
        job: `Marketing Lead`,
      },
      {
        img: AboutSec4Img05,
        name: `Adebusola Adebowale`,
        job: `Sales & Marketing`,
      },
      {
        img: AboutSec4Img06,
        name: `Patrick Blessing`,
        job: `Sales & Marketing`,
      },
    ],
  },
}
