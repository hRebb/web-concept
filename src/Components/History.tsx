import React from "react";

interface HistoryProps {
    history: string[];
}

export const History: React.FC<HistoryProps> = ({ history }) => {
    return (
        <ul>
            {history.map((url, index) => (
                <li key={index}></li>
            ))}
        </ul>
    )
}