import { useEffect, useState } from "react";

function EmojiInput({setFilteredEmoji, data}) {
    const [findWords, setFindWords] = useState("")
    const filterByFindWords = () => {
        let newEmoji = []

        data.forEach((emoji) => {
            if((emoji.title.toLowerCase().includes(findWords.toLowerCase())) || (emoji.keywords.toLowerCase().includes(findWords.toLowerCase()))) {
                newEmoji.push(emoji)
            }
        });
        setFilteredEmoji(newEmoji)
    }

    useEffect(() => {
        if (findWords.length > 0) {
            filterByFindWords()
        } else {
            setFindWords("")
        }
    }, [findWords])
    return ( 
        <div className="main-bottom__content">
            <input placeholder="Placeholder" id="main-bottom__input" className="main-bottom__input" type="text" onChange={(findWords) => {setFindWords(findWords.target.value)}} />
        </div>
    );
}

export default EmojiInput