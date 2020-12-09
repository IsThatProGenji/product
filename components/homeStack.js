import { createStackNavigator } from 'react-navigation-stack'
import { createAppContainer } from 'react-navigation'
import products from './products'
import details from './details'
const screens = {
    products: {
        screen: products
    },
    details: {
        screen: details
    }
}
const HomeStack = createStackNavigator(screens)

export default createAppContainer(HomeStack)