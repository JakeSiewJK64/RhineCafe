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

export interface ProgrammingLanguage {
    name: string,
    level: number,
    imgUrl: string
}

export const ProgrammingKnowledge: ProgrammingLanguage[] = [
    {
        level: 60,
        name: "Java",
        imgUrl: "https://raw.githubusercontent.com/devicons/devicon/9f4f5cdb393299a81125eb5127929ea7bfe42889/icons/java/java-plain.svg"
    },
    {
        level: 60,
        name: "C#",
        imgUrl: "https://raw.githubusercontent.com/devicons/devicon/9f4f5cdb393299a81125eb5127929ea7bfe42889/icons/csharp/csharp-plain.svg"

    },
    {
        level: 80,
        name: "Python",
        imgUrl: "https://raw.githubusercontent.com/devicons/devicon/9f4f5cdb393299a81125eb5127929ea7bfe42889/icons/python/python-plain.svg"
    },
    {
        level: 83,
        name: "HTML",
        imgUrl: "https://raw.githubusercontent.com/devicons/devicon/9f4f5cdb393299a81125eb5127929ea7bfe42889/icons/html5/html5-plain.svg"
    },
    {
        level: 3,
        name: "CSS",
        imgUrl: "https://raw.githubusercontent.com/devicons/devicon/9f4f5cdb393299a81125eb5127929ea7bfe42889/icons/css3/css3-plain.svg"
    },
    {
        level: 50,
        name: "JavaScript",
        imgUrl: "https://raw.githubusercontent.com/devicons/devicon/9f4f5cdb393299a81125eb5127929ea7bfe42889/icons/javascript/javascript-plain.svg"
    },
    {
        level: 85,
        name: "Typescript",
        imgUrl: "https://raw.githubusercontent.com/devicons/devicon/9f4f5cdb393299a81125eb5127929ea7bfe42889/icons/typescript/typescript-plain.svg"
    },
    {
        level: 87,
        name: "Microsoft SQL",
        imgUrl: "https://raw.githubusercontent.com/devicons/devicon/9f4f5cdb393299a81125eb5127929ea7bfe42889/icons/microsoftsqlserver/microsoftsqlserver-plain-wordmark.svg"
    },
    {
        level: 55,
        name: "PostgreSQL",
        imgUrl: "https://raw.githubusercontent.com/devicons/devicon/9f4f5cdb393299a81125eb5127929ea7bfe42889/icons/postgresql/postgresql-original-wordmark.svg"
    },
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