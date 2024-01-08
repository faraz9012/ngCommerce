import { faChartPie,faCircleDot, faUsers, faShoppingCart, faDollarSign } from '@fortawesome/free-solid-svg-icons';

interface sideMenu {
    icon?: any;
    title: string;
    route?: string;
    subMenu?: sideMenu[];
    isToggle?: boolean;
}

export const Side_Navbar: sideMenu[] = [
    {
        icon: faChartPie,
        title: "Dashboard",
        route: "/"
    },
    {
        icon: faShoppingCart,
        title: "Catalog",
        isToggle: false,
        subMenu: [
            {
                icon: faCircleDot,
                title: "Categories",
                route: "/",
            },
            {
                icon: faCircleDot,
                title: "Products",
                route: "/",
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
                route: "/",
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
                title: "Shirts",
                route: "/",
            },
            {
                icon: faCircleDot,
                title: "Headphones",
                route: "/",
            }
        ]
    },
];