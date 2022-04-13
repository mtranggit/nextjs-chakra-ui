import { Container, Flex, VStack } from "@chakra-ui/react";
import { Cart } from "../src/sections/cart";
import { Details } from "../src/sections/details";

const IndexPage = () => (
  <Container maxW='container.xl' p={0}>
    <Flex
      h={{ base: "auto", md: "100vh" }}
      py={[0, 10, 20]} // padding vertically 0: 0 - 479px(base), 10: 480px - 767px (sm), 20 : 768 up (md), 20 spacing pixels <=> i.e 20 x 4 = 80px;
      direction={{ base: "column-reverse", md: "row" }}
    >
      <Details />
      <Cart />
    </Flex>
  </Container>
);

export default IndexPage;
