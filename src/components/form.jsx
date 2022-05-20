import {useNavigate} from 'react-router-dom';
const FilterForm = (props) =>{
    const {query, setQuery} = props;
    const navigate = useNavigate();
    const onClick = (event)=>{
        setQuery(event.target.value);
    };
    const onSubmit = async event =>{
        const dataToSend = {
            "tournament_city" : event.target.tournamentCity.value, 
            "country_state" :  event.target.countryState.value, 
            "tournament_status" : event.target.tournamentStatus.value,
            "tempo_option" : event.target.tournamentTempo.value , 
            "tournament_name" :event.target.tournamentName.value
        }
        
        navigate("/filtered", {state: dataToSend });
    };
    return(
        <div className="card fix">
       
        <form className="card-body" onSubmit={onSubmit}>
            <h5 className="card-title">
                Nazwa turnieju 
            </h5>
            <div className="input-group">  
                <div className="form-outline">
                    <input name="tournamentName" id="search-input" type="search" className="form-control" placeholder="Podaj czego szukasz"/>
                </div> 
            </div>
            <hr className="my-4" />
            <h5 className="card-title">
                    Miasto
            </h5>
            <div className="form-outline">
                <div className="input-group">  
                    <div className="form-outline">
                        <input name="tournamentCity" id="search-input" type="search" className="form-control" placeholder="Podaj czego szukasz"/>
                    </div> 
                </div>
            </div>
            <hr className="my-4" />
            
            <div className="mb-3">
                <h5 className="card-title">
                    Tempo 
                </h5>       
                <select name="tournamentTempo" className="form-select">
                    <option value="blitz">Błyskawiczne</option>
                    <option value="rapid">Szybkie</option>
                    <option value="classic">Klasyczne</option>
                </select>
            </div>
            <div className="mb-3">
                <h5 className="card-title">
                    Województwo
                </h5>       
                <select name="countryState" className="form-select">
                    <option value="DS"> Dolnyśląskie</option>
                    <option value="KP"> Kujawsko-Pomorskie</option>
                    <option value="LB"> Lubuskie</option>
                    <option value="LD"> Łódzkie</option>
                    <option value="LU"> Lubelskie</option>
                    <option value="MP"> Małopolskie</option>
                    <option value="MA"> Mazowieckie</option>
                    <option value="OP"> Opolskie</option>
                    <option value="PK"> Podkarpackie</option>
                    <option value="PL"> Podlaskie</option>
                    <option value="PO"> Pomorskie</option>
                    <option value="SL"> Śląskie</option>
                    <option value="SK"> Świętokrzyskie</option>
                    <option value="WM"> Warmińsko-Mazurskie</option>
                    <option value="WP"> Wielkopolskie</option>
                    <option value="ZP"> Zachodnio-pomorskie</option>
                </select>
            </div>
            <div className="mb-3">
                <h5 className="card-title">
                    Status
                </h5>
                <select className="form-select" name="tournamentStatus">
                    <option value="PLANNED">Zaplanowany</option>
                    <option value="ONGOING">Trwające </option>
                    <option value="FINISHED">Zakończone</option>
                </select>
            </div>
            <div className="mb-3" style={{"text-align": "center" }}>
                <button type="submit" className="btn btn-secondary" >Filter tournaments  </button>
            </div>
        </form>
    </div>
    );
};
export default FilterForm;