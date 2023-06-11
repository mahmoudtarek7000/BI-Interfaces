export interface INav {
  DomID: string | undefined;
  AddRow(): void;
  DeleteRow(): void;
  Cancel(): void;
  Save(): void;
  Info(): void;
  Close(): void;
}
