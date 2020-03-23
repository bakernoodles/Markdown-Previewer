import React, {useState} from 'react';
import './App.css';
import LeftPane from './components/leftPane';
import Footer from './components/Footer';
import RightPane from './components/RightPane';
import TopPane from './components/Header';


function App() {
  const[input, setInput] = useState(defaultMarkup);
  const handleChange = event => setInput(event.target.value);

  return (
    <div className="App">
      <TopPane/>
      <LeftPane 
        updateTxt={handleChange} 
        txtInput={input}/>
      <RightPane 
        txtInput={input}/>
      <Footer/>
    </div>
  );
}

export default App;

const defaultMarkup = `
# Welcome To The Markdown Previewer
## Type markdown text in the input box and preview it on the opposite side
### Headers can be easily added using the '#' character
> *Make text Italic by encapsulating it with* '*'
>> *Block quotes or tabs can be added using the '>' character*
>>> ~~Strike through text with the tilde character~~

This is a table:

| a | b | c | d |
|---|---|---|---|
| 1 | 2 | 3 | 4 |
| 5 | 6 | 7 | 8 |



- Unordered list are written
- Like this
  - And also like this
   1. Or this
   2. And that

\`\`\`javascript
//This is a JavaScript block code example.

function saySomething(something){
  console.log(something);
}
saySomething('Hello');

\`\`\`


And... Here's a cat!

![kitty picture](https://images-na.ssl-images-amazon.com/images/I/51oFBPFRJ5L.jpg)

*This project was created using the React &  marked libraries.* 
` 