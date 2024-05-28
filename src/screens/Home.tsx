import Container from '../components/Container'
import NavBar from '../components/NavBar'
import FabricDesignPage from '../components/HomeScreen/FabricDesignPage'
import { mockData } from '../util'
import BottomBar from '../components/BottomBar'

const Home = () => {
  return (
    <div style={{ background: 'white' }}>
      <NavBar />
      <Container>
        <FabricDesignPage
          fabricDesignCardsData={mockData.fabricDesignCardsData}
        />
      </Container>
      <BottomBar />
    </div>
  )
}

export default Home
