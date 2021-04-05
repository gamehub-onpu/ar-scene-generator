import React from 'react';
import { FOOTER_PATTERN_SECOND,FOOTER_PATTERN_FIRST, FOOTER_PATTERN_THIRD,FOOTER_PATTERN_FOURTH,FOOTER_PATTERN_FITH,FOOTER_PATTERN_N1,FOOTER_PATTERN_N2,FOOTER_PATTERN_N3} from '../ts/config';

class Footer extends React.Component {
    render() {
        return <div className='footer'>

            <div className='alert alert-dismissible alert-info custom-FOOTER_PATTERN_FIRST custom-FOOTER_PATTERN_FOURTH custom-FOOTER_PATTERN_FITH'>
                <ul>
                <li>{FOOTER_PATTERN_FIRST}
                <b><a href="https://jeromeetienne.github.io/AR.js/three.js/examples/marker-training/examples/generator.html" target="_blank">{FOOTER_PATTERN_SECOND}</a></b>
                {FOOTER_PATTERN_THIRD}</li>
                <li>{FOOTER_PATTERN_FOURTH} </li>
                </ul>
                <h4>{FOOTER_PATTERN_FITH}</h4>
                <ol>
                <li>{FOOTER_PATTERN_N1}<br></br></li>
                <li>{FOOTER_PATTERN_N2}<br></br></li>
                <li>{FOOTER_PATTERN_N3}</li>
                </ol>    
            </div>
        </div>;
    }
}
export default Footer;