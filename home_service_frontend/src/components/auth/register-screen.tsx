import { useState } from "react";
import {
  VStack,
  Heading,
  Input,
  Spacer,
  Button,
  useToast,
  HStack,
  IconButton,
  Tooltip,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import axios from "axios";
import { BiArrowBack } from "react-icons/bi";
import { BsHouse } from "react-icons/bs";

const RegisterScreen = () => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const router = useRouter();
  const toast = useToast();

  const register = async (
    username: string,
    email: string,
    password: string
  ) => {
    try {
      if (password !== confirmPassword) {
        toast({
          title: "Passwords do not match!",
          status: "error",
          duration: 3000,
          isClosable: true,
        });
        return;
      }

      const res = await axios.post(
        "http://localhost:1337/auth/local/register",
        {
          username: username,
          email: email,
          password: password,
        }
      );
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
            <Tooltip label="Go back to Home">
              <IconButton
                onClick={() => router.push("/home")}
                colorScheme="gray"
                alignSelf="flex-start"
                aria-label="goBack"
                icon={<BsHouse />}
              ></IconButton>
            </Tooltip>
            <Heading pl={10} color="green.500">
              Register
            </Heading>
          </HStack>
          <Input
            placeholder="Username"
            type="text"
            onChange={(e) => setUsername(e.target.value)}
          />
          <Input
            placeholder="Email"
            type="text"
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            placeholder="Password"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <Input
            placeholder="Confirm Password"
            type="password"
            onChange={(e) => setConfirmPassword(e.target.value)}
          />

          <Spacer />
          <Button
            w={48}
            colorScheme="green"
            onClick={async () => {
              const registerStatus = await register(username, email, password);
              if (registerStatus) {
                router.push("/login");
              }
            }}
          >
            Register
          </Button>
        </VStack>
      </VStack>
    </VStack>
  );
};

export default RegisterScreen;
