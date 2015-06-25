'use strict';

var React = require('react-native');
var DsmDetail = require('./DsmDetail');
var REQUEST_URL = 'http://dev.adverseevents.io/lev/index/dsm/10';

var {
    Image,
    StyleSheet,
    Text,
    View,
    Component,
    ListView,
    TouchableHighlight,
    ActivityIndicatorIOS
   } = React;

var styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
        padding: 10
    },
    thumbnail: {
        width: 53,
        height: 81,
        marginRight: 10
    },
    rightContainer: {
        flex: 1
    },
    title: {
        fontSize: 20,
        marginBottom: 8
    },
    date: {
        color: '#656565'
    },
    separator: {
         height: 1,
         backgroundColor: '#dddddd'
    },
    listView: {
       backgroundColor: '#F5FCFF'
    },
    loading: {
       flex: 1,
       alignItems: 'center',
       justifyContent: 'center'
    }
});

class DsmList extends Component {
  constructor(props) {
       super(props);
       this.state = {
           isLoading: true,
           dataSource: new ListView.DataSource({
               rowHasChanged: (row1, row2) => row1 !== row2
           })
       };
   }

  componentDidMount() {
       this.fetchData();
   }

   fetchData() {
       fetch(REQUEST_URL)
       .then((response) => response.json())
       .then((responseData) => {
           this.setState({
               dataSource: this.state.dataSource.cloneWithRows(responseData.posts),
               isLoading: false
           });
       })
       .done();
   }

  showDsmDetail(dsm) {
       this.props.navigator.push({
           title: dsm.title,
           component: DsmDetail,
           passProps: {dsm}
       });
   }

  renderDsm(dsm) {
       return (
            <TouchableHighlight onPress={() => this.showDsmDetail(dsm)}  underlayColor='#dddddd'>
                <View>
                    <View style={styles.container}>
                        <View style={styles.rightContainer}>
                            <Text style={styles.title}>{dsm.post_title}</Text>
                            <Text style={styles.author}>{dsm.post_date}</Text>
                        </View>
                    </View>
                    <View style={styles.separator} />
                </View>
            </TouchableHighlight>
       );
   }

  render() {
         if (this.state.isLoading) {
             return this.renderLoadingView();
         }

         return (
              <ListView
                  dataSource={this.state.dataSource}
                  renderRow={this.renderDsm.bind(this)}
                  style={styles.listView} />
          );
  }

  renderLoadingView() {
      return (
          <View style={styles.loading}>
              <ActivityIndicatorIOS
                  size='large'/>
              <Text>
                  Loading dsm events...
              </Text>
          </View>
      );
  }
}

module.exports = DsmList;
