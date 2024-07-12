import { Flex } from '@chakra-ui/react'

export default function FormRow(props) {
  const flexFormRowProps = {
    direction: {
      base: 'column',
      md: 'row',
    },
    rowGap: '1rem',
    columnGap: '1rem',
    w: "100%",
  }
  return (
    <Flex
      {...flexFormRowProps}
      {...props}
    />
  )
}
