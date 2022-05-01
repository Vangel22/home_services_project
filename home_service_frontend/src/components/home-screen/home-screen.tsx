import { VStack, Img } from "@chakra-ui/react";
import Image from "next/image";

import { HomeCarousel } from "./carousel";
import MenuBar from "./menu-bar";

const HomeScreen = () => {
  return (
    <>
      {/* <Image
        src="/images/test-image.jpeg"
        layout="fill"
        objectFit="cover"
        alt="No photo provided"
        
        //objectPosition="relative"
      /> */}
      <VStack
        h="100vh"
        w="full"
        justify="center"
        align='stretch'
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
