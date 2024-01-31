import EmojiCard from "../emoji-card/emoji-card";

function EmojiList({data}) {
    return ( 
        <div class="main-bottom__cards">
            {data.map((card)=>{
                return <EmojiCard
                    symbol={card.symbol}
                    title={card.title}
                    keywords={card.keywords}
                />

            })}
        </div>
    );
}

export default EmojiList;