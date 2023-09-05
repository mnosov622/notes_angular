import { Component } from '@angular/core';
import { Router } from '@angular/router'; // Import the Router
import { notes } from '../../constants/notes';
import { NoteService } from 'src/app/services/note.service';

interface Note {
  id: number;
  title: string;
  body: string;
}

@Component({
  selector: 'app-left-sidebar',
  templateUrl: './left-sidebar.component.html',
  styleUrls: ['./left-sidebar.component.css'],
})
export class LeftSidebarComponent {
  notes = notes;

  constructor(private noteService: NoteService, private router: Router) {}

  setSelectedNote(note: Note) {
    this.noteService.setSelectedNote(note);
    this.router.navigate(['/note', note.id]);
  }
}
