import React from 'react';
import '../componentStyles/footer.css';
import image from '../components/github.png';
const footer = () => {
    return <footer className="footer">
        <a href='https://github.com/bakernoodles' target="_blank" ><img alt='Github Logo' src={image}/></a>
        </footer>
   
}
export default footer;