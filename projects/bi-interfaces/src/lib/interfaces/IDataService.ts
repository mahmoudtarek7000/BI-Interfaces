import { BehaviorSubject, Observable } from "rxjs";
import {BIObservable} from "./observable";
export interface IDataService {
  edit(data: any, id: string): Observable<any>;
  add(data: any): Observable<any>;
  delete(id: string): Observable<any>;
  read(filter: string): void;
  fetch(filter: string): Observable<any>;
  loading: boolean;
  APIURL: string;
}
