import { extendTheme, useColorMode, useColorModeValue, Image, Icon, Link, Stack, Heading, VStack, Text, HStack, AspectRatio, Divider, IconButton, Button, Container } from "@chakra-ui/react";
import { FiEdit, FiLinkedin, FiTwitter } from "react-icons/fi";

const PomosnikCard = () => {

    const { toggleColorMode } = useColorMode();
    const bgColor = useColorModeValue("gray.50", "whiteAplha.50")
    const secondaryTextColor = useColorModeValue("gray.600", "gray.4000")
    return (
        <VStack w={400} h="full" p={10} spacing={10} alignItems="center" bg={bgColor}>

            <VStack spacing={3} alignItems="center">
                <AspectRatio ratio={1} w={24}>
                    <Image src="public/img.jpg" alt="profile-photo"></Image>
                </AspectRatio>

                <Heading size="md">Ивана Јовановска</Heading>
                <Text>Founder  CEO</Text>
                <Text textAlign="center">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>

                <HStack justifyContent="space-between">
                    <Link href="#">
                        <FiTwitter />
                    </Link>
                    <Link href="#">
                        <FiLinkedin />
                    </Link>
                    <Link href="#">
                        <FiLinkedin />
                    </Link>
                </HStack>

                <Divider size="lg" color="blue"></Divider>

                <Button w="full" h={70} size="lg" colorScheme="green">Додади Услуга</Button>

                <Container w="full" p={5} bg="green.300" >
                    <VStack alignItems="flex-start">
                        <VStack>
                            <Heading size="xs">Твои постави</Heading>
                        </VStack>
                        <VStack textAlign="start">
                            <HStack>
                                <Heading size="xs" >Цена:</Heading>
                                <Text fontSize="sm">По договор</Text>
                            </HStack>
                        </VStack>

                        <VStack>
                            <HStack>
                                <Heading size="xs">Достапност:</Heading>
                                <Text fontSize="sm">09:00ч до 21:00ч</Text>
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
                        <Button leftIcon={<Icon as={FiEdit} />}>Измени</Button>
                    </VStack>
                </Container>

            </VStack>


        </VStack>
    )
}

export default PomosnikCard;