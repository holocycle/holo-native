import Page1 from 'src/components/pages/Page1'
import Page2 from 'src/components/pages/Page2'
import Page3 from 'src/components/pages/Page3'
import { createAppContainer } from 'react-navigation'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import { createDrawerNavigator } from 'react-navigation-drawer'

const TabContainer = createBottomTabNavigator({
  Tab1: Page1,
  Tab2: Page2,
  Tab3: Page3,
})

const DrawerConatiner = createDrawerNavigator({
  Main: TabContainer,
  Tab1: Page1,
  Tab2: Page2,
  Tab3: Page3,
})

const AppContainer = DrawerConatiner

export default createAppContainer(AppContainer)
