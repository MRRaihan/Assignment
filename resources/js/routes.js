import Dashboard from './components/Dashboard.vue';
import ListDepartments from './pages/departments/ListDepartments.vue';
import ListStudents from './pages/students/ListStudents.vue';
import ListResults from './pages/results/ListResults.vue';




export default [
    {
        path: '/admin/dashboard',
        name: 'admin.dashboard',
        component: Dashboard,
    },
    {
        path: '/admin/departments',
        name: 'admin.departments',
        component: ListDepartments,
    },
    {
        path: '/admin/students',
        name: 'admin.students',
        component: ListStudents,
    },
    {
        path: '/admin/results',
        name: 'admin.results',
        component: ListResults,
    }
]