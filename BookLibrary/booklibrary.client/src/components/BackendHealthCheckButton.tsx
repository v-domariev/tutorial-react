import { useState } from 'react';

export function BackendHealthCheckButton() {
    const [backendHealthStatus, setBackendHealthStatus] = useState('NOT_CHECKED');

    return (
        <div>
            <label>{backendHealthStatus}</label>
            <button onClick={handleCheckBackend}>I'm health check button</button>
        </div>
    );

    function handleCheckBackend() {
        console.log('Backend click!');
        setBackendHealthStatus('Backend is alive!');
    }
}
