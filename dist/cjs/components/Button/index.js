"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomButton = void 0;
const react_1 = __importStar(require("react"));
require("./styles.css");
const CustomButton = (props) => {
    const { variant, content } = props;
    const [color, setColor] = (0, react_1.useState)('');
    (0, react_1.useEffect)(() => {
        if (variant) {
            if (variant === 'primary') {
                setColor('#0077ff');
            }
            else if (variant === 'secondary') {
                setColor('#ff0062');
            }
            else if (variant === 'success') {
                setColor('#0f8000');
            }
            else {
                setColor('#949393');
            }
        }
    });
    return (react_1.default.createElement("button", { className: 'buttonComponent', style: {
            backgroundColor: color
        } }, content.toUpperCase()));
};
exports.CustomButton = CustomButton;
//# sourceMappingURL=index.js.map