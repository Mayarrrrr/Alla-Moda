import './sectionFour.css';
import { useState } from "react";

const SectionFour = () => {
    const [data, setData] = useState([
        {
            id:'1',
            title:"BESPOKE INTERIORS",
            content:"Our love of the creative process and the collective experience of our team provides the basis from which we have become experts in the luxury interior […]"
        },
        {
            id:'2',
            title:"BESPOKE ARCHITECTURE",
            content:"We see architecture as a language that speaks of the place. Treasures Interiors and Architecture uses the highest standards and technology in drafting […]"
        },
        {
            id:'3',
            title:"BESPOKE ARTWORKS",
            content:"Artwork is the heart and soul of exceptional interiors, infusing them with warmth, allure, and a sense of identity. Bespoke artwork is crafted with the same […]"
        },
        {
            id:'4',
            title:"BESPOKE ACCESSORIES",
            content:"Accessories are the finer details, and have a great impact on the finished product. No project is complete without those accessories which add refinement […]"
        },
        {
            id:'5',
            title:"INSTALLATION",
            content:"Execution of the installation process is the sum of all planning. We deliver and install uniquely manufactured furnishings with great attention to detail, […]"
        }
    ]);
    return ( 
        <div className="sectionFour">
            <p style={{color:'d9d8d8'}}>INTERIORS & ARCHITECTURE</p>
            <h1>OUR EXPERTISE</h1>
<>
{data.map ((dt) =>(

            <div className='part slide-in-fwd-bottom' key={dt.id}>  
                <p style={{color:'#989898',fontFamily:'Verdana, Geneva, Tahoma, sans-serif',fontSize:'larger'}}>{dt.title}</p>
                <p className='detail'>{dt.content}</p> 
                <button className='read'>READ MORE</button>
                <hr style={{border:'1px solid', color:'#989898'}}/>
                </div>
                 ))} </>
{/*<span class="vr"></span>*/}

              
               




        </div>
     );
}
 
export default SectionFour;