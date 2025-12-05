import { useState, useEffect } from 'react';

const NotesArea = ({ lectureId }) => {
    const [notes, setNotes] = useState('');

    useEffect(() => {
        const savedNotes = localStorage.getItem(`lecture-notes-${lectureId}`);
        if (savedNotes) {
            setNotes(savedNotes);
        }
    }, [lectureId]);

    const handleChange = (e) => {
        const newNotes = e.target.value;
        setNotes(newNotes);
        localStorage.setItem(`lecture-notes-${lectureId}`, newNotes);
    };

    return (
        <div className="notes-area">
            <textarea
                value={notes}
                onChange={handleChange}
                placeholder="Type your notes here..."
                className="notes-textarea"
            />
        </div>
    );
};

export default NotesArea;
