import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Text, Pressable } from 'react-native';
import { CloseButtonProps } from '.';
import styles from './styles';

export const CloseButton: React.FC<CloseButtonProps> = ({ style }) => {
  const navigation = useNavigation();
  return (
    <Pressable style={[styles.btn, style]} onPress={() => navigation.goBack()}>
      <Text style={styles.btnText}>X</Text>
    </Pressable>
  );
};
