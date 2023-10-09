import two from '../../imgs/group_1.png';
import './sectionTwo.css';

const SectionTwo = () => {
    return ( 
        <div className="sectionTwo">
        <p>UNLEASH YOUR CREATIVITY WITH TREASURES INTERIORS & ARCHITECTURE</p>
        <h1>TREASURES INTERIORS & ARCHITECTURE </h1>
        <h1 style={{color:'#d9d8d8'}}>YOUR SOURCE FOR INSPIRED HOME DECOR</h1> <br/>
        <div className="content">
        <img
        src={two}
        />
        <p className="caption">Treasures International is a renowned platform that offers exquisite, ultra-luxury real estate offerings to clients worldwide. Established in 1978, the platform has a long-standing reputation for providing beautifully crafted turn-key solutions to discerning clients. In addition to its real estate offerings,
             Treasures International is also home to Treasures Design, a premier interior design firm in the luxury industry.
             <br/><button>READ MORE</button>
             </p>
        </div>

    </div>
     );
}
 
export default SectionTwo;