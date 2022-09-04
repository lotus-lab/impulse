import { Button, Card } from '@/Components/Core';
import { theme } from '@/Theme/themes/theme';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Text, Image } from 'react-native';

export const Login = () => {
  const { t } = useTranslation();

  return (
    <Card
      height={200}
      display="flex"
      alignItems="center"
      justifyContent="center"
      bg={theme.colors.success}>
      <Button>
        <Text>{t('welcome')}</Text>
      </Button>
      <Image
        source={{
          uri: 'https://images.unsplash.com/photo-1540324155974-7523202daa3f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8ZGFuY2V8ZW58MHx8MHx8&w=1000&q=80',
        }}
      />
    </Card>
  );
};
