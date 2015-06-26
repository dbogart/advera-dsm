'use strict';

var React = require('react-native');
var Recent = require('./App/Components/Recent');
var Search = require('./App/Components/Search');

var {
    AppRegistry,
    TabBarIOS,
    Component
   } = React;

class AdveraDsm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            selectedTab: 'recent'
        };
    }

    render() {
        return (
            <TabBarIOS selectedTab={this.state.selectedTab}>
                <TabBarIOS.Item
                    selected={this.state.selectedTab === 'recent'}
                    icon={{uri:'recents'}}
                    onPress={() => {
                        this.setState({
                            selectedTab: 'recent'
                        });
                    }}>
                    <Recent/>
                </TabBarIOS.Item>
                <TabBarIOS.Item
                    selected={this.state.selectedTab === 'search'}
                    icon={{uri:'search'}}
                    onPress={() => {
                        this.setState({
                            selectedTab: 'search'
                        });
                    }}>
                    <Search/>
                </TabBarIOS.Item>
            </TabBarIOS>
        );
    }
}

AppRegistry.registerComponent('AdveraDsm', () => AdveraDsm);
