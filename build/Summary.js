"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Summary = void 0;
class Summary {
    constructor(analyzer, outPutTarget) {
        this.analyzer = analyzer;
        this.outPutTarget = outPutTarget;
    }
    buildAndPrintReport(matches) {
        const report = this.analyzer.run(matches);
        this.outPutTarget.print(report);
    }
}
exports.Summary = Summary;
