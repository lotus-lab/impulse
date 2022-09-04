import React from 'react';
import { useTranslation } from 'react-i18next';
import { View, Text, Image } from 'react-native';

export const Home = () => {
  const { t } = useTranslation();

  return (
    <View>
      <Text>{t('React Native Graphql, React-query template')}</Text>
      <Image
        source={{
          uri: 'https://images.unsplash.com/photo-1540324155974-7523202daa3f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8ZGFuY2V8ZW58MHx8MHx8&w=1000&q=80',
        }}
      />
    </View>
  );
};
