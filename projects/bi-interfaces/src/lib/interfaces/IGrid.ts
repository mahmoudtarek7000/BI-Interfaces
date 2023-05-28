import { BehaviorSubject, Observable, Subject } from "rxjs";
import {BIObservable} from "./observable";
import { FormGroup } from "@angular/forms";

export interface IGrid {
  DataService: any,
  GridData: Observable<any>,
  Columns: Object,
  Key: string,
  CurrentSelectRow: FormGroup; 
  StopSave: Subject<boolean>;
  CreatedItemArray: Array<Object>;
  UpdatedItemArray: Array<Object>;
  BeforeAction: () => void;
  AddRow: () => void;
  DeleteRow: () => void;
  Cancel: () => void;
  Save: () => void;
}
