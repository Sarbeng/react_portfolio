import { Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.
  return (
    <VStack
      justifyContent="left"
      alignItems="left"
      backgroundColor="white"
      color="black"
      borderRadius="16"
    >
      <Image src={imageSrc} alt={title}  borderRadius="16"/>
      <VStack  justifyContent="left"
      alignItems="left" padding="4">
        <Heading size="md">{title}</Heading>
        <Text color="gray.600">{description}</Text>
        <HStack fontWeight="semibold">
          <a>
            See more <FontAwesomeIcon icon={faArrowRight} size="1x" />
          </a>
        </HStack>
      </VStack>
    </VStack>
  );
};

export default Card;
