import {Component} from '@angular/core';
import {TaskService} from "../../services/taskService";

@Component({
  selector: 'app-listatareas',
  templateUrl: './listatareas.component.html',
  styleUrls: ['./listatareas.component.css']
})
export class ListatareasComponent {
  tasks: string[] = [];
  newTask: string = '';

  constructor(private taskService: TaskService) {
  }

  ngOnInit() {
    this.tasks = this.taskService.getTasks();
  }

  addTask() {
    this.taskService.addTask(this.newTask);
    this.newTask = '';
    this.tasks = this.taskService.getTasks();
  }
}
