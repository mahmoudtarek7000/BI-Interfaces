import { BehaviorSubject, Observable, Subject } from "rxjs";
import {BIObservable} from "./observable";
import { FormGroup } from "@angular/forms";

export interface IGrid {
  DataService: any,
  GridData: Observable<any>,
  Columns: Object,
  CurrentSelectRow: FormGroup; 
  StopSave: Subject<boolean>;
  StopDelete: Subject<boolean>;
  CreatedItemArray: Array<Object>;
  UpdatedItemArray: Array<Object>;
  BeforeActionSave: () => void;
  BeforeActionDelete: () => void;
  AddRow: () => void;
  DeleteRow: () => void;
  Cancel: () => void;
  Save: () => void;
}
