import { Container, Flex, VStack } from "@chakra-ui/react";
import HelperDetails from "../src/helper-components/helper-details";
import HelperCard from "../src/helper-components/helper-card";

const Helper = () => {
  
  return (
    <Container maxW="container.xl" p={0}  >
      <Flex
        h={{ base: "auto", md: "100vh" }}
        py={[0, 10, 20]}
        direction={{ base: "column-reverse", md: "row" }}
      >
        <HelperDetails />
        <VStack h="full" p={10} pt={160} spacing={10} alignItems="flex-start">
          <HelperCard />
        </VStack>
      </Flex>
    </Container>
  );
};

export default Helper;
