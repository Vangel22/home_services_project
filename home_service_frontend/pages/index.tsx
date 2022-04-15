import { VStack, Text, HStack, Button } from "@chakra-ui/react";
import type { NextPage } from "next";
import Image from "next/image";
import CategoryCard from "../src/components/category-card";
import MenuBar from "../src/components/menu-bar";

const Home: NextPage = () => {
  return (
    <>
      {/* <Image
        src="/home-image.jpeg"
        alt="No photo provided"
        layout="fill"
        objectFit="cover"
      /> */}
      <VStack h="full" w="full" justify="center">
        <MenuBar />
        <Text fontSize="4xl">
          Олесни го твоето домаќинство со нашите услуги
        </Text>
        <Text>Добредојвте на нашата веб страница</Text>
        <HStack>
          <Button colorScheme="green">Најди помошник</Button>
          <Button colorScheme="green">Пријави се</Button>
        </HStack>
        <CategoryCard service_name={"Hemicar"} />
      </VStack>
    </>
  );
};

export default Home;
