import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Blog, BlogDataEN, DisplayLanguage } from 'src/app/shared/english.constants';
import { EventEmitterService } from 'src/app/shared/services/event-emitter.service';

@Component({
  selector: 'app-github-tutorial',
  templateUrl: './github-tutorial.component.html',
  styleUrls: ['./github-tutorial.component.scss']
})
export class GithubTutorialComponent implements OnInit {

  constructor(private router: Router,
    private eventEmitter: EventEmitterService) { }

  alterLinks: Blog[] = [];
  isEn: boolean = localStorage.getItem(DisplayLanguage) === 'jp';

  ngOnInit(): void {
    this.load();
    this.eventEmitter.eventEmitter.subscribe(() => this.load());
  }

  load() {
    window.scrollTo(0, 0);
    this.isEn = localStorage.getItem(DisplayLanguage) === 'en';
    this.alterLinks = BlogDataEN.filter(x => !x.routeUrl.includes("github-tutorial"));
    this.checkJapanese();
  }

  checkJapanese() {
    if (this.isEn && this.router.url.includes('github-tutorial')) this.router.navigate(['jp/jp-github-tutorial']);
  }

  navigateToGithubPR() {
    this.router.navigate(['github-pr']);
  }

  navigatetToBlog(blog: Blog) {
    this.router.navigate([blog.routeUrl]);
  }

}
