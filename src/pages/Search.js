import "../styles/newsletter.css";
import { addToMailingList } from "../Api";
const SearchPage = () =>{
    const onSubmit = async event =>{
        const dataToSend = {
            "email": event.target.email.value,
            "tournament_name": event.target.tournamentName.value,
            "tournament_status": event.target.tournamentStatus.value,
            "country_state": event.target.countryState.value,
            "tournament_city": event.target.tournamentCity.value
        }
        event.preventDefault();
        addToMailingList(dataToSend);
    };


    return (
        <>
        <h2>Zapisz się do newslettera </h2>
        <form id="newsletter-form" onSubmit={onSubmit} >
            

            <label>
                Email
                <input name="email" type="email" required/>
            </label>
            <label>
                Miasto
                <input name="tournamentCity"/>
            </label>
            <label>
                Nazwa turnieju
                <input name="tournamentName"/>
            </label>
            <label>
                Status turnieju 
                <select name="tournamentStatus">
                    <option value="PLANNED">Zaplanowany</option>
                    <option value="ONGOING">Trwające </option>
                    <option value="FINISHED">Zakończone</option>
                </select>
            </label>
            <label>
                Wybierz województwo 
                <select name="countryState">
                
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
            </label>
                <button type="submit" >Submit </button>
        </form>
        </>
    );
};
export default SearchPage;