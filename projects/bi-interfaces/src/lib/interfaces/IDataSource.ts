import { Validator } from "@angular/forms";
import { DataSourceType } from "../enums/DataSourceType";
import { DataTypes } from "../enums/DataType";
import { Observable } from "rxjs";

export interface IDataSource {
    Params: string;
    Key: string;
    Columns: {
        Name: string,
        DataType: DataTypes,
    }[];
    Type: DataSourceType;
    IsClientSideFilter: boolean;
    data: any[];
    edit(data: any, id: string): Observable<any>;
    add(data: any): Observable<any>;
    delete(id: string): Observable<any>;
    read(filter: string): void;
    loading: boolean;
    APIURL: string;
}