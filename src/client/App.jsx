import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

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
        <Header>Hello {world}!</Header>
    );
}

const Header = styled.h1`
    padding: 5em;
    color: #0091ea
`

export default App;