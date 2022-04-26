import { HStack, Text, Button, VStack } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { PageContent } from "./page-content";

const MenuBar = () => {
  const router = useRouter();

  //Proverka ako korisnikot e logiran, kopceto login treba da bide disabled

  return (
    <VStack spacing={24} color={'white'}>
      <HStack justify="center">
        <HStack h="full" w="full" justify="center" spacing={5} m={2}>
          <Text>Најди помошник</Text>
          <Text>Клиент</Text>
          <Text>Зошто ние?</Text>
          <Text>Контакт</Text>
          <HStack pl={6} justify="flex-end">
            <Button
              _hover={{ bg: "#6B774B" }}
              variant="ghost"
              //isDisabled={isUserLoggedIn}
              onClick={() => router.push("/login")}
            >
              Најава 
            </Button>
            <Button
              bgColor={"#93A560"}
              _hover={{ bg: "" }}
              onClick={() => router.push("/register")}
            >
              Регистрација 
            </Button>
          </HStack>
        </HStack>
      </HStack>
      <PageContent />
    </VStack>
  );
};

export default MenuBar;
