import {
  VStack,
  Heading,
  HStack,
  Text,
  Button,
  GridItem,
  useBreakpointValue,
} from "@chakra-ui/react";
import axios from "axios";

const ServiceCard = () => {
  const colSpan = useBreakpointValue({ base: 2, md: 1 });

  // useEffect(() => {
  //   const test = fetch("http://localhost:1337/api/services")
  //     .then((res) => res.json())
  //     .then((res) => {
  //       console.log("res", res);
  //     });
  // });

  // async function fetchServices() {
  //   const res = await axios.get("http://localhost:1337/api/services");
  //   return res.data;
  // }

  // const test = fetchServices();
  // console.log("test", test);

  return (
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
      borderRadius={10}
    >
      <VStack>
        <VStack alignItems="flex-start">
          {/* <Heading size="xs">{companyName}</Heading>
          <Text fontSize={14}>{Description}</Text> */}

          <HStack justifyContent="space-between" pt={5}>
            <Heading size="xs">Цена:</Heading>
            {/* <Text fontSize="sm">{Price}</Text> */}
            <Heading size="xs" pl={5}>
              Достапно од:
            </Heading>
            {/* <Text fontSize="sm">{AvailableFrom}</Text> */}
            <Heading size="xs" pl={5}>
              Локација:
            </Heading>
            {/* <Text fontSize="sm">{Location}</Text> */}
          </HStack>
        </VStack>
      </VStack>
      <VStack alignItems="flex-end">
        <Button
          bg="#E56262"
          color="white"
          _hover={{ bg: "#E53E3E" }}
          variant="ghost"
        >
          КОНТАКТИРАЈ
        </Button>
      </VStack>
    </GridItem>
  );
};

export default ServiceCard;
