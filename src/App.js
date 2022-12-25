import './styles/app.scss';
import BookAppoinment from './pages/BookAppoinment';
import Appoinments from './pages/Appoinments';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<BookAppoinment />} />
        <Route path='/appointments' element={<Appoinments />} />
      </Routes>
    </Router>
  );
}

export default App;
