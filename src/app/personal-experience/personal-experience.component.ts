import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Experience, experiences } from '../shared/english.constants';

@Component({
  selector: 'app-personal-experience',
  templateUrl: './personal-experience.component.html',
  styleUrls: ['./personal-experience.component.scss'],
})
export class PersonalExperienceComponent implements OnInit {
  constructor(private http:HttpClient) {
  }
  experienceData: Experience[] = experiences;
  ngOnInit(): void {
  }
}
