import React from "react";
import "./question.css";

const SliderQuestion = ({ id, question, options, selectedOptions, handleOptionChange }) => {
  // const [selectedOptions, setSelectedOptions] = useState([]);

  // const handleOptionChange = (option) => {
  //   if (selectedOptions.includes(option)) {
  //     setSelectedOptions(selectedOptions.filter((item) => item !== option));
  //   } else {
  //     setSelectedOptions([...selectedOptions, option]);
  //   }
  // };
  const isSelected = (option) => selectedOptions && selectedOptions.includes(option);

  return (
    <div className="question-item">
      <div className="question-item-title">
        <ul>{id}</ul>
        <h4>{question}</h4>
      </div>
      <div className="question-answers">
        <ul>
          {options &&
            options.map((option, index) => (
              <li key={index} className="custom-checkbox">
                <input
                  type="checkbox"
                  value={option}
                  id={`${id}-${index}`}
                  checked={isSelected(option)}
                  onChange={() => handleOptionChange(option)}
                />
                <label htmlFor={`${id}-${index}`}>
                  {option}
                </label>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
};

export default SliderQuestion;
