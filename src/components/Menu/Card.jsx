const Card = (props) => {
    const {coffe} = props;
    return (
        <div className="card-container">
            <img src={coffe} alt="kopipertama" />
            <div className="card-1">
                <h1>Cappucino</h1>
                <p>Rp. 20.000</p>
            </div>

        </div>
    );
};

export default Card;