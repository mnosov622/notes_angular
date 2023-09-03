import { Component } from '@angular/core';
import { notes } from '../../constants/notes';
import { NoteService } from 'src/app/services/note.service';

@Component({
  selector: 'app-left-sidebar',
  templateUrl: './left-sidebar.component.html',
  styleUrls: ['./left-sidebar.component.css'],
})
export class LeftSidebarComponent {
  notes = notes;
  constructor(private noteService: NoteService) {}

  setSelectedNote(noteBody: string) {
    this.noteService.setSelectedNote(noteBody);
  }
}
