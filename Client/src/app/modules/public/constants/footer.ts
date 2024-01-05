import { faInstagram, faMeta, faXTwitter, faYoutube } from "@fortawesome/free-brands-svg-icons";

interface footerMenu {
    icon?: any;
    title?: string;
    route?: string;
    columnTitle?: string;
    subLinks?: footerMenu[];
}

export const Footer_Menu: footerMenu[] = [
    {
        columnTitle: 'Information',
        subLinks: [
            {
                title: 'Privacy notice',
                route: '/'
            },
            {
                title: 'Condition of use',
                route: '/'
            },
            {
                title: 'Shipping & returns',
                route: '/'
            }
        ]
    },
    {
        columnTitle: 'Customer Service',
        subLinks: [
            {
                title: 'Shop',
                route: '/'
            },
            {
                title: 'About us',
                route: '/'
            },
            {
                title: 'Contact us',
                route: '/'
            },
            {
                title: 'News',
                route: '/'
            },
        ]
    }
];

export const Social_Links: footerMenu[] = [
    {
        columnTitle: 'Follow us',
        subLinks: [
            {
                icon: faMeta,
                title: 'Meta',
                route: '/'
            },
            {
                icon: faInstagram,
                title: 'Instagram',
                route: '/'
            },
            {
                icon: faXTwitter,
                title: 'X-Twiiter',
                route: '/'
            },
            {
                icon: faYoutube,
                title: 'YouTube',
                route: '/'
            },
        ]
    }
];