import React, { Component } from 'react';
import { ListView, View } from 'react-native';

import { connect } from 'react-redux';
import { createStore } from 'redux';
import reducers from '../reducers';

import * as actions from '../actions';
import { Card, CardSection, Header, Button, TextInputBox } from './common';
import ListItem from './ListItem';

class LibraryList extends Component {
    
  constructor(props) {
    super(props);    
    state = { searchTerm: '', 
              update: false,
              dataSource: new ListView.DataSource({
                rowHasChanged: (row1, row2) => row1 !== row2,
              })
          };
     ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
        }); 
  }
        
    componentWillMount() {
        //debugger;

        this.setState({dataSource : ds.cloneWithRows(this.props.libraries)});
    }
    
    componentWillReceiveProps(nextProps) {
        console.log(nextProps);
        this.setState({
            dataSource : ds.cloneWithRows(nextProps.libraries),
            update: true});      
    }
    
    onSearch() {
        const { searchTerm } = this.state;
        console.log("Searching for .. " + searchTerm);
        this.props.findTerm(searchTerm);

        console.log("On Search()");
    }

    onSearch1(searchTerm) {
        
        this.setState({ searchTerm })
        console.log("Searching for 2 .. " + searchTerm);
        this.props.findTerm(searchTerm);

        console.log("On Search2()");
    }
    
    renderRow(library) {
        return <ListItem item={library} />;
    }

    renderButton() {
        return (
            <Button onPress={this.onSearch.bind(this)}>
                Search
            </Button>
        );
    }
    
    render() {
        console.log(this.state.dataSource);
        return (
            <View>
            <Card>
                <CardSection>
                    <TextInputBox 
                        label="Search: "
                        hint="Seek and You shall find it.."
                        autoCorrect={false}
                        value={this.state.searchTerm}
                        onChangeText={searchTerm => this.onSearch1(searchTerm) }
                     />
                </CardSection>

                <CardSection>
                    {this.renderButton()}
                </CardSection>
            </Card>

            <ListView
                dataSource={this.state.dataSource}
                renderRow={this.renderRow}
            />
            </View>
        );
    }

}

const mapStateToProps = state => { 
    console.log(state.libraries);
    return { libraries: state.libraries }; 
};

export default connect(mapStateToProps, actions)(LibraryList);
