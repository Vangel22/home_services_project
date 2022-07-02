import { ArrowDownIcon, SearchIcon } from "@chakra-ui/icons";
import {
  Icon,
  useBreakpointValue,
  Stack,
  Heading,
  VStack,
  Text,
  SimpleGrid,
  GridItem,
  FormControl,
  Input,
  Button,
  InputGroup,
  InputLeftElement,
  HStack,
  Container,
  IconButton,
  Box,
  ButtonGroup,
} from "@chakra-ui/react";
import { useEffect } from "react";
import { FiFilter } from "react-icons/fi";
import ServiceCard from "../components/cards/service-card";
import useUser from "../components/hooks/use-user";

const HelperDetails = () => {
  const colSpan = useBreakpointValue({ base: 2, md: 1 });
  const { user } = useUser();

  return (
    <VStack w="full" h="full" p={10} spacing={10} alignItems="flex-start">
      <VStack spacing={3} alignItems="flex-start">
        <Heading size="2xl">Добар ден, {user?.username}!</Heading>
        <Text>Подолу ќе најдеш,листа на услуги од други помошници.</Text>
      </VStack>
      <SimpleGrid column={2} columnGap={3} rowGap={10} w="full">
        <GridItem colSpan={colSpan}>
          <FormControl>
            <Stack spacing={4}>
              <InputGroup>
                <InputLeftElement
                  pointerEvents="none"
                  // eslint-disable-next-line react/no-children-prop
                  children={<SearchIcon color="gray.300" />}
                />
                <Input
                  type="search"
                  placeholder="Search"
                  focusBorderColor="green.500"
                />
              </InputGroup>
            </Stack>
          </FormControl>
        </GridItem>

        <GridItem colSpan={colSpan}>
          <HStack justifyContent="space-between">
            <ButtonGroup>
              <Button color="white" bg="#6B774B">
                Огласи
              </Button>
              <Button color="white" bg="#A9BB76">
                Профили
              </Button>
            </ButtonGroup>
            <Button leftIcon={<Icon as={FiFilter} />}>Филтер</Button>
          </HStack>
        </GridItem>

        <ServiceCard />
      </SimpleGrid>
    </VStack>
  );
};

export default HelperDetails;
