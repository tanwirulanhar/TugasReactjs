const FacilityImage = (props) => {
    const {gambar1, gambar2, gambar3} = props;
    return (
        < >
            <div className="img-1">
                <img src={gambar1} alt="gambar1" />
            </div>
            <div className="img-2">
                <img src={gambar2} alt="gambar2" />
                <img src={gambar3} alt="gambar3" />
            </div>
        </>

    );
};

export default FacilityImage;