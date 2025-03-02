import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  Button,
  useToast,
} from '@chakra-ui/react';
import axios from 'axios';
import Game from './Game';

function Challenge() {
  const { username } = useParams();
  const [inviter, setInviter] = useState(null);
  const [showGame, setShowGame] = useState(false);
  const toast = useToast();

  useEffect(() => {
    const fetchInviterDetails = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/users/${username}`);
        setInviter(response.data);
      } catch (err) {
        toast({
          title: 'Error fetching user details',
          status: 'error',
          duration: 3000,
        });
      }
    };

    if (username) {
      fetchInviterDetails();
    }
  }, [username, toast]);

  if (!inviter && !showGame) {
    return <Container centerContent>Loading...</Container>;
  }

  if (!showGame) {
    return (
      <Container centerContent py={10}>
        <VStack spacing={6}>
          <Heading>Challenge from {username}!</Heading>
          <Box textAlign="center">
            <Text fontSize="xl">Current Score:</Text>
            <Text fontSize="2xl">✅ {inviter?.score?.correct || 0}</Text>
            <Text fontSize="2xl">❌ {inviter?.score?.incorrect || 0}</Text>
          </Box>
          <Button
            colorScheme="blue"
            size="lg"
            onClick={() => setShowGame(true)}
          >
            Accept Challenge
          </Button>
        </VStack>
      </Container>
    );
  }

  return <Game />;
}

export default Challenge; 