import { FormControl, FormLabel, Input } from '@chakra-ui/react';

export default function InputField({
  label,
  ...restProps
}) {
  return (
    <FormControl flex="1">
      <FormLabel>{label}</FormLabel>
      <Input {...restProps}/>
    </FormControl>
  )
}
