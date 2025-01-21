import { Box, Button, Heading, Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

export default function NotFoundPage() {
  return (
    // <Box h="100vh">
    <Box h="100vh" display="flex" alignItems="center" flexDir="column" justifyContent="center" textAlign="center" py={10} px={6}>
      <Heading
        display="inline-block"
        as="h2"
        size="2xl"
        bgGradient="linear(to-r, brand.400, brand.600)"
        backgroundClip="text">
        404
      </Heading>
      <Text fontSize="18px" mt={3} mb={2}>
        Page Not Found
      </Text>
      <Text color={'gray.500'} mb={6}>
        The page you're looking for does not seem to exist
      </Text>

      <Button
        as={Link}
        to="/home"
        colorScheme="brand"
        bgGradient="linear(to-r, brand.400, brand.500, brand.600)"
        color="white"
        variant="solid">
        Go to Home
      </Button>
    </Box>
    // </Box>
  );
}