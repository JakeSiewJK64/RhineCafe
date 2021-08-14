import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlterBlogInterest, AlterBlogLinks } from '../shared/english.constants';

@Component({
  selector: 'app-github-cherry',
  templateUrl: './github-cherry.component.html',
  styleUrls: ['./github-cherry.component.scss']
})
export class GithubCherryComponent implements OnInit {

  constructor(private router: Router) { }

  alterLinks: AlterBlogLinks[] = [];

  ngOnInit(): void {
    window.scrollTo(0, 0);
    this.alterLinks = AlterBlogInterest.filter(x => !x.url.includes("github-cherry"));
  }

  navigatetToBlog(blog: AlterBlogLinks) {
    this.router.navigate([blog.url]);
  }
}
