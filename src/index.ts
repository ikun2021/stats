// 需要使用node standard library时
//在命令行输入 npm install @types/node
import fs from 'fs';    //fs-filesystem
import { ConsoleTarget } from './ConsoleTarget';

import { CsvReader } from './CsvReader';
import { HtmlTarget } from './HtmlTarget';
import { MatchReader } from './MatchReader';
import { Summary } from './Summary';
import { WinsAnalysis } from './WinsAnalysis';


const csvReader = new CsvReader('football.csv');

const matchReader = new MatchReader(csvReader);
matchReader.load();

const summary = new Summary(new WinsAnalysis('Man United'),new HtmlTarget());

summary.buildAndPrintReport(matchReader.matches);