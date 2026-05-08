import { appWindow, clipBoardData, paintBrush, target, people, briefcase } from "./icons";

export const menuItems = [
    {
        label: 'Home',
        url: '/',
    },
    {
        label: 'Services',
        url: '#',
        children: [
            {
                label: 'Web Development',
                description: 'Custom web development solutions tailored to your needs.',
                url: '/services/web-development',
                icon: appWindow,
            },
            {
                label: 'SEO / AEO',
                description: 'Optimize your website for search engines and convert more visitors into customers.',
                url: '/services/search-engine-optimisation',
                icon: clipBoardData,
            },
            {
                label: 'Google Ads',
                description: 'From search to display, we create campaigns that drive measurable results and ROI.',
                url: '/services/google-ads',
                icon: target,
            },
            {
                label: 'Branding',
                description: 'Create a strong and memorable brand identity that resonates with your target audience.',
                url: '/services/branding',
                icon: paintBrush,
            },
        ],
    },
    {
        label: 'Portfolio',
        url: '/portfolio',
    },
    // {
    //     label: 'Company',
    //     url: '#',
    //     children: [
    //         {
    //             label: 'About Us',
    //             url: '/company/about-us',
    //             description: 'Learn more about our company and our mission.',
    //             icon: target,
    //         },
    //         {
    //             label: 'Team',
    //             url: '/company/team',
    //             description: 'Meet the team that makes our company run.',
    //             icon: people,
    //         },
    //         {
    //             label: 'Careers',
    //             url: '/company/careers',
    //             description: 'Explore our open positions and join our team.',
    //             icon: briefcase,
    //         },
    //     ],
    // },
    {
        label: 'Blog',
        url: '/blog',
    }
]
