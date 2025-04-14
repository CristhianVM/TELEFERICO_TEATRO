import {MenuItem} from "@/types/MenuTypes"
export const menuItems:MenuItem[] = [
    {
        title: "Home",
        submenu: [
            { path: "/", title: "Hero One" },
            { path: "/home-two", title: "Hero Two" },
            { path: "/home-three", title: "Hero Three" },
            {
                path: "/index-four",
                title: "Hero Light",
                badge: "Light"
            }
        ]
    },
    {
        path: "/about",
        title: "About Us",
        single: true
    },
    {
        path: "/pricing",
        title: "Pricing",
        single: true
    },
    {
        title: "Pages",
        submenu: [
            { path: "/services", title: "Services" },
            {
                title: "Blog",
                submenu: [
                    { path: "/blog", title: "Blogs" },
                    { path: "/blog-detail", title: "Blog Detail" }
                ]
            },
            { path: "/helpcenter", title: "Helpcenter" },
            {
                title: "Auth Pages",
                submenu: [
                    { path: "/login", title: "Login" },
                    { path: "/signup", title: "Signup" },
                    { path: "/reset-password", title: "Forgot Password" }
                ]
            },
            {
                title: "Utility",
                submenu: [
                    { path: "/terms", title: "Terms of Services" },
                    { path: "/privacy", title: "Privacy Policy" }
                ]
            },
            { path: "/error", title: "404!" }
        ]
    },
    {
        path: "/contact",
        title: "Contact",
        single: true
    }
];
