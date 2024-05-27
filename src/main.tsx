import { createRoot } from 'react-dom/client'
import FabricDesignPage from './components/FabricDesignPage'
import { mockData } from './mockData'
import Container from './components/Conatainer'
import NavBar from './components/NavBar'
const rootElement = document.getElementById('root')
import './styles/tailwind.css'

if (!rootElement) throw new Error('root element not found')

const root = createRoot(rootElement)
root.render(
  <div
    style={{ background: 'white' }}
    data-ignore="used only for top most containter width"
  >
    <Container>
      <NavBar />
      <FabricDesignPage mockData={mockData} />
    </Container>
  </div>,
)
