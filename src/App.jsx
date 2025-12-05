import { lectures } from './data';
import LectureCard from './components/LectureCard';

function App() {
  return (
    <div className="app-container">
      <header className="app-header">
        <h1>Lecture Slide Hub</h1>
        <p className="course-code">COMP2321: Artificial Intelligence</p>
      </header>

      <main className="timeline">
        {lectures.map(lecture => (
          <LectureCard key={lecture.id} lecture={lecture} />
        ))}
      </main>

      <footer className="app-footer">
        <p>&copy; {new Date().getFullYear()} Lecture Slide Hub. All notes are stored locally.</p>
      </footer>
    </div>
  );
}

export default App;
