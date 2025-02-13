
import shirt1 from './assets/shirt1.jpg';
import shirt2 from './assets/shirt2.jpg';
import shirt3 from './assets/shirt3.jpg';
import shirt4 from './assets/shirt4.jpg';
import shirt5 from './assets/shirt5.jpg';
import shirt6 from './assets/shirt6.jpg';

function ShirtImages () {
    const shirtStyle = {
        width: '200px',
        height: '200px',
        margin: '10px'
    };

    return(
        <div>
            <img src={shirt1} alt="Shirt 1" style={shirtStyle} />
            <img src={shirt2} alt="Shirt 2" style={shirtStyle} />
            <img src={shirt3} alt="Shirt 3" style={shirtStyle} />
            <img src={shirt4} alt="Shirt 4" style={shirtStyle} />
            <img src={shirt5} alt="Shirt 5" style={shirtStyle} />
            <img src={shirt6} alt="Shirt 6" style={shirtStyle} />
        </div>
    )
}

export default ShirtImages;