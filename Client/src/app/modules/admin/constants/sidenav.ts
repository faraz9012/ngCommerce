import { faChartPie, faCircleDot, faCircleNotch, faUsers, faShoppingCart, faDollarSign } from '@fortawesome/free-solid-svg-icons';

export interface sideMenu {
    id?: string | number;
    icon?: any;
    title: string;
    route?: string;
    subMenu?: sideMenu[];
    isToggle?: boolean;
    exact?: boolean;
}

export const Side_Navbar: sideMenu[] = [
    {
        id: 'dashboard',
        icon: faChartPie,
        title: "Dashboard",
        route: "/admin",
        exact: true
    },
    {
        id: 'catalog',
        icon: faShoppingCart,
        title: "Catalog",
        isToggle: false,
        subMenu: [
            {
                id: 'categories',
                icon: faCircleDot,
                title: "Categories",
                subMenu: [
                    {
                        icon: faCircleNotch,
                        title: "List",
                        route: "/admin/category/list"
                    },
                    {
                        icon: faCircleNotch,
                        title: "Create",
                        route: "/admin/category/create"
                    }
                ]
            },
            {
                id: 'products',
                icon: faCircleDot,
                title: "Products",
                subMenu: [
                    {
                        icon: faCircleNotch,
                        title: "List",
                        route: "/admin/category/list"
                    },
                    {
                        icon: faCircleNotch,
                        title: "Create",
                        route: "/admin/category/create"
                    }
                ]
            }
        ]
    },
    {
        id: 'sales',
        icon: faDollarSign,
        title: "Sales",
        isToggle: false,
        subMenu: [
            {
                icon: faCircleDot,
                title: "Orders",
                route: "/admin/orders",
            }
        ]
    },
    {
        id: 'customers',
        icon: faUsers,
        title: "Customers",
        isToggle: false,
        subMenu: [
            {
                icon: faCircleDot,
                title: "List customers",
                route: "/admin/customer/list",
            },
            {
                icon: faCircleDot,
                title: "Add customer",
                route: "/admin/add-customer",
            }
        ]
    },
];