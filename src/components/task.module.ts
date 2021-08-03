import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { TaskComponent } from './task.component';
import { TaskItemComponent } from './task-item/task-item.component';

@NgModule({
    declarations: [
        TaskComponent,
        TaskItemComponent
    ],
    imports: [
        BrowserModule
    ],
    exports: [TaskComponent],
    providers: [],
    bootstrap: [TaskComponent]
})

export class TaskModule { } 