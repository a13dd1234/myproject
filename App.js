import React, { useState } from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'

import styles from './AppStyles'

const App = () => {

  const [name, setName] = useState('Ahmad')
  const [nameSwitch, setNameSwitch] = useState(true)
  let clickHandler = () => {

    console.log("1: ", nameSwitch)
   setNameSwitch(!nameSwitch)
    console.log("2: ", nameSwitch)
    nameSwitch ? setName('Fatma') : setName('Ahmad')
  }
  return (
    <View style={styles.container}>
      <Text>Hello, World!</Text>
      <Text>My name is {name}</Text>
      <View style={styles.buttonContainer}>
        <Button title='Update State' onPress={clickHandler}/>
      </View>
    </View>
  )
}

export default App
