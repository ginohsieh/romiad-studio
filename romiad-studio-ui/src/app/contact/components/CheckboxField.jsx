"use client";

import { Button, Checkbox, CheckboxGroup, FormControl, FormLabel, Stack } from '@chakra-ui/react';
import { useCallback, useState } from 'react';


function CheckboxButton({ children, value, ...checkboxProps }) {
  const [checked, setChecked] = useState(false)
  const onClick = useCallback(() => {
    setChecked(!checked)
  }, [setChecked, checked])
  return (
    <Button
      colorScheme={checked ? 'blue' : 'whiteAlpha'}
      onClick={onClick}
    >
      {children}
      <Checkbox checked={checked} display="none" value={value} {...checkboxProps} />
    </Button>
  )
}

export default function CheckboxField({
  label,
  checkboxList=[]
} = {}) {

  const checkboxStackProps = {
    direction: {
      base: 'column',
      md: 'row',
    },
    spacing: {
      base: '0.5rem',
      md: '1rem',
    }
  }

  return (
    <FormControl>
    <FormLabel>{label}</FormLabel>
    <CheckboxGroup>
      <Stack {...checkboxStackProps}>
        {
          checkboxList.map(({value, label, ...restProps}) => (
            <CheckboxButton key={value} value={value} checkboxProps={restProps}>{label}</CheckboxButton>
          ))
        }
      </Stack>
    </CheckboxGroup>
  </FormControl>
  )
}
