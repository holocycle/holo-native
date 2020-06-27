import { createMaterialTopTabNavigator } from 'react-navigation-tabs'
import Page1 from 'src/components/pages/Page1'
import Page2 from 'src/components/pages/Page2'

const TopTabConatiner = createMaterialTopTabNavigator({
  TopTab1: Page1,
  TopTab2: Page2,
})

export default TopTabConatiner
