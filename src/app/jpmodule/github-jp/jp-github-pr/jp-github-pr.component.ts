import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Blog, DisplayLanguage } from 'src/app/shared/english.constants';
import { BlogDataJP } from 'src/app/shared/japanese.constants';
import { EventEmitterService } from 'src/app/shared/services/event-emitter.service';

@Component({
  selector: 'app-jp-github-pr',
  templateUrl: './jp-github-pr.component.html',
  styleUrls: ['./jp-github-pr.component.scss']
})
export class JpGithubPrComponent implements OnInit {

  alterLinks: Blog[] = [];
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
    this.alterLinks = BlogDataJP.filter(x => !(x.routeUrl === "/jp/jp-github-pr"));
    this.checkEnglish();
  }

  checkEnglish() {
    if (!this.isEn && this.router.url === '/jp/jp-github-pr') {
      this.router.navigate(['github-pr']);
    }
  }

  navigatetToBlog(blog: Blog) {
    this.router.navigate([blog.routeUrl]);
  }

}
