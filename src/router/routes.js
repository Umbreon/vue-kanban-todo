import { ViewGridIcon, BellIcon, ChartSquareBarIcon ,UserCircleIcon, CogIcon } from '@vue-hero-icons/outline'
import SideLayout from '../layouts/SideLayout.vue'

const RouteType = {
    COMMON: 0,
    PROJECT: 1
};

const routes = [
    {
        path: "*",
        name: "Tasks",
        component: () => import("@/views/Tasks.vue"),
        meta: {
            type: RouteType.PROJECT,
            layout: SideLayout,
            icon: ViewGridIcon,
            notification: 'task'
        }
    },
    {
        path: "/notifications",
        name: "Notifications",
        component: () => import("@/views/Notifications.vue"),
        meta: {
            type: RouteType.PROJECT,
            layout: SideLayout,
            icon: BellIcon,
            notification: 'notification',
        }
    },
    {
        path: "/analytics",
        name: "Analytics",
        component: () => import("@/views/Analytics.vue"),
        meta: {
            type: RouteType.PROJECT,
            layout: SideLayout,
            icon: ChartSquareBarIcon,
        }
    },
    {
        path: "/team",
        name: "Team",
        component: () => import("@/views/Team.vue"),
        meta: {
            type: RouteType.PROJECT,
            layout: SideLayout,
            icon: UserCircleIcon,
            notification: 'team'
        }
    },
    {
        path: "/options",
        name: "Options",
        component: () => import("@/views/Options.vue"),
        meta: {
            type: RouteType.COMMON,
            layout: SideLayout,
            icon: CogIcon
        }
    },
];

export default routes;