import React from 'react';

class Viewer extends React.Component {
    render() {
        const { words } = this.props;
        return <div className="viewerWrapper">
            <p>Since you'll most likely be on your computer for <span className="mad-word">{words.number_1} </span> hours a day,
                it's very important that you learn how to type quickly. That way, you'll
        be able to finish your research project on <span className="mad-word">{words.foreign_country}</span> <span className="mad-word">{words.adverb}</span> and amaze your
        friends with your <span className="mad-word">{words.ing_verb_1}</span> skills!</p>
            <p>Since my <span className="mad-word">{words.body_part_1}</span> would never land on the <span className="mad-word">{words.plural_noun_1}</span> correctly, I decided to take a
        keyboarding class at my local <span className="mad-word">{words.building}</span>. My teacher was <span className="mad-word">{words.adjective}</span>! The first thing
        he told me was to properly position my <span className="mad-word">{words.body_part_2}</span> on the keyboard. Then he showed me
        how to move my <span className="mad-word">{words.body_part_2}</span> to be able to type actual <span className="mad-word">{words.plural_noun_3}</span>!</p>
            <p>I practiced my <span className="mad-word">{words.ing_verb_2}</span> skills every night until I could type <span className="mad-word">{words.number_2}</span> words a
        minute! All of my <span className="mad-word">{words.plural_noun_4}</span> are so jealous -- I <span className="mad-word">{words.verb}</span> so fast that I am always the
        first one to finish typing my <span className="mad-word">{words.plural_noun_3}</span> for <span className="mad-word">{words.language}</span> class. All of those hours of
        hard <span className="mad-word">{words.noun}</span> were worth it.</p>
        </div>
    }
}
export default Viewer;