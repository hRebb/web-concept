import { WebView } from 'react-native-webview';

interface WebProps {
  url: string;
}

export const Web: React.FC<WebProps> = ({ url }) => {
  return <WebView source={{ uri: url }} />;
};