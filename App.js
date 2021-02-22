import React, { useState } from 'react'
import { Button, Text, View } from 'react-native'

import styles from './AppStyles'

const App = () => {
  // console.log("xxxxxxxxxxxxxxxxxxxxxxxx")
  // console.log(styles)

  const [name, setName] = useState('Ahmad')
  const [person, setPerson] = useState({ name: 'Fatma', age: 22 })

  const [nameSwitch, setNameSwitch] = useState(true)

  let clickHandler = () => {

    console.log("1: ", nameSwitch)
    setNameSwitch(!nameSwitch)
    console.log("2: ", nameSwitch)
    nameSwitch ? setName('Fatma') : setName('Ahmad')
    nameSwitch ? setPerson({ name: 'Ahmad', age: 40 }) : setPerson({ name: 'Fatma', age: 22 })

  }
  return (
    <View style={styles.container}>
      <Text>Hello, World!</Text>
      <Text>My name is {name}</Text>
      <Text>My name is {person.name} and I am {person.age} years old!</Text>

      <View style={styles.buttonContainer}>
        <Button title='Update State' onPress={clickHandler} />
      </View>
    </View>
  )
}

export default App
