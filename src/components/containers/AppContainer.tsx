import Page1 from 'src/components/pages/Page1'
import Page2 from 'src/components/pages/Page2'
import { createAppContainer } from 'react-navigation'
import { createBottomTabNavigator } from 'react-navigation-tabs'

const AppContainer = createBottomTabNavigator({
  Tab1: Page1,
  Tab2: Page2,
})

export default createAppContainer(AppContainer)
