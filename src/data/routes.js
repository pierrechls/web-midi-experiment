import Home from 'components/Home'
import Plant from 'components/Plant'
import Garden from 'components/Garden'

module.exports = [
  {
    path: '/home',
    name: 'Home',
    component: Home,
    alias: '/'
  },
  {
    path: '/plant',
    name: 'Plant',
    component: Plant
  },
  {
    path: '/garden',
    name: 'Garden',
    component: Garden
  }
]
