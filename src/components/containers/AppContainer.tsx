import Page1 from 'src/components/pages/Page1'
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import { createDrawerNavigator } from 'react-navigation-drawer'
import StackContainer from 'src/components/containers/StackContainer'
import TopTabConatiner from 'src/components/containers/TopTabContainer'
import ApiPage from 'src/components/pages/ApiPage'

const TabContainer = createBottomTabNavigator({
  StackTab: StackContainer,
  TopTab: TopTabConatiner,
  ApiTab: ApiPage,
})

const DrawerConatiner = createDrawerNavigator({
  Main: TabContainer,
  DrawerMenu1: Page1,
  DrawerMenu2: Page1,
})

const AppContainer = createStackNavigator(
  {
    Drawer: DrawerConatiner,
    NoDrawerPage: Page1,
  },
  {
    headerMode: 'none',
  },
)

export default createAppContainer(AppContainer)
