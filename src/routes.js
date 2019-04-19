import { createAppContainer, createSwitchNavigator } from 'react-navigation'
import login from './screens/login/index'
import main from './screens/main/index'

const routes = createAppContainer(createSwitchNavigator(
{
    login,
    main
}))

export default routes