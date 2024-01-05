import { faTshirt,faHeadphones } from '@fortawesome/free-solid-svg-icons';

interface menu {
    icon?: any;
    title: string;
    desc?: string;
    route?: string;
    subMenu?: menu[];
    isToggle?: boolean;
}

export const Navbar: menu[] = [
    {
        title: "Home",
        route: "/"
    },
    {
        title: "About",
        route: "/"
    },
    {
        title: "Shop",
        isToggle: false,
        subMenu: [
            {
                icon: faTshirt,
                title: "Shirts",
                route: "/",
                desc: "Lorem ipsum dolor sit amet, consectetur"
            },
            {
                icon: faHeadphones,
                title: "Headphones",
                route: "/",
                desc: "Lorem ipsum dolor sit amet, "
            }
        ]
    },
    {
        title: "F.A.Q's",
        route: "/"
    },
    {
        title: "Categories",
        isToggle: false,
        subMenu: [
            {
                icon: faTshirt,
                title: "Shirts",
                route: "/",
                desc: "Lorem ipsum dolor sit amet, consectetur"
            },
            {
                icon: faHeadphones,
                title: "Headphones",
                route: "/",
                desc: "Lorem ipsum dolor sit amet, "
            }
        ]
    }
];