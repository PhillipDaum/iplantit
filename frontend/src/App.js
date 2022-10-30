import './App.css';
import InfoPage from './pages/infoPage';
import Garden from './Garden'
import UserHomePage from './pages/userHomePage';
import { AddGardenPage1, AddGardenPage2 } from './pages/addGardenPage';
import GardenEditorPage from './pages/gardenEditorPage';
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <header className='App-header'>
        <div className="App">
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<InfoPage />} />
              <Route path="/user-home" element={<UserHomePage />} />
              <Route path="/add-garden-1" element={<AddGardenPage1 />} />
              <Route path="/add-garden-2" element={<AddGardenPage2 />} />
              <Route path="/garden-editor" element={<GardenEditorPage />} />
            </Routes>
          </BrowserRouter>
        </div>
      </header>

    </div>
  );
}

export default App;
