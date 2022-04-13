import {
  AspectRatio,
  Button,
  Divider,
  Heading,
  HStack,
  Image,
  Stack,
  Text,
  useColorMode,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";

export function Cart() {
  const { toggleColorMode } = useColorMode();
  const bgColor = useColorModeValue("gray.50", "whiteAlpha.50");
  const secondaryTextColor = useColorModeValue("gray.600", "gray.400");
  return (
    <VStack
      w='full'
      h='full'
      p={10}
      spacing={10}
      alignItems='flex-start'
      bg={bgColor}
    >
      <VStack alignItems='flex-start' spacing={3}>
        <Heading size='2xl'>Your cart</Heading>
        <Text>
          If the price is too hard to read on your eyes,{" "}
          <Button onClick={toggleColorMode} variant='link' colorScheme='black'>
            {" "}
            try changing the theme
          </Button>
        </Text>
      </VStack>
      <HStack>
        <AspectRatio ratio={1} w={24}>
          <Image src='/images/skateboard.jpg' alt='Skateboard' />
        </AspectRatio>
        <Stack
          spacing={0}
          w='full'
          direction='row'
          justifyContent='space-between'
          alignItems='center'
        >
          <VStack w='full' spacing={0} alignItems='flex-start'>
            <Heading size='md'>Penny board</Heading>
            <Text color={secondaryTextColor}>PNYCOMP27541</Text>
          </VStack>
          <Heading size='sm' textAlign='end'>
            $119.00
          </Heading>
        </Stack>
      </HStack>
      <VStack spacing={4} alignItems='stretch' w='full'>
        <HStack justifyContent='space-between'>
          <Text color={secondaryTextColor}>Subtotal</Text>
          <Heading size='sm'>$119.00</Heading>
        </HStack>
        <HStack justifyContent='space-between'>
          <Text color={secondaryTextColor}>Shipping</Text>
          <Heading size='sm'>$19.99</Heading>
        </HStack>
        <HStack justifyContent='space-between'>
          <Text color={secondaryTextColor}>Taxes (GST)</Text>
          <Heading size='sm'>$11.9</Heading>
        </HStack>
        <Divider />
        <HStack justifyContent='space-between' w='full'>
          <Text color={secondaryTextColor}>Total</Text>
          <Heading size='sm'>$162.79</Heading>
        </HStack>
      </VStack>
    </VStack>
  );
}
