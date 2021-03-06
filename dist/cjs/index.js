"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DocumentReader = void 0;
const react_1 = __importDefault(require("react"));
const components_1 = require("./components");
const DocumentReader = (props) => {
    const { url } = props;
    return (react_1.default.createElement(components_1.PdfReader, { url: url }));
};
exports.DocumentReader = DocumentReader;
//# sourceMappingURL=index.js.map