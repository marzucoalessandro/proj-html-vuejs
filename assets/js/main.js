let app = new Vue({
  el: "#root",
  data: {
    logo: [
      "./assets/img/dark-logo.png"
    ],
    myLogo: {
      width: "250px",
      marginTop: "30px"
    },
    link: [
      "Home",
      "Pages",
      "Courses",
      "Features",
      "Blog",
      "Shop"
    ],
    address: [
      "382 NE 191st St # 87394 Miami, FL 33179-3899",
      "+1(305)547-9909 (9am - 5pm EST, Monday-Friday)",
      "support@maxcoach.com"
    ],
    explore: [
      "Start Here",
      "Blog",
      "About us"
    ],
    story: [
      "Success story",
      "Courses",
      "Contact us"
    ],
    information: [
      "Membership",
      "Purchase guide",
      "Privacy policy",
      "Terms of service"
    ],
    card: [
      {
        img: "./assets/img/motivation-course-06-480x298.jpg",
        price: "$30.00",
        description: "How to be Successfull: Create A Growth Mindset For Success",
        lessons: "3 Lessons",
        students: "50 Students"
      },
      {
        img: "./assets/img/motivation-course-05-480x298.jpg",
        price: "$30.00",
        description: "Hot to Build Confidence in Your Abilities",
        lessons: "1 Lessons",
        students: "50 Students"
      },
      {
        img: "./assets/img/motivation-course-04-480x298.jpg",
        price: "$20.00",
        description: "Productivity Machine - Focus in a Distracted World",
        lessons: "5 Lessons",
        students: "50 Students"
      },
      {
        img: "./assets/img/motivation-course-03-480x298.jpg",
        price: "$20.00",
        description: "Effective Time Management Mastery - Complete Guide",
        lessons: "18 Lessons",
        students: "50 Students"
      },
      {
        img: "./assets/img/motivation-course-02-480x298.jpg",
        price: "$25.99",
        description: "Body Language Secrets for Entrepreneurs",
        lessons: "19 Lessons",
        students: "50 Students"
      },
      {
        img: "./assets/img/motivation-course-01-480x298.jpg",
        price: "$19.99",
        description: "Management Skills: The Science of Leadership",
        lessons: "17 Lessons",
        students: "50 Students"
      }
    ],
    cardTwo: [
      {
        img: "./assets/img/motivation-blog-04-480x325.jpg",
        date: "may 13,2020",
        firstP: "How to Stay True to Your Personal Brand",
        secondP: "When it comes to your business or career, you want..."
      },
      {
        img: "./assets/img/motivation-blog-03-480x325.jpg",
        date: "may 13,2020",
        firstP: "5 vital lessons in 5 years of freelancing",
        secondP: "Being self-employed and working from home, it's easy to get..."
      },
      {
        img: "./assets/img/motivation-blog-02-480x325.jpg",
        date: "may 13,2020",
        firstP: "11 super useful tips for small-business owners",
        secondP: "Being a small business owner poses a ton of challenges. we.."
      },
      {
        img: "./assets/img/motivation-blog-01-480x325.jpg",
        date: "may 13,2020",
        firstP: "how to give yourself grace to start again",
        secondP: "Forgive yourself for bad habits you may have started or..."
      }
    ]
  }
});
