enum TaskStatus {
  NotStarted = 'not-started',
  InProgress = 'in-progress',
  Completed = 'completed',
  OnHold = 'on-hold',
  Cancelled = 'cancelled'
}

enum TaskPriority {
  Low = 'low',
  Medium = 'medium',
  High = 'high',
  Critical = 'critical'
}

export interface Task {
  id: number;
  taskName: string;
  project: string;
  client: string;
  workType: string;
  assignedTo: string;
  parentTask: string;
  status: TaskStatus;
  priority: TaskPriority;
  dueDate: string;
  estimatedTime: string;
  startTime: string;
  stopTime: string;
  time: string;
}

export interface IStoreTodo {
  tasks: Task[]
}
