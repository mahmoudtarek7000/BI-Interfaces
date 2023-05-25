import { Observable } from "rxjs";
import {BIObservable} from "./observable";
import { FormGroup } from "@angular/forms";

export interface IGrid {
  DataService: any,
  GridData: Observable<any>,
  Columns: Object,
  Key: string,
  CurrentSelectRow: FormGroup; 
  BeforeAction: () => void;
  AddRow: () => void;
  DeleteRow: () => void;
  Cancel: () => void;
  Save: () => void;
}
