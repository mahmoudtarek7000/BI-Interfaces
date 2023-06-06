import { Observable } from "rxjs";
export interface IDataService {
  edit(APIURL: string, data: any): Observable<any>;
  add(APIURL: string, data: any): Observable<any>;
  delete(APIURL: string, id: string): Observable<any>;
  fetch(APIURL: string, filter: string): Observable<any>;
}
