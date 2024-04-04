import background from './assets/BACKGROUND.png'

function Image() {
    return(
        <>
            <div className="image">
                <img className="img-fluid" src={background} alt=""/>
            </div>
        </>
    )
}

export default Image;