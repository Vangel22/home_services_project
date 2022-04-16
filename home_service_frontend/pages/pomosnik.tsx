import { Container, Button, Flex, VStack } from '@chakra-ui/react'
import DetailsPomosnik from '../src/components/details-pomosnik';
import PomosnikCard from '../src/components/pomosnik-card';


const Pomosnik = () => {
    return (
        <Container maxW="container.xl" p={0}>
            <Flex h={{ base: 'auto', md: '100vh' }} py={[0, 10, 20]} direction={{ base: 'column-reverse', md: 'row' }}>
                <DetailsPomosnik></DetailsPomosnik>

                <VStack h="full" p={10} pt={160} spacing={10} alignItems="flex-start">
                    <PomosnikCard></PomosnikCard>
                </VStack>


            </Flex>
        </Container>
    );
}


export default Pomosnik;