"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CsvReader = void 0;
const fs_1 = __importDefault(require("fs"));
//CsvReader 实现DataReader接口
class CsvReader {
    constructor(fileName) {
        this.fileName = fileName;
        this.data = [];
    }
    read() {
        this.data = fs_1.default
            .readFileSync(this.fileName, {
            encoding: 'utf-8'
        })
            .split('\n')
            .map((row) => {
            return row.split(',');
        });
    }
}
exports.CsvReader = CsvReader;
