import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import FilterForm from "../components/form";
import { fetchTournaments } from "../Api";
import Table from "../components/table";
const Home = () =>{
    const [tournamentListing, setTournamentListing ] = useState([]);

    const retrieve = async () =>{
        const data =  await fetchTournaments();
        setTournamentListing(data);
        console.log(data);
    };

    useEffect(()=>{
       retrieve();
    } ,[]);
    const [query, setQuery] = useState("");
    return (
        <div className="container header-padding">
                <div className="row">
                    <div className="col-3">
                        <FilterForm query={query} setQuery={setQuery} />
                    </div>
                    <div className="col-9">
                        { tournamentListing.length !== 0 ? <Table tournamentListing={tournamentListing} query={query} /> : <div> </div> }
                    </div>
                </div>
        </div>
    );
};
export default Home;