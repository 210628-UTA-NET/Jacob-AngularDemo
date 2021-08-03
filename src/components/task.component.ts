import { Component } from '@angular/core';

@Component({
    selector: 'task',
    templateUrl: './task.component.html',
    styleUrls: ['./task.component.css']
})

export class TaskComponent {
    name: string = "Jacob"

    tasks = [
        {id: 1, name: "Grocery shopping"},
        {id: 2, name: "Take the trash out"}
    ]

} 