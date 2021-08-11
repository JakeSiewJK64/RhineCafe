export const RhineCafeEN: string = "Rhine Cafe";
export const AlterLinkEN: string[] = ["About", "Experience", "Projects", "Education"];
export const DisplayLanguage: string = "DisplayLanguage";
export const UsernameEN: string = "Jake Siew Joe Kane";
export interface Experience {
    name: string,
    duration: string,
    tools: string[],
    position: string,
    version_control: string,
    languages: string[],
    imgUrl: string,
    duties: string[]
}

export interface SpokenLanguage {
    name: string,
    level: number,
    imgUrl: string
}
export interface ProgrammingLanguage {
    name: string,
    level: number,
    imgUrl: string
}

export const BioDescriptionEN: string = "Hi! My name is Jake Siew Joe Kane, an avid full stack web developer. I also have an interest in Machine Learning and AI related fields and plan on building my own virtual assistant one day like JARVIS. I hope to journey into this endeavor with you."
export const DownloadResumeEN: string = "Download Resume";
export const ResumeUrl: string = "https://github.com/JakeSiewJK64/ImageWarehouse/raw/main/Employment/JoeKane_Resume.pdf";
export const FrameworkEN: string = "Frameworks";
export const ToolsEN: string = "Tools";
export const EducationEN: string = "Education";
export const ComputerLanguageEN: string = "Computer Language";
export const SpokenLanguageEN: string = "Spoken Language";
export const ExperienceEN: string = "Experience";
export const SpokenLanguages: SpokenLanguage[] = [
    {
        name: "English",
        level: 95,
        imgUrl: "https://raw.githubusercontent.com/catamphetamine/country-flag-icons/d9bdf1180eb5c50ad5ebd6514f19c84857ba55f6/3x2/GB.svg"
    },
    {
        name: "Chinese",
        level: 80,
        imgUrl: "https://raw.githubusercontent.com/catamphetamine/country-flag-icons/d9bdf1180eb5c50ad5ebd6514f19c84857ba55f6/3x2/CN.svg"
    },
    {
        name: "Japanese",
        level: 60,
        imgUrl: "https://raw.githubusercontent.com/catamphetamine/country-flag-icons/d9bdf1180eb5c50ad5ebd6514f19c84857ba55f6/3x2/JP.svg"
    },
    {
        name: "Malay",
        level: 70,
        imgUrl: "https://raw.githubusercontent.com/catamphetamine/country-flag-icons/d9bdf1180eb5c50ad5ebd6514f19c84857ba55f6/3x2/MY.svg"
    },
    {
        name: "Cantonese",
        level: 75,
        imgUrl: "https://raw.githubusercontent.com/catamphetamine/country-flag-icons/d9bdf1180eb5c50ad5ebd6514f19c84857ba55f6/3x2/HK.svg"
    },
]

export const ProgrammingKnowledge: ProgrammingLanguage[] = [
    {
        level: 80,
        name: "Java",
        imgUrl: "https://raw.githubusercontent.com/devicons/devicon/9f4f5cdb393299a81125eb5127929ea7bfe42889/icons/java/java-plain.svg"
    },
    {
        level: 80,
        name: "C#",
        imgUrl: "https://raw.githubusercontent.com/devicons/devicon/9f4f5cdb393299a81125eb5127929ea7bfe42889/icons/csharp/csharp-plain.svg"

    },
    {
        level: 80,
        name: "Python",
        imgUrl: "https://raw.githubusercontent.com/devicons/devicon/9f4f5cdb393299a81125eb5127929ea7bfe42889/icons/python/python-plain.svg"
    },
    {
        level: 90,
        name: "HTML",
        imgUrl: "https://raw.githubusercontent.com/devicons/devicon/9f4f5cdb393299a81125eb5127929ea7bfe42889/icons/html5/html5-plain.svg"
    },
    {
        level: 90,
        name: "CSS",
        imgUrl: "https://raw.githubusercontent.com/devicons/devicon/9f4f5cdb393299a81125eb5127929ea7bfe42889/icons/css3/css3-plain.svg"
    },
    {
        level: 70,
        name: "JavaScript",
        imgUrl: "https://raw.githubusercontent.com/devicons/devicon/9f4f5cdb393299a81125eb5127929ea7bfe42889/icons/javascript/javascript-plain.svg"
    },
    {
        level: 80,
        name: "Typescript",
        imgUrl: "https://raw.githubusercontent.com/devicons/devicon/9f4f5cdb393299a81125eb5127929ea7bfe42889/icons/typescript/typescript-plain.svg"
    },
    {
        level: 60,
        name: "Microsoft SQL",
        imgUrl: "https://raw.githubusercontent.com/devicons/devicon/9f4f5cdb393299a81125eb5127929ea7bfe42889/icons/microsoftsqlserver/microsoftsqlserver-plain-wordmark.svg"
    },
    {
        level: 50,
        name: "PostgreSQL",
        imgUrl: "https://raw.githubusercontent.com/devicons/devicon/9f4f5cdb393299a81125eb5127929ea7bfe42889/icons/postgresql/postgresql-original-wordmark.svg"
    },
]

export const social_buttons: any = [
    { imgUrl: "https://raw.githubusercontent.com/peterthehan/peterthehan/master/assets/linkedin.svg", link: "https://www.linkedin.com/in/jake-siew-joe-kane-a411811b5/" },
    { imgUrl: "https://raw.githubusercontent.com/peterthehan/peterthehan/master/assets/facebook.svg", link: "https://www.facebook.com/DataScienceexe-101972195168927" },
]

export const educations: any = [
    { name: "INTI International College Subang", programme: "Diploma in Information Technology (DITN)", duration: 2, imgUrl: "https://studymasters.my/wp-content/uploads/2017/07/INTI-International-University-College.png" },
    { name: "Campus Rangers", programme: "IGCSE", duration: 2, imgUrl: "https://www.campusrangers.edu.my/wp-content/uploads/2020/10/Logo.png" },
]

export const tools = [
    { imgUrl: "https://raw.githubusercontent.com/devicons/devicon/9f4f5cdb393299a81125eb5127929ea7bfe42889/icons/visualstudio/visualstudio-plain.svg" },
    { imgUrl: "https://raw.githubusercontent.com/devicons/devicon/9f4f5cdb393299a81125eb5127929ea7bfe42889/icons/vscode/vscode-original.svg" },
    { imgUrl: "https://raw.githubusercontent.com/devicons/devicon/9f4f5cdb393299a81125eb5127929ea7bfe42889/icons/linux/linux-original.svg" },
    { imgUrl: "https://raw.githubusercontent.com/devicons/devicon/9f4f5cdb393299a81125eb5127929ea7bfe42889/icons/npm/npm-original-wordmark.svg" },
    { imgUrl: "https://raw.githubusercontent.com/devicons/devicon/9f4f5cdb393299a81125eb5127929ea7bfe42889/icons/google/google-original.svg" },
]

export const frameworks = [
    { imgUrl: "https://raw.githubusercontent.com/devicons/devicon/9f4f5cdb393299a81125eb5127929ea7bfe42889/icons/angularjs/angularjs-plain.svg" },
    { imgUrl: "https://raw.githubusercontent.com/devicons/devicon/9f4f5cdb393299a81125eb5127929ea7bfe42889/icons/spring/spring-original.svg" },
    { imgUrl: "https://raw.githubusercontent.com/devicons/devicon/9f4f5cdb393299a81125eb5127929ea7bfe42889/icons/dotnetcore/dotnetcore-original.svg" },
    { imgUrl: "https://raw.githubusercontent.com/devicons/devicon/9f4f5cdb393299a81125eb5127929ea7bfe42889/icons/sass/sass-original.svg" },
    { imgUrl: "https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/nodejs/nodejs.png" },
    { imgUrl: "https://raw.githubusercontent.com/devicons/devicon/9f4f5cdb393299a81125eb5127929ea7bfe42889/icons/mongodb/mongodb-original-wordmark.svg" },
    { imgUrl: "https://raw.githubusercontent.com/devicons/devicon/9f4f5cdb393299a81125eb5127929ea7bfe42889/icons/bootstrap/bootstrap-plain.svg" },
]

export const experiences: Experience[] = [
    {
        name: "Doctor2U",
        duration: "3 Months",
        tools: [
            "Visual Studio Code",
            "Visual Studio",
            "Angular JS",
            ".NET Framework",
            "Bootstrap",
            "nuget",
            "npm",
            "LINQ",
            "Azure Data Studio",
            "Swagger openAPI Documentation"
        ],
        position: "Intern",
        version_control: "Github Desktop",
        languages: ["C#", "Typescript", "SQL", "HTML", "CSS"],
        imgUrl: "https://raw.githubusercontent.com/JakeSiewJK64/ImageWarehouse/main/CompanyLogo/Doctor2U.png?token=ALHUTW7TYNN62YLQ3KCJHL3BCJ2WY",
        duties: ["To help with development of web product both frontend and backend."]
    },
    {
        name: "Aibutler Sdn. Bhd.",
        duration: "3 Months",
        tools: [
            "Eclipse Java EE",
            "Android Studio 4.0",
            "JBoss",
            "openJDK 11",
            "WildFly",
            "Apache Maven",
            "PostgreSQL",
            "Bootstrap"
        ],
        position: "Intern",
        version_control: "Subversion Repository and Tortoise SVN",
        languages: ["Java", "XML", "CSS"],
        imgUrl: "https://raw.githubusercontent.com/JakeSiewJK64/ImageWarehouse/main/CompanyLogo/aibutler.png?token=ALHUTWYBSNIW7EEUPDC5O73BCJ2TI",
        duties: [
            "Created Android Application (APK) to wrap AIB4.0 web application HTML.",
            "Designed Java program for Cartonization process.",
            "Maintained CSS of AIB4.0 web application."
        ]
    },
]