import one from '../../imgs/covr.jpg';
import './sectionOne.css';

const SectionOne = () => {
    return ( 
        <div className="sectionOne">
        <div className="img">
        <img
        src={one}
        height='660px'
        width='100%'
        /></div>
        <div className="title">
            <h2>Alla Moda</h2>
            <p className="text-shadow-drop-tr">Bring life to your space with our decorations.</p>
        </div>
    </div>
     );
}
 
export default SectionOne;