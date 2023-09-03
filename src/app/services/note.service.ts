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
  private selectedNote: string = '';

  constructor() {}

  getNotes() {
    return this.notes;
  }

  // Method to set the selected note
  setSelectedNote(noteBody: string) {
    this.selectedNote = noteBody;
  }

  // Method to get the selected note
  getSelectedNote() {
    return this.selectedNote;
  }
}
