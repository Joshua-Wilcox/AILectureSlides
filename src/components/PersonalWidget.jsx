import React from 'react';

const PersonalWidget = () => {
    const containerStyle = {
        position: 'fixed',
        bottom: '2rem',
        right: '2rem',
        zIndex: 1000,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-end',
        gap: '0.75rem',
    };

    const linkStyle = {
        backgroundColor: 'rgba(15, 23, 42, 0.8)', // Dark background with transparency
        color: '#38bdf8', // Accent blue
        padding: '0.75rem 1.25rem',
        borderRadius: '9999px',
        border: '1px solid #334155',
        backdropFilter: 'blur(8px)',
        textDecoration: 'none',
        fontWeight: '600',
        fontSize: '0.9rem',
        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.3)',
        transition: 'all 0.2s ease',
        display: 'flex',
        alignItems: 'center',
        gap: '0.5rem',
    };

    const handleMouseEnter = (e) => {
        e.currentTarget.style.transform = 'translateY(-2px)';
        e.currentTarget.style.backgroundColor = 'rgba(15, 23, 42, 0.95)';
        e.currentTarget.style.boxShadow = '0 10px 15px -3px rgba(0, 0, 0, 0.4)';
        e.currentTarget.style.borderColor = '#0ea5e9';
    };

    const handleMouseLeave = (e) => {
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.backgroundColor = 'rgba(15, 23, 42, 0.8)';
        e.currentTarget.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.3)';
        e.currentTarget.style.borderColor = '#334155';
    };

    return (
        <div style={containerStyle}>
            {/* Report Issue Link */}
            <a
                href="https://github.com/Joshua-Wilcox/AILectureSlides/issues/new"
                target="_blank"
                rel="noopener noreferrer"
                style={linkStyle}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                <span role="img" aria-label="bug">🐛</span>
                Flag Issue
            </a>

            {/* Personal Site Link */}
            <a
                href="https://josh.software"
                target="_blank"
                rel="noopener noreferrer"
                style={linkStyle}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                <span role="img" aria-label="laptop">💻</span>
                Personal Website
            </a>
        </div>
    );
};

export default PersonalWidget;
