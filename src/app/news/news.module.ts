import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewsRoutingModule } from './news-routing.module';
import { NTplComponent } from './n-tpl/n-tpl.component';
import { NNewComponent } from './n-new/n-new.component';
import { NListComponent } from './n-list/n-list.component';
import { ComponentsModule } from '../components/components.module';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [NTplComponent, NNewComponent, NListComponent],
  imports: [
    CommonModule,
    ComponentsModule,
    ReactiveFormsModule,
    NewsRoutingModule
  ]
})
export class NewsModule { }
