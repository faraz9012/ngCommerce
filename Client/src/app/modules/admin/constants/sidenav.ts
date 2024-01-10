import { faChartPie,faCircleDot, faUsers, faShoppingCart, faDollarSign } from '@fortawesome/free-solid-svg-icons';

interface sideMenu {
    icon?: any;
    title: string;
    route?: string;
    subMenu?: sideMenu[];
    isToggle?: boolean;
    exact?: boolean;
}

export const Side_Navbar: sideMenu[] = [
    {
        icon: faChartPie,
        title: "Dashboard",
        route: "/admin",
        exact: true
    },
    {
        icon: faShoppingCart,
        title: "Catalog",
        isToggle: false,
        subMenu: [
            {
                icon: faCircleDot,
                title: "Categories",
                route: "/admin/categories",
            },
            {
                icon: faCircleDot,
                title: "Products",
                route: "/admin/products",
            }
        ]
    },
    {
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