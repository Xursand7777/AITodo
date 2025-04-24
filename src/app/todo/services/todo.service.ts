import {Injectable} from '@angular/core';
import {BehaviorSubject, delay, map, Observable, tap} from 'rxjs';
import {HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private jsonUrl = 'assets/data.json';

  private store$$:BehaviorSubject<IStoreTodo> = new BehaviorSubject<IStoreTodo>({
    tasks: []
  });

  tasks$$:Observable<Task[]> = this.store$$.pipe(
    map((store) => store.tasks)
  )

  constructor(private http: HttpClient) {}

  getTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(this.jsonUrl).pipe(
      delay(5000),
      tap((tasks) => this._updateStore({tasks: tasks})),
    );
  }


  private _updateStore(data: Partial<IStoreTodo>): void {
    this.store$$.next({ ...this.store$$.getValue(), ...data });
  }
}
