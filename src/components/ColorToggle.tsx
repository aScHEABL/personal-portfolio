import React, { useState, useContext, useEffect } from 'react';
import { Switch, Group, useMantineColorScheme, useMantineTheme } from '@mantine/core';
import { IconSun, IconMoonStars } from '@tabler/icons-react';
import { AppContext } from '../AppContext';

export default function ColorToggle() {
  // const { state, dispatch } = useContext(AppContext);
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const theme = useMantineTheme();

  useEffect(() => {
    // console.log(state);
  })

  return (
    <Group position="right" my={20} mr={40}>
      <Switch
        checked={colorScheme === 'dark'}
        onChange={() => toggleColorScheme()}
        size="xl"
        onLabel={<IconSun color={theme.white} size="1.25rem" stroke={1.5} />}
        offLabel={<IconMoonStars color={theme.colors.gray[6]} size="1.25rem" stroke={1.5} />}
      />
    </Group>
  );
}