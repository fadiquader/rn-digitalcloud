import * as React from 'react';
import { View, StyleSheet, Button, Image } from 'react-native';
import ImagePicker from 'react-native-image-picker';

export class MyImagePicker extends React.Component {
  state = {
    image: null
  }
  handlePickImage = () => {
    const options = {
      title: 'Select Place Image',
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };
    ImagePicker.showImagePicker(options, (response) => {
      console.log('Response = ', response);

      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      }
      else {
        // const source = { uri: response.uri };
        const base64 = 'data:image/jpeg;base64,' + response.data
        this.setState({
          image: base64
        });

        this.props.onPickImage(base64)
        // You can also display the image using data:
        // const source = { uri: 'data:image/jpeg;base64,' + response.data };
      }
    });
  }
  render() {
    const { image } = this.state;
    return (
      <View style={styles.imageContainer}>
        <View style={styles.imageView}>
          {
            image &&
              <Image source={{ uri: image }} style={{ width: '100%', height: `100%` }} />
          }
        </View>
        <Button title='Pick an Image' onPress={this.handlePickImage} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  imageContainer: {
    height: 300
  },
  imageView: {
    flex: 1,
    backgroundColor: '#b5b5b5'
  }
})
