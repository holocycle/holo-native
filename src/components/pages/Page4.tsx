import React from 'react'
import { Text, View, Button } from 'react-native'
import { NavigationStackProp } from 'react-navigation-stack'

type Props = {
  navigation: NavigationStackProp<{}>
}

const Page3 = ({ navigation }: Props) => {
  return (
    <View>
      <Text>Page4</Text>
      <Button
        onPress={() => {
          navigation.navigate('Page1')
        }}
        title="navigate Page1"
      />
      <Button
        onPress={() => {
          navigation.navigate('Page2')
        }}
        title="navigate Page2"
      />
      <Button
        onPress={() => {
          navigation.navigate('Page3')
        }}
        title="navigate Page3"
      />
      <Button
        onPress={() => {
          navigation.navigate('Page4')
        }}
        title="navigate Page4"
      />
      <Button
        onPress={() => {
          navigation.push('Page1')
        }}
        title="push Page1"
      />
      <Button
        onPress={() => {
          navigation.push('Page2')
        }}
        title="push Page2"
      />
      <Button
        onPress={() => {
          navigation.push('Page3')
        }}
        title="push Page3"
      />
      <Button
        onPress={() => {
          navigation.push('Page4')
        }}
        title="push Page4"
      />
    </View>
  )
}

export default Page3
