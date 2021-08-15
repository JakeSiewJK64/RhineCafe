import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DisplayLanguage, Blog, BlogDataEN } from 'src/app/shared/english.constants';
import { EventEmitterService } from 'src/app/shared/services/event-emitter.service';

@Component({
  selector: 'app-github-pr',
  templateUrl: './github-pr.component.html',
  styleUrls: ['./github-pr.component.scss']
})
export class GithubPrComponent implements OnInit {

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
    this.alterLinks = BlogDataEN.filter(x => !(x.routeUrl === "github-pr"));
    this.checkJapanese();
  }

  checkJapanese() {
    if (this.isEn && this.router.url === '/github-pr') this.router.navigate(['jp/jp-github-pr']);
  }

  navigatetToBlog(blog: Blog) {
    this.router.navigate([blog.routeUrl]);
  }

}
