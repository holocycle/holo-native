import React, { useState, useEffect } from 'react'
import { Text, View, Button } from 'react-native'
import { getTestApi } from 'src/api/testApi'

const useHealth = () => {
  const [health, setHealth] = useState(null)
  useEffect(() => {
    const f = async () => {
      const res: any = await getTestApi().health()
      setHealth(res.message)
    }
    f()
  }, [])
  return health
}

const ApiPage = () => {
  const [greet, setGreet] = useState('')
  const health = useHealth()

  return (
    <View>
      <Text>API Page</Text>
      <View>
        <Text>greet: {greet}</Text>
        <Button
          title="let's greet"
          onPress={async () => {
            const res: any = await getTestApi().greet()
            setGreet(res.message)
          }}
        />
      </View>
      <View>
        <Text>health: {health || 'loading...'}</Text>
      </View>
    </View>
  )
}

export default ApiPage
