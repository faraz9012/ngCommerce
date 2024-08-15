import { faChartPie, faCircleDot, faCopy, faUsers, faShoppingCart, faDollarSign, faPhotoFilm } from '@fortawesome/free-solid-svg-icons';

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
        id: 'pages',
        icon: faCopy,
        title: "Pages",
        route: "/admin/page",
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
                route: "/admin/category/list"
            },
            {
                id: 'products',
                icon: faCircleDot,
                title: "Products",
                route: "/admin/product/list"
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
            },
            {
                icon: faCircleDot,
                title: "Shipments",
                route: "/admin/shipments",
            },
        ]
    },
    {
        id: 'customers',
        icon: faUsers,
        title: "Customers",
        isToggle: false,
        route: "/admin/customer/list",
    },
    {
        id: 'Media',
        icon: faPhotoFilm,
        title: "Media",
        route: "/media",
    },
];