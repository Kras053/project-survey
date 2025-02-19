import React from 'react';

const MonsterNumbers = ({
    firstMonster, 
    secondMonster, 
    onFirstNumberChange, 
    onSecondNumberChange
}) => {

return (
    <>
    <div>
    <label htmlFor="firstMonster">
        <p className="question-text">Imaginary monsters:</p>
        </label>
    <input className="choice-boxes"
     id="firstMonster"
        type="number"
        value={firstMonster}
        onChange={onFirstNumberChange}
        />
        </div>
        <div>
          <label htmlFor="secondMonster">
          <p className="question-text">Real monsters:</p>
          </label>
    <input className="choice-boxes"
     id="secondMonster"
        type="number"
        value={secondMonster}
        onChange={onSecondNumberChange}
        />
    </div>
    </>
)
}

export default MonsterNumbers;
