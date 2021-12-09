"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MatchReader = void 0;
const CsvReader_1 = require("./CsvReader");
const utils_1 = require("./utils");
class MatchReader extends CsvReader_1.CsvReader {
    mapRow(row) {
        return [
            (0, utils_1.dataStringToDate)(row[0]),
            row[1],
            row[2],
            parseInt(row[3]),
            parseInt(row[4]),
            row[5],
            row[6]
        ];
    }
}
exports.MatchReader = MatchReader;
