import { Box, Heading, Stack, Text, VStack } from "@chakra-ui/react";

type CardProps = {
  service_name: string;
};

const CategoryCard = ({ service_name }: CardProps) => {
  return (
    <Box bg="green" borderRadius={6}>
      <VStack h="full" w="full" p={5}>
        <Stack
          position="sticky"
          h="50px"
          w="50px"
          overflow="hidden"
          borderWidth={1}
          borderRadius={300}
          borderColor="blue"
          bg="black"
        ></Stack>
        <Heading>{service_name}</Heading>
        <Text textAlign="center" maxInlineSize={64}>
          Pretium proin amet, egestas id. Viverra suspendisse laoreet proin
          pulvinar at urn.
        </Text>
      </VStack>
    </Box>
  );
};

export default CategoryCard;
