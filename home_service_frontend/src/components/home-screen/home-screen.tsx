import Image from "next/image";
import { VStack } from "@chakra-ui/react";

import { HomeCarousel } from "./carousel";
import MenuBar from "./menu-bar";

const HomeScreen = () => {
  return (
    // <Image src="/images/test-image.jpeg" />
    <VStack h="100vh" w="full" justify="center">
      <MenuBar />
      <HomeCarousel />
    </VStack>
  );
};

export default HomeScreen;
