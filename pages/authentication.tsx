import {
  Box,
  Button,
  Checkbox,
  Container,
  Divider,
  FormControl,
  FormLabel,
  Heading,
  HStack,
  Input,
  Stack,
  Text,
  useBreakpointValue,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import * as React from "react";
import { Logo } from "../src/components/Logo";
import { OAuthButtonGroup } from "../src/components/OAuthButtonGroup";
import { PasswordField } from "../src/components/PasswordField";

const App = () => {
  const { toggleColorMode } = useColorMode();
  const bgColor = useColorModeValue("gray.50", "whiteAlpha.50");
  const secondaryTextColor = useColorModeValue("gray.600", "gray.400");
  return (
    <Container
      maxW='lg'
      py={{ base: "12", md: "24" }}
      px={{ base: "0", sm: "8" }}
      bg={bgColor}
    >
      <Stack spacing='8'>
        <Stack spacing='6'>
          <Logo />
          <Stack spacing={{ base: "2", md: "3" }} textAlign='center'>
            <Heading size={useBreakpointValue({ base: "xs", md: "sm" })}>
              Log in to your account
            </Heading>
            <HStack spacing='1' justify='center'>
              <Text color={secondaryTextColor}>
                Don&rsquo;t have an account?
              </Text>
              <Button variant='link' colorScheme='blue'>
                Sign up
              </Button>
            </HStack>
            <HStack spacing='1' justify='center'>
              <Text color={secondaryTextColor}>
                If the price is too hard to read on your eyes,{" "}
                <Button
                  onClick={toggleColorMode}
                  variant='link'
                  colorScheme='black'
                >
                  {" "}
                  try changing the theme
                </Button>
              </Text>
            </HStack>
          </Stack>
        </Stack>
        <Box
          py={{ base: "0", sm: "8" }}
          px={{ base: "4", sm: "10" }}
          bg={useBreakpointValue({ base: "transparent", sm: "bg-surface" })}
          boxShadow={{ base: "none", sm: useColorModeValue("md", "md-dark") }}
          borderRadius={{ base: "none", sm: "xl" }}
        >
          <Stack spacing='6'>
            <Stack spacing='5'>
              <FormControl>
                <FormLabel htmlFor='email'>Email</FormLabel>
                <Input id='email' type='email' />
              </FormControl>
              <PasswordField />
            </Stack>
            <HStack justify='space-between'>
              <Checkbox defaultIsChecked>Remember me</Checkbox>
              <Button variant='link' colorScheme='blue' size='sm'>
                Forgot password?
              </Button>
            </HStack>
            <Stack spacing='6'>
              <Button variant='primary'>Sign in</Button>
              <HStack>
                <Divider />
                <Text fontSize='sm' whiteSpace='nowrap' color='muted'>
                  or continue with
                </Text>
                <Divider />
              </HStack>
              <OAuthButtonGroup />
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Container>
  );
};

export default App;
