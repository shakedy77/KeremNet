import { HashRouter as Router, Routes, Route } from 'react-router-dom';

//pages imports
import HomePage from './Components/applicationLayout/Pages/HomePage/HomePage';
import PostPage from './Components/applicationLayout/Pages/PostPage/PostPage';
import UploadPage from './Components/applicationLayout/Pages/UploadPage/UploadPage';
import GrapePage from './Components/applicationLayout/Pages/GrapePage/GrapePage';

import Layout from './Components/applicationLayout/Layout/Layout';
import './App.css';



function App() {
  return (
    <div className="App">
          <Router>
            <Routes>
              <Route element={<Layout/>}>
                <Route path="/" element={<HomePage></HomePage>}/>
                <Route path="/PostPage" element={<PostPage></PostPage>}/>
                <Route path='/UploadPage' element={<UploadPage></UploadPage>}/>
                <Route path="/GrapePage" element={<GrapePage></GrapePage>}/>
              </Route>
            </Routes>
          </Router>
    </div>
  );
}

export default App;
