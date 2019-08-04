import Header from './components/Header'
import Home from './components/Home'
import CalendarView from './components/CalendarView'

export const routes = [
    {
        path: '', name: 'home',
        components: {
            default: Home,
            'header-top': Header
        }
    },
    {
        path: '/calendar', name: 'calendarView',
        components: {
            default: CalendarView,
            'header-top': Header
        }
    },
    { path: '/redirect-me', redirect: { name: 'home' } },
    { path: '*', redirect: '/' }
]