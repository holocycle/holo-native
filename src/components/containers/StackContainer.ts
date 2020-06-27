import { createStackNavigator } from 'react-navigation-stack'
import Page3 from 'src/components/pages/Page3'
import Page4 from 'src/components/pages/Page4'

const StackContainer = createStackNavigator({
  Page3: Page3,
  Page4: Page4,
})
export default StackContainer
