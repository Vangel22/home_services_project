import { VStack } from "@chakra-ui/react";
import Image from "next/image";

import { HomeCarousel } from "./carousel";
import MenuBar from "./menu-bar";

const HomeScreen = () => {
  return (
    <>
      {/* <Image
        src="/images/test-image.jpeg"
        layout="fill"
        objectFit="fill"
        alt="No photo provided"
      /> */}
      <VStack
        h="100vh"
        w="full"
        justify="center"
        bgImage="/images/test-image.jpeg"
      >
        <MenuBar />
        <HomeCarousel />
      </VStack>
    </>
  );
};

export default HomeScreen;
