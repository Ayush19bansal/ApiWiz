import React, { useState } from 'react';
import { useNavigate,NavLink } from "react-router-dom";



function Text() {

 

  let lists=[{
    name: "Word Input",
    link:"/"
},
{
    name: "Paragraph",
    link:"/paragraph"
},

]
  const [activeTab, setActiveTab] = useState('WordInput');
  const navigate = useNavigate();

  const handleTabClick = (tab) => {
    setActiveTab(tab);
    if(tab==="WordInput"){
      navigate("/");
    }
    else{
      navigate("/paragraph");
    }
  };

  return (
    <div >
       
      <h1 className='h1'>Text Analyzer</h1>
      <p className='p'>Text Analyzer is a simple free online tool for SEO web content analysis that helps you find most frequent phrases and words, number of characters, words, sentences and paragraphs, and estimated read and speak time of your content.</p>
      <div className='mainbutton'>
      {lists.map((list)=>(
           <div className='buttons'><NavLink exact to={list.link} className={window.location.pathname === list.link ? 'active' : 'buttons'}>{list.name}</NavLink></div>
            
        ))}
      </div>
    </div>
  );
}

export default Text;
