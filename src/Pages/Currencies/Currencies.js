import CurrenciesInfo from "./CurrenciesInfo";
import CurrenciesCalculator from "./CurrenciesCalculator";
import "./Currencies.css"

const Currencies = () => {
    return(
        <div className="wrap">
            <h1 className="currencies-title">КУРС ВАЛЮТ</h1>
            <div className="cur-wrap">
                <CurrenciesInfo/>
                <CurrenciesCalculator/>
            </div>
        </div>
    )
}

export default Currencies;