import { Component, OnInit, Input } from '@angular/core';
import { MantisRecordService } from './../../services';
import { MantisNotesInterface } from './../../models';

@Component({
  selector: 'app-detail-notes-section',
  templateUrl: './detail-notes-section.component.html',
  styleUrls: ['./detail-notes-section.component.css']
})
export class DetailNotesSectionComponent implements OnInit {
  @Input() public mantisId: number;

  public notes: MantisNotesInterface;

  constructor(private mantisRecordService: MantisRecordService) { }

  ngOnInit() {
      this.getObject();
  }

  getObject() {
      this.mantisRecordService.getJobNotes({bug_id: this.mantisId}).subscribe(
          (data) => {
              this.notes = data.objects;
          },
          (err) => {
              alert('Internall Error');
          },
          () => {
              alert('Completed');
          }
      );
  }

}
