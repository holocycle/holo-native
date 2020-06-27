import { createMaterialTopTabNavigator } from 'react-navigation-tabs'
import Page1 from 'src/components/pages/Page1'

const TopTabConatiner = createMaterialTopTabNavigator({
  TopTab1: Page1,
  TopTab2: Page1,
})

export default TopTabConatiner
