import { useState, useEffect } from 'react';
import {
  Box,
  Button,
  Container,
  Heading,
  Text,
  VStack,
  HStack,
  useToast,
} from '@chakra-ui/react';
import axios from 'axios';
import Confetti from 'react-confetti';

function Game() {
  const [destination, setDestination] = useState(null);
  const [options, setOptions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showConfetti, setShowConfetti] = useState(false);
  const [score, setScore] = useState({ correct: 0, incorrect: 0 });
  const toast = useToast();

  const fetchDestination = async () => {
    setLoading(true);
    try {
      const { data } = await axios.get('http://localhost:5000/api/destinations/random');
      setDestination(data);
      // In a real app, you'd fetch multiple options from the backend
      setOptions(['Paris', 'Tokyo', 'New York', 'Rome']); 
    } catch (err) {
      toast({
        title: 'Error fetching destination',
        status: 'error',
        duration: 3000,
      });
    }
    setLoading(false);
  };

  const handleAnswer = async (answer) => {
    try {
      const { data } = await axios.post('http://localhost:5000/api/destinations/verify', {
        destinationId: destination.id,
        answer,
      });

      if (data.correct) {
        setShowConfetti(true);
        setScore(prev => ({ ...prev, correct: prev.correct + 1 }));
      } else {
        setScore(prev => ({ ...prev, incorrect: prev.incorrect + 1 }));
      }

      // Update user score
      const username = localStorage.getItem('username');
      await axios.patch(`http://localhost:5000/api/users/${username}/score`, {
        correct: data.correct,
      });

      toast({
        title: data.correct ? '🎉 Correct!' : '😢 Wrong answer',
        description: data.funFact,
        status: data.correct ? 'success' : 'error',
        duration: 4000,
      });

      setTimeout(() => {
        setShowConfetti(false);
        fetchDestination();
      }, 3000);
    } catch (err) {
      toast({
        title: 'Error verifying answer',
        status: 'error',
        duration: 3000,
      });
    }
  };

  useEffect(() => {
    fetchDestination();
  }, []);

  if (loading) {
    return <Container centerContent>Loading...</Container>;
  }

  return (
    <Container centerContent py={10}>
      {showConfetti && <Confetti />}
      <VStack spacing={6} align="center">
        <HStack>
          <Text>✅ {score.correct}</Text>
          <Text>❌ {score.incorrect}</Text>
        </HStack>
        
        <Box>
          {destination.clues.map((clue, index) => (
            <Text key={index} fontSize="xl" mb={4}>
              {clue}
            </Text>
          ))}
        </Box>

        <VStack spacing={4} w="100%">
          {options.map((option) => (
            <Button
              key={option}
              onClick={() => handleAnswer(option)}
              w="100%"
              size="lg"
            >
              {option}
            </Button>
          ))}
        </VStack>

        <Button
          onClick={() => fetchDestination()}
          colorScheme="blue"
          variant="outline"
        >
          Skip
        </Button>
      </VStack>
    </Container>
  );
}

export default Game; 