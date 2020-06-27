import Page1 from 'src/components/pages/Page1'
import Page2 from 'src/components/pages/Page2'
import { createAppContainer } from 'react-navigation'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import { createDrawerNavigator } from 'react-navigation-drawer'
import StackContainer from 'src/components/containers/StackContainer'

const TabContainer = createBottomTabNavigator({
  Stack: StackContainer,
  Page2: Page2,
})

const DrawerConatiner = createDrawerNavigator({
  Main: TabContainer,
  Page1: Page1,
})

const AppContainer = DrawerConatiner

export default createAppContainer(AppContainer)
