import './footer.css';
import { useState } from "react";
import call from '../imgs/call.png';
import msg from '../imgs/msg.png';
import loc from '../imgs/location.png';

const Footer = () => {
    const [imgs, setImgs] = useState([
        { title:'DUBAI',
          sr:require('../imgs/dubai.png')
        },
        { title:'NEDERLAND',
          sr:require('../imgs/Nederland.png')
        },
        { title:'QATAR',
          sr:require('../imgs/Qatar.png')
        },
        { title:'MONACO',
          sr:require('../imgs/monaco.png')
        }
     ]);
    return ( 
        <div className="footer">
        {imgs.map((imgg) => (
            <div className="album">
                <p>{imgg.title}</p>
                <img src={imgg.sr}
                height="160rem"
                width="260rem"
                className='cover'
                />
                <br/>
                <div className="con">
                <img
                src={call}
                height="25rem"
                width="25rem"
                style={{ cursor:'pointer'}}
                />
                <img
                src={msg}
                height="25rem"
                width="25rem"
                style={{margin:'0.7rem', cursor:'pointer'}}
                />
                <img
                src={loc}
                height="25rem"
                width="25rem"
                style={{ cursor:'pointer'}}
                />
                <hr/>
                </div>
            </div>
         ))}
                <div className='words'>
                    <a href=''>Privacy policy</a>
                    <a href=''>Cookie Policy</a>
                    <a href=''>Terms and Conditions</a>
                    <a href=''>Legal notice</a>
                </div>
                <hr/>
                <p style={{color:'#7e7e7e', fontFamily:'monospace',fontSize:'0.8rem'}}>© Alla Moda 2023. ALL RIGHTS RESERVED.</p>
        </div>
     );
}
 
export default Footer;