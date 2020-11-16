import * as React from 'react'
import { View } from 'react-native'
import { Table, Row, Rows } from 'react-native-table-component'

interface Props {
    head: string[]
    data: []
}

export default function TableComponent(props: Props) {
    const { head, data } = props

    return (
        <View>
            <Table borderStyle={{ borderWidth: 2, borderColor: "#C8E1FF" }}>
                <Row data={["asas", "sdsd", "sdfd"]} />
                <Rows data={[
                    ["1", "Rambo", "asdasd"],
                    ["2", "Rambo", "asdasd"],
                    ["3", "Rambo", "asdasd"],
                    ["4", "Rambo", "asdasd"],
                ]} />
            </Table>
        </View>
    )
}
