import React from 'react';
import MIDISounds from 'midi-sounds-react';

import { Chord } from 'tonal';

const notesDict = {
  'Cb': 11,
  'C': 0,
  'C#': 1,
  'Db': 1,
  'D': 2,
  'D#': 3,
  'Eb': 3,
  'E': 4,
  'E#': 5,
  'Fb': 4,
  'F': 5,
  'F#': 6,
  'Gb': 6,
  'G': 7,
  'G#': 8,
  'Ab': 8,
  'A': 9,
  'A#': 10,
  'Bb': 10,
  'B': 11,
  'B#': 0
}

export default class ChordsPlayground extends React.Component {
  playChord = (key, chord) => {
    let chordNotes = Chord.notes(key, chord);
    for (var note of chordNotes) {
      this.midiSounds.playChordNow(3, [4 * 12 + notesDict[note]], 2.5);
    }
  }

  render() {
    return (
      <div>
        <h3>List of Chords in C key.</h3>

        {
          Chord.names().map((chord, index) =>
            <div key={index}>
              <button
                onClick={() => this.playChord("C", chord)}
                className={'note-button'}
              >
                C {chord}
              </button>
              :
              {
                Chord.notes("C", chord).map((note, index) =>
                  <b key={index}> {note} </b>
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