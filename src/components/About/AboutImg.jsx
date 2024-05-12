const AboutImage = (props) => {
    const {aboutimg} = props;
    return (
        <div className="home-image-wrapper"  >
            <img  src={aboutimg} alt="gambar" />
        </div>
    );
};

export default AboutImage;