import {
  useColorModeValue,
  Icon,
  Link,
  Heading,
  VStack,
  Text,
  HStack,
  AspectRatio,
  Divider,
  Button,
  Container,
  Avatar,
} from "@chakra-ui/react";
import { FiEdit } from "react-icons/fi";
import { BsTwitter, BsLinkedin, BsDribbble } from "react-icons/bs";
import useUser from "../components/hooks/use-user";

const ClientCard = () => {
  const bgColor = useColorModeValue("gray.50", "whiteAplha.50");
  const { user } = useUser();
  return (
    <VStack
      w={400}
      p={10}
      spacing={10}
      alignItems="center"
      bg={bgColor}
      borderRadius={10}
      style={{
        height: 610,
      }}
    >
      <VStack spacing={3} alignItems="center">
        <AspectRatio ratio={1} w={24}>
          <Avatar name="Ивана Јовановска" src="images/Avatar.jpg" />
        </AspectRatio>

        <Heading size="md">{user?.username}</Heading>
        <Text color="#6941C6">Founder & CEO</Text>
        <Text textAlign="center" color="#667085">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </Text>
        <HStack justifyContent="space-between" color="#98A2B3">
          <Link href="#">
            <BsTwitter />
          </Link>
          <Link href="#">
            <BsLinkedin />
          </Link>
          <Link href="#">
            <BsDribbble />
          </Link>
        </HStack>

        <Divider size="lg" />

        <Container w="full" p={5} bg={"#F2F2F2"}>
          <VStack alignItems="flex-start">
            <VStack w="full" align="flex-start">
              <Heading size="xs">Најчесто користени услуги:</Heading>
              <HStack>
                <Text fontSize="sm">Електричар</Text>
                <Text fontSize="sm">Водоводџија</Text>
                <Text fontSize="sm">Градинар</Text>
              </HStack>
            </VStack>
            <VStack>
              <HStack>
                <Heading size="xs">Локација:</Heading>
                <Text fontSize="sm">Куманово</Text>
              </HStack>
            </VStack>
          </VStack>
          <VStack alignItems="flex-end">
            <Button
              leftIcon={<Icon as={FiEdit} />}
              bg="#E56262"
              color="white"
              _hover={{ bg: "#E53E3E" }}
              variant="ghost"
            >
              Измени
            </Button>
          </VStack>
        </Container>
      </VStack>
    </VStack>
  );
};

export default ClientCard;
