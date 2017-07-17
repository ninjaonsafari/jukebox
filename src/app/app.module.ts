import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule  } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {
  MdButtonModule,
  MdToolbarModule,
  MdTabsModule,
  MdCardModule
} from '@angular/material';

// Modules
import { RoutingModule } from './utils/routing.module'

// Components
import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { QueueComponent } from './queue/queue.component';

import { NotFoundComponent } from './utils/not-found/not-found.component';

// Services
import { QueueService } from './shared/services/queue.service';

import { SharedModule } from './shared/shared.module';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    RoutingModule,
    SharedModule,

    // Material
    MdButtonModule,
    MdToolbarModule,
    MdTabsModule,
    MdCardModule
  ],
  declarations: [
    // Components
    AppComponent,
    SearchComponent,
    QueueComponent,
    NotFoundComponent
  ],
  providers: [
    QueueService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
