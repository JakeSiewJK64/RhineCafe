import { Component, OnInit } from '@angular/core';
import { TdDialogService } from '@covalent/core/dialogs';
import { ExperienceDialogComponent } from './_dialogs/experience-dialog/experience-dialog.component';

@Component({
  selector: 'app-biography',
  templateUrl: './biography.component.html',
  styleUrls: ['./biography.component.scss']
})
export class BiographyComponent implements OnInit {

  constructor(private dialogService: TdDialogService) { }

  description: string = `
  Hi! My name is Jake Siew Joe Kane. , an avid full stack web developer. I also have an interest in Machine Learning and AI related fields and plan on building my own virtual assistant one day like JARVIS. I hope to journey into this endeavor with you.
  `

  educations: any = [
    { name: "INTI International College Subang", programme: "Diploma in Information Technology (DITN)", duration: 2, imgUrl: "https://studymasters.my/wp-content/uploads/2017/07/INTI-International-University-College.png" },
    { name: "Campus Rangers", programme: "IGCSE", duration: 2, imgUrl: "https://www.campusrangers.edu.my/wp-content/uploads/2020/10/Logo.png" },
  ]

  social_buttons: any = [
    { imgUrl: "https://raw.githubusercontent.com/peterthehan/peterthehan/master/assets/linkedin.svg", link: "https://www.linkedin.com/in/jake-siew-joe-kane-a411811b5/" },
    { imgUrl: "https://raw.githubusercontent.com/peterthehan/peterthehan/master/assets/facebook.svg", link: "https://www.facebook.com/DataScienceexe-101972195168927" },
  ]

  tools = [
    { imgUrl: "https://raw.githubusercontent.com/devicons/devicon/9f4f5cdb393299a81125eb5127929ea7bfe42889/icons/visualstudio/visualstudio-plain.svg" },
    { imgUrl: "https://raw.githubusercontent.com/devicons/devicon/9f4f5cdb393299a81125eb5127929ea7bfe42889/icons/vscode/vscode-original.svg" },
    { imgUrl: "https://raw.githubusercontent.com/devicons/devicon/9f4f5cdb393299a81125eb5127929ea7bfe42889/icons/linux/linux-original.svg" },
    { imgUrl: "https://raw.githubusercontent.com/devicons/devicon/9f4f5cdb393299a81125eb5127929ea7bfe42889/icons/npm/npm-original-wordmark.svg" },
    { imgUrl: "https://raw.githubusercontent.com/devicons/devicon/9f4f5cdb393299a81125eb5127929ea7bfe42889/icons/google/google-original.svg" },
  ]

  frameworks = [
    { imgUrl: "https://raw.githubusercontent.com/devicons/devicon/9f4f5cdb393299a81125eb5127929ea7bfe42889/icons/angularjs/angularjs-plain.svg" },
    { imgUrl: "https://raw.githubusercontent.com/devicons/devicon/9f4f5cdb393299a81125eb5127929ea7bfe42889/icons/spring/spring-original.svg" },
    { imgUrl: "https://raw.githubusercontent.com/devicons/devicon/9f4f5cdb393299a81125eb5127929ea7bfe42889/icons/dotnetcore/dotnetcore-original.svg" },
    { imgUrl: "https://raw.githubusercontent.com/devicons/devicon/9f4f5cdb393299a81125eb5127929ea7bfe42889/icons/sass/sass-original.svg" },
    { imgUrl: "https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/nodejs/nodejs.png" },
    { imgUrl: "https://raw.githubusercontent.com/devicons/devicon/9f4f5cdb393299a81125eb5127929ea7bfe42889/icons/mongodb/mongodb-original-wordmark.svg" },
    { imgUrl: "https://raw.githubusercontent.com/devicons/devicon/9f4f5cdb393299a81125eb5127929ea7bfe42889/icons/bootstrap/bootstrap-plain.svg" },
  ]

  work_experience = [
    { company: "Aibutler Sdn. Bhd.", duration: "January, 2021 - April, 2021", imgUrl: "https://lh3.googleusercontent.com/proxy/XVt-NaTvUOOXWqW7XbSQQcYoz-akE2XAVHZGxwAZ6myBpZ3GkeC5JaqfG62SZkar5h0aBtTndf6HzXeX-5CmpOzOQxJuhC03VHYU6JuAduE10wWD9j62Dp3gs9A8HR0Dyyl2sh4m7BIQ0MifRQNQqYSXdA" },
    { company: "Doctor2U", duration: "April, 2021 - July, 2021", imgUrl: "https://shop.doctor2u.my/assets/image/Doctor2U.png" },
  ]

  ngOnInit(): void {
  }

  showDialog(company: string) {
    this.dialogService.open(ExperienceDialogComponent, {
      width: "80vw",
      data: {
        company: company
      }
    })
  }
}
