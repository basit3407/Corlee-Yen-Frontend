import { FabricDesignCard, MockData } from '../../@types'
import FabricDesignLayout from '../FabricDesignLayout'

// Define the props type for FabricDesignPage
interface FabricDesignPageProps {
  fabricDesignCardsData: FabricDesignCard[]
}

const FabricDesignPage: React.FC<FabricDesignPageProps> = ({
  fabricDesignCardsData,
}) => {
  return <FabricDesignLayout fabricDesignCardsData={fabricDesignCardsData} />
}

export default FabricDesignPage
