import { Box, Stack } from "@chakra-ui/react";
import { Button } from './Button';

export function Pagination() {
  return (
    <Stack
      spacing="8"
      justify="space-between"
      align="center"
      direction="row"
      mt="8"
    >
      <Box>
        <strong>0 - 10</strong> de <strong>100</strong>
      </Box>
      <Stack direction="row" spacing="2">
        <Button number={1} isCurrent />
        <Button number={2} />
        <Button number={3} />
        <Button number={4} />
        <Button number={5} />
        <Button number={6} />
      </Stack>
    </Stack>
  )
}