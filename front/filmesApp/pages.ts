import FilmesScreen from './src/screens/filmes'
import LoginScreen from './src/screens/login'
import GenerosScreen from './src/screens/generos'

interface Routes {
    name: string
    component: any
}

export const pages: Routes[] = [
    {
        name: "Login",
        component: LoginScreen
    },    
    {
        name: "Filmes",
        component: FilmesScreen
    },
    {
        name: "Generos",
        component: GenerosScreen
    }
]