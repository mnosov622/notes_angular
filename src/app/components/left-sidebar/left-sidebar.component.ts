import { Component } from '@angular/core';
import { Router } from '@angular/router'; // Import the Router
import { notes } from '../../constants/notes';
import { NoteService } from 'src/app/services/note.service';
import { Note } from 'src/app/interfaces/note.interface';

@Component({
  selector: 'app-left-sidebar',
  templateUrl: './left-sidebar.component.html',
  styleUrls: ['./left-sidebar.component.css'],
})
export class LeftSidebarComponent {
  notes = notes;
  constructor(private noteService: NoteService, private router: Router) {}
  newNote: Note = { id: 0, title: '', body: '' }; // Initialize an empty note
  isCreateNoteModalOpen: boolean = false;
  setSelectedNote(note: Note) {
    this.noteService.setSelectedNote(note);
    this.router.navigate(['/note', note.id]);
  }

  createNewNote() {
    const maxId = Math.max(...this.notes.map((note) => note.id), 0);
    this.newNote.id = maxId + 1;

    this.notes.push(this.newNote);
    this.newNote = { id: 0, title: '', body: '' };
    this.closeCreateNoteModal();
  }

  openCreateNoteModal() {
    this.isCreateNoteModalOpen = true;
  }
  closeCreateNoteModal() {
    this.isCreateNoteModalOpen = false;
  }
}
