import Topbar from './component/topbar.component';
import Navigation from './component/navigation.component';
import MainPage from './component/mainpage.component';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <div className="App">
      <header className = "App-header">
        {/* routing component */}
        <Topbar></Topbar>
        <Navigation></Navigation>
        <MainPage></MainPage>
      </header>
    </div>
  );
}

export default App;
