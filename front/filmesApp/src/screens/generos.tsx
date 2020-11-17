import React, { useState, useEffect } from 'react'
import { View, Text } from 'react-native'
import TableComponent from './../components/tableComponent'
import { useRequestAPI } from './../services/api'

export default function Generos(){

    const [genders, setGenders] = useState<any>([])
    const request = useRequestAPI("/generos")

    const createDataToTable = (data: any) => {
        const array: any = []
        array.push(data.idGenero)
        array.push(data.nome)

        setGenders((genders: any) => {
            return [
                ...genders,
                array
            ]
        })
    }

    useEffect(() => {
        request()
            .then((response: any) => {
                response.map((data: any) => createDataToTable(data))
            })  
            .catch(error => console.log(error))

    }, [])

    return (
        <View>
            <Text>Generos</Text>
            <TableComponent data={genders} head={['idGenero', "Nome"]} />
        </View>
    )
}