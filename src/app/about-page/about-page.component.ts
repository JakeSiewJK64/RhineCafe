import { Component, OnInit } from '@angular/core';
import { BioDescriptionEN } from '../shared/english.constants';

@Component({
  selector: 'app-about-page',
  templateUrl: './about-page.component.html',
  styleUrls: ['./about-page.component.scss']
})
export class AboutPageComponent implements OnInit {

  constructor() { }

  bio: string = BioDescriptionEN;

  ngOnInit(): void {
  }

}
