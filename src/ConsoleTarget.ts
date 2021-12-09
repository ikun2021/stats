import { OutPutTarget } from "./Summary";

export class ConsoleTarget implements OutPutTarget{
  print(report: string): void {
    console.log(report);
  }
  
}