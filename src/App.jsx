import { lectures } from './data';
import LectureCard from './components/LectureCard';
import AggregatedNotes from './components/AggregatedNotes';

function App() {
  return (
    <div className="app-container">
      <header className="app-header">
        <h1>AI Lecture Slides</h1>
        <p className="course-code">For COMP2321: Artificial Intelligence</p>
      </header>

      <main className="timeline">
        {lectures.map(lecture => (
          <LectureCard key={lecture.id} lecture={lecture} />
        ))}

        <div style={{ marginTop: '4rem', marginBottom: '2rem' }}>
          <AggregatedNotes />
        </div>
      </main>

      <footer className="app-footer">
        <p>&copy; {new Date().getFullYear()} Josh Wilcox</p>
      </footer>
    </div>
  );
}

export default App;
