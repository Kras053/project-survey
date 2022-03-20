import React, { useState } from 'react';
import CharacterName from './CharacterName';
import MonsterNumbers from './MonsterNumbers';
import Summary from './Summary';
import DropDown from './DropDown';
import RadioButtons from './RadioButtons';

const Form = () => {
const [username, setUsername] = useState('');
const [numberOne, setNumberOne] = useState(0);
const [numberTwo, setNumberTwo] = useState(0);
// const [isResultDisplayed, setIsResultDisplayed] = useState(false);
const [location, setLocation] = useState('');
const [ageGroup, setAgeGroup] = useState('');
// const [Summary, setSummary] = useState(false)
// const [page, setPage] = useState(0);

// const nextPage = () => setPage(page + 1);
//   const prevPage = () => setPage(page - 1);

const [step, setStep] = useState(1)

const onStepChange = (e) => {
    e.preventDefault()
    setStep(step + 1)
  }

const handleInputChange = (event) => {
    setUsername(event.target.value);
};

const handleFirstNumberChange = (event) => {
    setNumberOne(Number(event.target.value));
};

const handleSecondNumberChange = (event) => {
    setNumberTwo(Number(event.target.value));
};

const locationChange = (event) => {
    setLocation(event.target.value);
};

const ageChange = (event) => {
    setAgeGroup(event.target.value);
};



//./src/components/CalculationForm.js
//Line 40:13:  Emojis should be wrapped in <span>, have role="img", and have an accessible description with aria-label or aria-labelledby  jsx-a11y/accessible-emoji


    return (
        <section>
            <h1 className="title-text">Ghost story 👻 writer</h1>
          
            {step === 1 && 
            <CharacterName 
                username={username} 
                onInputChange={handleInputChange}
                onStepChange={onStepChange} />}
                 
            {step === 1 && 
            <DropDown 
            locationChange={locationChange}
                value={location}
                onStepChange={onStepChange} />}

            {step === 1 &&
            <RadioButtons
                ageChange={ageChange}
                ageGroup={ageGroup}
                onStepChange={onStepChange} />}

                {step === 1 &&
            <MonsterNumbers 
                numberOne={numberOne}
                numberTwo={numberTwo} 
                onFirstNumberChange={handleFirstNumberChange} 
                onSecondNumberChange={handleSecondNumberChange}
                onStepChange={onStepChange} />}


            {/* <button onClick={() => setIsResultDisplayed(true) } >Reveal ghost story</button> */}
           
           
             {/* {isResultDisplayed  && ( */}
                 
                 {step === 2 &&
            <Summary 
                
                username={username} 
                numberOne={numberOne}
                numberTwo={numberTwo}
                location={location}  
                ageGroup={ageGroup}
                />}

            {/* )} */}

           {/* {isResultDisplayed && (
               
           <Summary 
           nextpage= {nextPage}/>    
           )}      */}

        </section>

    )
}
export default Form;
