import {Component} from '@angular/core';
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {
  MatCell,
  MatCellDef,
  MatColumnDef,
  MatHeaderCell,
  MatHeaderCellDef,
  MatHeaderRow, MatHeaderRowDef, MatRow, MatRowDef,
  MatTableModule
} from '@angular/material/table';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatTabsModule} from '@angular/material/tabs';
import {
  MatDatepickerModule,
} from '@angular/material/datepicker';
import {DatePipe, NgClass, NgForOf, NgIf} from '@angular/common';
import {MatNativeDateModule, provideNativeDateAdapter} from '@angular/material/core';
import {QuillEditorComponent} from 'ngx-quill';
import {MatButton, MatIconButton} from '@angular/material/button';


interface AttachedFile {
  name: string;
  size: string;
  type: string;
}


@Component({
  selector: 'app-new-todo',
  templateUrl: 'todo-form.component.html',
  imports: [
    MatNativeDateModule,
    FormsModule,
    ReactiveFormsModule,
    MatHeaderCell,
    MatColumnDef,
    MatCell,
    MatHeaderCellDef,
    MatCellDef,
    MatHeaderRow,
    MatHeaderRowDef,
    MatRow,
    MatRowDef,
    MatTableModule,
    MatInputModule,
    MatDatepickerModule,
    NgForOf,
    MatSelectModule,
    MatFormFieldModule,
    MatTabsModule,
    MatIconModule,
    QuillEditorComponent,
    MatIconButton,
    DatePipe,
    NgClass,
    MatButton,
    NgIf,
  ],
  providers: [provideNativeDateAdapter()],
  styleUrls: ['todo-form.component.scss']
})
export default class TodoFormComponent {
  taskForm: FormGroup;
  taskDetails: FormGroup;
  assignees = ['John', 'Jane'];
  projects = ['HRM', 'Edu-Test'];
  customers = ['Google', 'Microsoft'];
  users = ['Alex', 'Sam'];
  workTypes = ['Bug Fix', 'Feature', 'Documentation'];
  templates = ['Template 1', 'Template 2'];

  displayedColumns: string[] = ['note', 'status', 'subtask', 'assignee', 'dueDate', 'actions'];

  checklists = [
    {
      note: 'Complete project documentation',
      status: 'In Progress',
      subtask: 'Write API docs',
      assignee: 'John Doe',
      dueDate: new Date('2023-12-15')
    },
  ];

  attachedFiles: AttachedFile[] = [
    { name: 'project-requirements.pdf', size: '2.4 MB', type: 'pdf' },
    { name: 'screenshot-1.png', size: '1.1 MB', type: 'image' },
    { name: 'meeting-notes.txt', size: '83.0 KB', type: 'text' }
  ];

  getStatusClass(status: string): string {
    switch(status.toLowerCase()) {
      case 'completed': return 'status-completed';
      case 'in progress': return 'status-in-progress';
      case 'pending': return 'status-pending';
      default: return 'status-default';
    }
  }

  editItem(item: any) {
    // Edit logic
  }

  deleteItem(item: any) {
    // Delete logic
  }

  constructor(private fb: FormBuilder) {
    this.taskForm = this.fb.group({
      taskName: [''],
      assignedTo: [''],
      project: [''],
      customer: [''],
      priority: [''],
      status: [''],
      workType: [''],
      requestedBy: [''],
      startDate: [''],
      dueDate: [''],
      estimatedTime: [''],
      actualTime: [''],
      spentTime: [''],
      description: [''],
      checklistTemplate: [''],
    });

    this.taskDetails = this.fb.group({
      department: [''],
      dutyname: [''],
      role: [''],
      domain: [''],
      responsibility: ['']
    })
  }

  quillConfig = {
    toolbar: [
      [{ header: [1, 2, 3, 4, 5, 6, false] }], // Заголовки h1 - h6
      [{ font: [] }], // Выбор шрифта
      [{ size: ['small', false, 'large', 'huge'] }], // Размер шрифта

      ['bold', 'italic', 'underline', 'strike'], // Жирный, курсив, подчеркивание, зачеркнутый
      [{ color: [] }, { background: [] }], // Цвет текста и фона
      [{ script: 'sub' }, { script: 'super' }], // Надстрочный и подстрочный текст
      [{ align: [] }], // Выравнивание текста

      [{ list: 'ordered' }, { list: 'bullet' }], // Маркированный и нумерованный список
      [{ indent: '-1' }, { indent: '+1' }], // Отступы
      [{ direction: 'rtl' }], // Направление текста (справа-налево)

      ['blockquote', 'code-block'], // Блок цитаты, код
      ['link', 'image', 'video'], // Вставка ссылок, изображений, видео

      ['clean'], // Очистка форматирования
    ],
  };

  browseFiles(): void {
    // Логика для открытия диалога выбора файлов
  }

  removeFile(index: number): void {
    this.attachedFiles.splice(index, 1);
  }
}
