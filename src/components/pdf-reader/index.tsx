import React, { useState } from "react";
import { Document, Page } from 'react-pdf';

export const PdfReader = (props: {
    url: string
}) => {
    const { url } = props;
    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState<any>(1);

    function onDocumentLoadSuccess(props: { numPages: any }) {
        setNumPages(numPages);
        setPageNumber(numPages);
    }

    return (
        <div>
            <Document file={url} onLoadSuccess={onDocumentLoadSuccess}>
                <Page pageNumber={pageNumber} />
            </Document>
            <p>
                Page {pageNumber} of {numPages}
            </p>
        </div>
        // <ReactPDF file={{ url }} />
    )
}