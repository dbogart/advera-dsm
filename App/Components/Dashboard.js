var React = require('react-native');

var {
    Text,
    View,
    Component,
    StyleSheet
} = React;

var styles = StyleSheet.create({
  container: {
    marginTop: 65,
    flex: 1
  },
  image: {
    height: 350,
  },
  buttonText: {
    fontSize: 24,
    color: 'white',
    alignSelf: 'center'
  }
});

class Dashboard extends Component {
  render(){
    return (
      <View style={styles.container}>
        <Text> This is the dashboard </Text>
      </View>
    )
  }
}

module.exports = Dashboard;
