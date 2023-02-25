import React from "react";

interface TabsProps {
    tabs: {
        id: number;
        title: string;
        url: string;
    }[];
    activeTab: number;
    onChangeTab: (tab: number) => void;
}

export const Tabs: React.FC<TabsProps> = ({tabs, activeTab, onChangeTab}) => {
    return (
        <div>
            {tabs.map(tab => (
                <button key={tab.id} onClick={() => onChangeTab(tab.id)}>
                    {tab.title}
                </button>
            ))}
        </div>
    )
}