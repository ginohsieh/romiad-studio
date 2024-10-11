"use client";

import { RadioGroup, FormControl, FormLabel, Radio, Stack } from '@chakra-ui/react';

export default function RadioField({
  label,
  radioList=[],
  name,
  required,
} = {}) {

  const radiogroupStackProps = {
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
    <RadioGroup>
      <Stack {...radiogroupStackProps}>
        {
          radioList.map(({value, label, ...restProps}) => (
            <Radio key={value} name={name} isRequired={required} value={value} {...restProps}>{label}</Radio>
          ))
        }
      </Stack>
    </RadioGroup>
  </FormControl>
  )
}
