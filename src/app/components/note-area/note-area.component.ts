import { Component } from '@angular/core';
import { NoteService } from 'src/app/services/note.service';

@Component({
  selector: 'app-note-area',
  templateUrl: './note-area.component.html',
  styleUrls: ['./note-area.component.css'],
})
export class NoteAreaComponent {
  constructor(private noteService: NoteService) {}

  getSelectedNote() {
    return this.noteService.getSelectedNote();
  }
}
