import self from "../img/self.png";
import project1 from "../img/project1.png";
import project2 from "../img/project2.png";
import project3 from "../img/project3.png";
import project4 from "../img/project4.png";
/* Hi there! Thanks for checking out my portfolio template. Be sure to read the comments to get a better understanding of
how to make this template work best for you! */
//"rgb(0,255,164)", "rgb(166,104,255)
//rgb(237,96,76)", "rgb(35,52,63)
//"rgb(255,206,50)", "rgb(29,99,255)"
export const colors = ["rgb(255,206,50)", "rgb(29,99,255)"];
/*
I highly recommend using a gradient generator like https://gradientgenerator.paytonpierce.dev/ to generate a pair of colors that you like.
These colors will be used to style your name on the homepage, the background of your picture, and some other accents throughout
the site.
 */

/*
So let's get started! Some of the info below is pretty self-explanatory, like 'firstName' and 'bio'. I'll try to explain anything
that might not be obvious right off the bat :) I recommend looking at the template example live using "npm start" to get an idea
of what each of the values mean.
 */

export const info = {
  firstName: "RameshRaja",
  lastName: "",
  initials: "RR", // the example uses first and last, but feel free to use three or more if you like.
  position: "a Full Stack Developer",
  selfPortrait: self, // don't change this unless you want to name your self-portrait in the "img" folder something else!
  gradient: `-webkit-linear-gradient(135deg, ${colors})`, // don't change this either
  baseColor: colors[0],
  miniBio: [
    // these are just some "tidbits" about yourself. You can look at mine https://paytonjewell.github.io/#/ for an example if you'd like
    {
      emoji: "☕",
      text: "fueled by Motivation & Music",
    },
    {
      emoji: "🌎",
      text: "based in the India",
    },
    {
      emoji: "💼",
      text: "an aspiring Full Stack Web Developer",
    },
    {
      emoji: "📧",
      text: "rameshraja003801@gmail.com",
    },
  ],
  socials: [
    {
      link: "https://www.instagram.com/mr.holysprt0138/",
      icon: "fa fa-instagram",
      label: "instagram",
    },
    {
      link: "https://github.com/RameshRaja05",
      icon: "fa fa-github",
      label: "github",
    },
    {
      link: "https://linkedin.com/in/ramesh-raja-b76531214",
      icon: "fa fa-linkedin",
      label: "linkedin",
    },
    {
      link: "https://twitter.com/RameshR11593611",
      icon: "fa fa-twitter",
      label: "twitter",
    },
    // Feel free to remove any of these that you don't have. I'll write an FAQ on how to add new ones later, let me know if you have a request for an icon!
    // Just change the links so that they lead to your social profiles.
  ],
  bio: `Hi, I'm Ramesh Raja, an aspiring full stack web developer with a curious mind and a passion for creating a niche and cutting edge websites. I've been learning how to create full stack websites for over several months, and I'm always looking for new ways to use my skills to make a difference. I'm skilled in both front-end and back-end, and I'm always up for a challenge.
    I'm confident that I can help you achieve your goals. I'm a creative thinker with a strong attention to detail. I'm also a team player and I'm always willing to go the extra mile.
    I'm also a flexible person who is able to adapt to change. I'm good at listening to new ideas and perspectives, and I'm always willing to try new things.
    I invite you to explore my portfolio to see more of my work. I hope you'll contact me to discuss how I can help you with your next project.`,
  skills: {
    proficientWith: [
      "javascript",
      "react",
      "git",
      "github",
      "bootstrap",
      "html5",
      "css3",
      "tailwind",
      "python",
      "django",
      "redux",
      "bulma",
      "express",
      "typescript",
      "sql",
      "node js"
    ],
    exposedTo: ["flask", "angular", "vue",'nosql'],
  },
  hobbies: [
    {
      label: "theater",
      emoji: "🎭",
    },
    {
      label: "movies",
      emoji: "🎥",
    },
    {
      label: "music",
      emoji: "🎧",
    },
    {
      label: "coding",
      emoji: "🧑‍💻",
    },
    // Same as above, change the emojis to match / relate to your hobbies or interests.
    // You can also remove the emojis if you'd like, I just think they look cute :P
  ],
  portfolio: [
    // This is where your portfolio projects will be detailed
    {
      title: "Yelp Camp",
      live: "https://rameshraja.onrender.com", //this should be a link to the live version of your project, think github pages, netlify, heroku, etc. Or your own domain, if you have it.
      source: "https://github.com/RameshRaja05/YelpCamp", // this should be a link to the **repository** of the project, where the code is hosted.
      image: project1,
    },
    {
      title: "CRM Using Django",
      live: "https://djcrm.onrender.com",
      source: "https://github.com/RameshRaja05/DjangoCRM",
      image: project2,
    },
    {
      title: "Blog App",
      live: "http://rameshraja470138.pythonanywhere.com/",
      source: "https://github.com/RameshRaja05/DjangoBlogApp",
      image: project3,
    },
    {
      title: "Detection of cyberbullying in social media",
      source: "https://github.com/RameshRaja05/Detection-of-cyberbullying-using-machine-learning-in-social-media",
      image: project4,
    },
  ],
};
