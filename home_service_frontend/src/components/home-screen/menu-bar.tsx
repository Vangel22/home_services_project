import { HStack, Text, Button, VStack } from "@chakra-ui/react";
import { PageContent } from "./page-content";

const MenuBar = () => {
  return (
    <VStack spacing={24}>
      <HStack justify="center">
        <HStack h="full" w="full" justify="center" spacing={5} m={2}>
          <Text>Најди помошник</Text>
          <Text>Клиент</Text>
          <Text>Зошто ние?</Text>
          <Text>Контакт</Text>
          <HStack pl={6} justify="flex-end">
            <Button variant="ghost">Login</Button>
            <Button colorScheme="green">Register</Button>
          </HStack>
        </HStack>
      </HStack>
      <PageContent />
    </VStack>
  );
};

export default MenuBar;
