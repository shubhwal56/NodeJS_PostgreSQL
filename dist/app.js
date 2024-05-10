"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const port = 8000; //
app.get('/:datatype', (req, res) => {
    var variable = req.params.datatype;
    res.json({
        message: variable,
        source: typeof (variable)
    });
});
app.listen(port, () => {
    console.log(` Hii we are comfortable in NodeJS `);
});
//# sourceMappingURL=app.js.map