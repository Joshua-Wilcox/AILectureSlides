const LectureCard = ({ lecture }) => {
    return (
        <div className="lecture-card">
            <div className="lecture-header">
                <span className="lecture-date">{lecture.date}</span>
                <h2 className="lecture-title">{lecture.title}</h2>
            </div>

            {/* Description removed as per user request */}

            {lecture.readings.length > 0 && (
                <div className="lecture-readings">
                    <strong>Readings:</strong>
                    <ul>
                        {lecture.readings.map((reading, index) => (
                            <li key={index}>
                                {reading.startsWith('http') ? (
                                    <a href={reading} target="_blank" rel="noopener noreferrer">
                                        {reading.split('/').pop()}
                                    </a>
                                ) : (
                                    reading
                                )}
                            </li>
                        ))}
                    </ul>
                </div>
            )}

            <div className="lecture-actions">
                <button
                    className="btn-primary"
                    disabled={!lecture.pdfLink}
                    onClick={() => lecture.pdfLink && window.open(lecture.pdfLink, '_blank')}
                >
                    {lecture.pdfLink ? 'View Slides (PDF)' : 'Slides Unavailable'}
                </button>
            </div>
        </div>
    );
};

export default LectureCard;
