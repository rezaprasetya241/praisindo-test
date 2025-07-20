import { useState, useEffect } from "react";
import { RxCross1 } from "react-icons/rx";
import { useDebounce } from "../../helper/utils";

interface SearchFieldProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  className?: string;
  debounce?: number;
}

const SearchField = ({
  value,
  onChange,
  placeholder = "Search...",
  className = "",
  debounce = 400,
}: SearchFieldProps) => {
  const [inputValue, setInputValue] = useState(value);
  const debouncedValue = useDebounce(inputValue, debounce);

  useEffect(() => {
    onChange(debouncedValue);
  }, [debouncedValue, onChange]);

  const clearInput = () => {
    setInputValue("");
    onChange("");
  };

  return (
    <div className={`relative w-full ${className}`}>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder={placeholder}
        className="w-full border border-gray-300 rounded-md px-4 py-2 pr-10 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      {inputValue && (
        <button
          type="button"
          onClick={clearInput}
          className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
        >
          <RxCross1 size={16} />
        </button>
      )}
    </div>
  );
};

export default SearchField;
