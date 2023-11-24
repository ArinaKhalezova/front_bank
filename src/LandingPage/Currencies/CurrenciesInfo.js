import './CurrenciesInfo.css'

const CurrenciesInfo = ( ) => {
    return(
        <div>
            <div className="currencies">
                <div className="currencies-info">
                    <ul className="currencies-info_column">
                        <li className="currencies-info_item__title">Букв. код</li>
                        <li className='currencies-info_item'>USD</li>
                        <li className='currencies-info_item'>EUR</li>
                        <li className='currencies-info_item'>CNY</li>
                        <li className='currencies-info_item'>KZT</li>
                        <li className='currencies-info_item'>SMC</li>
                    </ul>
                </div>
                <div className="currencies-info">
                    <ul className="currencies-info_column">
                        <li className="currencies-info_item__title">Вылюта</li>
                        <li className='currencies-info_item'>Доллары США</li>
                        <li className='currencies-info_item'>Евро</li>
                        <li className='currencies-info_item'>Китайский Юань</li>
                        <li className='currencies-info_item'>Казахстанский тенге</li>
                        <li className='currencies-info_item'>СамКоины</li>
                    </ul>
                </div>
                <div className="currencies-info">
                    <ul className="currencies-info_column">
                        <li className="currencies-info_item__title">Продать</li>
                        <li className='currencies-info_item'>94.6</li>
                        <li className='currencies-info_item'>99.7</li>
                        <li className='currencies-info_item'>12.58</li>
                        <li className='currencies-info_item'>0.18</li>
                        <li className='currencies-info_item'>100</li>
                    </ul>
                </div>
                <div className="currencies-info">
                    <ul className="currencies-info_column">
                        <li className="currencies-info_item__title">Купить</li>
                        <li className='currencies-info_item'>101.4</li>
                        <li className='currencies-info_item'>106.7</li>
                        <li className='currencies-info_item'>14.02</li>
                        <li className='currencies-info_item'>0.23</li>
                        <li className='currencies-info_item'>110</li>
                    </ul>
                </div>
            </div>
            <hr className='currencies-line'></hr>
            <p>Курс актуален на 19:35, 16.10.2023</p>
        </div>
       
        
    )
}

export default CurrenciesInfo;