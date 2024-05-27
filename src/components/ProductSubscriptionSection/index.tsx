import { Button } from '@mui/base'
import ProductInfoSection from '../ProductInfoSection'
import messages from './messages.json'

function ProductSubscriptionSection() {
  return (
    <div className="flex justify-center items-center flex-col w-full px-4">
      <div className="flex justify-center items-center flex-col max-w-[849px] w-full box-border">
        <ProductInfoSection />
        <div className="flex justify-between items-center w-full max-w-[507px] h-16 mt-16 px-4 border border-white rounded-full">
          <input
            type="email"
            placeholder={messages['email_here']}
            className="bg-transparent text-white placeholder-gray-400 flex-grow focus:outline-none"
          />
          <Button className="bg-white text-black font-medium text-sm h-12 w-32 rounded-full">
            {messages['subscribe']}
          </Button>
        </div>
      </div>
    </div>
  )
}

export default ProductSubscriptionSection
