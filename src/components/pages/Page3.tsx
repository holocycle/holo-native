import React from 'react'
import { Text, View, Button } from 'react-native'
import { NavigationStackProp } from 'react-navigation-stack'

type Props = {
  navigation: NavigationStackProp<{}>
}

const Page3 = ({ navigation }: Props) => {
  return (
    <View>
      <Text>Page3</Text>
      <Button
        onPress={() => {
          navigation.goBack()
        }}
        title="goBack"
      />
      <Button
        onPress={() => {
          navigation.popToTop()
        }}
        title="popToTop"
      />
    </View>
  )
}

export default Page3
