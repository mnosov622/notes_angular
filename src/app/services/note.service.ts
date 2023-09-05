import { Injectable } from '@angular/core';
import { notes } from '../constants/notes';

interface Note {
  id: Number;
  title: string;
  body: string;
}

@Injectable({
  providedIn: 'root',
})
export class NoteService {
  private notes: Note[] = notes;
  private selectedNote: Note | undefined;

  constructor() {}

  getNotes() {
    return this.notes;
  }

  // Method to set the selected note
  setSelectedNote(note: Note) {
    this.selectedNote = note;
  }

  // Method to get the selected note
  getSelectedNote() {
    return this.selectedNote;
  }

  getNoteById(id: any): Note | undefined {
    return this.notes.find((note) => note.id === id);
  }
}
