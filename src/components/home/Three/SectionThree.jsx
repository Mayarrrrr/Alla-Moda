import Card from 'react-bootstrap/Card';
import './sectionThree.css';
import { useState } from "react";

const SectionThree = () => {
    const [cards, setCards] = useState([
       { title:'Modern Kitchen',
         sr:require('../../imgs/kitchen.png')
       },
       { title:'Modern Bathroom',
         sr:require('../../imgs/bath.png')
       },
       { title:'Modern Dining room',
         sr:require('../../imgs/img.png')
       },
       { title:'Modern Living room',
         sr:require('../../imgs/living.png')
       }
    ]);
        return ( 
        <div className="sectionThree">
            <p>A GLIMPSE ON OUR LATESTS PROJECTS</p>
            <h1>OUR LATEST PROJECTS</h1>
            <div className='cards scale-in-left'>
            { cards.map ((crd) => (
            <Card className="bg-dark text-white" style={{width:'20rem', height:'25rem', marginLeft:'3rem'}}>
                <Card.Img src={crd.sr} alt="Card image" style={{width:'20rem', height:'25rem'}}/>
                    <Card.ImgOverlay>
                        <Card.Text style={{position:'absolute', bottom:'0', textAlign:'center', fontWeight:'bolder', fontSize:'larger'}}>{crd.title}</Card.Text>
                    </Card.ImgOverlay>
            </Card>  ))  }
            </div>
        </div>
     );
}
 
export default SectionThree;