import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { useSelector } from 'react-redux'
import TableComponent from '../components/tableComponent'
import Button from './../components/button'
import { useRequestAPI } from './../services/api'

export default function Filmes({ navigation }: any) {

    const selector: any = useSelector<any>(state => state)
    const [films, setFilms] = useState([])

    React.useEffect(() => {
        console.log('Montou')
        if (!selector.token) navigation.navigate("Login")
    }, [])

    const request = useRequestAPI("/")

    useEffect(() => {
        request()
            .then(request => {
                console.log(request)
                const filmsArrayToState = request.filter((fi: any) => {

                })
            })
            .catch(error => console.log(error))
    }, [])

    return (
        <View style={styles.container}>
            <Text>Filmes</Text>
            <TableComponent head={["ID", "Filme", "ID Genero"]} data={films} />
            <View style={styles.divButton}>
                <Button
                    text={"Generos"}
                    onpress={() => navigation.navigate("Generos")}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        display: "flex",
        justifyContent: "center"
    },
    divButton: {
        marginVertical: 20
    }
})
