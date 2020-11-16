import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack';
import { pages } from './pages'
import 'react-native-gesture-handler';
import { persistor, store } from './src/store'
import { PersistGate } from 'redux-persist/integration/react'
import { Provider } from 'react-redux'

const Stack = createStackNavigator()
export default function App() {
	return (
		<Provider store={store}>
			<PersistGate loading={null} persistor={persistor}>
				<NavigationContainer>
					<Stack.Navigator>
						{pages.map((page, index) => <Stack.Screen key={index} name={page.name} component={page.component} />)}
					</Stack.Navigator>
				</NavigationContainer>
			</PersistGate>
		</Provider>
	);
}
