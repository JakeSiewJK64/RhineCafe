import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlterBlogInterest, AlterBlogLinks, DisplayLanguage } from 'src/app/shared/english.constants';
import { EventEmitterService } from 'src/app/shared/services/event-emitter.service';

@Component({
  selector: 'app-jp-github-tutorial',
  templateUrl: './jp-github-tutorial.component.html',
  styleUrls: ['./jp-github-tutorial.component.scss']
})
export class JpGithubTutorialComponent implements OnInit {
  alterLinks: AlterBlogLinks[] = [];
  isEn: Boolean = localStorage.getItem(DisplayLanguage) === 'en';
  constructor(private router: Router,
    private eventEmitter: EventEmitterService) { }

  ngOnInit(): void {
    this.load();
    this.eventEmitter.eventEmitter.subscribe(() => this.load());
  }

  load() {
    window.scrollTo(0, 0);
    this.isEn = localStorage.getItem(DisplayLanguage) === 'en';
    this.alterLinks = AlterBlogInterest.filter(x => !x.url.includes("github-tutorial"));
    this.checkEnglish();
  }

  checkEnglish() {
    if (!this.isEn && this.router.url.includes('github-tutorial')) this.router.navigate(['github-tutorial']);
  }

  navigateToGithubPR() {
    this.router.navigate(['github-pr']);
  }

  navigatetToBlog(blog: AlterBlogLinks) {
    this.router.navigate([blog.url]);
  }

}
