import { HStack, Text, Button, VStack } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { PageContent } from "./page-content";

const MenuBar = () => {
  const router = useRouter();

  //Proverka ako korisnikot e logiran, kopceto login treba da bide disabled

  return (
    <VStack spacing={24}>
      <HStack justify="center">
        <HStack h="full" w="full" justify="center" spacing={5} m={2}>
          <Text>Најди помошник</Text>
          <Text>Клиент</Text>
          <Text>Зошто ние?</Text>
          <Text>Контакт</Text>
          <HStack pl={6} justify="flex-end">
            <Button
              _hover={{ bg: "gray.300" }}
              variant="ghost"
              //isDisabled={isUserLoggedIn}
              onClick={() => router.push("/login")}
            >
              Login
            </Button>
            <Button
              colorScheme="green"
              onClick={() => router.push("/register")}
            >
              Register
            </Button>
          </HStack>
        </HStack>
      </HStack>
      <PageContent />
    </VStack>
  );
};

export default MenuBar;
