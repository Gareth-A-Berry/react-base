import { enhancedRoute } from '@hocs/enhanced-route'

export const paths = {
  home: '/',
  example: '/example'
}

export const routes = [
  {
    path: paths.home,
    exact: true,
    isPrivate: false,
    title: 'Example Home Page',
    component: enhancedRoute('home'),
  },
  {
    path: paths.example,
    exact: true,
    isPrivate: false,
    title: 'Example Page',
    component: enhancedRoute('example'),
  },
]
