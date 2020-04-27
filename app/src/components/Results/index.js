import React from 'react';
import './results.css';

const toPercent = (total, value) => `${Math.round((value / total) * 100)}%`;

const Results = ({ total, success }) => {
    const fail = total - success;
    const carsPct = toPercent(total, success);
    const goatsPct = toPercent(total, fail);

    return (
        <div className="results">
            <div className="results-text">
                <p className="success">Cars: {carsPct}</p>
                <p className="fail">Goats: {goatsPct}</p>
            </div>
            <div className="result">
                <div className="result-bar success" style={{ width: carsPct }} />
                <div className="result-bar fail" style={{ width: goatsPct }} />
            </div>
        </div>
    );
};

export default Results;
