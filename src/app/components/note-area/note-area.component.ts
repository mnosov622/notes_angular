import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NoteService } from 'src/app/services/note.service';

@Component({
  selector: 'app-note-area',
  templateUrl: './note-area.component.html',
  styleUrls: ['./note-area.component.css'],
})
export class NoteAreaComponent implements OnInit {
  selectedNote: string | undefined;

  constructor(
    private noteService: NoteService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    // Get the 'id' parameter from the route
    this.route.paramMap.subscribe((params) => {
      const id = params.get('id');

      if (id) {
        // Call a method to get a note by id
        this.selectedNote = this.noteService.getNoteById(Number(id))?.body;
      }
    });
  }
}
