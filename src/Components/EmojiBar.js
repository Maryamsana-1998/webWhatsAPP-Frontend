
import Picker from 'emoji-picker-react';
import { useState } from 'react';

const EmojiBar = () => {
    const [chosenEmoji, setChosenEmoji] = useState(null);

    const onEmojiClick = (event, emojiObject) => {
        setChosenEmoji(emojiObject);
    }

    return (
        <>
            <Picker onEmojiClick={onEmojiClick} pickerStyle={{ width: '100%' }} />
        </>
    )

};

export default EmojiBar;