import './App.scss';
import RoutesContainer from './Routes';

import { useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';
// component 
import Annouencement from './components/compound/Annouence';
import Navbar from './components/compound/Navbar';
import MuiDrawer from './components/compound/Drawer';
import NewsLetter from './components/compound/NewsLetters';
import Footer from './components/compound/Footer';


const App = () => {

  const theme = useTheme();
  const isTablet = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <div className="App">
      <Annouencement />
      {isTablet ? (
        <MuiDrawer />
      ) : (
        <Navbar />
      )}
      <RoutesContainer />
      <NewsLetter />
      <Footer />
    </div>
  );
}

export default App;
