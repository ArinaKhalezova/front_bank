import './CurrenciesCalculator.css'

const CurrenciesCalculator = () => {
    return (
        <div>
            <div className="calculator">
                <h1 className='calculator-title'>Обменник</h1>
                <div className="calculator-item">
                    <div className="calculator-currencies">
                        <ul className="calculator-currencies_item">
                            <li className="calculator-currencies-item__active">USD</li>
                            <li>EUR</li>
                            <li>CNY</li>
                            <li>KZT</li>
                            <li>SMC</li>
                        </ul>
                        <input type="number" className="calculator-currencies-res"></input>
                    </div>
                    <div className="calculator-currencies">
                        <ul className="calculator-currencies_item">
                            <li>USD</li>
                            <li className="calculator-currencies-item__active">EUR</li>
                            <li>CNY</li>
                            <li>KZT</li>
                            <li>SMC</li>
                        </ul>
                        <input type="number" className="calculator-currencies-res"></input>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CurrenciesCalculator;