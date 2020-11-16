import * as React from 'react'
import { View, Text, StyleSheet, Alert } from 'react-native'
import Input from './../components/input'
import Button from './../components/button'
import { useSelector, useDispatch } from 'react-redux'

interface UserLogin {
    email: string
    password: string
}

export default function Login({ navigation }: any) {

    const dispatch = useDispatch()
    const selector: any = useSelector<any>(state => state)

    React.useEffect(() => {
        if (selector.token) navigation.navigate("Filmes")
    },[])


    const [userLogin, setUserLogin] = React.useState<UserLogin>({ email: "", password: "" })

    const requestAPILogin = async () => {
        const bodyRequest = {
            email: userLogin.email,
            senha: userLogin.password
        }

        try {
            const request = await fetch("http://localhost:5000/api/login", {
                body: JSON.stringify(bodyRequest),
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                }
            })

            const response = await request.json()
            const token = response.token
            dispatch({ type: "SAVE_TOKEN", payload: {
                token,
                email: userLogin.email,
                password: userLogin.password
            } })

            navigation.navigate("Filmes")
        } catch (error){ 
            console.log("ERROR")
            console.log(error)
            Alert.alert("Usuário não encontrado!", "Tente novamente")
            navigation.navigate("Filmes")
        }
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Login</Text>
            <Input
                onchange={text => setUserLogin({ ...userLogin, email: text })}
                placeHolder={"Email"}
            />
            <Input
                onchange={text => setUserLogin({ ...userLogin, password: text })}
                placeHolder={"Senha"}
            />
            <Button
                onpress={() => requestAPILogin()}
                text={"Fazer Login"}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        display: "flex",
        alignItems: "center",
        marginHorizontal: 30,
        height: "50%",
        justifyContent: "space-around"
    },
    title: {
        fontSize: 23
    }
})
