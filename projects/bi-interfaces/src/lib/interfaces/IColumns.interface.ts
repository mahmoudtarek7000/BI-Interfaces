import { ValidatorFn } from '@angular/forms';
import { DataTypes } from '../enums/DataType';
export interface IColumns {
  DomID: string | undefined;
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
  lookupTemplate?: {
    Key: string | undefined;
    ID: string | undefined;
    DataSource: any
  }
}
