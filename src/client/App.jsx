import React, { useState, useEffect } from 'react';

const App = () => {

    const [world, setWorld] = useState('')
    useEffect(() => {
        const getWorld = async () => {
            try {
                let r = await fetch('/api/hello');
                let world = await r.json();
                setWorld(world);
            } catch (error) {
                console.log(error);
            }
        }
        getWorld();
    }, [])

    return (
        <h1 style={{ padding: '5em', color: '#0091ea' }}>Hello {world}!</h1>
    );
}

export default App;