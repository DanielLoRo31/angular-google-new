import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NListComponent } from './n-list/n-list.component';
import { NNewComponent } from './n-new/n-new.component';
import { NTplComponent } from './n-tpl/n-tpl.component';

const routes: Routes = [
  {path: '', component: NTplComponent, children: [
    { path: 'list', component: NListComponent },
    { path: ':type', component: NNewComponent },
    { path: '**', redirectTo: 'list' }
  ]},
  {path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NewsRoutingModule { }
