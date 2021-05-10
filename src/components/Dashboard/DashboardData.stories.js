import React from 'react'
import { View } from 'react-native'
import { storiesOf } from '@storybook/react-native'
import { withKnobs, object } from '@storybook/addon-knobs'
import Dashboard from '../Dashboard'

//import { FontAwesome } from 'react-native-vector-icons'
//import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome from 'react-native-vector-icons/dist/FontAwesome'
//import FontAwesome from 'react-native-vector-icons/Fonts/FontAwesome.ttf';

const Icon = ({ icon, item, background }) => (
  <FontAwesome
    name={icon}
    size={40}
    color={item.iconColor || (!item.background || !background ? '#3498db' : '#fff')}
    style={item.styleIcon}
  />
)

const data = [
  {
    name: 'Me',
    background: '#3498db',
    icon: (item, background) => Icon({ icon: 'user', item, background }),
    //icon: 'user',
    iconColor: '#0d47a1',
    rippleColor: '#000',
  },
  {
    name: 'Family',
    background: '#b71c1c',
    //icon: (item, background) => Icon({ icon: 'gratipay', item, background }),
    styleIcon: { color: '#0d47a1' },
  },
  {
    name: 'Lovely',
    background: '#ffeb3b',
    //icon: (item, background) => Icon({ icon: 'heart', item, background }),
  },
  {
    name: 'Team',
    background: '#4caf50',
    //icon: (item, background) => Icon({ icon: 'users', item, background }),
    styleName: { color: '#0d47a1', fontWeight: 'bold' },
  },
  {
    name: 'Friends',
    nameColor: '#3498db',
    background: '#02cbef',
    //icon: (item, background) => Icon({ icon: 'group', item, background }),
  },
  {
    name: 'Calendars',
    background: '#ff5722',
    //icon: (item, background) => Icon({ icon: 'calendar', item, background }),
  },
]

const card = ({ name }) => console.log('Card: ' + name)

storiesOf('Dashboard', module)
  .addDecorator(withKnobs)
  .add('example', () => (
    <View style={{ alignItems: 'center' }}>
      <Dashboard data={data} background={true} card={card} column={2} rippleColor={'#3498db'} />
    </View>
  ))
