import { createStackNavigator } from 'react-navigation-stack'
import Page2 from 'src/components/pages/Page2'
import Page3 from 'src/components/pages/Page3'

const StackContainer = createStackNavigator({
  Page2: Page2,
  Page3: Page3,
})
export default StackContainer
