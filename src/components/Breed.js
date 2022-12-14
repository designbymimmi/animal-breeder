import React, { useState } from 'react';
import '../css/Breed.css';

const Breed = () => {
    const [selectedFemale, setSelectedFemale] = useState('');
    const [selectedMale, setSelectedMale] = useState('');

    const makeBabies = () => {
        let baby = '';
        if (selectedFemale === 'đĄ' && selectedMale === 'đš') {
            baby = 'đĻ';
        } else if (selectedFemale === 'đĄ' && selectedMale === 'đĻ') {
            baby = 'đ';
        } else if (selectedFemale === 'đˇ' && selectedMale === 'đš') {
            baby = 'đ';
        } else if (selectedFemale === 'đˇ' && selectedMale === 'đĻ') {
            baby = 'đĻ';
        } else if (selectedFemale === 'đŽ' && selectedMale === 'đĻ') {
            baby = 'đē';
        } else if (selectedFemale === 'đŽ' && selectedMale === 'đš') {
            baby = 'đ°';
        } else if (selectedFemale === 'đŽ' && selectedMale === 'đ') {
            baby = 'đ';
        } else if (selectedFemale === 'đĄ' && selectedMale === 'đ') {
            baby = 'đ';
        } else if (selectedFemale === 'đˇ' && selectedMale === 'đ') {
            baby = 'đĻ';
        } else if (selectedFemale === 'đ' && selectedMale === 'đĻ') {
            baby = 'đĻ';
        } else if (selectedFemale === 'đ' && selectedMale === 'đš') {
            baby = 'đĻĢ';
        } else if (selectedFemale === 'đ' && selectedMale === 'đ') {
            baby = 'đ';
        } else if (selectedFemale === 'đ' && selectedMale === 'đĻ') {
            baby = 'đĻ';
        } else if (selectedFemale === 'đˇ' && selectedMale === 'đĻ') {
            baby = 'đĒ˛';
        } else if (selectedFemale === 'đĄ' && selectedMale === 'đĻ') {
            baby = 'đĻ';
        } else if (selectedFemale === 'đŽ' && selectedMale === 'đĻ') {
            baby = 'đĻŦ';
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
                    <button onClick={() => setSelectedFemale("đˇ")}>đˇ</button>
                    <button onClick={() => setSelectedFemale("đĄ")}>đĄ</button>
                    <button onClick={() => setSelectedFemale("đŽ")}>đŽ</button>
                    <button onClick={() => setSelectedFemale("đ")}>đ</button>
                </div>

                <div className="half">
                    <h2>Male</h2>
                    <button onClick={() => setSelectedMale("đĻ")}>đĻ</button>
                    <button onClick={() => setSelectedMale("đš")}>đš</button>
                    <button onClick={() => setSelectedMale("đ")}>đ</button>
                    <button onClick={() => setSelectedMale("đĻ")}>đĻ</button>
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
