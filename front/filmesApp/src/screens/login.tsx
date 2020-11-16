import * as React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Input from './../components/input'
import Button from './../components/button'
import { useSelector } from 'react-redux'

interface UserLogin {
    email: string
    password: string
}

export default function Login() {

    const selector: any = useSelector<any>(state => state)

    const [userLogin, setUserLogin] = React.useState<UserLogin>({ email: "", password: "" })

    const requestAPILogin = () => {
        console.log(userLogin)
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Login: {selector.user.email}</Text>
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
