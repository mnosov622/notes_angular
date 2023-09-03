import { Component } from '@angular/core';
import { notes } from '../../constants/notes';

@Component({
  selector: 'app-left-sidebar',
  templateUrl: './left-sidebar.component.html',
  styleUrls: ['./left-sidebar.component.css'],
})
export class LeftSidebarComponent {
  notes = notes;
}
