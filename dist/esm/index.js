import React from "react";
import { PdfReader } from "./components";
export const DocumentReader = (props) => {
    const { url } = props;
    return (React.createElement(PdfReader, { url: url }));
};
//# sourceMappingURL=index.js.map