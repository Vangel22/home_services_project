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
} from "@chakra-ui/react";
import { FiFilter } from "react-icons/fi";

const HelperDetails = () => {
  const colSpan = useBreakpointValue({ base: 2, md: 1 });
  return (
    <VStack w="full" h="full" p={10} spacing={10} alignItems="flex-start">
      <VStack spacing={3} alignItems="flex-start">
        <Heading size="2xl">Добар ден,Марио!</Heading>
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
                <Input type="search" placeholder="Search" />
              </InputGroup>
            </Stack>
          </FormControl>
        </GridItem>

        <GridItem colSpan={colSpan}>
          <HStack justifyContent="space-between">
            <Heading size="md">Огласи</Heading>
            <Button leftIcon={<Icon as={FiFilter} />}>Filter</Button>
          </HStack>
        </GridItem>

        <GridItem
          colSpan={colSpan}
          w="full"
          h="full"
          pl={5}
          pt={5}
          pr={5}
          mb={-5}
          alignItems="flex-start"
          bg="green.300"
        >
          <VStack>
            <VStack alignItems="flex-start">
              <Heading size="xs">МНМ КОМЕРЦ</Heading>
              <Text>Информации за помошникот</Text>
              <Text fontSize={14}>
                Mattis enim, vitae cursus pellentesque sed. Orci ultrices quis a
                lobortis. Vitae posuere pretium dolor egestas viverra nisi,
                fusce gravida dui. Diam nibh velit id pharetra, nisl neque
                sapien, nisl. Blandit sed sagittis adipiscing et in. Tempor,
                vitae a orci aliquet tellus, nisl, non. Viverra orci libero,
                quam donec nisi, hendrerit.
              </Text>

              <HStack justifyContent="space-between" pt={5}>
                <Heading size="xs">Цена:</Heading>
                <Text fontSize="sm">По договор</Text>
                <Heading size="xs" pl={5}>
                  Достапност:
                </Heading>
                <Text fontSize="sm">09:00ч до 21:00ч</Text>
                <Heading size="xs" pl={5}>
                  Локација:
                </Heading>
                <Text fontSize="sm">Куманово</Text>
              </HStack>
            </VStack>
          </VStack>
          <VStack alignItems="flex-end">
            <Button colorScheme="red">КОНТАКТИРАЈ</Button>
          </VStack>
        </GridItem>

        <GridItem
          colSpan={colSpan}
          w="full"
          h="full"
          pl={5}
          pt={5}
          pr={5}
          mb={-5}
          alignItems="flex-start"
          bg="green.300"
        >
          <VStack>
            <VStack alignItems="flex-start">
              <Heading size="xs">МНМ КОМЕРЦ</Heading>
              <Text>Информации за помошникот</Text>
              <Text fontSize={14}>
                Mattis enim, vitae cursus pellentesque sed. Orci ultrices quis a
                lobortis. Vitae posuere pretium dolor egestas viverra nisi,
                fusce gravida dui. Diam nibh velit id pharetra, nisl neque
                sapien, nisl. Blandit sed sagittis adipiscing et in. Tempor,
                vitae a orci aliquet tellus, nisl, non. Viverra orci libero,
                quam donec nisi, hendrerit.
              </Text>

              <HStack justifyContent="space-between" pt={5}>
                <Heading size="xs">Цена:</Heading>
                <Text fontSize="sm">По договор</Text>
                <Heading size="xs" pl={5}>
                  Достапност:
                </Heading>
                <Text fontSize="sm">09:00ч до 21:00ч</Text>
                <Heading size="xs" pl={5}>
                  Локација:
                </Heading>
                <Text fontSize="sm">Куманово</Text>
              </HStack>
            </VStack>
          </VStack>
          <VStack alignItems="flex-end">
            <Button colorScheme="red">КОНТАКТИРАЈ</Button>
          </VStack>
        </GridItem>

        <GridItem
          colSpan={colSpan}
          w="full"
          h="full"
          pl={5}
          pt={5}
          pr={5}
          mb={-5}
          alignItems="flex-start"
          bg="green.300"
        >
          <VStack>
            <VStack alignItems="flex-start">
              <Heading size="xs">МНМ КОМЕРЦ</Heading>
              <Text>Информации за помошникот</Text>
              <Text fontSize={14}>
                Mattis enim, vitae cursus pellentesque sed. Orci ultrices quis a
                lobortis. Vitae posuere pretium dolor egestas viverra nisi,
                fusce gravida dui. Diam nibh velit id pharetra, nisl neque
                sapien, nisl. Blandit sed sagittis adipiscing et in. Tempor,
                vitae a orci aliquet tellus, nisl, non. Viverra orci libero,
                quam donec nisi, hendrerit.
              </Text>

              <HStack justifyContent="space-between" pt={5}>
                <Heading size="xs">Цена:</Heading>
                <Text fontSize="sm">По договор</Text>
                <Heading size="xs" pl={5}>
                  Достапност:
                </Heading>
                <Text fontSize="sm">09:00ч до 21:00ч</Text>
                <Heading size="xs" pl={5}>
                  Локација:
                </Heading>
                <Text fontSize="sm">Куманово</Text>
              </HStack>
            </VStack>
          </VStack>
          <VStack alignItems="flex-end">
            <Button colorScheme="red">КОНТАКТИРАЈ</Button>
          </VStack>
        </GridItem>

        <GridItem colSpan={colSpan}>
          <Container>
            <VStack pl={0}>
              <IconButton
                colorScheme="blackAlpha"
                size="md"
                fontSize={40}
                aria-label="See more"
                icon={<ArrowDownIcon />}
              />
              <Text>Види повеќе</Text>
            </VStack>
          </Container>
        </GridItem>
      </SimpleGrid>
    </VStack>
  );
};

export default HelperDetails;
