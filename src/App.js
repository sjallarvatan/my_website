import React from 'react';
import './App.css';
import {Grid, Cell, Header, Layout, Card, CardTitle, CardActions, Button, Icon } from 'react-mdl';
import ucl_logo from './UCL_red.png'
import icl_logo from './ICL_red.png'
import mel_wet from './mel_wet.jpg'
import LI_tube from './LI_tube.jpg'

function App() {
  return (
    <div style={{width: '100%', margin: 'auto'}}>
     <Grid className="top-grid">
      <Cell col={12}>
        <div className="name_div">
          <Grid className="name-grid">
            <Cell col={12} className="name_col">
              <div className="main_marcus_box">
                 <h1 className="main_marcus">Marcus</h1>    
              </div>
            </Cell>
            <Cell col={12} className="name_col">  
              <div className="main_walker_box">
                <h1 className="main_walker">Walker</h1>
              </div>
            </Cell>
            <Cell col={12} className="name_col">
              <div>  
                <svg className="name_circle" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="50" cy="50" r="25%"/>
                </svg>
              </div>  
            </Cell>
              <Cell col={1} className="tag_col">
                <div className="orange_cell">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" preserveAspectRatio="xMidYMid meet"><defs></defs><title>Asset 2orange_cell</title><g id="Layer_2" data-name="Layer 2"><g id="parallax_elements"><rect class="cls-1" x="-64.92" y="64.92" width="189.09" height="59.25" rx="29.63" ry="29.63" transform="translate(124.17 64.92) rotate(90)"/></g></g></svg>
                </div>
              </Cell> 
              <Cell col={3} className="tag_col">
                <div className="tagline_box"> 
                  <h1 className="tagline">I try to make stuff with bacteria</h1>
                </div>
              </Cell>
              <Cell col={12} className="title_col_pro">
                <div className="title_box_pro">
                  <h2 className="titles">Projects</h2>
                </div>
              </Cell>
              <Cell col={6}>
                <div className="mel_box">
                  <img className="project_img" src={mel_wet}/>
                </div>
              </Cell>
              <Cell col={6}>
                <div className="LI_box">
                  <img className="project_img" src={LI_tube}/>
                </div>
              </Cell>
              <Cell col={12} className="title_col">
                <div className="title_box">
                  <h2 className="titles">Education</h2>
                </div>
              </Cell>
              <Cell col={12} className="uni_col">
                <div className="uni_box"> 
                  <h1 className="uni">PhD Synthetic Biology</h1>
                </div>
              </Cell>
              <Cell col={12} className="uni_col">
                <div className="uni_box_img_icl"> 
                  <img className="icl_logo_style" src={icl_logo} />
                </div>
              </Cell>
              <Cell col={12} className="uni_col">
                <div className="uni_box_date"> 
                  <h1 className="uni">2016 - ...</h1>                  
                </div>
              </Cell>
              <Cell col={12} className="uni_col">
                <div className="uni_box"> 
                  <h1 className="uni">MSci Biochemistry</h1>
                </div>
              </Cell>
              <Cell col={12} className="uni_col">
                <div className="uni_box_img_ucl"> 
                  <img className="ucl_logo_style" src={ucl_logo} />
                </div>
              </Cell>
              <Cell col={12} className="uni_col">
                <div className="uni_box_date"> 
                  <h1 className="uni">2012 - 2016</h1>                  
                </div>
              </Cell>
              <Cell col={12} className="title_col">
                <div className="title_box">
                  <h2 className="titles">Papers</h2>
                </div>
              </Cell>             
              <Cell col={12} className="paper_col">
                <div className="blue_stripes">
                  <svg xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet" viewBox="0 0 300 300"><defs></defs><title>Asset 9stripes</title><g id="Layer_2" data-name="Layer 2"><g transform="translate(70 60) rotate(25)" id="parallax_elements"><rect class="cls-1" width="94.3367" height="4.782"/><rect class="cls-1" y="7.347" width="94.3367" height="4.782"/><rect class="cls-1" y="14.6939" width="94.3367" height="4.782"/><rect class="cls-1" y="22.0409" width="94.3367" height="4.782"/><rect class="cls-1" y="29.3878" width="94.3367" height="4.782"/><rect class="cls-1" y="36.7348" width="94.3367" height="4.782"/><rect class="cls-1" y="44.0817" width="94.3367" height="4.782"/><rect class="cls-1" y="51.4287" width="94.3367" height="4.782"/><rect class="cls-1" y="58.7757" width="94.3367" height="4.782"/><rect class="cls-1" y="66.1226" width="94.3367" height="4.782"/><rect class="cls-1" y="73.4696" width="94.3367" height="4.782"/></g></g></svg>
                </div>              
                <div className="paper_box">
                  <h2 className="papers">Engineered cell‐to‐cell signalling within growing bacterial cellulose pellicles</h2>
                </div>
              </Cell>
              <Cell col={12} className="paper_col">
                <div className="yellow_stripes">
                  <svg xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet" viewBox="0 0 300 300"><defs></defs><title>Asset 9stripes</title><g id="Layer_2" data-name="Layer 2"><g transform="translate(10 160) rotate(325)" id="parallax_elements"><rect class="cls-1" width="94.3367" height="4.782"/><rect class="cls-1" y="7.347" width="94.3367" height="4.782"/><rect class="cls-1" y="14.6939" width="94.3367" height="4.782"/><rect class="cls-1" y="22.0409" width="94.3367" height="4.782"/><rect class="cls-1" y="29.3878" width="94.3367" height="4.782"/><rect class="cls-1" y="36.7348" width="94.3367" height="4.782"/><rect class="cls-1" y="44.0817" width="94.3367" height="4.782"/><rect class="cls-1" y="51.4287" width="94.3367" height="4.782"/><rect class="cls-1" y="58.7757" width="94.3367" height="4.782"/><rect class="cls-1" y="66.1226" width="94.3367" height="4.782"/><rect class="cls-1" y="73.4696" width="94.3367" height="4.782"/></g></g></svg>
                </div>               
                <div className="paper_box">
                  <h2 className="papers">Expression of the arsenite oxidation regulatory operon in Rhizobium sp. str. NT-26 is under the control of two promoters that respond to different environmental cues</h2>
                </div>
              </Cell>
              <Cell col={12} className="paper_col">
                <div className="red_stripes">
                  <svg xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet" viewBox="0 0 300 300"><defs></defs><title>Asset 9stripes</title><g id="Layer_2" data-name="Layer 2"><g transform="translate(80 30) rotate(70)" id="parallax_elements"><rect class="cls-1" width="94.3367" height="4.782"/><rect class="cls-1" y="7.347" width="94.3367" height="4.782"/><rect class="cls-1" y="14.6939" width="94.3367" height="4.782"/><rect class="cls-1" y="22.0409" width="94.3367" height="4.782"/><rect class="cls-1" y="29.3878" width="94.3367" height="4.782"/><rect class="cls-1" y="36.7348" width="94.3367" height="4.782"/><rect class="cls-1" y="44.0817" width="94.3367" height="4.782"/><rect class="cls-1" y="51.4287" width="94.3367" height="4.782"/><rect class="cls-1" y="58.7757" width="94.3367" height="4.782"/><rect class="cls-1" y="66.1226" width="94.3367" height="4.782"/><rect class="cls-1" y="73.4696" width="94.3367" height="4.782"/></g></g></svg>
                </div>               
                <div className="paper_box">
                  <h2 className="papers">Non-linearity of the collagen triple helix in solution and implications for collagen function</h2>
                </div>
              </Cell>                                                                                      
          </Grid>    
        </div>
      </Cell>
     </Grid>  
    </div>
  );
}

export default App;
