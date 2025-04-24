import {Component, inject, OnInit, TemplateRef,  ViewChild} from '@angular/core';
import {ColumnMode, NgxDatatableModule,  TableColumn} from '@swimlane/ngx-datatable';
import {FormsModule} from '@angular/forms';
import {ToastrService} from 'ngx-toastr';
import {
  AsyncPipe, NgClass, NgIf
} from '@angular/common';
import {NgIconsModule} from '@ng-icons/core';
import {Router} from '@angular/router';
import {TodoService} from './services/todo.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-todo-list',
  templateUrl: 'todo-list.component.html',
  styleUrls: ['todo-list.component.scss'],
  imports: [NgxDatatableModule, FormsModule, NgClass, NgIf, NgIconsModule, AsyncPipe],
  providers: [ToastrService]
})
export default class TodoListComponent implements OnInit {
  private toasterService = inject(ToastrService);
  private todoService = inject(TodoService);
  private router: Router = inject(Router);
  @ViewChild('checkboxTemplate', { static: true }) checkboxTemplate!: TemplateRef<any>;
  @ViewChild('levelTemplate', { static:true }) levelTemplate!: TemplateRef<any>;
  @ViewChild('actionsTemplate', { static: true }) actionsTemplate!: TemplateRef<any>;
  @ViewChild('statusTemplate', { static: true }) statusTemplate!: TemplateRef<any>;
  @ViewChild('timeTemplate', { static: true }) timeTemplate!: TemplateRef<any>;
  columns:TableColumn[] = []
  ColumnMode = ColumnMode;
  selected:any = [];
  showAddTaskModal = false;
  newTask: any = {};
  tasks$$:Observable<Task[]> = this.todoService.tasks$$;



  ngOnInit() {
    this.columns =  [
      {
        prop: 'select',
        name: '',
        sortable: false,
        width: 60,
        cellTemplate: this.checkboxTemplate, // Используем шаблон чекбокса
      },
      { prop: 'level', name: 'Level', sortable: false, width: 70, cellTemplate: this.levelTemplate },
      { prop: 'taskName', name: 'Task Name', sortable: true },
      { prop: 'project', name: 'Project', sortable: true },
      { prop: 'client', name: 'Client', sortable: true },
      { prop: 'workType', name: 'Work Type', sortable: true },
      { prop: 'assignedTo', name: 'Assigned To', sortable: true, width: 120 },
      { prop: 'parentTask', name: 'Parent Task', sortable: true, width: 110 },
      { prop: 'status', name: 'Status', sortable: true, width: 110, cellTemplate: this.statusTemplate  },
      { prop: 'priority', name: 'Priority', sortable: true, width: 90,  },
      { prop: 'dueDate', name: 'Due Date', sortable: true, width: 110 },
      { prop: 'estimatedTime', name: 'Est. Time', sortable: true, width: 100 },
      { prop: 'startTime', name: 'Start Time', sortable: true, width: 110,  },
      { prop: 'stopTime', name: 'Stop Time', sortable: true, width: 110,  },
      { prop: 'time', name: 'Time', sortable: true, width: 100,  cellTemplate: this.timeTemplate },
      {
        prop: 'id',
        name: 'Actions',
        sortable: false,
        width: 150,
        cellTemplate: this.actionsTemplate
      }
    ];
    this.todoService.getTasks().subscribe();
  }

  onSelectCheckbox(row: number, event:Event) {

  }


  useAI() {
    // AI functionality
  }

  filterByStatus(status: string) {
    // Filter by status
  }

  filterByPriority(priority: string) {
    // Filter by priority
  }

  openTaskDetails(task: any) {
    // Open task details
  }

  getStatusClass(status: string): string {
    switch(status.toLowerCase()) {
      case 'completed':
        return 'status-completed';
      case 'in-progress':
        return 'status-in-progress';
      case 'pending':
        return 'status-pending';
      default:
        return 'status-default';
    }
  }

  getTime(time: string) {
    const minutes = parseInt(time.toString().replace(' min', '')) || 0;

    if (minutes <= 45) {
      return 'time-good';
    } else {
      return 'time-bad';
    }
  }

  getTimeIcon(time: string) {
    const minutes = parseInt(time.toString().replace(' min', '')) || 0;
    if (minutes <= 45) {
      return 'heroCheckCircleMini'; // Иконка для хорошего времени
    } else {
      return 'heroExclamationTriangleMini'; // Иконка для плохого времени
    }
  }

  editTask(taskId: number) {
    console.log('Edit task', taskId);
  }

  pause(taskId: number) {
    console.log('Pause task', taskId);
  }

  addTask() {
     this.router.navigate(['todo-new'])
  }
}
