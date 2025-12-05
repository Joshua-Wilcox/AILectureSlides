import React from 'react';

function AggregatedNotes() {
    // Assuming the file will be placed in public/aggregated-notes.pdf
    const pdfUrl = "/aggregated-notes.pdf#pagemode=bookmarks";

    return (
        <section className="aggregated-notes-section">
            <h2 className="section-title">Aggregated Notes</h2>
            <p className="section-description">
                These are all my notes for AI, they are not great and I missed a few lectures! - but feel free to have a look lol.
            </p>

            <div className="pdf-container">
                <iframe
                    src={pdfUrl}
                    title="Aggregated Lecture Notes"
                    width="100%"
                    height="600px"
                    style={{ border: 'none', borderRadius: '8px', backgroundColor: '#1e293b' }}
                >
                    <p>Your browser does not support PDFs.
                        <a href={pdfUrl}>Download the PDF</a>.</p>
                </iframe>
            </div>

            <div className="download-container" style={{ marginTop: '1rem', textAlign: 'center' }}>
                <a href={pdfUrl} download className="download-button" style={{
                    display: 'inline-block',
                    padding: '0.75rem 1.5rem',
                    backgroundColor: '#3b82f6',
                    color: '#ffffff',
                    textDecoration: 'none',
                    borderRadius: '6px',
                    fontWeight: 'bold',
                    transition: 'background-color 0.2s'
                }}>
                    Download PDF
                </a>
            </div>
        </section>
    );
}

export default AggregatedNotes;
