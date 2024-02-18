import React, {useState} from "react";
import "../styles/RsvpForm.css";

function RsvpForm(){
    // state to track selected checkbox options
    const[selectedOptions, setSelectedOptions] = useState<string[]>([]);

    // function to handle change in selected checkbox options
    const handleSelectChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { value, checked } = event.target;
        if(checked){
            // add the value to the selectedOptions array
            setSelectedOptions([...selectedOptions, value]);
        }
        else{
            // remove the value from the selectedOptions array
            setSelectedOptions(selectedOptions.filter(option => option !== value));
        }
    };

    return(
        <form className="rsvp-form">
            <div className="form-info">
                <div className="question">
                    <label htmlFor="first-name">First Name:</label>
                    <input name="first-name" id="first-name" />
                </div>
                <div className="question">
                    <label htmlFor="last-name">Last Name:</label>
                        <input name="last-name" id="last-name" />
                </div>
                <div className="question">
                    <label htmlFor="party-size">Who else is in your party?</label>
                        <input name="party-size" id="party-size" placeholder="Add your name" />
                </div>
                <div className="question">
                    <label htmlFor="drink-choice">What is your drink of choice? (Select all that apply.)</label>
                    <label>
                        <input type="checkbox" name="beer" value="beer" onChange={handleSelectChange} checked={selectedOptions.includes('beer')} />
                        Beer
                    </label>
                    <label>
                        <input type="checkbox" name="wine" value="wine" onChange={handleSelectChange} checked={selectedOptions.includes('wine')} />
                        Wine
                    </label>
                    <label>
                        <input type="checkbox" name="seltzers-ciders" value="seltzers-ciders" onChange={handleSelectChange} checked={selectedOptions.includes('seltzers-ciders')} />
                        Seltzers + Ciders
                    </label>
                </div>
                <button type="submit">RSVP</button>
            </div>
        </form>
    )
}

export default RsvpForm;