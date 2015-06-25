'use strict';

var React = require('react-native');

var {
    StyleSheet,
    Text,
    View,
    Component,
    Image
   } = React;

var styles = StyleSheet.create({
    container: {
        marginTop: 75,
        alignItems: 'center'
    },
    title: {
      padding: 10,
      fontSize: 20,
    },
    date: {
      padding: 10,
      fontSize: 15,
      alignItems: 'flex-start'
    },
    bolded: {
      fontWeight: 'bold'
    },
    description: {
        padding: 10,
        fontSize: 15,
    }
});

class DsmDetail extends Component {
    render() {
        var dsm = this.props.dsm;
        var title = (typeof dsm.post_title !== 'undefined') ? dsm.post_title : '';
        var date = (typeof dsm.post_date !== 'undefined') ? dsm.post_date : '';
        var description = (typeof dsm.post_intel !== 'undefined') ? dsm.post_intel : '';
        return (
            <View style={styles.container}>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.date}>
                  <Text style={styles.bolded}>Date Published: </Text>
                  {date}
                </Text>
                <Text style={styles.description}>
                  <Text style={styles.bolded}>Actionable Intelligence: </Text>
                  {description}
                </Text>
            </View>
        );
    }
}

module.exports = DsmDetail;
