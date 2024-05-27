import { MockData } from '../../@types'
import FabricDesignLayout from '../FabricDesignLayout'

// Define the props type for FabricDesignPage
interface FabricDesignPageProps {
  mockData: MockData
}

const FabricDesignPage: React.FC<FabricDesignPageProps> = ({ mockData }) => {
  return (
    <FabricDesignLayout
      fabricDesignCardsData={mockData.fabricDesignCardsData}
    />
  )
}

export default FabricDesignPage
