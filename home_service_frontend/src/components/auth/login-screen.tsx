import {
  VStack,
  Button,
  Input,
  Heading,
  Spacer,
  Link,
  toast,
  useToast,
  HStack,
  Divider,
} from "@chakra-ui/react";
import NextLink from "next/link";
import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import { route } from "next/dist/server/router";

export const LoginScreen = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  const toast = useToast();

  const handleUsername = (event: any) => {
    setUsername(event.target.value);
  };

  const handlePassword = (event: any) => {
    setPassword(event.target.value);
  };

  const login = async (username: string, password: string) => {
    try {
      const res = await axios.post("http://localhost:1337/auth/local", {
        identifier: username,
        password: password,
      });
      console.log(res);
      return res;
    } catch (e: any) {
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
          h={72}
          w="md"
          bg="white"
          textAlign="center"
          borderRadius={8}
          spacing={4}
          p={4}
          shadow="2xl"
        >
          <Heading color="green.500">Login</Heading>
          <Input placeholder="Email" type="text" onChange={handleUsername} />
          <Input
            placeholder="Password"
            type="password"
            onChange={handlePassword}
          />
          <HStack w="full" justify="space-evenly">
            <NextLink href="/forgot-password" passHref>
              <Link color="blue" lineHeight="7">
                Forgot password?
              </Link>
            </NextLink>
            <NextLink href="/register" passHref>
              <Link color="blue" lineHeight="7">
                Register now
              </Link>
            </NextLink>
          </HStack>
          <Spacer />
          <Button
            w={48}
            colorScheme="green"
            onClick={async () => {
              const loginStatus = await login(username, password);
              if (loginStatus) {
                router.push("/home");
              }
            }}
          >
            Login
          </Button>
        </VStack>
      </VStack>
    </VStack>
  );
};
