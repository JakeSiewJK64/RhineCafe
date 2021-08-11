import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { experiences } from '../../../shared/experience-contants';
@Component({
  selector: 'app-experience-dialog',
  templateUrl: './experience-dialog.component.html',
  styleUrls: ['./experience-dialog.component.scss']
})
export class ExperienceDialogComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
    private dialogRef: MatDialogRef<ExperienceDialogComponent>) { }

  dataSource: any;

  ngOnInit(): void {
    this.load();
  }

  load() {
    this.dataSource = experiences.filter(x => x.name == this.data.company)[0];
  }

  close() {
    this.dialogRef.close();
  }
}
