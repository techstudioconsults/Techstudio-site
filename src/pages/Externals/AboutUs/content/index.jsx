import staff1 from '@assets/staff/staff1.png'
import staff2 from '@assets/staff/staff2.png'
import staff3 from '@assets/staff/staff3.png'
import staff4 from '@assets/staff/staff4.png'
import staff5 from '@assets/staff/staff5.png'
import staff6 from '@assets/staff/staff6.png'

export const ABOUT_CONTENT = {
  hero: {
    caption: `KNOW US MORE`,
    title: `About TechStudio`,
    description1: `TechStudio Academy is a tech training company based in Lagos, Nigeria, founded in 2017 with the objective of providing cost-effective and high-quality tech education to aspiring young people in the country.`,
    description2: ` Over the past four years, the academy has trained over 1000 students through both online and in-person classes, and has helped them achieve their career goals in the tech industry. Our instructors are carefully selected based on both industry experience and teaching ability, ensuring that our students receive the best possible education.`,
    description3: `We envision becoming a leading and preferred technology training provider in Nigeria, responding to the needs of the industry. Our mission is to provide high-quality and affordable technology training that meets the needs of our students.`,
  },

  sectionTwo: {
    images: [
      {
        id: 1,
        src: `https://res.cloudinary.com/kingsleysolomon/image/upload/v1699879364/techstudio/images/IMG_9419_w7p2l6_phistp.webp`,
      },
      {
        id: 2,
        src: `https://res.cloudinary.com/kingsleysolomon/image/upload/v1699879046/techstudio/images/IMG_9435_infhuu_icl0ga.webp`,
      },
      {
        id: 3,
        src: `https://res.cloudinary.com/kingsleysolomon/image/upload/v1699879329/techstudio/images/IMG_9424_ffooid_upwkdx.webp`,
      },
      {
        id: 4,
        src: `https://res.cloudinary.com/kingsleysolomon/image/upload/v1699879344/techstudio/images/IMG_9417_hbjuu8_cowzb4.webp`,
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
        icon: `mdi:clock-outline`,
        title: `Flexibility`,
        desc: `We offer weekdays, weekends, and online classes which enable you to learn at your own pace and convenience.`,
      },
      {
        icon: `mdi:table-chair`,
        title: `Condusive Environment`,
        desc: `We have provided an exquisite learning environment so you may have ease of learning.`,
      },
      {
        icon: `healthicons:money-bag-outline`,
        title: `Affordable tuition fees`,
        desc: `We have initiated all of our programs to be affordable, and our payment method can be paid in three installments. Terms & conditions applied.`,
      },
      {
        icon: `lucide:network`,
        title: `Learning & Development`,
        desc: `We have in place modern learning facilities and technologies to ease your learning. Also ensure you engage in projects to develop your skills.`,
      },
      {
        icon: `carbon:partnership`,
        title: `Great colleagues`,
        desc: `Your contemporaries will be great and inquisitive minds like you. Willing to learn and effect real change. Also, you’ll have the opportunity to network among your peers.`,
      },
      {
        icon: `la:certificate`,
        title: `Certificates`,
        desc: `You’ll receive a valuable certificate of participation at the end of the program.`,
      },
    ],
  },

  sectionFour: {
    header: {
      title: `Meet the team`,
      subTitle: `Our team comprises a dynamic group of young and vibrant professionals who possess an unwavering commitment to go the extra mile in delivering exceptional service.`,
    },

    cards: [
      {
        img: staff1,
        name: `Wasiu Yusuf`,
        job: `COO`,
      },
      {
        img: staff2,
        name: `Tosin Sanya`,
        job: `HR/ Admin Lead`,
      },
      {
        img: staff3,
        name: `Hafeez Kekere-Ekun`,
        job: `Product Lead`,
      },
      {
        img: staff4,
        name: `Hussein Oyelaja`,
        job: `Marketing Lead`,
      },
      {
        img: staff5,
        name: `Adebusola Adebowale`,
        job: `Sales & Marketing`,
      },
      {
        img: staff6,
        name: `Patrick Blessing`,
        job: `Sales & Marketing`,
      },
    ],
  },
}
