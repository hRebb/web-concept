import React, { useState } from 'react';
import { StyleSheet, TextInput, View } from 'react-native';

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
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        value={currentUrl}
        onChangeText={setCurrentUrl}
        onSubmitEditing={handleUrlSubmit}
        autoCapitalize="none"
        autoCorrect={false}
        placeholder="Enter URL"
        placeholderTextColor="#888"
        returnKeyType="go"
      />
    </View>
  );
};

const styles = StyleSheet.create({
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
});
