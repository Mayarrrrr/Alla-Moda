import Card from 'react-bootstrap/Card';
import './cardd.css';
import { useState } from "react";
import qual from '../../imgs/qual.png';
import erv from '../../imgs/erv.png';
import prom from '../../imgs/prom.png';
import slice from '../../imgs/core-values.jpg'

const Cardd = () => {

    return ( 
        <div >
            <div style={{display:'flex', flexDirection:'row', alignItems:'center', justifyContent:'center'}}>
                <span class="line"></span><h2> CORE VALUES</h2><span class="line"></span> 
           </div>
           <div className="img-slice">
                <img 
                src={slice}
                />
                <p>
                We at Alla Moda International believe that success comes from following a set of principles that become core values. The years of experience, art, and workmanship that the creator of dreams, Marieux Van Den Broek, bestowed upon us have shaped our approach to design and guided us in delivering exceptional projects to each of our clients.<br/>
                Treasures International is built upon three key values: quality, service, and keeping our promises. These values are deeply embedded in every design process, ensuring that everything we create reflects our commitment to excellence.
                </p>
           </div>
            <div className="main">
                <div className='flip-container'>
                <div className="flipper">
                <Card style={{ width: '25rem' , height:'25rem'}} className='front'>
                    <Card.Body>
                        <Card.Title>QUALITY</Card.Title>
                        <Card.Text>
                        Quality is the cornerstone of our brand. Treasures International’s teams are known for their attention to detail, masterful craftsmanship, and exclusive use of the finest materials. From raw sketches to the final execution, we strive for perfection in every aspect of our work.
                        Our commitment to quality is unwavering as it guides every step of our decision-making process. We maintain high standards, always challenging ourselves to improve our skills. At Treasure International, we don’t just build projects; we sculpt dreams into reality, forging bespoke creations that radiate happiness in the lives of our valued clients.
                        </Card.Text>
                    </Card.Body>
                    </Card>
                    <Card className='back'>
                        <Card.Img
                        src={qual}
                        style={{ width: '25rem' , height:'25rem'}}
                        />
                    </Card>
                    </div>
                    </div>

                    <div className='flip-container'>
                <div className="flipper">
                <Card style={{ width: '25rem' , height:'25rem'}} className='front'>
                    <Card.Body>
                        <Card.Title>SERVICE</Card.Title>
                        <Card.Text>
                        Alla Moda International is dedicated to providing a high-end service. We understand that for a design to be exceptional, it needs to reflect our customer's specific needs and cater to their unique experiences. From the moment we meet with our customer, we strive to provide the utmost professionalism and attentiveness. Through open and transparent communication, we get to know our client, as well as their story, hopes, and desires. Our teams go above and beyond, collaborating together to seamlessly execute our clients’ vision.
                        </Card.Text>
                    </Card.Body>
                    </Card>
                    <Card className='back'>
                        <Card.Img
                        src={erv}
                        style={{ width: '25rem' , height:'25rem'}}
                        />
                    </Card>
                    </div>
                    </div>

                    <div className='flip-container'>
                <div className="flipper">
                <Card style={{ width: '25rem' , height:'25rem'}} className='front'>
                    <Card.Body>
                        <Card.Title>KEEPING OUR PROMISE</Card.Title>
                        <Card.Text>
                        Keeping our promise and staying true to our word is the backbone of Treasures International's reputation. Successful designs require intimacy, respect, and trust, values that we embrace with a zealous passion. When we commit to our clients, we stand by them; every action we take to complete a project reflects our promise. Treasure International strives to build long-lasting relationships based on mutual respect, credibility, and satisfaction of our clients. Our designs are the symphony and our promise is the harmony that makes our legacy echo through the ages.
                        </Card.Text>
                    </Card.Body>
                    </Card>
                    <Card className='back'>
                        <Card.Img
                        src={prom}
                        style={{ width: '25rem' , height:'25rem'}}
                        />
                    </Card>
                    </div>
                    </div>

            </div>
        </div>
     );
}
 
export default Cardd;