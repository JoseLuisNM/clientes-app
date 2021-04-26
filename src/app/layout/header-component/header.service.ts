import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {

  private searchQueryChanged = new BehaviorSubject<string>("");

  public queryChanged$ = this.searchQueryChanged.asObservable();

  constructor() { }

  public setQueryString (query: string): void{
    this.searchQueryChanged.next(query);
  }
}
