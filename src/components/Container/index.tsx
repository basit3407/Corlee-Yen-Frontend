import React from 'react'

type Props = {
  children: React.ReactNode
}

const Container = (props: Props) => {
  return (
    <div className="box-border flex justify-start items-stretch flex-col min-w-[1440px] pt-5 pb-[58px]">
      {props.children}
    </div>
  )
}

export default Container
