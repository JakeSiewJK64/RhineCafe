export interface Experience {
    name: string,
    duration: string,
    tools: string[],
    version_control: string,
    languages: string[],
    imgUrl: string
}

export const experiences: Experience[] = [
    {
        name: "Doctor2U",
        duration: "3 Months",
        tools: [
            "Visual Studio Code",
            "Angular JS",
            ".NET Framework",
            "Bootstrap"
        ],
        version_control: "Github Desktop",
        languages: ["C#", "Typescript", "SQL", "HTML", "CSS"],
        imgUrl: "../../../../assets/img/d2u.5CmpOzOQxJuhC03VHYU6JuAduE10wWD9j62Dp3gs9A8HR0Dyyl2sh4m7BIQ0MifRQNQqYSXdA"
    },
    {
        name: "Aibutler Sdn. Bhd.",
        duration: "3 Months",
        tools: [
            "Eclipse Java EE",
            "Android Studio 4.0",
            "JBoss",
            "WildFly",
            "Bootstrap"
        ],
        version_control: "Subversion Repository",
        languages: ["Java", "XML", "CSS"],
        imgUrl: "../../../../assets/img/d2u.5CmpOzOQxJuhC03VHYU6JuAduE10wWD9j62Dp3gs9A8HR0Dyyl2sh4m7BIQ0MifRQNQqYSXdA"
    },
]