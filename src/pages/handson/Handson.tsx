import { useState, useEffect, useRef} from "react";

const useFilterEmployees= (employeeNames:string[],searchTerm:string) => {
    const [filteredData, setFilteredData] = useState<string[]>([]);

    useEffect(() => {
      const results=employeeNames.filter((name)=> name.toLowerCase().startsWith(searchTerm.toLowerCase()));
      setFilteredData(results);
    }, [searchTerm]);

    return filteredData;
  };

function Handson() {
  const employeeNames = [
    "Vishal M",
    "Ananya Nair",
    "Rahul Krishnan",
    "Meera Jasmine",
    "Aditya Verma",
    "Arjun Das",
    "Priya Pillai",
    "Siddharth Menon",
    "Riya Joseph",
    "Deepak Kumar",
  ];

  const [searchTerm,setSearchTerm] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const filteredData = useFilterEmployees(employeeNames, searchTerm);

  const handleSearch = () => {
    if (inputRef.current) {
      setSearchTerm(inputRef.current.value);
    }
  }; 
  return (
    <>
      <p>{employeeNames.join(', ')}</p>
      <input type="text" id="searchInput" ref={inputRef} placeholder="Enter Search Parameter"/>
      <input type="button" value="Search" onClick={handleSearch}/>
      <p>{filteredData.join(', ')}</p>
    </>
  );
}
// onChange={(e)=>setInputValue(e.target.value)

export default Handson;
