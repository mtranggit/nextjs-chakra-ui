import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

import {
  Box,
  Container,
  Text,
  Wrap,
  WrapItem,
  Input,
  IconButton,
  InputRightElement,
  InputGroup,
  useToast,
} from "@chakra-ui/react";
import { getCuratedPhotos, getQueryPhotos } from "../src/lib/api";
import { useState } from "react";
import { BsSearch } from "react-icons/bs";

export default function App({ data }) {
  const [photos, setPhotos] = useState(data);
  const [searchTerm, setSearchTerm] = useState(null);
  const toast = useToast();

  const handleSubmit = async (e) => {
    await e.preventDefault();
    if (searchTerm.length === 0) {
      toast({
        title: "Error",
        description: "Please provide a search term",
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "top",
      });
      return;
    }
    const result = await getQueryPhotos(searchTerm);
    await setPhotos(result);
    await setSearchTerm("");
  };

  return (
    <div>
      <Head>
        <title>Nextjs Image Gallery</title>
        <link rel='icon' href='/favico.ico' />
      </Head>
      <Box overflow='hidden' bg='purple.100' minH='100vh'>
        <Container>
          <Text
            color='pink.800'
            fontWeight='semibold'
            mb='1rem'
            textAlign='center'
            textDecoration='underline'
            fontSize={["4xl", "4xl", "5xl", "5xl"]}
          >
            NextJS Image Gallery
          </Text>
          <form onSubmit={handleSubmit}>
            <InputGroup pb='1rem'>
              <Input
                placeholder='Search term'
                variant='ghost'
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <InputRightElement>
                <IconButton
                  aria-label='Search'
                  icon={<BsSearch />}
                  onClick={handleSubmit}
                  bg='pink.400'
                  color='white'
                />
              </InputRightElement>
            </InputGroup>
          </form>
        </Container>
        <Wrap px='1rem' spacing={4} justify='center'>
          {photos.map((photo) => (
            <WrapItem
              key={photo.id}
              boxShadow='base'
              rounded='20px'
              overflow='hidden'
              bg='white'
              lineHeight='0'
              _hover={{ boxShadow: "dark-lg" }}
            >
              <Link href={`photos/${photo.id}`}>
                <a>
                  <Image
                    src={photo.src.portrait}
                    width={400}
                    height={600}
                    alt={photo.alt}
                  />
                </a>
              </Link>
            </WrapItem>
          ))}
        </Wrap>
      </Box>
    </div>
  );
}

export async function getServerSideProps() {
  const data = await getCuratedPhotos();
  console.log("data", data);
  return {
    props: {
      data,
    },
  };
}
