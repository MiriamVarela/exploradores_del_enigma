import Explorador from '../../assets/images/Explorador1_historia.png';
import './sitecard.css'
import PropTypes from 'prop-types';


function SiteCard({tittletext, storytext}){
    return(
        <> 
            <div>
                <h2>{tittletext}</h2>
                <div className='imgsite'>
                    <img className='exploradorstory' src={Explorador} alt="Explorador" />
                    <p className='site'>{storytext}</p>
                </div>
            </div>
            
            
        </>
       
    );
}

SiteCard.propTypes = {
    tittletext: PropTypes.string.isRequired,
    storytext: PropTypes.string.isRequired
  }

export default SiteCard