import './App.css';
import MainPage from './pages/MainPage/MainPage';
import ScrollToTop from './utils/ScrollToTop';
function App() {
  return (
    <div className="App">
      <ScrollToTop/>
      <MainPage/>
    </div>
  );
}

export default App;
