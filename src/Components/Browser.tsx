import React, { useState } from "react";
import { WebView } from './WebView';

interface BrowserProps { }

export const Browser: React.FC<BrowserProps> = () => {
    const [url, setUrl] = useState<string>('');

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUrl(event.target.value);
    };

    const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
    }

    return (
        <div>
            <form onSubmit={handleFormSubmit}>
                <input type="text" value={url} onChange={handleInputChange}></input>
                <button type="submit">Go</button>
            </form>
            <WebView url={url} />
        </div>
    )
}