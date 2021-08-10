import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { experiences } from './experience-contants';
@Component({
  selector: 'app-experience-dialog',
  templateUrl: './experience-dialog.component.html',
  styleUrls: ['./experience-dialog.component.scss']
})
export class ExperienceDialogComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
    private dialogRef: MatDialogRef<ExperienceDialogComponent>) { }

  dataSource: any;
  name: string = '';
  version_control: string = "";
  duration: string = "";
  ngOnInit(): void {
    this.load();
  }

  load() {
    this.dataSource = experiences.filter(x => x.name == this.data.company);
    this.name = this.dataSource[0].name;
    this.duration = this.dataSource[0].duration;
    this.version_control = this.dataSource[0].version_control;
  }

  close() {
    this.dialogRef.close();
  }
}
