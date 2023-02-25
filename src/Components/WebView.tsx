import React from "react";

interface WebViewProps {
    url: string;
}

export const WebView: React.FC<WebViewProps> = ({ url }) => {
    return (
        <iframe title="web-view" src={url} style={{width: '100%', height: '80vh'}}></iframe>
    );
};