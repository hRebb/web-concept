import React, { useState } from 'react';

interface AddressBarProps {
  url: string;
  onUrlChange: (url: string) => void;
}

export const AddressBar: React.FC<AddressBarProps> = ({ url, onUrlChange }) => {
  const [currentUrl, setCurrentUrl] = useState<string>(url);

  const handleUrlSubmit = () => {
    onUrlChange(currentUrl);
  };

  return (
    <div style={styles.container}>
      <input
        style={styles.input}
        value={currentUrl}
        onChange={(e) => setCurrentUrl(e.target.value)}
        onKeyPress={(e) => {
          if (e.key === 'Enter') {
            handleUrlSubmit();
          }
        }}
        autoCapitalize="none"
        placeholder="Enter URL"
        type="text"
      />
    </div>
  );
};

const styles = {
  container: {
    backgroundColor: '#f2f2f2',
    padding: 8,
  },
  input: {
    backgroundColor: '#fff',
    borderRadius: 4,
    borderWidth: 1,
    borderColor: '#ccc',
    fontSize: 16,
    height: 36,
    paddingHorizontal: 8,
  },
};

