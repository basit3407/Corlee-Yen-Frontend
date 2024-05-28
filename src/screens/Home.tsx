import Container from '../components/Container'
import NavBar from '../components/NavBar'
import FabricDesignPage from '../components/FabricDesignPage'
import { mockData } from '../util'
import BottomBar from '../components/BottomBar'

const Home = () => {
  return (
    <div style={{ background: 'white' }}>
      <Container>
        <NavBar />
        <FabricDesignPage
          fabricDesignCardsData={mockData.fabricDesignCardsData}
        />
      </Container>
      <BottomBar />
    </div>
  )
}

export default Home
