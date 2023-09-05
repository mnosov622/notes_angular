import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NoteAreaComponent } from './components/note-area/note-area.component';

// Define your routes
const routes: Routes = [
  // Other routes...
  { path: 'note/:id', component: NoteAreaComponent }, // Add a route for note-details with an 'id' parameter
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(routes)], // Add RouterModule with your routes
  exports: [RouterModule], // Export RouterModule for use in other parts of your application
})
export class AppRoutingModule {}
