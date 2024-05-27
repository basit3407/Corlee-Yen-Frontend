import React from 'react'

type Props = {
  children: React.ReactNode
}

const Container = (props: Props) => {
  return (
    <div className="box-border flex flex-col items-stretch pt-5 pb-14 px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12">
      {props.children}
    </div>
  )
}

export default Container
