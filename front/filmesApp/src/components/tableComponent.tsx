import * as React from 'react'
import { View } from 'react-native'
import { Table, Row, Rows } from 'react-native-table-component'

interface Props {
    head: string[]
    data: any[]
}

export default function TableComponent(props: Props) {
    const { head, data } = props

    return (
        <View>
            <Table borderStyle={{ borderWidth: 2, borderColor: "#C8E1FF" }}>
                <Row data={head} />
                <Rows data={data} />
            </Table>
        </View>
    )
}
