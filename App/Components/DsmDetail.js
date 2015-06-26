'use strict';

var React = require('react-native');

var {
    StyleSheet,
    Text,
    View,
    Component,
    Image,
    ScrollView
   } = React;

var styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'flex-start'
    },
    title: {
      padding: 10,
      fontSize: 20,
      alignItems: 'flex-end'
    },
    date: {
      padding: 10,
      fontSize: 15
    },
    tag: {
      paddingLeft: 10,
      paddingRight: 10,
      fontSize: 15
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
        var drug = (typeof dsm.topics_drug !== 'undefined') ? dsm.topics_drug : '';
        var drugclass = (typeof dsm.topics_drugclass !== 'undefined') ? dsm.topics_drugclass : '';
        var indication = (typeof dsm.topics_indication !== 'undefined') ? dsm.topics_indication : '';
        var mechanism = (typeof dsm.topics_mechanism !== 'undefined') ? dsm.topics_mechanism : '';

        return (
            <View style={styles.container}>
              <ScrollView>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.date}>
                  <Text style={styles.bolded}>Date Published: </Text>
                  {date}
                </Text>
                <Text style={styles.tag}>
                  <Text style={styles.bolded}>Drugs: </Text>
                  {drug}
                </Text>
                <Text style={styles.tag}>
                  <Text style={styles.bolded}>Drugclass: </Text>
                  {drugclass}
                </Text>
                <Text style={styles.tag}>
                  <Text style={styles.bolded}>Indication: </Text>
                  {indication}
                </Text>
                <Text style={styles.tag}>
                  <Text style={styles.bolded}>Mechanism: </Text>
                  {mechanism}
                </Text>
                  <Text style={styles.description}>
                    <Text style={styles.bolded}>Actionable Intelligence: </Text>
                    {description}
                  </Text>
                </ScrollView>
            </View>
        );
    }
}

module.exports = DsmDetail;
