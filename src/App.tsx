import React, {useState} from 'react';

import { AddressBar } from './Components/AddressBar';
import { History } from './Components/History';
import { Tabs } from './Components/Tabs';
import { Web } from './Components/WebView';


import './App.css';

interface Tab {
  id: number;
  title: string;
  url: string;
}

const App: React.FC = () => {
    const [tabs, setTabs] = useState<{ id: number; title: string; url: string }[]>([
    { id: 0, title: 'Google', url: 'https://www.google.com' },
    { id: 1, title: 'Facebook', url: 'https://www.facebook.com' },
    { id: 2, title: 'GitHub', url: 'https://www.github.com' },
    ]);

    const [activeTab, setActiveTab] = useState<number>(0);
    const [history, setHistory] = useState<string[]>([]);
    const [url, setUrl] = useState<string>('');

    const handleTabChange = (id: number) => {
      setActiveTab(id);
    };

    const handleUrlChange = (url: string) => {
      setHistory([...history, url]);
      setTabs((tabs) => tabs.slice(activeTab + 1));
    };

    return (
      <>
        <AddressBar url={tabs[activeTab].url} onUrlChange={handleUrlChange} />
        <Tabs tabs={tabs} activeTab={activeTab} onChangeTab={handleTabChange} />
        <Web url={url} />
        <History history={history} />
      </>
    );
};

export default App;