const Table = (props) =>{
    
    const {tournamentListing, query } = props;  

    const htmlTournamentsHighlits =tournamentListing.filter((it) => {
        return it.name.toLowerCase().includes(query.toLowerCase()) || query === "";
    }).map((iterator, index) =>{
            return <a className="link-styleless" key={index} 
            onClick={() =>{window.open(iterator.link, '_blank', 'noopener,noreferrer');}}>
                    <li className="list-group-item list-group-item-action "> 
                        <div className=" d-flex flex-nowrap justify-content-between ">
                            <h5 className="mb-3">
                                {iterator.name}
                            </h5>   
                            <small>
                                {iterator.city}, {iterator.country}
                            </small>
                            
                        </div>
                        <div className=" d-flex justify-content-between ">
                            <div >
                               Data turnieju: {iterator.date}
                            </div>
                          
                            <div >
                                Tempo: {iterator.type_and_players}
                            </div>
                        </div>
                    </li>
                </a>
        });
    
    return(    
        <ul className="list-group" style={{"margin": "1em" }}>
                            <li className="list-group-item list-group-item-dark ">
                                    <h5 className="mb-3 text-center"> Turnieje </h5>
                            </li>
                            {htmlTournamentsHighlits}
        </ul>
    );

};
export default Table;