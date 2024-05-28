import React from 'react'

function SvgIcon1({ className, htmlContent1 }) {
  return (
    <div
      className={`${className} w-6 h-6 flex grow-0 shrink-0 basis-auto`}
      dangerouslySetInnerHTML={{ __html: htmlContent1 }}
    />
  )
}

export default SvgIcon1
