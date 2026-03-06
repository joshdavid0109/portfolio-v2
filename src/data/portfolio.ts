import dx1 from "../assets/dx1.png";
import dx2 from "../assets/dx2.png";
import dx3 from "../assets/dx3.png";
import ap1 from "../assets/ap1.png";
import ap2 from "../assets/ap2.png";
import ap3 from "../assets/ap3.png";
import ap4 from "../assets/ap4.png";
import ap5 from "../assets/ap5.png";
import lm1 from "../assets/lm1.png";
import lm2 from "../assets/lm2.png";
import lm3 from "../assets/lm3.png";
import lm4 from "../assets/lm4.png";
import lm5 from "../assets/lm5.png";
import m1 from "../assets/1.png";
import m2 from "../assets/2.png";
import m3 from "../assets/3.png";
import m4 from "../assets/4.png";
import bpxw from "../assets/bpx-w.png";
import st1 from "../assets/st1.png";
import st2 from "../assets/st2.png";
import st3 from "../assets/st3.png";

export interface Project {
    title: string;
    desc: string;
    tech: string;
    gallery?: string[];
    liveUrl?: string;
    repoUrl?: string;
}

export interface Tech {
    name: string;
    icon: string;
}

export interface SkillGroup {
    title: string;
    skills: string[];
}

export const portfolioData = {
    name: "Joshua Daniel David",
    title: "AI Business Process Analyst | Full Stack Web and App Developer",
    bio: "AI Automation Business Analyst and Full-Stack Developer with experience analyzing business workflows, designing AI-driven automation, and building scalable web and mobile applications using modern frameworks, cloud platforms, and NLP technologies.",
    contact: {
        email: "joshdan.david@gmail.com",
        phone: "+63 960 836 0277",
        location: "Baguio City, Philippines",
        linkedin: "https://www.linkedin.com/in/joshuadanieldavid",
        github: "https://github.com/joshdavid0109",
        resume: "https://yyhgylabobrhkqzoqiik.supabase.co/storage/v1/object/public/cv/JoshuaDavid_Resume2026.pdf"
    },
    experience: [
        {
            role: "AI Business Process Analyst",
            company: "Pop AI Technologies",
            period: "October 2025 - February 2026",
            type: "CONTRACTUAL",
            details: [
                "Analyze and map business processes to identify areas for AI and automation integration",
                "Translate business needs into AI solution requirements and workflows",
                "Create and test automation prototypes to ensure technical feasibility and business value",
                "Collaborate with dev team to design and validate AI-driven process improvements",
                "Evaluate performance of AI systems and ensure continuous optimization"
            ]
        }
    ],
    education: [
        {
            degree: "Bachelor of Science in Computer Science",
            school: "Saint Louis University",
            period: "August 2021 - June 2025",
            honor: "MAGNA CUM LAUDE",
            details: "Graduated with Magna Cum Laude honors. Presented research at national and international conferences including Philippine Computing Science Congress and IEEE ISCI2025."
        },
        {
            degree: "Science, Technology, Engineering, and Mathematics",
            school: "University of the Cordilleras",
            period: "August 2019 - May 2021",
            honor: "HIGH HONORS",
            details: "Graduated with High Honors specializing in STEM track."
        }
    ],
    certifications: [
        { name: "Electronic Data Processing Specialist Eligibility", issuer: "Civil Service Commission", date: "September 2025" },
        { name: "12th TOPCIT Philippines", issuer: "IITP", date: "July 2025" },
        { name: "AI - Natural Language Processing Capacity Program", issuer: "National University", date: "March 2024" },
        { name: "ICT Specialist - Computer Programming", issuer: "DICT", date: "February 2025" }
    ],
    projects: [
        {
            title: "D'Xplorer Travel & Tours Web & App",
            desc: "Cross-platform Travel and Tours booking app with Admin panel using React Native & React (TypeScript) with PostgreSQL (Supabase): RPC, Edge Functions, Webhooks, Xendit Payment Integration. Admin panel for managing users, bookings, and content.",
            tech: "React Native, React, Supabase, Tailwind",
            gallery: [dx1, dx2, dx3, m1],
            liveUrl: "https://dxtravels.online",
            repoUrl: "https://github.com/joshdavid0109/dxplorer",
        },
        {
            title: "Astoria Prime",
            desc: "A scalable auction and marketplace web platform with Admin panel designed to streamline product listings, bidding, and transactions.",
            tech: "React, Supabase (PostgreSQL), Tailwind",
            gallery: [ap2, ap5, ap3, ap4, ap1],
            liveUrl: "https://astoriaprime.ca",
            repoUrl: "https://github.com/joshdavid0109/dxplorer",
        },
        {
            title: "Loan Management System",
            desc: "A comprehensive loan management system that automates loan processing, tracking, and reporting.",
            tech: "React, React Native, Supabase, TypeScript",
            gallery: [lm1, lm2, lm3, lm4, lm5, m4],
            liveUrl: "https://dxplorer.app",
            repoUrl: "https://github.com/joshdavid0109/dxplorer",
        },
        {
            title: "Blue Phoenix Reviewer App and Web CMS",
            desc: "Bar Exam preparation mobile app (Android/iOS) using React Native (TypeScript) with PostgreSQL (Supabase): RPC, Edge Functions, Webhooks, Real-time. CMS for admin using React to edit content of reviewers.",
            tech: "React Native, React, Supabase, TypeScript",
            gallery: [m2, m3, bpxw],
            liveUrl: "https://dxplorer.app",
            repoUrl: "https://github.com/joshdavid0109/dxplorer",
        },
        {
            title: "Cloud-based RoBERTa SDG Assessment Tool",
            desc: "Machine Learning Model (RoBERTa) trained with scraped data from different HEIs in the Philippines integrated in a website to assess HEI documents with their compliance to SDG.",
            tech: "Python (Flask), Bootstrap, Node.js, NLP, RoBERTa, Google Cloud",
            gallery: [st1, st2, st3],
            liveUrl: "https://dxplorer.app",
            repoUrl: "https://github.com/joshdavid0109/dxplorer",
        },
    ],
    skills: [
        {
            title: 'Languages',
            skills: ['Java', 'JavaScript', 'TypeScript', 'Python', 'PHP', 'Kotlin'],
        },
        {
            title: 'Frameworks & Libraries',
            skills: [
                'React', 'React Native', 'Laravel', 'Express.js',
                'Flask', 'Bootstrap', 'Tailwind', 'Tauri',
            ],
        },
        {
            title: 'AI & Machine Learning',
            skills: [
                'TensorFlow', 'PyTorch', 'Scikit-learn',
                'Keras', 'NLP', 'LLMs', 'RoBERTa',
            ],
        },
        {
            title: 'Databases',
            skills: ['PostgreSQL', 'MySQL', 'Firebase', 'Supabase'],
        },
        {
            title: 'Tools',
            skills: [
                'Git', 'n8n', 'Figma', 'Docker', 'Postman', 'VS Code', 'JIRA', 'OpenProject',
            ],
        },
        {
            title: 'Other',
            skills: [
                'REST APIs', 'GitHub Actions', 'RLS Policies',
                'Photoshop', 'Lightroom', 'Premiere Pro', 'After Effects',
            ],
        },
    ],
    techIcons: [
        { name: 'Java', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
        { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
        { name: 'TypeScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
        { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
        { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
        { name: 'Laravel', icon: 'https://cdn.simpleicons.org/laravel/FF2D20' },
        { name: 'PostgreSQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
        { name: 'Firebase', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg' },
        { name: 'n8n', icon: 'https://cdn.simpleicons.org/n8n/EF6C00' },
    ]
};
