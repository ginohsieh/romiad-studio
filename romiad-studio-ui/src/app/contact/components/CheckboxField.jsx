"use client";

import { Button, Checkbox, FormControl, FormLabel, Stack } from '@chakra-ui/react';
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
      <Checkbox opacity="0" position="absolute" value={value} {...checkboxProps} isChecked={checked} />
    </Button>
  )
}

export default function CheckboxField({
  label,
  checkboxList=[],
  forceRequiredMsg=true,
  name,
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
      <FormLabel>
        {label}
      </FormLabel>
      <Stack {...checkboxStackProps}>
        {
          checkboxList.map(({value, label, ...restProps}) => (
            <CheckboxButton key={value} name={name} value={value} checkboxProps={restProps}>{label}</CheckboxButton>
          ))
        }
        <Checkbox
          bottom={-5}
          opacity={0}
          required={forceRequiredMsg}
        />
      </Stack>
    </FormControl>
  )
}
