import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlterBlogLinks, AlterBlogInterest, DisplayLanguage } from '../shared/english.constants';
import { EventEmitterService } from '../shared/services/event-emitter.service';

@Component({
  selector: 'app-github-pr',
  templateUrl: './github-pr.component.html',
  styleUrls: ['./github-pr.component.scss']
})
export class GithubPrComponent implements OnInit {

  constructor(private router: Router,
    private eventEmitter: EventEmitterService) { }

  alterLinks: AlterBlogLinks[] = [];
  isEn: boolean = localStorage.getItem(DisplayLanguage) === 'jp';

  ngOnInit(): void {
    this.load();
    this.eventEmitter.eventEmitter.subscribe(() => this.load());
  }

  load() {
    window.scrollTo(0, 0);
    this.isEn = localStorage.getItem(DisplayLanguage) === 'en';
    this.alterLinks = AlterBlogInterest.filter(x => !x.url.includes("github-pr"));
    this.checkJapanese();
  }

  checkJapanese() {
    if (this.isEn && this.router.url.includes('github-pr')) this.router.navigate(['jp/jp-github-pr']);
  }

  navigateToGithubPR() {
    this.router.navigate(['github-pr']);
  }

  navigatetToBlog(blog: AlterBlogLinks) {
    this.router.navigate([blog.url]);
  }

}
