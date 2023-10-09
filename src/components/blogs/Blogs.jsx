import Cardd from './card/Cardd';
import Cover from './cover/Cover';
import BlogOne from './blogOne/BlogOne';
import Footer from '../footer/Footer';
import ControlledCarousel from './carousel/ControlledCarousel';
import NavBar from '../navbar/NavBar';

const Blogs = () => {
    return (  
        <div className="blogs">
            <NavBar/>
            <ControlledCarousel/>
            <BlogOne/>
            <Cardd/>
            <Footer/>
        </div>
    );
}
 
export default Blogs;