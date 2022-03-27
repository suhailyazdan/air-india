import './styles/styles.scss'
import MainNavBar from './components/MainNavBar';
import LoginBar from './components/LoginBar';
import Banner from './components/Banner'
import BookingBox from './components/BookingBox';
import Slider from './components/Slider';
import Footer from './components/Footer';
import InfoSection from './components/InfoSection';
import ExtraInfo from './components/ExtraInfo';

function App() {
  return (
    <div className="App">
      <MainNavBar />
      <LoginBar />
      <Banner />
      <BookingBox />
      <Slider />
      <InfoSection />
      <ExtraInfo />
      <Footer />
    </div>
  );
}

export default App;
