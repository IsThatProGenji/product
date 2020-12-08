import { createStackNavigator } from 'react-navigation-stack'
import { createAppContainer } from 'react-navigation'
import products from './products'
const screens = {
    products: {
        screen: products
    }
}
const HomeStack = createStackNavigator(screens)

export default createAppContainer(HomeStack)