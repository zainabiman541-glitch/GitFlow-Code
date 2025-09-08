import { Text, FlatList} from 'react-native'
import React from 'react'
import {users} from './userContactInfo.js'
import {styles} from './stylesScreen.js'
import ContactItem from '../../components/ContactItem'
const ContactListScreen = () => {
const renderItems=({item})=><ContactItem name={item.Name} email={item.Email}/>
  return (
    <FlatList
         data={users}
         renderItem={renderItems}
         keyExtractor={(item)=>item.ID}
         ListHeaderComponent={<Text style={styles.heading}> CONTACTS</Text>}
         contentContainerStyle={styles.list}
         />
  );
}

export default ContactListScreen