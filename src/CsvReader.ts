import  fs  from "fs";

export interface DataReader {
  read():void;
  data:string[][];
}


//CsvReader 实现DataReader接口
export class CsvReader{
  data:string[][] = [];

  constructor(public fileName:string){}

  read():void{
    this.data = fs
    .readFileSync(this.fileName,{
      encoding:'utf-8'
    })
    .split('\n')
    .map(
      (row:string):string[] => {
        return row.split(',');
      }
    );
    
  }
}