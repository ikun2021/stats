import { MatchData } from "./MatchData";

export interface Analyzer{
  run(matches:MatchData[]):string;
}

export interface OutPutTarget{
  print(report:string):void;
}

export class Summary{
  analyzer:Analyzer;
  outPutTarget:OutPutTarget;

  constructor(analyzer:Analyzer,outPutTarget:OutPutTarget){
    this.analyzer = analyzer;
    this.outPutTarget = outPutTarget;
  }
  
  buildAndPrintReport(matches:MatchData[]):void{
    const report:string = this.analyzer.run(matches);
    this.outPutTarget.print(report);
  }


}

