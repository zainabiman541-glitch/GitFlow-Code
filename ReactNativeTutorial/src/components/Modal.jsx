import { View, Text, TouchableOpacity, StyleSheet, Modal } from 'react-native'
import React, { useState } from 'react'

const ModalBox = () => {
    const [modalView, setModalView]=useState(false)
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.openButton} onPress={()=>setModalView(true)}>
        <Text style={styles.buttontxt}>Show Modal</Text>
      </TouchableOpacity>
      <Modal
      visible={modalView}
      animationType='fade'
      transparent={true}
      onRequestClose={()=>setModalView(false)}
      > 
        <View style={styles.modalOverLay}>
            <View style={styles.modalView}>
                <Text style={styles.modalHeading}>Your`s Modal</Text>
                <Text style={styles.modaltxt}>You can viewv your modal here</Text>
                <TouchableOpacity style={styles.closeButton} onPress={()=>setModalView(false)}>
                    <Text style={styles.closeButtontxt}>close</Text>
                </TouchableOpacity>
            </View>
        </View>
      </Modal>
    </View>
      
  )
}
const styles=StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'rgba(156, 156, 156, 0.93)'
  },
  openButton:{
    backgroundColor:'rgba(30, 144, 152, 0.93)',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
    elevation:2
  },
  buttontxt:{
    color:'rgba(240, 217, 226, 0.93)',
    fontSize: 16,
    fontWeight: 'bold'
  },
  modalOverLay:{
    flex: 1,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'rgba(135, 133, 133, 0.93)',

  },
  modalView:{
    width: '80%',
    backgroundColor:'rgba(23, 116, 134, 0.39)',
    borderRadius: 6,
    padding:20,
    alignItems: 'center',
    elevation: 2
  },
  modalHeading:{
    fontSize: 22,
    fontWeight:'bold',
    marginBottom: 19,
    color:'rgba(22, 2, 10, 0.93)',

  },
  modaltxt:{
    fontSize:18,
    fontWeight: '800',
    marginBottom:20,
    textAlign:'center',
    color:'rgba(247, 211, 226, 0.93)'
  },
  closeButton:{
    backgroundColor:'rgba(73, 164, 170, 0.93)',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
    elevation:2
  },
  closeButtontxt:{
    color:'rgba(248, 229, 237, 0.93)',
    fontSize: 20,
    fontWeight: 'bold'
}
})

export default ModalBox

