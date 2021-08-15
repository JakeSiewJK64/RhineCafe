import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DisplayLanguage, Blog, BlogDataEN } from 'src/app/shared/english.constants';
import { EventEmitterService } from 'src/app/shared/services/event-emitter.service';

@Component({
  selector: 'app-github-cherry',
  templateUrl: './github-cherry.component.html',
  styleUrls: ['./github-cherry.component.scss']
})
export class GithubCherryComponent implements OnInit {

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
    this.alterLinks = BlogDataEN.filter(x => !(x.routeUrl === "github-cherry"));
    this.checkJapanese();
  }

  checkJapanese() {
    if (this.isEn && this.router.url === '/github-cherry') this.router.navigate(['jp/jp-github-cherry']);
  }

  navigateToGithubPR() {
    this.router.navigate(['github-cherry']);
  }

  navigatetToBlog(blog: Blog) {
    this.router.navigate([blog.routeUrl]);
  }
}
