import './blogOne.css';
import blog from '../../imgs/blog.png';
import Card from 'react-bootstrap/Card';
import img from '../../imgs/artist1.jpg'

const BlogOne = () => {
    return ( 
        <div>
        <div className='main'>
            <div className="content">
                <img
                    src={blog}
                    height='450rem'
                    width='420rem'
                />
                <div className="cpt">
                    <p style={{fontSize:'2ch',fontFamily:'monospace'}}>FOUNDER, LEAD DESIGNER</p>
                    <p style={{fontSize:'2.5ch', color:'black', fontFamily:'monospace'}}>MARIEUX VAN DEN BROEK</p>
                    <p>Marieux Van Den Broek is not simply an architect; he is better described as a dream maker, and a composer of interiors. His designs are emotional, compelling, mysterious, and dreamy. <br/> <br/>
                        Born and raised in The Netherlands; he always had a deep passion for design and architecture, and wanted to push the boundaries of what was traditionally expected in these fields. Marieux's reputation soon grew beyond the borders of his native Netherlands - where his headoffice still remains - as he opened an office in Monaco, where he settled and integrated into the local culture for 14 prosperous years. He also opened another flourishing office in Qatar,
                        and has now inaugurated his newest office in Dubai, cementing his international status as a leader in the architecture and interior design world</p>
                    
                    <Card>
                    <Card.Body>
                        <blockquote className="blockquote mb-0">
                        <p style={{fontSize:'2ch', color:'black', fontFamily:'monospace',color:'#989898', borderLeft:'5px solid black', paddingLeft: '1.2rem'}} >
                            {' '}
                            DESIGNING IS NOT JUST A JOB, IT'S A PASSION THAT GIVES ME WINGS{' '}
                        </p>
                        </blockquote>
                    </Card.Body>
                </Card>
                </div>
            </div>
        </div>
        <div className="main">
        <div className="content">
                <div className="cpt">
                    <p style={{fontSize:'2ch',fontFamily:'monospace'}}>FOUNDER, LEAD DESIGNER</p>
                    <p style={{fontSize:'2.5ch', color:'black', fontFamily:'monospace'}}>MY LEGACY LIVES ON WITH TREASURES,<span style={{fontSize:'2.2ch', color:'#989898', fontFamily:'monospace'}}>WHERE WE CREATE BEAUTY AND MANIFEST DREAMS, LEAVING OUR CLIENTS SPELLBOUND</span></p>
                    <p>Marieux creates pieces that transcend time and space. His designs are known to leave an indelible mark on the world of luxury; from majestic mansions nestled in the French Riviera, to lavish chalets in Courchevel and luxurious palaces in the Middle East, his all-encompassing designs are realised around the entire globe.<br/> His motto is simple, yet powerful: "In anyone's life, it turns around service, quality, and to do what you promise." It is a motto he has lived by both in his professional and personal life. Marieux Van Den Broek cares about people, wanting to create experiences that make them genuinely happy. Marieux is a man of experience who believes that evolution is about learning,
                     not copying. He loves travelling to different cities and embracing their distinct flavours, tastes, and smells, finding inspiration in their art and architecture.<br/>His philosophy is what makes him a successful designer of his time. Marieux is passionate about getting to know his clients: their life, journey, likes and dislikes, as well as their hopes and dreams. It’s only by understanding them on a deep level that he can create a space that truly reflects their personalities. For him, each client has their own "melody" and he is the composer, putting together an orchestra of designers and craftsmen to bring that melody to life.
                    </p>
                </div>
                <img
                    src={img}
                    height='550rem'
                    width='400rem'
                />
            </div>
        </div>
        </div>
     );
}
 
export default BlogOne;