import { createRoot } from 'react-dom/client'
import FabricDesignPage from './components/FabricDesignPage'
import Container from './components/Container'
import NavBar from './components/NavBar'
const rootElement = document.getElementById('root')
import './styles/tailwind.css'
import BottomBar from './components/BottomBar'
import { mockData } from './util'

if (!rootElement) throw new Error('root element not found')

const root = createRoot(rootElement)
root.render(
  <div
    style={{ background: 'white' }}
    data-ignore="used only for top most containter width"
  >
    <Container>
      <NavBar />
      <FabricDesignPage
        fabricDesignCardsData={mockData.fabricDesignCardsData}
      />
    </Container>
    <BottomBar />
  </div>,
)
