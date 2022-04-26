import { extendTheme, useColorMode, useColorModeValue, Image, Icon, Link, Stack, Heading, VStack, Text, HStack, AspectRatio, Divider, IconButton, Button, Container } from "@chakra-ui/react";
import { FiEdit } from "react-icons/fi";
import { FaTwitter, FaDribbble, FaLinkedin } from "react-icons/fa";
import avatar from '../../public/images/Avatar.png';

const PomosnikCard = () => {

    const { toggleColorMode } = useColorMode();
    const bgColor = useColorModeValue("gray.50", "whiteAplha.50")
    const secondaryTextColor = useColorModeValue("gray.600", "gray.4000")
    return (
        <VStack w={400} h={800} p={10} spacing={15} alignItems="center" bg={bgColor} borderRadius={10} >

            <VStack spacing={3} p={5} alignItems="center">
                <AspectRatio ratio={1} w={24}>
                    <Image src="../../public/images/Avatar.png" alt="profile-photo" h={300} w={300}/>
                </AspectRatio>

                <Heading size="md">Ивана Јовановска</Heading>
                <Text color="#6941C6">Founder & CEO</Text>
                <Text textAlign="center">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>

                <HStack justifyContent="space-between">
                    <Link href="#">
                        <FaTwitter />
                    </Link>
                    <Link href="#">
                        <FaLinkedin />
                    </Link>
                    <Link href="#">
                        <FaDribbble />
                    </Link>
                </HStack>

                <Divider size="lg" color="black" mt={10}></Divider>

                <Button w="full" h={70} size="lg" bg="#F2F2F2" color="black">Додади Услуга</Button>

                <Container w="full" p={5} bg="#F2F2F2" borderRadius={5} >
                    <VStack alignItems="flex-start">
                        <VStack>
                            <Heading  size="xs" >Твои поставки</Heading>
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
                    <VStack alignItems="flex-end" p={2}>
                        <Button bg="#E56262" color="white" _hover={{ bg:"red.500"}} leftIcon={<Icon as={FiEdit}  />}>Измени</Button>
                    </VStack>
                </Container>

            </VStack>


        </VStack>
    )
}

export default PomosnikCard;