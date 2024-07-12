import { FormControl, FormLabel, Input, Textarea } from '@chakra-ui/react';

export default function TextareaField({
  label,
  ...restProps
}) {
  return (
    <FormControl flex="1">
      <FormLabel>{label}</FormLabel>
      <Textarea {...restProps}/>
    </FormControl>
  )
}
