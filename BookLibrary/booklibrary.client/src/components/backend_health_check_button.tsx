export function BackendHealthCheckButton() {
    return (
        <button onClick={handleCheckBackend}>I'm health check button</button>
    );

    function handleCheckBackend() {
        console.log('Backend click!');
    }
}
