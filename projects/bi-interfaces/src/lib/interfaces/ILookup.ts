import { EventEmitter } from "@angular/core";
import { Observable, Subject } from "rxjs";
import { IDataSource } from "./IDataSource";

export interface ILookup {

  IsDisabled: boolean;
  Isvalid: boolean;
  Key: string;
  DomID: string;
  SelectedRow: any;
  Description: string;
  rtlDescription: string;
  GoToDefinitionURl: string;
  Title: string
  DataSource: IDataSource
  //events
  OnEnterGrid: EventEmitter<any>;
  BeforeLoad: EventEmitter<any>;
  AfterLoad: EventEmitter<any>;
  OnHover: EventEmitter<any>;
  OnClose: EventEmitter<any>;//ookk canc
  OnOpen: EventEmitter<any>;
  OnFocus: EventEmitter<any>;
  ReturnedValueEmitter: EventEmitter<any>;
  //funce
  cellClickHandler: (args:any) => void;
  dblClickEvent: (event: any) => void;
  OnTextChange: (event:any) => Promise<void>;
  SetIsDisable: (IsDisable:boolean) => void;
  Cancel: () => void;
  Save: () => void;
  OpenModal: () => void;
  CloseModal: () => void;
  FilterChange: (event:any) => void
}
