import React from 'react';
import { StyleSheet, Text, View, Button, FlatList, SectionList } from 'react-native';

class Todo extends React.Component {
        
    static navigationOptions = {
        title: 'To Do',
      };
    
    renderRow = ({ item }) => 
        (<View style={styles.row}> 
            <Text>{item.text}</Text> 
        </View>
       )
    
    renderSectionHeader = ({ section }) => 
        (<View style={styles.header}> 
            <Text>{section.title}</Text> 
        </View>
     )
    
    render() {
        return (
            <SectionList
                style={styles.container}
                sections={sections}
                renderItem={this.renderRow}
                renderSectionHeader={this.renderSectionHeader}
            />
        );
    }
}

const sections = [ 
    { id: 0, title: 'Section 1', data: [{ id: 0, text: 'Item 1' }, { id: 1, text: 'Item 2' }] },
    { id: 1, title: 'Section 2', data: [{ id: 3, text: 'Item 4' }, { id: 4, text: 'Item 5' }] }
    ];
    

const styles = StyleSheet.create({
    row: { 
        padding: 15, 
        marginBottom: 5,
        backgroundColor: 'skyblue' 
    },
    container: {
        backgroundColor: 'blue'
    },
    header: {
        padding: 15, 
        marginBottom: 5,
        backgroundColor: 'pink'
     }

});

export default Todo;
