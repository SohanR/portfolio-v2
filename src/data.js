import work1 from  './assets/work1.png'
import work2 from  './assets/work2.png'


export const profile =  {
        "name": "Mizanur Rahman Sohan",
        "subtitle":"Software Engineer",
        "description":"JavaScript enthusiast and software engineer dedicated to crafting flawless digital experiences. Building pixel-perfect solutions for a connected world, one line of code at a time. ",
        "github":"https://github.com/SohanR",
        "linkedin":"https://www.linkedin.com/in/mizanurrahman/",
    }


export const about = {
    "title":"About Me",
    "subtitle":"My introduction",
    "description":"Seasoned Full-Stack Developer proficient in MERN stack and JavaScript technologies, with expertise in TypeScript, MongoDB queries, Nest.js, and Express.js. Experienced in crafting robust web applications, specializing in microservices architecture. Agile-minded, detail-oriented, and driven by a passion for problem-solving, continuously adapting to embrace new technologies for ongoing growth.",
}

export const skills ={
    "title":"Skills",
    "subtitle":"My Technical Level",
    "frontend":{
        "title":"Frontend Developer",
        "skills":["React","Redux","React Native","Next JS"]
    },
    "backend":{
        "title":"Backend Developer",
        "skills":["Node.js","Express.js","Nest.js","MongoDB"]
    }
}

export const experience = {
    "title":"Experience",
    "subtitle":"My Journey",
    "data":[
        {
            "name":"Zaynax Health",
            "role":"Backend Developer",
            "date":"April, 2023 - Aug, 2023"
        },
        {
            "name":"Absolute Zero LTD",
            "role":"Shopify Developer (Remote)",
            "date":"March, 2021 - Dec, 2022"
        }
    ]
}




export const projectData = [
    {
        "title": "Book My Hotel",
        "details":"Created a Hotel Booking Platform where users can book rooms and sell their own hotels. One user can be both a buyer and a seller at the same time. Made it easy to use and secure for everyone",
        "image":work1,
        "live":"https://bookmyhotels.netlify.app/ ",
        "code":"https://github.com/SohanR/book-my-hotel/ ",
        "tag":['Full Stack','ReactJS','NodeJS','ExpressJS','MongoDB'],
    },
    {
        "title": "Send Email Using React",
        "details":"This project allows sending emails directly from the client-side using the EmailJS library, eliminating the need for a backend service like Node.js or a mail server setup.",
        "image":work2,
        "live":"https://react-send-email.netlify.app/",
        "code":"https://github.com/SohanR/send-email-using-react",
        "tag":['Frontend','ReactJS','EmailJS'],
    },
]



export const projectNav = [
    {
        "name": 'all'
    },

    {
        "name": 'Full Stack'
    },

    {
        "name": 'Frontend'
    },

    {
        "name": 'ReactJS'
    },
    
    {
        "name": 'NextJS'
    },    
    
    {
        "name": 'NestJS'
    },

    {
        "name": 'ExpressJS'
    },

    {
        "name": 'React Native'
    },
]

export const contactData = {
    "title": "Contact Me",
    "subtitle":"Get in touch",
    "subheading":"Talk to me",
    "form":{
        "title": "Contact with me anytime",
        "name":"Enter your name",
        "email":"Enter your email address",
        "message":"Write your message",
    },
    "email":{
        "title":"Email",
        "subtitle":"Email Me",
        "link":"sohans.bd@gmail.com"
    },

    "linkedin":{
        "title":"Linkedin",
        "subtitle":"Connect With Me",
        "link":"linkedin.com/in/mizanurrahman/"
    },

    "github":{
        "title":"Github",
        "subtitle":"Follow Me",
        "link":"github.com/SohanR"
    }
}
