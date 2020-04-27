import React, { useState } from 'react';
import { simulate } from './client';

import SimulationForm from './components/SimulationForm';
import Results from './components/Results';

import './App.css';

function App() {
    const [result, setResult] = useState({ total: null, success: null });

    const handleSubmit = async (data) => {
        const res = await simulate(data);

        if (res.ok) {
            const result = await res.json();
            setResult(result);
        }
    };

    return (
        <div className="app">
            <h1>Check Monty Hall paradox</h1>
            <SimulationForm onSubmit={handleSubmit} />
            {
                result.total &&
                <>
                    <h2>Result</h2>
                    <Results total={result.total} success={result.success} />
                </>
            }
        </div>
    );
}

export default App;
