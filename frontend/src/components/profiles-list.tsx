import { ArrowDownIcon, SearchIcon, UpDownIcon } from "@chakra-ui/icons";
import { Center, Icon, Image, useBreakpointValue, Stack, Heading, VStack, Text, SimpleGrid, GridItem, FormControl, FormLabel, Input, Select, Checkbox, Button, InputGroup, InputLeftElement, HStack, Container, IconButton, AspectRatio, Divider, Link, Box } from "@chakra-ui/react";
import Head from "next/head";
import { useRouter } from 'next/router'
import StarRatingComponent from 'react-star-rating-component';
import { BookmarkStarFill } from 'react-bootstrap-icons';
import { MdFilter, MdFilter9, MdSettings } from 'react-icons/md'
import { FiArrowRight, FiFilter, FiLinkedin, FiTwitter } from 'react-icons/fi'
const ProfilesList = () => {
    const colSpan = useBreakpointValue({ base: 2, md: 1 })
    const router = useRouter();

    return (
        <VStack w="full" p={10} spacing={10} alignItems="flex-start" bg="gray.100">

            <VStack spacing={3} alignItems="flex-start">
                <Heading size="2xl">Добар ден,Марио!</Heading>
                <Text>Подолу ќе најдеш,листа на услуги од други помошници.</Text>
            </VStack>
            <SimpleGrid column={2} columnGap={3} rowGap={10} w="full">
                <GridItem colSpan={colSpan} rounded="lg" bg="white">
                    <FormControl bg="white">
                        <Stack spacing={4}>
                            <InputGroup colorScheme="whiteAlpha" bg="white">
                                <InputLeftElement
                                    pointerEvents='none'
                                    // eslint-disable-next-line react/no-children-prop
                                    children={<SearchIcon color='gray.600' />}
                                />
                                <Input type='search' placeholder='Search' />
                            </InputGroup>
                        </Stack>
                    </FormControl>
                </GridItem>

                <GridItem colSpan={colSpan}>
                    <HStack justifyContent="space-between">
                        <HStack>
                            <Button onClick={() => router.push('/helper')} w={114} h={30} rounded="lg" bg="#A9BB76" >Огласи</Button>

                            <Button onClick={() => router.push('#')} w={114} h={30} rounded="lg" bg="#6B774B" >Профили</Button>

                        </HStack>
                        <Button bg="white" colorScheme="whiteAlpha" color="black" leftIcon={<Icon as={FiFilter} />}>Филтер</Button>
                    </HStack>
                </GridItem>
            </SimpleGrid>



            <SimpleGrid columns={[2, null, 2]} columnGap={10} rowGap={10}>
                <GridItem colSpan={colSpan}>

                    <VStack>

                        <VStack rounded="lg" bg="white" w={333} alignItems="start" pl={2} pt={5} pb={11} mb={-10} pr={10}>
                            <VStack justifyContent="end" pl={272}>
                                <BookmarkStarFill fontSize={60} style={{ marginTop: -32, marginBottom: -28, color: "#EEDE4A" }} />
                            </VStack>
                            <HStack alignItems="start" style={{ marginTop: 0 }}>
                                <AspectRatio ratio={1} w={24}>
                                    <Image src="images/Avatar.jpg" alt="photo"></Image>
                                </AspectRatio>

                                <Stack spacing={0} w="full" direction="row" justifyContent="space-between" alignItems="start" >
                                    <VStack w="full" spacing={0} alignItems="start">
                                        <Heading fontSize={15}>Ивана Јовановска</Heading>
                                        <Text fontSize={15}>Чистач</Text>
                                        <HStack style={{
                                            marginTop: -10,
                                        }}><Text fontSize={13}>Rating: </Text>
                                            <Text pt={2} fontSize={17}><StarRatingComponent
                                                name="rate1"
                                                starCount={5}
                                                value={2}
                                                starColor="black" /* color of selected icons, default `#ffb400` */
                                                emptyStarColor="gray"
                                            /></Text>
                                        </HStack>

                                    </VStack>
                                </Stack>
                            </HStack>

                            <Text w={230} fontSize={14}>Pharetra in netus non dolor,vitae molestie at. Fringilla vhicula mattis quis lectus adipiscing ut.</Text>

                        </VStack>

                        <VStack justifyContent="end" pl={293}>
                            <IconButton bg={"#B2C779"} _hover={{ bg: "#6B774B" }} color="white" size="md" fontSize={30} aria-label='See more' icon={<FiArrowRight />} />
                        </VStack>

                    </VStack>
                </GridItem>
                <GridItem colSpan={colSpan}>
                    <VStack>
                        <VStack rounded="lg" bg="white" w={333} alignItems="start" pl={2} pt={5} pb={11} mb={-10} pr={10}>

                            <HStack alignItems="start">
                                <AspectRatio ratio={1} w={24}>
                                    <Image src="images/Avatar.jpg" alt="photo"></Image>
                                </AspectRatio>

                                <Stack spacing={0} w="full" direction="row" justifyContent="space-between" alignItems="start">
                                    <VStack w="full" spacing={0} alignItems="start">
                                        <Heading fontSize={15}>Ивана Јовановска</Heading>
                                        <Text fontSize={15}>Читач</Text>
                                        <HStack style={{
                                            marginTop: -10,
                                        }}><Text fontSize={13}>Rating: </Text>
                                            <Text pt={2} fontSize={17}><StarRatingComponent
                                                name="rate1"
                                                starCount={5}
                                                value={2}
                                                starColor="black" /* color of selected icons, default `#ffb400` */
                                                emptyStarColor="gray"
                                            /></Text>
                                        </HStack>

                                    </VStack>
                                </Stack>
                            </HStack>

                            <Text w={230} fontSize={14}>Pharetra in netus non dolor,vitae molestie at. Fringilla vhicula mattis quis lectus adipiscing ut.</Text>

                        </VStack>

                        <VStack justifyContent="end" pl={293}>
                            <IconButton bg={"#B2C779"} _hover={{ bg: "#6B774B" }} color="white" size="md" fontSize={30} aria-label='See more' icon={<FiArrowRight />} />
                        </VStack>

                    </VStack>
                </GridItem>

                <GridItem colSpan={colSpan}>
                    <VStack>
                        <VStack rounded="lg" bg="white" w={333} alignItems="start" pl={2} pt={5} pb={11} mb={-10} pr={10}>

                            <HStack alignItems="start">
                                <AspectRatio ratio={1} w={24}>
                                    <Image src="images/Avatar.jpg" alt="photo"></Image>
                                </AspectRatio>

                                <Stack spacing={0} w="full" direction="row" justifyContent="space-between" alignItems="start">
                                    <VStack w="full" spacing={0} alignItems="start">
                                        <Heading fontSize={15}>Ивана Јовановска</Heading>
                                        <Text fontSize={15}>Читач</Text>
                                        <HStack style={{
                                            marginTop: -10,
                                        }}><Text fontSize={13}>Rating: </Text>
                                            <Text pt={2} fontSize={17}><StarRatingComponent
                                                name="rate1"
                                                starCount={5}
                                                value={2}
                                                starColor="black" /* color of selected icons, default `#ffb400` */
                                                emptyStarColor="gray"
                                            /></Text>
                                        </HStack>

                                    </VStack>
                                </Stack>
                            </HStack>

                            <Text w={230} fontSize={14}>Pharetra in netus non dolor,vitae molestie at. Fringilla vhicula mattis quis lectus adipiscing ut.</Text>

                        </VStack>

                        <VStack justifyContent="end" pl={293}>
                            <IconButton bg={"#B2C779"} _hover={{ bg: "#6B774B" }} color="white" size="md" fontSize={30} aria-label='See more' icon={<FiArrowRight />} />
                        </VStack>

                    </VStack>
                </GridItem>

                <GridItem colSpan={colSpan}>
                    <VStack >
                        <VStack rounded="lg" bg="white" w={333} alignItems="start" pl={2} pt={5} pb={11} mb={-10} pr={10}>

                            <HStack alignItems="start">
                                <AspectRatio ratio={1} w={24}>
                                    <Image src="images/Avatar.jpg" alt="photo"></Image>
                                </AspectRatio>

                                <Stack spacing={0} w="full" direction="row" justifyContent="space-between" alignItems="start">
                                    <VStack w="full" spacing={0} alignItems="start">
                                        <Heading fontSize={15}>Ивана Јовановска</Heading>
                                        <Text fontSize={15}>Читач</Text>
                                        <HStack style={{
                                            marginTop: -10,
                                        }}><Text fontSize={13}>Rating: </Text>
                                            <Text pt={2} fontSize={17}><StarRatingComponent
                                                name="rate1"
                                                starCount={5}
                                                value={2}
                                                starColor="black" /* color of selected icons, default `#ffb400` */
                                                emptyStarColor="gray"
                                            /></Text>
                                        </HStack>

                                    </VStack>
                                </Stack>
                            </HStack>

                            <Text w={230} fontSize={14}>Pharetra in netus non dolor,vitae molestie at. Fringilla vhicula mattis quis lectus adipiscing ut.</Text>

                        </VStack>

                        <VStack justifyContent="end" pl={293}>
                            <IconButton bg={"#B2C779"} _hover={{ bg: "#6B774B" }} color="white" size="md" fontSize={30} aria-label='See more' icon={<FiArrowRight />} />
                        </VStack>

                    </VStack>
                </GridItem>



            </SimpleGrid>
            <SimpleGrid column={2} columnGap={3} rowGap={10} w="full">
                <GridItem colSpan={colSpan}>
                    <Container>
                        <VStack pl={0}>
                            <IconButton bg={"#B2C779"} _hover={{ bg: "#6B774B" }} color="white" size="md" fontSize={40} aria-label='See more' icon={<ArrowDownIcon />} />
                            <Text>Види повеќе</Text>
                        </VStack>
                    </Container>

                </GridItem>
            </SimpleGrid>


        </VStack>


    )
}

export default ProfilesList;