import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NoteAreaComponent } from './components/note-area/note-area.component';

const routes: Routes = [{ path: 'note/:id', component: NoteAreaComponent }];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
