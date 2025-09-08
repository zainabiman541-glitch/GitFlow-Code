import React, { Component } from 'react'
import { Button, Text, View } from 'react-native'
import SecondClass from './SecondClass'

class ClassComponent extends Component {
    constructor(){
        super();
        this.state={
        myName:'ZAINAB',
    };
};
    updateName=()=>{
        this.setState({myName: 'ZAINAB IMAN'})
    }
      render() {
        const Age= 19;
        return(
          <View>
             <Text style={{ fontSize: 30 , fontStyle:'italic'}}> NAME: {this.state.myName}</Text>
              <SecondClass Data={Age}/>
             <Button title='Update Name' onPress={this.updateName}/>
            
          </View>
        );
      };
};
export default ClassComponent;