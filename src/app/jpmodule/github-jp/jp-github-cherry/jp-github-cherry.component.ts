import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DisplayLanguage, Blog } from 'src/app/shared/english.constants';
import { BlogDataJP } from 'src/app/shared/japanese.constants';
import { EventEmitterService } from 'src/app/shared/services/event-emitter.service';

@Component({
  selector: 'app-jp-github-cherry',
  templateUrl: './jp-github-cherry.component.html',
  styleUrls: ['./jp-github-cherry.component.scss']
})
export class JpGithubCherryComponent implements OnInit {

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
    this.alterLinks = BlogDataJP.filter(x => !(x.routeUrl === "github-cherry"));
    this.checkJapanese();
  }

  checkJapanese() {
    if (!this.isEn && this.router.url === '/jp/jp-github-cherry') this.router.navigate(['github-cherry']);
  }

  navigateToGithubPR() {
    this.router.navigate(['github-cherry']);
  }

  navigatetToBlog(blog: Blog) {
    this.router.navigate([blog.routeUrl]);
  }

}
