import React, { useState } from 'react';
import Text from './Text'

function Paragraph() {

  const [text, setText] = useState('');

  // Function to calculate metrics
 
    const numCharacters = text.length;
    const words = text.split(' ').filter(word => word !== '');
    const numWords = words.length;
    const sentences = text.split('.').filter(sentence => sentence !== '');
    const numSentences = sentences.length;
    const paragraphs = text.split('\n').filter(paragraph => paragraph !== '');
    const numParagraphs = paragraphs.length;
    const numSpaces = text.split(' ').length - 1;
    const punctuations = text.split('').filter(char => /[^\w\s]/.test(char));
    const numPunctuations = punctuations.length;

  return (
    <div className='paragraph'>
      <Text/>
      <textarea type='text' placeholder="Type, or copy/paste  your content here." onChange={(e) => setText(e.target.value)} className='parainput'/> <br/>

      <div className='countercontainer'>
        <div>
          <p className='cont'>Characters</p>
          <p className='cont'>{numCharacters}</p>
        </div>
        <div>
          <p className='cont'>Words</p>
          <p className='cont'>{numWords}</p>
        </div>
        <div>
          <p className='cont'>Sentences</p>
          <p className='cont'>{numSentences}</p>
        </div>
        <div>
          <p className='cont'>Paragraphs</p>
          <p className='cont'>{numParagraphs}</p>
        </div>
        <div>
          <p className='cont'>Spaces</p>
          <p className='cont'>{numSpaces}</p>
        </div>
        <div>
          <p className='cont'>Punctuations</p>
          <p className='cont'>{numPunctuations}</p>
        </div>

      </div>
    </div>
  )
}

export default Paragraph
