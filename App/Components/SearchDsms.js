'use strict';

var React = require('react-native');
var Search = require('./Search');
var Dashboard = require('./Dashboard');
var api = require('../Utils/api');

var {
    View,
    Text,
    StyleSheet,
    NavigatorIOS,
    Component,
    TextInput,
    TouchableHighlight,
    ActivityIndicatorIOS
   } = React;

var styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    padding: 30,
    marginTop: 65,
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: '#48BBEC'
  },
  title: {
    marginBottom: 20,
    fontSize: 25,
    textAlign: 'center',
    color: '#fff'
  },
  searchInput: {
    height: 50,
    padding: 4,
    marginRight: 5,
    fontSize: 23,
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 8,
    color: 'white'
  },
  buttonText: {
    fontSize: 18,
    color: '#111',
    alignSelf: 'center'
  },
  button: {
    height: 45,
    flexDirection: 'row',
    backgroundColor: 'white',
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 10,
    marginTop: 10,
    alignSelf: 'stretch',
    justifyContent: 'center'
  },
});

class SearchDsms extends Component {
  constructor(props) {
    super(props);
    this.state = {
      keyword: '',
      isLoading: false,
      error: false
    }
  }

  handleChange(event){
    this.setState({
      keyword: event.nativeEvent.text
    });
  }

  handleSubmit() {
    console.log('SUBMITTED', this.state.keyword);
    this.setState({
      isLoading: true
    });
    api.getBio(this.state.keyword)
      .then((res) => {
        if(res.message === 'Not Found') {
          this.setState({
            error: 'User not found',
            isLoading: false
          })
        } else {
          console.log(res);
          this.props.navigator.push({
            title: res.name || "Select an Option",
            component: Dashboard,
            passProps: {userInfo: res}
          });
          this.setState({
            isLoading: false,
            error: false,
            keyword: ''
          })
        }
      });
  }

  render() {
      return (
        <View style={styles.mainContainer}>
          <Text style={styles.title}>Search for a DSM Event</Text>
        <TextInput
          style={styles.searchInput}
          value={this.state.keyword}
          onChange={this.handleChange.bind(this)} />
          <TouchableHighlight
            style={styles.button}
            onPress={this.handleSubmit.bind(this)}
            underlayColor="white">
            <Text style={styles.buttonText}> SEARCH </Text>
          </TouchableHighlight>
        </View>
    );
  }
}

module.exports = SearchDsms;
