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