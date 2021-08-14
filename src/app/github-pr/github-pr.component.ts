import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlterBlogLinks, AlterBlogInterest } from '../shared/english.constants';

@Component({
  selector: 'app-github-pr',
  templateUrl: './github-pr.component.html',
  styleUrls: ['./github-pr.component.scss']
})
export class GithubPrComponent implements OnInit {

  constructor(private router: Router) {

  }
  alterLinks: AlterBlogLinks[] = [];

  ngOnInit(): void {
    window.scrollTo(0, 0);
    this.alterLinks = AlterBlogInterest.filter(x => !x.url.includes("github-pr"));
  }

  navigatetToBlog(blog: AlterBlogLinks) {
    this.router.navigate([blog.url]);
  }

}
