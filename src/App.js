import './styles/styles.scss'
import MainNavBar from './components/MainNavBar';
import LoginBar from './components/LoginBar';
import Banner from './components/Banner'
import BookingBox from './components/BookingBox'


function App() {
  return (
    <div className="App">
      <MainNavBar />
      <LoginBar />
      <Banner />
      <BookingBox />
    </div>
  );
}

export default App;
