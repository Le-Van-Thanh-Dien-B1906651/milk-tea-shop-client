import { Home, About, Menu, Drink, Discount, News, Contact, Search } from '../views';

// Public routes, non-login
const publicRoutes = [
    { path: '/', component: Home },
    { path: '/menu', component: Menu },
    { path: '/about', component: About },
    { path: '/discount', component: Discount },
    { path: '/news', component: News },
    { path: '/contact', component: Contact },
    { path: '/search/:query', component: Search },
    { path: '/drink/:id', component: Drink },
]

// Private routes, login
const privateRoutes = []

export { publicRoutes, privateRoutes }
