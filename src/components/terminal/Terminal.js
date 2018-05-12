import React, { Component } from 'react'
import {Icon} from 'semantic-ui-react'
import TypingEffect from 'typing-effect-react'
import './Terminal.css'

const TYPE_EFFECT_LIST = [
  'Wow this homepage is so cool',
  'I\'ve totally never seen a fake terminal in a personal website before',
  'Super creative... I like this Craig guy',
  'Pretty lame that the text repeats though...'
]

class Terminal extends Component {
  render() {
    return (
      <div
        className='terminal'
        style={this.props.style}
      >
        <div
          className='toolbar'
        >
          Terminal
          <div className='buttons'>
            <Icon name='minus'/>
            <Icon name='window maximize'/>
            <Icon name='close'/>
          </div>
        </div>
        <div
          className='workspace'
        >
          craig> <TypingEffect data={TYPE_EFFECT_LIST} pauseBeforeDeleting={2000}/>
        </div>
      </div>
    );
  }
}

export default Terminal;
