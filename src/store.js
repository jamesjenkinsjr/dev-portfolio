import Bookmarker from './assets/Bookmarker-preview.png'
import BetterBeer from './assets/BetterBeer-preview.png'
import Huddle from './assets/Huddle-portal-desktop.png'

const store = [
  {
    title: 'Huddle',
    description: 'Instantly create fast, private message portals without providing personal information',
    srcURL: 'https://github.com/jamesjenkinsjr/huddle',
    liveURL: 'https://huddle-app-client.herokuapp.com',
    img: Huddle,
    techIcons: [
      'devicon-html5-plain',
      'devicon-css3-plain-wordmark',
      "devicon-nodejs-plain",
      "devicon-express-original",
      "devicon-react-original"
    ]
  },
  {
    title: 'Bookmarker',
    description: 'Create and maintain bookmarks for favorite websites',
    srcURL: 'https://github.com/jamesjenkinsjr/JamesJ-bookmarks-app',
    liveURL: 'https://jamesjenkinsjr.github.io/JamesJ-bookmarks-app/',
    img: Bookmarker,
    techIcons: [
      'devicon-html5-plain',
      'devicon-css3-plain-wordmark',
      'devicon-jquery-plain'
    ]
  },
  {
    title: 'BetterBeer',
    description: 'Search for user-submitted deals on beer',
    srcURL: 'https://github.com/jamesjenkinsjr/betterbeer-app',
    liveURL: 'https://betterbeer.herokuapp.com/search',
    img: BetterBeer,
    techIcons: [
      'devicon-html5-plain',
      'devicon-css3-plain-wordmark',
      "devicon-nodejs-plain",
      "devicon-react-original"
    ]
  }
]

export default store