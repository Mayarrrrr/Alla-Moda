import cover from '../../imgs/cover.png';
import './cover.css';

const Cover = () => {
    return ( 
        <div className="cover ">
            <img
            src={cover}
            height="350rem"
            width="100%"
            style={{objectFit:'cover'}}
            />
        </div>
     );
}
 
export default Cover;