import Container from '../components/Container'
import WelcomePanel from '../components/LoginScreen/WelcomePanel'
import NavBar from '../components/NavBar'

const Login = () => {
  return (
    <>
      <Container>
        <NavBar />
      </Container>

      <WelcomePanel />
    </>
  )
}

export default Login
