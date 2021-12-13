import UserDashboardIndex from "@/components/UserDashboardIndex.vue";


export default {
    path: '/',
    component: UserDashboardIndex,
    children: [
        {
            path: '',
            name: 'dash.home',
            component: () => import(/* webpackChunkName: "user.home" */ '@/views/UserDashboardHome'),

        },
        {
            path: 'employee',
            name: 'dash.employee',
            component: () => import(/* webpackChunkName: "user.account" */ '@/views/EmployeeAll'),

        },
        {
            path: 'employee/add',
            name: 'dash.employee.add',
            component: () => import(/* webpackChunkName: "user.account" */ '@/views/EmployeeAdd'),

        }
    ]
}