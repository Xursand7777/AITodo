import {Component, inject, OnInit, TemplateRef,  ViewChild} from '@angular/core';
import {ColumnMode, NgxDatatableModule,  TableColumn} from '@swimlane/ngx-datatable';
import {FormsModule} from '@angular/forms';
import {ToastrService} from 'ngx-toastr';
import {NgClass,                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   NgIf} from '@angular/common';
import {NgIconsModule} from '@ng-icons/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-todo',
  templateUrl: 'todo.component.html',
  styleUrls: ['todo.component.scss'],
  imports: [NgxDatatableModule, FormsModule, NgClass, NgIf, NgIconsModule],
  providers: [ToastrService]
})
export default class TodoComponent implements OnInit {
  private toasterService = inject(ToastrService);
  private router: Router = inject(Router);
  @ViewChild('checkboxTemplate', { static: true }) checkboxTemplate!: TemplateRef<any>;
  @ViewChild('levelTemplate', { static:true }) levelTemplate!: TemplateRef<any>;
  @ViewChild('actionsTemplate', { static: true }) actionsTemplate!: TemplateRef<any>;
  @ViewChild('statusTemplate', { static: true }) statusTemplate!: TemplateRef<any>;
  @ViewChild('timeTemplate', { static: true }) timeTemplate!: TemplateRef<any>;
  columns:TableColumn[] = []
  ColumnMode = ColumnMode;
  selected:any = [];

  tasks = [
    {
      id: 1,
      taskName: 'Review client documentation',
      project: 'Documentation',
      client: 'ABC Healthcare',
      workType: 'Document assistance',
      assignedTo: 'John Doe',
      parentTask: '--',
      status: 'in-progress',
      priority: 'high',
      dueDate: '2025-04-10',
      estimatedTime: '120 min',
      startTime: 'Apr 2, 2025 10:00 AM',
      stopTime: '--',
      time: '45 min'
    },
    {
      id: 2,
      taskName: 'Update system configurations',
      project: 'System Admin',
      client: 'Internal',
      workType: 'System Administration - Software',
      assignedTo: 'Sarah Smith',
      parentTask: '--',
      status: 'pending',
      priority: 'medium',
      dueDate: '2025-04-15',
      estimatedTime: '60 min',
      startTime: '--',
      stopTime: '--',
      time: '0 min'
    },
    {
      id: 3,
      taskName: 'Client onboarding for ABC Corp',
      project: 'Onboarding',
      client: 'ABC Healthcare',
      workType: 'New Client Set up - EHR',
      assignedTo: 'Michael Johnson',
      parentTask: '--',
      status: 'completed',
      priority: 'high',
      dueDate: '2025-04-05',
      estimatedTime: '180 min',
      startTime: 'Apr 2, 2025 10:00 AM',
      stopTime: 'Apr 5, 2025 11:00 AM',
      time: '5910 min'
    },
    {
      id: 4,
      taskName: 'Database maintenance',
      project: 'Infrastructure',
      client: 'Internal',
      workType: 'Database administration',
      assignedTo: 'John Doe',
      parentTask: '--',
      status: 'pending',
      priority: 'low',
      dueDate: '2025-04-20',
      estimatedTime: '90 min',
      startTime: '--',
      stopTime: '--',
      time: '0 min'
    },
    {
      id: 5,
      taskName: 'Process insurance claims batch',
      project: 'Billing',
      client: 'MedCare Clinic',
      workType: 'EDI - Sending',
      assignedTo: 'Sarah Smith',
      parentTask: '--',
      status: 'pending',
      priority: 'critical',
      dueDate: '2025-04-07',
      estimatedTime: '240 min',
      startTime: '--',
      stopTime: '--',
      time: '0 min'
    },
    {
      id: 6,
      taskName: 'Appeal denied claims',
      project: 'Collections',
      client: 'Family Practice Associates',
      workType: 'EDI - Insurance Call',
      assignedTo: 'Emily Chen',
      parentTask: '--',
      status: 'pending',
      priority: 'high',
      dueDate: '2025-04-09',
      estimatedTime: '120 min',
      startTime: '--',
      stopTime: '--',
      time: '0 min'
    },
    {
      id: 7,
      taskName: 'Print and mail patient statements',
      project: 'Billing',
      client: 'Cardiology Associates',
      workType: 'Marketing',
      assignedTo: 'Michael Johnson',
      parentTask: '--',
      status: 'in-progress',
      priority: 'medium',
      dueDate: '2025-04-08',
      estimatedTime: '90 min',
      startTime: 'Apr 1, 2025 10:00 AM',
      stopTime: '--',
      time: '30 min'
    }
  ];
  showAddTaskModal = false;
  newTask: any = {};



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
