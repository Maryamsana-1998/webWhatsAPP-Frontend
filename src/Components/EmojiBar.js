import {HiEmojiSad, HiEmojiHappy} from 'react-icons/hi'
import Picker from 'emoji-picker-react';
import {useState} from 'react';

const EmojiBar=()=>{
    var mystyle = require('../MainStyles');
    const [chosenEmoji, setChosenEmoji] = useState(null);

    const onEmojiClick = (event, emojiObject) => {
    setChosenEmoji(emojiObject);}
    return(
        <>
             <Picker onEmojiClick={onEmojiClick} pickerStyle={{ width: '100%' }} />
        </>
    )

};

export default EmojiBar;