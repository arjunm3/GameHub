import { Box, Heading } from "@chakra-ui/react";
import React, { ReactNode } from "react";

interface Props {
  term: string;
  children: ReactNode | ReactNode[];
}

const DefinitionItem = ({ term, children }: Props) => {
  return (
    <Box marginY={5}>
      <Heading color="gray.600" as="dl" fontSize='md'>
        {term}
      </Heading>
      <dd>{children}</dd>
      </Box>
  );
};

export default DefinitionItem;
