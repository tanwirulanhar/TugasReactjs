const Navlist = ({data}) => { //cara menangkap props
    
    return (
        <div className="navlist-wrapper">
            {data.map((item)=>(
                <a href="">{item}</a>
            ))}
        </div>
    );
};

export default Navlist;