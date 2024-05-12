const HomeImage = (props) => {
    const {gambar} = props;
    return (
        <div className="home-image-wrapper"  >
            <img  src={gambar} alt="gambar" />
        </div>
    );
};

export default HomeImage;