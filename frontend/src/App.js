import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Welcome from './components/Welcome';
import Game from './components/Game';
import Challenge from './components/Challenge';

function App() {
  return (
    <ChakraProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/play" element={<Game />} />
          <Route path="/challenge/:username" element={<Challenge />} />
        </Routes>
      </Router>
    </ChakraProvider>
  );
}

export default App; 