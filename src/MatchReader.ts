import { CsvReader, MatchData } from "./CsvReader";
import { dataStringToDate } from "./utils";
import { MatchResult } from "./MatchResult";

export class MatchReader extends CsvReader<MatchData>{
  mapRow(row:string[]):MatchData{
    return [
      dataStringToDate(row[0]),
      row[1],
      row[2],
      parseInt(row[3]),
      parseInt(row[4]),
      row[5] as MatchResult,  //type assertion
      row[6]
    ];
  }
}