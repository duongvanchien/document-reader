import React from "react";
import { PdfReader } from "./components";

export const DocumentReader = (props: {
    fileType?: "pdf",
    url: string
}) => {
    const { url } = props;
    return (
        <PdfReader url={url} />
    )
}