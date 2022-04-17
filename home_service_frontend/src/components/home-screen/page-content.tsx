import { HStack, Button, Text, VStack } from "@chakra-ui/react";

export const PageContent = () => {
  return (
    <VStack pb={36}>
      <Text fontSize="4xl">Олесни го твоето домаќинство со нашите услуги</Text>
      <Text>Добредојвте на нашата веб страница</Text>
      <HStack w="full" justify="center" spacing={12}>
        <Button shadow="md" colorScheme="green" w={48}>
          Најди помошник
        </Button>
        <Button shadow="md" colorScheme="green" w={48}>
          Пријави се
        </Button>
      </HStack>
    </VStack>
  );
};
