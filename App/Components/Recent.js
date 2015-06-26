'use strict';

var React = require('react-native');
var DsmList = require('./DsmList');

var {
    StyleSheet,
    NavigatorIOS,
    Component
   } = React;

var styles = StyleSheet.create({
    container: {
        flex: 1
    }
});

class Recent extends Component {
    render() {
        return (
            <NavigatorIOS
                style={styles.container}
                initialRoute={{
            title: 'Recent DSM Events',
            component: DsmList
            }}/>
        );
    }
}

module.exports = Recent;
