import {
  Text,
  Button,
  Heading,
  Input,
  Spacer,
  useToast,
  VStack,
  HStack,
  IconButton,
  Tooltip,
} from "@chakra-ui/react";
import axios from "axios";
import { useRouter } from "next/router";
import { useState } from "react";
import { BiArrowBack } from "react-icons/bi";
import { BsHouse } from "react-icons/bs";

const ForgotPasswordScreen = () => {
  const [email, setEmail] = useState("");
  const toast = useToast();
  const router = useRouter();

  const forgotPassword = async (email: string) => {
    try {
      const res = await axios.post(
        "http://localhost:1337/auth/local/forgot-password",
        {
          email: email,
        }
      );
      console.log(res);
      return res;
    } catch (e) {
      toast({
        title: "Authentication failed!",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
  };

  return (
    <VStack w="full" h="100vh" bgImage="/images/home-image.png">
      <VStack h="full" w="full" justify="center">
        <VStack
          h="fit-content"
          w="md"
          bg="white"
          textAlign="center"
          borderRadius={8}
          spacing={4}
          p={4}
          shadow="2xl"
        >
          <HStack w="full">
            <Tooltip label="Go back to Login">
              <IconButton
                onClick={() => router.push("/login")}
                colorScheme="gray"
                alignSelf="flex-start"
                aria-label="goBack"
                icon={<BiArrowBack />}
              ></IconButton>
            </Tooltip>

            <Heading pl={6} color="green.500">
              Forgot Password
            </Heading>
          </HStack>
          <Text alignSelf="flex-start" color="gray">
            * Enter your email to recieve validation mail.
          </Text>
          <Input
            placeholder="Email"
            type="text"
            onChange={(e) => setEmail(e.target.value)}
          />
          <Spacer />
          <Button
            w={48}
            colorScheme="green"
            onClick={async () => {
              const forgotStatus = await forgotPassword(email);
              if (forgotStatus) {
                router.push("/login");
              }
            }}
          >
            Send request
          </Button>
        </VStack>
      </VStack>
    </VStack>
  );
};

export default ForgotPasswordScreen;
