import { VStack, Img } from "@chakra-ui/react";
import Image from "next/image";

import { HomeCarousel } from "./carousel";
import MenuBar from "./menu-bar";

const HomeScreen = () => {
  return (
    <>
      <VStack
        h="full"
        w="full"
        justify="center"
        align="stretch"
        bgImage="/images/test-image.jpeg"
        objectFit="fill"
      >
        <MenuBar />
        <HomeCarousel />
      </VStack>
    </>
  );
};

export default HomeScreen;
