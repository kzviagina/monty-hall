import React, { useState } from 'react';
import './form.css';

const Form = (props) => {
    const [amount, setAmount] = useState('');
    const [switchDoor, setSwitchDoor] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const data = { amount, switchDoor };

        props.onSubmit(data);
    };

    return (
        <form onSubmit={handleSubmit} className="form">
            <div className="form-row">
                <label htmlFor="amount" className="form-label">Number of simulations to run:</label>
                <input
                    type="number"
                    id="amount"
                    className="form-control"
                    min={1}
                    value={amount}
                    onChange={e => setAmount(parseInt(e.target.value, 10))}
                />
            </div>
            <div className="form-row inline">
                <input
                    type="checkbox"
                    id="switchDoor"
                    className="form-checkbox"
                    value={switchDoor}
                    onChange={e => setSwitchDoor(e.target.checked)}
                />
                <label className="form-label" htmlFor="switchDoor">Switch the door</label>
            </div>
            <input
                type="submit"
                value="Simulate"
                disabled={(!amount || parseInt(amount) === 0)}
                className="button"
            />
        </form>
    );
}

export default Form;