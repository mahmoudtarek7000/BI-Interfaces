import { ValidatorFn } from '@angular/forms';
import { DataTypes } from '../enums/DataType';
export interface IColumns {
  Validators: ValidatorFn | null;
  Name: string;
  DisplayName: string;
  DataType: any;
  IsEditable: boolean;
  IsFilterable: boolean;
  DefaultValue: string | null;
  controlType: string;
  viewCellStyle: string;
  IsVisible: boolean;
}
