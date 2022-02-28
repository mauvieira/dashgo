import { Box, Stack, Text } from "@chakra-ui/react";
import { PaginationItem } from './PaginationItem';

interface PaginationProps {
  totalCountOfRegisters: number;
  registersPerPage?: number;
  currentPage?: number;
  onChangePage: (page: number) => void;
}

const siblingsCount = 1;

function generatePagesArray(from: number, to: number) {
  return [...new Array(to - from)]
    .map((_, index) => from + index + 1)
    .filter(page => page > 0);
}

export function Pagination({
  totalCountOfRegisters,
  registersPerPage = 10,
  currentPage = 1,
  onChangePage,
}: PaginationProps) {

  const lastPage = Math.floor(totalCountOfRegisters / registersPerPage);

  const previousPages = currentPage > 1
    ? generatePagesArray(currentPage - 1 - siblingsCount, currentPage - 1)
    : [];

  const nextPages = currentPage < lastPage
    ? generatePagesArray(currentPage, Math.min(currentPage + siblingsCount, lastPage))
    : [];

  return (
    <Stack
      spacing="8"
      justify="space-between"
      align="center"
      direction={["column", "row"]}
      mt="8"
    >
      <Box>
        <strong>0 - 10</strong> of <strong>{totalCountOfRegisters}</strong>
      </Box>
      <Stack direction="row" spacing="2">

        {currentPage > (1 + siblingsCount) && (
          <>
            <PaginationItem number={1} onChangePage={onChangePage} />
            {currentPage > (2 + siblingsCount) && (
              <Text
                color="gray.300"
                width="8"
                textAlign="center"
              >
                ...
              </Text>
            )}
          </>
        )}

        {previousPages.length > 0 && previousPages.map(page => (
          <PaginationItem key={page} number={page} onChangePage={onChangePage} />
        ))}

        <PaginationItem number={currentPage} isCurrent onChangePage={onChangePage} />

        {nextPages.length > 0 && nextPages.map(page => (
          <PaginationItem key={page} number={page} onChangePage={onChangePage} />
        ))}

        {(currentPage + siblingsCount) < lastPage && (
          <>
            {(currentPage + 1) < lastPage && (
              <Text
                color="gray.300"
                width="8"
                textAlign="center"
              >
                ...
              </Text>
            )}
            <PaginationItem number={lastPage} onChangePage={onChangePage} />
          </>
        )}

      </Stack>
    </Stack>
  )
}