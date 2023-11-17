import {Component} from '@angular/core';
import {TaskService} from "../../services/taskService";

@Component({
  selector: 'app-listcard',
  templateUrl: './listcard.component.html',
  styleUrls: ['./listcard.component.css']
})
export class ListcardComponent {
  tasks: string[] | undefined;

  constructor(private taskService: TaskService) {
  }

  ngOnInit() {
    this.tasks = this.taskService.getTasks();
  }

}
