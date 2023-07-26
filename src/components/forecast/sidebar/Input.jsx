import axios from "axios";
import React, { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";

const Input = () => {
  const [value, setValue] = useState("");
  const [summaryFig, setSummaryFig] = useState(``);

  const handleSubmit = (e) => {
    e.preventDefault();

    axios.post(
      `http://127.0.0.1:8000/api/predictView`,
      { location: value }
    ).then(res => {
      setSummaryFig(res.data.summary_fig);
    }).catch(err => console.log(err));
  };
  
  return (
    <form className="relative" onSubmit={handleSubmit}>
      <input
        required={true}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        type="text"
        placeholder="Search locations"
        className="pr-10 border-b w-full border-brand h-10 text-brand placeholder:text-brand outline-none"
      />

      <button
        type="submit"
        className="h-10 w-10 cursor-pointer text-brand flex items-center justify-center absolute top-0 right-0"
      >
        <AiOutlineSearch size={20} />
      </button>

      <div dangerouslySetInnerHTML={{ __html: summaryFig }} />

    </form>
  );
};

export default Input;
