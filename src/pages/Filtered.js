import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { filterTournaments } from "../Api";
import Table from "../components/table";
const FilteredPage = () =>{
    const [filteredTournaments, setFilteredTournaments] = useState([]);
    const location = useLocation();

    const retrieve = async () =>{
        const data =  await filterTournaments(location.state);
        setFilteredTournaments(data);
        console.log(data);
    };

    useEffect(() =>{
        retrieve();
    }, []);
    return (
            <Table tournamentListing={filteredTournaments} query ={""} />        
    );
};


export default FilteredPage;