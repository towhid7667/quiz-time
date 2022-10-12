import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage/HomePage';
import NotFoundPage from './components/NotFoundPage/NotFoundPage';
import NavigationBar from './components/NavigationBar/NavigationBar';
import QuizPage from './components/QuizPage/QuizPage';
import StatisticPage from './components/StatisticPage/StatisticPage';
import BlogPage from './components/BlogPage/BlogPage';

function App() {
  return (
    <div className="App">

      <NavigationBar />

      <Routes>

        <Route path="/" element={<HomePage />} />
        <Route path="/topic" element={<HomePage />} />
        <Route path="/quiz/:id" element={<QuizPage />} />
        <Route path="/statistic" element={<StatisticPage />} />
        <Route path="/blog" element={<BlogPage />} />

        <Route path="*" element={<NotFoundPage />} />
      </Routes>


    </div>
  );
}

export default App;
