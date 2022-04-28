import { HStack, Text, Button, VStack, Flex, Spacer, Image, Icon, Box } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { PageContent } from "./page-content";
//import Logo from "../../../public/icons/logo.svg"
import { Logo } from "../../../public/icons/logo";


const MenuBar = () => {
  const router = useRouter();

  //Proverka ako korisnikot e logiran, kopceto login treba da bide disabled

  return (
    <VStack spacing={24} color={'white'}>
      <HStack justify="center" width="full">
        {/* <HStack h="full" w="full" justify="center" spacing={170} m={2}> */}
          <Box  w="full" h="full">
          <Flex w="full" gap={30} p={3} >
          <Box w='220px' >
            <Logo />
          </Box>
   
          <Spacer />
          <Box >
            <Text m={2} p={0}>Најди помошник</Text>
          </Box>
          <Spacer w={30} />
          <Box>
            <Text m={3}>Клиент</Text>
          </Box>
          <Spacer />
          <Box>
          <Text m={3}>Зошто ние?</Text>
          </Box>
          <Spacer  />
          <Box>
          <Text m={3}>Контакт</Text>
          </Box>
          <Spacer />
          <Box>
            <Button
            
              _hover={{ bg: "#6B774B" }}
              variant="ghost"
              //isDisabled={isUserLoggedIn}
              onClick={() => router.push("/login")}
            >
              Најава 
            </Button>
            
          </Box>
          <Box>
            <Button
              bgColor={"#93A560"}
              _hover={{ bg: "" }}
              onClick={() => router.push("/register")}
            >
              Регистрација 
            </Button>
          </Box>
          

          </Flex>
          </Box>

   
          
        {/* </HStack> */}
      </HStack>
      <PageContent />
    </VStack>
  );
};

export default MenuBar;
