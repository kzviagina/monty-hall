const apiUrl = 'http://localhost:5000/';

const post = async (relative, data) => fetch(apiUrl + relative, {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
});

export const simulate = async data => await post('simulation', data);
