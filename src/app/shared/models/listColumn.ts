  export class ListColumn {
    field: string;
    header: string;
    width: number;
    hide?: boolean=false;
    isColoredRow:boolean =false
    stopSort?: boolean=false;
    isDate?: boolean=false;
    icon ? : boolean = false;
    isCurrancy ? : boolean=false;
    iconTooltip ?: string 
    minWidth?:number;
    public constructor(init?:Partial<ListColumn>) {
      Object.assign(this, init);
  }
}
