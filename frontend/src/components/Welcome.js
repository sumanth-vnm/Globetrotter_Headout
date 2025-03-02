import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Box,
  Button,
  Container,
  Heading,
  Input,
  Text,
  VStack,
} from '@chakra-ui/react';
import axios from 'axios';

function Welcome() {
  const [username, setUsername] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/users', { username });
      localStorage.setItem('username', username);
      navigate('/play');
    } catch (err) {
      setError('Username already taken. Please choose another.');
    }
  };

  return (
    <Container centerContent py={10}>
      <VStack spacing={6} align="center">
        <Heading size="2xl">🌎 Globetrotter</Heading>
        <Text fontSize="xl">Test your knowledge of world destinations!</Text>
        
        <Box as="form" onSubmit={handleSubmit} w="100%">
          <VStack spacing={4}>
            <Input
              placeholder="Enter your username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              size="lg"
            />
            {error && <Text color="red.500">{error}</Text>}
            <Button
              colorScheme="blue"
              size="lg"
              type="submit"
              w="100%"
              isDisabled={!username}
            >
              Start Playing
            </Button>
          </VStack>
        </Box>
      </VStack>
    </Container>
  );
}

export default Welcome; 