import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    html,
    css,
    reactjs,
    // tailwind,
    nodejs,
    // git,
    monkeyscrubs,
    smilesolution,
    wordpress,
    personalportfolio,
} from "../assets";

export const navLinks = [
    {
    id: "chi siamo",
    title: "Chi Siamo",
    },
    {
    id: "lavori",
    title: "Lavori",
    },
    {
    id: "contatto",
    title: "Contatto",
    },
];

const services = [
    {
    title: "Sviluppo di siti web personalizzati ",
    icon: web,
    },
    {
    title: "Web Design ",
    icon: mobile,
    },
    {
    title: "Ottimizzazione per i motori di ricerca (SEO)",
    icon: backend,
    },
    {
    title: "Aggiornamenti e manutenzione del sito web",
    icon: creator,
    },
];

const technologies = [
    {
    name: "HTML 5",
    icon: html,
    },
    {
    name: "CSS 3",
    icon: css,
    },
    {
    name: "JavaScript",
    icon: javascript,
    },
    
    {
    name: "React JS",
    icon: reactjs,
    },
    {
    name: "Wordpress",
    icon: wordpress,
    },
    // {
    // name: "Tailwind CSS",
    // icon: tailwind,
    // },
    {
    name: "Node JS",
    icon: nodejs,
    },
    // {
    // name: "git",
    // icon: git,
    // },
    
];

const experiences = [
    {
    title: "Wordpress Developer",
    company_name: "Palestra Urbani",
    iconBg: "#D8FF00",
    date: "Febraio 2023 - Febraio 2023",
    points: [        
        "Sviluppo e mantenimento di un progetto web utilizzando WordPress e altre tecnologie.",
        "Implementazione di un design responsivo e assicurazione della compatibilità cross-browser.",
            ],
    },
    {
    title: "React Developer",
    company_name: "ElPuas Digital Craft",
    iconBg: "#D8FF00",
    date: "Marzo 2023 - Aprile 2023",
    points: [
        "Sviluppo e mantenimento di un portafoglio web utilizzando React e altre tecnologie.",
        "Collaborazione con altri sviluppatori.",
        "Implementazione di un design responsivo e assicurazione della compatibilità cross-browser.",
    ],
    },
    {
    title: "Wordpress Developer",
    company_name: "Smile Solution",
    iconBg: "#D8FF00",
    date: "Aprile 2023 - Aprile 2023",
    points: [
        "Sviluppo e mantenimento di un app web utilizzando WordPress e altre tecnologie.",
        "Collaborazione con diversi team, tra cui designer e altri sviluppatori.",
        "Implementazione di un design responsivo e assicurazione della compatibilità cross-browser.",
        
    ],
    },
    {
    title: "Wordpress Developer",
    company_name: "Monkey Scrubs",
    iconBg: "#D8FF00",
    date: "Maggio 2023 - Present",
    points: [
        "Sviluppo e mantenimento di un e-commerce web utilizzando WordPress e altre tecnologie.",
        "Collaborazione con diversi team, tra cui designer, manager e altri sviluppatori, per creare prodotti di alta qualità.",
        "Implementazione di un design responsivo e assicurazione della compatibilità cross-browser.",
        "Fornitura di feedback costruttivi ad altri sviluppatori."
        
    ],
    },
];


const projects = [
    {
    name: "Monkey Scrubs",
    description:
     
        "Piataforma e-commerce che permette a gli usuari di cercare, comprare vestimenti medici e non solo. La piattaforma offre un'esperienza di acquisto online facile e intuitiva, con funzionalità come la ricerca avanzata molto altre",
    tags: [
        {
        name: "Wordpress",
        color: "blue-text-gradient",
        },
        {
        name: "Woocomerce",
        color: "green-text-gradient",
        },
        // {
        // name: "Elementor",
        // color: "pink-text-gradient",
        // },
    ],
    image: monkeyscrubs,
    source_code_link: "https://github.com/",
    },
    {
    name: "Personal Portafoglio",
    description:
        "Applicazione web personale fatta con React utilizzando le diverse funzionalità che offre il framework React, chiamati hooks, progetto innovativo e all'avanguardia che ti permetterà di sfruttare al massimo le potenzialità di questa tecnologia di sviluppo web.",
    tags: [
        {
        name: "react",
        color: "blue-text-gradient",
        },
        {
        name: "restapi",
        color: "green-text-gradient",
        },
        {
        name: "hooks",
        color: "pink-text-gradient",
        },
    ],
    image: personalportfolio,
    source_code_link: "https://github.com/",
    },
    {
    name: "Smile Solution",
    description:
        "Abbiamo creato un'applicazione WordPress personalizzata con un tema sviluppato 'from-scratch'.Creazione di diversi plugins e widgets e usando diverse librerie come Swiper, Lightbox, ecc. per creare un sito dinamico, minimalista e con diverse funzionalità",
    tags: [
        {
        name: "Wordpress",
        color: "blue-text-gradient",
        },
        {
        name: "Swiper",
        color: "green-text-gradient",
        },
        {
        name: "LightBox",
        color: "pink-text-gradient",
        },
    ],
    image: smilesolution,
    source_code_link: "https://github.com/",
    },
];

export { services, technologies, experiences, projects };