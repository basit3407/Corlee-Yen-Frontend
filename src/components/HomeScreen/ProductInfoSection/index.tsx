import messages from './messages.json'

function ProductInfoSection() {
  return (
    <div className="flex flex-col items-center text-center text-white">
      <p className="font-semibold text-4xl md:text-5xl">
        {messages['first_know_about_product_releases__all_things_corl']}
      </p>
      <p className="text-lg mt-4 max-w-[849px]">
        {messages['lrem_ipsum_suledes_plankning_till_heterossade_tosn']}
      </p>
    </div>
  )
}

export default ProductInfoSection
