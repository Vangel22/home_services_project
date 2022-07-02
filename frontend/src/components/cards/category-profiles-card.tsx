import { ArrowDownIcon } from "@chakra-ui/icons";
import { Center, Icon, Image, useBreakpointValue, Stack, Heading, VStack, Text, SimpleGrid, GridItem, FormControl, FormLabel, Input, Select, Checkbox, Button, InputGroup, InputLeftElement, HStack, Container, IconButton, AspectRatio, Divider, Link, Box } from "@chakra-ui/react";
import { FiEdit, FiFilter, FiLinkedin, FiTwitter } from "react-icons/fi";

const CategoryProfileCard = () => {


    const colSpan = useBreakpointValue({ base: 2, md: 1 })

    return (
        <VStack w={400} h="full" spacing={10} alignItems="center" bg="white" pb={-10} pt={10} pl={10} pr={10}>

            <Stack spacing={3} alignItems="center">


                <Heading size="md">Избери услуга од нашите дадени категории</Heading>
            </Stack>

            <SimpleGrid columns={[2, null, 2]} columnGap={10} rowGap={10} h="full">
                <GridItem colSpan={colSpan}>

                    <Button bg={"#B2C779"} _hover={{ bg: "#6B774B" }} w={150} h={120} color="white" fontSize={20} flexDirection="column" leftIcon={<Icon as={FiFilter} w={50} h={50} color="white" />}>Електричар</Button>



                </GridItem>

                <GridItem colSpan={colSpan}>
                    <Button bg={"#B2C779"} _hover={{ bg: "#6B774B" }} w={150} h={120} color="white" fontSize={20} flexDirection="column" leftIcon={<Icon as={FiFilter} w={50} h={50} color="white" />}>Готовач</Button>
                </GridItem>

                <GridItem colSpan={colSpan}>
                    <Button bg={"#B2C779"} _hover={{ bg: "#6B774B" }} w={150} h={120} color="white" fontSize={20} flexDirection="column" leftIcon={<Icon as={FiFilter} w={50} h={50} color="white" />}>Чистач</Button>
                </GridItem>

                <GridItem colSpan={colSpan}>
                    <Button bg={"#B2C779"} _hover={{ bg: "#6B774B" }} w={150} h={120} color="white" fontSize={20} flexDirection="column" leftIcon={<Icon as={FiFilter} w={50} h={50} color="white" />}>Чистач</Button>
                </GridItem>
                <GridItem colSpan={colSpan}>
                    <Button bg={"#B2C779"} _hover={{ bg: "#6B774B" }} w={150} h={120} color="white" fontSize={20} flexDirection="column" leftIcon={<Icon as={FiFilter} w={50} h={50} color="white" />}>Чистач</Button>
                </GridItem>

                <GridItem colSpan={colSpan}>
                    <Button bg={"#B2C779"} _hover={{ bg: "#6B774B" }} w={150} h={120} color="white" fontSize={20} flexDirection="column" leftIcon={<Icon as={FiFilter} w={50} h={50} color="white" />}>Чистач</Button>
                </GridItem>

                <GridItem alignItems="flex-end" pl={200} style={{ marginTop: -20 }}>

                    <Button w={135} h={30} colorScheme="red">ПОВЕЌЕ</Button>

                </GridItem>

            </SimpleGrid>




        </VStack>
    )
}

export default CategoryProfileCard;