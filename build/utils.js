"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dataStringToDate = void 0;
const dataStringToDate = (dataString) => {
    const dataParts = dataString
        .split('/')
        .map((value) => {
        return parseInt(value);
    });
    //js中创建new Date
    return new Date(dataParts[2], dataParts[1] - 1, dataParts[0]);
};
exports.dataStringToDate = dataStringToDate;
