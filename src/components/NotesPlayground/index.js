import React from 'react';
import MIDISounds from 'midi-sounds-react';

import './NotesPlayground.css';

const notes = {
  'C': 0,
  'C#': 1,
  'D': 2,
  'D#': 3,
  'E': 4,
  'F': 5,
  'F#': 6,
  'G': 7,
  'G#': 8,
  'A': 9,
  'A#': 10,
  'B': 11
};

const octaves = [1, 2, 3, 4, 5, 6, 7, 8];

export default class NotesPlayground extends React.Component {
  playNote = (octave, pitch) => {
    this.midiSounds.playChordNow(3, [octave * 12 + pitch], 2.5);
  }

  render() {
    return (
      <div>
        {
          octaves.map((octave, index) =>
            <div key={index}>
              <p>Octave {octave}</p>
              {
                Object.keys(notes).map((key, pitch) =>
                <button
                  onClick={() => this.playNote(octave - 1, pitch)}
                  key={pitch}
                  className={"note-button"}
                >
                  {key}
                </button>
                )
              }
            </div>
          )
        }

        <MIDISounds
          ref={(ref) => (this.midiSounds = ref)}
          appElementName="root"
          instruments={[3]} />
      </div>
    );
  }
}