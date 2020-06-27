import React from 'react'
import { Text, View, Button } from 'react-native'
import { NavigationStackProp } from 'react-navigation-stack'

type Props = {
  navigation: NavigationStackProp<{}>
}

const Page2 = ({ navigation }: Props) => {
  return (
    <View>
      <Text>Page2</Text>
      <Button
        onPress={() => {
          navigation.push('Page3')
        }}
        title="navigate next"
      />
      <Button
        onPress={() => {
          navigation.push('Page2')
        }}
        title="navigate here"
      />
      <Button
        onPress={() => {
          navigation.push('NoDrawerPage')
        }}
        title="navigate to no drawer page"
      />
    </View>
  )
}

export default Page2
