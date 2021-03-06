import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  Navigator,
  Image
} from 'react-native';

class Main extends Component {
  render() {
    return (
        <Navigator
          renderScene={this.renderScene.bind(this)}
          />

      );

  }
  renderScene(){
    return (
      <View style={styles.container}>
        <Image
          style={styles.icon}
          source={require('../Images/stetoscope-banana.png')}
        />
        <Text style={styles.title}>
          Dr. Dick
        </Text>
        <Text style={styles.subtitle}>
          Our Dick Helps Keep Yours Healthy
        </Text>
        <TouchableHighlight underlayColor={"#ffffff"}
          onPress={this.props.nextRoute.bind(this, { id: 'Setup', title: 'Setup' })}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>Get Started</Text>
          </View>      
        </TouchableHighlight>
        <Text style={{fontSize: 16, paddingTop: 20, color: '#777'}}>Already have an account?</Text>

        <Text style={{fontSize: 16, paddingTop: 5, color: 'blue'}}>Login</Text>

      </View>
        );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 50,
    textAlign: 'center',
    margin: 10,
  },
  subtitle: {
    textAlign: 'center',
    color: '#777777',
    marginBottom: 30,
    marginLeft: 10, 
    marginRight: 10,
    fontSize: 18
  },
  button: {
    paddingTop: 20,
    paddingBottom: 20,
    paddingLeft: 40,
    paddingRight: 40,
    alignItems: 'center',
    backgroundColor: '#00bbbb',
    borderRadius: 50,
  },
  buttonText: {
    color: '#fff',
    fontSize: 25
  },
  icon: {
    height: 150,
    width: 150,
    overflow: 'visible'
  }
});

export default Main
