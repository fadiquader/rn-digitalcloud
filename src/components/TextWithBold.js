import * as React from 'react';
import { Text, View } from 'react-native';

export class TextWithBold extends React.Component {
  _renderHighlightText = () => {
    const { value, filterValue } = this.props;
    const index = value.toLowerCase().indexOf(filterValue.toLowerCase());
    if (index >= 0) {
      return (
        <Text>
          {value.substring(0,index)}
          <Text style={{ fontWeight: 'bold', color: 'red' }}>{value.substring(index,index+filterValue.length)}</Text>
          {value.substring(index + filterValue.length)}
        </Text>
      );

    }
    return <Text>{value}</Text>
  }
  render() {
    return this._renderHighlightText();
  }
}
