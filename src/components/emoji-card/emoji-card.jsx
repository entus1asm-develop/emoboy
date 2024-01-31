function EmojiCard({symbol, title, keywords}) {
    return ( 
                                <div class="card-bottom">
                                    <div class="card-bottom__icon">{symbol}</div>
                                    <div class="card-bottom__value">{title}</div>
                                    <p class="card-bottom__text">{keywords}</p>
                                </div>
    );
}

export default EmojiCard;