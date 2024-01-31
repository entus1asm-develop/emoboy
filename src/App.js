import { useState } from 'react';
import './App.css';
import EmojiInput from './components/emoji-input/emoji-input';
import EmojiList from './components/emoji-list/emoji-list';
import Header from './components/header/header';

import {data} from "./data/emoji.js"

function App() {
  const [filteredEmoji, setFilteredEmoji] = useState(data);
  return (
    <div className="wrapper">
      <main class="main">
        <Header />
        <section class="main-bottom">
                <div class="main-bottom__container">
                  <EmojiInput setFilteredEmoji={setFilteredEmoji} data={data} />
                  <EmojiList data={filteredEmoji}/>
                </div>
            </section>
      </main>
    </div>
  );
}

export default App;
