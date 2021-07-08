import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: '', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: '',
  subtitle: '',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'Jonathyn.jpg',
  paragraphOne: '',
  paragraphTwo: '',
  paragraphThree: '',
  resume: 'https://drive.google.com/file/d/1N5qw9Jy-mOja7lQita9DKUKJjlpDERH3/view?usp=sharing', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'qoatspic.jpg',
    title: 'Qoats',
    info: 'Just as the oats we use for our early morning breakfast have great nutritional value to the body. A good quote can have just as big an impact for the mind. They help us see and understand life, truths and concepts that we may have otherwise missed or overlooked. They can also inspire us and spark a new fire of motivation to conquer the day or tasks. Qoats is a simple app created to spark inspiration and share a little bit with others.',
    info2: '',
    url: 'https://swiftholiday.github.io/qoats-app/',
    repo: 'https://github.com/SwiftHoliday/qoats-app', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'WITW.png',
    title: 'What In The World!?',
    info: "With the time's we live in today I think we can often find ourselves asking the question, What In The World is going on!? If you are someone who likes to stay in the know or catch an interesting article, you've come to the right place! This is a simple web app that displays the top-headlins for the day. Hope you enjoy!",
    info2: '',
    url: 'https://what-in-the-world.netlify.app/',
    repo: 'https://github.com/SwiftHoliday/project-3-client', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'Destination.png',
    title: 'DestiNation',
    info: "Do you have a lot of travel plans that have you just can't seem to keep organized? Well look no further than DestiNation. This app was designed to help you keep all of your travel plans like your flight, hotels, budget, and even who is coming with you, in one convenient place.",
    info2: '',
    url: 'https://destination-travel-app.herokuapp.com/',
    repo: 'https://github.com/SwiftHoliday/destination', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: '',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: '',
    },
    {
      id: nanoid(),
      name: 'codepen',
      url: '',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: '',
    },
    {
      id: nanoid(),
      name: 'github',
      url: '',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: true, // set to false to disable the GitHub stars/fork buttons
};
