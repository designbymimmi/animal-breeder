import React, { useState } from 'react';
import '../css/Breed.css';

const Breed = () => {
    const [selectedFemale, setSelectedFemale] = useState('');
    const [selectedMale, setSelectedMale] = useState('');

    const makeBabies = () => {
        let baby = '';
        if (selectedFemale === '🐡' && selectedMale === '🐹') {
            baby = '🦔';
        } else if (selectedFemale === '🐡' && selectedMale === '🦉') {
            baby = '🐝';
        } else if (selectedFemale === '🕷' && selectedMale === '🐹') {
            baby = '🐜';
        } else if (selectedFemale === '🕷' && selectedMale === '🦉') {
            baby = '🦟';
        } else if (selectedFemale === '🐮' && selectedMale === '🦉') {
            baby = '🐺';
        } else if (selectedFemale === '🐮' && selectedMale === '🐹') {
            baby = '🐰';
        } else if (selectedFemale === '🐮' && selectedMale === '🐍') {
            baby = '🐛';
        } else if (selectedFemale === '🐡' && selectedMale === '🐍') {
            baby = '🐊';
        } else if (selectedFemale === '🕷' && selectedMale === '🐍') {
            baby = '🦂';
        } else if (selectedFemale === '🐘' && selectedMale === '🦉') {
            baby = '🦅';
        } else if (selectedFemale === '🐘' && selectedMale === '🐹') {
            baby = '🦫';
        } else if (selectedFemale === '🐘' && selectedMale === '🐍') {
            baby = '🐉';
        } else if (selectedFemale === '🐘' && selectedMale === '🦎') {
            baby = '🦖';
        } else if (selectedFemale === '🕷' && selectedMale === '🦎') {
            baby = '🪲';
        } else if (selectedFemale === '🐡' && selectedMale === '🦎') {
            baby = '🦑';
        } else if (selectedFemale === '🐮' && selectedMale === '🦎') {
            baby = '🦬';
        } else {
            baby = '?!';
        }
        return baby;
    }

    return (
        <div>
            <h1>Breeding time...</h1>
            <div className="container">
                <div className="half">
                    <h2>Female</h2>
                    <button onClick={() => setSelectedFemale("🕷")}>🕷</button>
                    <button onClick={() => setSelectedFemale("🐡")}>🐡</button>
                    <button onClick={() => setSelectedFemale("🐮")}>🐮</button>
                    <button onClick={() => setSelectedFemale("🐘")}>🐘</button>
                </div>

                <div className="half">
                    <h2>Male</h2>
                    <button onClick={() => setSelectedMale("🦉")}>🦉</button>
                    <button onClick={() => setSelectedMale("🐹")}>🐹</button>
                    <button onClick={() => setSelectedMale("🐍")}>🐍</button>
                    <button onClick={() => setSelectedMale("🦎")}>🦎</button>
                </div>
            </div>
            <div>
                <hr></hr>
                <h2>Family</h2>
                <p>{selectedFemale} + {selectedMale} = {makeBabies(selectedFemale, selectedMale)}</p>
                <button className='reset-button' onClick={() => { setSelectedFemale(''); setSelectedMale('');}}>Reset</button>
            </div>
        </div>
    )
}

export default Breed;
