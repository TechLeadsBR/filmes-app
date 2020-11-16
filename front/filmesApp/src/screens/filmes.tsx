import * as React from 'react'
import { View, Text } from 'react-native'
import { useSelector } from 'react-redux'
import TableComponent from '../components/tableComponent'

export default function Filmes({ navigation }: any) {

    const selector: any = useSelector<any>(state => state)

	React.useEffect(() => {
        console.log('Montou')
		if (!selector.token) navigation.navigate("Login")
	}, [])

    return (
        <View>
            <Text>Filmes</Text>
            <TableComponent head={["ID", "Filme", "ID Genero"]} data={[]} />
        </View>
    )
}
