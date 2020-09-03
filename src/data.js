import MyClienteleImage from './assets/images/myclientele.jpg';
import NVNTORYImage from './assets/images/nvntory.jpg';
import QuizAppImage from './assets/images/quizapp.jpg';

const projects = [
  {
    name: 'MyClientele',
    repo: 'https://github.com/thinkful-ei-orka/myclientele-f5-client',
    livelink: 'https://myclientele-f5.vercel.app/',
    description:
      'With My Clientele, you can keep all your client information in one place. This includes names, locations, hours of operations, if they are currently closed, and the current general manager. You can even update the clients as this information changes.',
    secondarydescription:
      'My Clientele is ideal for the fast paced and busy lifestyle you lead, and allows you to keep up-to-date with what places are closed due to things like Covid-19 or renovations with the currently closed feature.',
    image: { MyClienteleImage },
  },
  {
    name: 'NVNTORY',
    repo: 'https://github.com/jonnyboydev/nvntory-client',
    livelink: 'https://nvntory-client.binkeroni.vercel.app/',
    description:
      'NVNTORY is an alternative to expensive inventory management systems that seems to not listen to their customers. We continue to update the app with new features in order to compete with larger systems.',
    secondarydescription:
      'The app idea came about from years of being in the e-commerce industry and seeing that so many inventory management systems that were affordable for small business, were also incomplete or buggy.',
    image: { NVNTORYImage },
  },
  {
    name: 'Javascript Method Quiz App',
    repo: 'https://jonnyboydev.github.io/JS-Method-Quiz-App/',
    livelink: 'https://github.com/jonnyboydev/JS-Method-Quiz-App',
    description:
      'A quiz app that was designed "react-fully" with dynamic HTML based on the state of the web app. The questions in the app can be updated and all data is dynamically rendered when some button is clicked.',
    secondarydescription:
      'The app is created for people who need review of Javascript Methods. It asks you questions and provides multiple choice answers. It shows if you were correct, and how many you got right. It was built to help me practice JS methods.',
    image: { QuizAppImage },
  },
];

const links = [
  {
    name: 'LinkedIn',
    link: 'https://www.linkedin.com/in/jonathan-b-clark/',
  },
  {
    name: 'Github',
    link: 'https://github.com/jonnyboydev',
  },
  {
    name: 'Contact',
    link: 'mailto:jonathanbclark@outlook.com',
  },
];