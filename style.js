import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  'import': '"https://fonts.googleapis.com/css?family=Comfortaa:300,700|Bungee+Shade|Josefin+Sans:400"',
  'html': {
    'backgroundColor': '#eee'
  },
  'html': {
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }]
  },
  'body': {
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }]
  },
  'body': {
    'counterReset': 'section'
  },
  'wrapper': {
    'width': [{ 'unit': 'px', 'value': 1170 }],
    'margin': [{ 'unit': 'px', 'value': 30 }, { 'unit': 'string', 'value': 'auto' }, { 'unit': 'px', 'value': 30 }, { 'unit': 'string', 'value': 'auto' }],
    'boxSizing': 'border-box'
  },
  'box': {
    'borderRadius': '3px',
    'backgroundColor': '#ffffff',
    'boxShadow': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 1 }, { 'unit': 'px', 'value': 3 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'rgba(0, 0, 0, 0.06)' }]
  },
  'hero-fashion > box': {
    'width': [{ 'unit': 'px', 'value': 1170 }],
    'height': [{ 'unit': 'px', 'value': 505 }],
    'marginBottom': [{ 'unit': 'px', 'value': 30 }]
  },
  'row': {
    'display': 'grid',
    'gridTemplateColumns': '1fr 1fr 1fr 1fr',
    'gridAutoRows': '238px',
    'gridGap': '30px'
  },
  'tall-span': {
    'gridRow': 'span 2'
  },
  'wide-span': {
    'gridColumn': 'span 2'
  }
});
