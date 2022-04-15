import { HStack, Text, Button, Spacer, Stack, Divider } from "@chakra-ui/react";

const MenuBar = () => {
  return (
    <>
      <HStack w="full" h="full" justify="center">
        <HStack h="full" w="full" justify="center" spacing={5} m={2}>
          <Text>Најди помошник</Text>
          <Text>Клиент</Text>
          <Text>Зошто ние?</Text>
          <Text>Контакт</Text>
          <HStack justify="flex-end">
            <Button variant="ghost">Login</Button>
            <Button colorScheme="green">Register</Button>
          </HStack>
        </HStack>
      </HStack>
    </>
  );
};

export default MenuBar;
