export interface Experience {
    name: string,
    duration: string,
    tools: string[],
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
        version_control: "Github Desktop",
        languages: ["C#", "Typescript", "SQL", "HTML", "CSS"],
        imgUrl: "../../../../assets/img/d2u.5CmpOzOQxJuhC03VHYU6JuAduE10wWD9j62Dp3gs9A8HR0Dyyl2sh4m7BIQ0MifRQNQqYSXdA",
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
        version_control: "Subversion Repository and Tortoise SVN",
        languages: ["Java", "XML", "CSS"],
        imgUrl: "../../../../assets/img/d2u.5CmpOzOQxJuhC03VHYU6JuAduE10wWD9j62Dp3gs9A8HR0Dyyl2sh4m7BIQ0MifRQNQqYSXdA",
        duties: [
            "Created Android Application (APK) to wrap AIB4.0 web application HTML.",
            "Designed Java program for Cartonization process.",
            "Maintained CSS of AIB4.0 web application."
        ]
    },
]