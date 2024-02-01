import img1 from '../assets/images/tour-1.jpeg'
import img2 from '../assets/images/tour-2.jpeg'
import img3 from '../assets/images/tour-3.jpeg'
import img4 from '../assets/images/tour-4.jpeg'
import img5 from '../assets/images/tour-5.jpeg'
import img6 from '../assets/images/tour-6.jpeg'

export const pageLinks = [
  { id: 1, href: '#Home', text: 'home' },

  { id: 2, href: '#about', text: 'about' },

  { id: 3, href: '#sevices', text: 'services' },

  { id: 4, href: '#features', text: 'features' },
]

export const navIcon = [
  { href: 'https://www.twitter.com', class: 'fab fa-facebook' },
  { href: 'https://www.twitter.com', class: 'fab fa-twitter' },
  { href: 'https://www.twitter.com', class: 'fab fa-squarespace' },
]

export const servicesData = [
  {
    classIcon: 'fa-wallet',
    headlineText: 'saving money',
    paraText:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit.Asperiores, officia.',
  },
  {
    classIcon: 'fa-tree',
    headlineText: 'endless hiking',
    paraText:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit.Asperiores, officia.',
  },
  {
    classIcon: 'fa-socks',
    headlineText: 'amazing comfort',
    paraText:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit.Asperiores, officia.',
  },
]

export const tourProfile = [
  {
    tourImage: img1,
    place: 'Tibet Adventure',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.',
    location: 'China',
    duration: '6',
    cost: '$2100',
    tourDate: 'august 26th, 2020',
  },
  {
    tourImage: img2,
    place: 'Explore Hong Kong',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.',
    location: 'Hong Kong',
    duration: '8',
    cost: '$5000',
    tourDate: 'september 15th, 2020',
  },
  {
    tourImage: img3,
    place: 'best of java',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.',
    location: 'indonesia',
    duration: '20',
    cost: '$3300',
    tourDate: 'october 1th, 2020',
  },
  {
    tourImage: img4,
    place: 'Kenya Highlights',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.',
    location: 'Kenya',
    duration: '20',
    cost: '$3300',
    tourDate: '',
  },
  {
    tourImage: img5,
    place: 'Namibia Savanah',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.',
    location: 'Namibia',
    duration: '15',
    cost: '$6300',
    tourDate: 'January 15th, 2020',
  },
  {
    tourImage: img6,
    place: 'India architectures',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.',
    location: 'India',
    duration: '12',
    cost: '$5300',
    tourDate: 'september 15th, 2023',
  },
]
