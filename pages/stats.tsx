import { Box, Container, SimpleGrid } from "@chakra-ui/react";
import * as React from "react";
import { Stat } from "../src/components/Stat";

const stats = [
  { label: "Total Subscribers", value: "71,887" },
  { label: "Avg. Open Rate", value: "56.87%" },
  { label: "Avg. Click Rate", value: "12.87%" },
];

export const App = () => (
  <Box as='section' py={{ base: "4", md: "8" }}>
    <Container>
      <SimpleGrid columns={{ base: 1, md: 3 }} gap={{ base: "5", md: "6" }}>
        {stats.map(({ label, value }) => (
          <Stat key={label} label={label} value={value} />
        ))}
      </SimpleGrid>
    </Container>
  </Box>
);

export default App;
