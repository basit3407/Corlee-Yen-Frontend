import React from 'react'

interface FabricDesignCardProps {
  fabricDesignAspect: string
  suggestedName: string
  alignmentPreference: string
  determineTextAlignmentBasedOnTheme: (
    theme: string,
  ) => 'left' | 'center' | 'right'
}

const FabricDesignCard: React.FC<FabricDesignCardProps> = ({
  fabricDesignAspect,
  suggestedName,
  alignmentPreference,
  determineTextAlignmentBasedOnTheme,
}) => {
  // Determine text alignment based on the theme
  const textAlign = determineTextAlignmentBasedOnTheme('center') // Pass the theme value

  return (
    <div className="bg-black flex flex-col justify-center p-6 rounded-3xl">
      <p
        className="font-bold tracking-wider text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl"
        style={{ textAlign: textAlign }}
      >
        {fabricDesignAspect}
      </p>
      <p
        className="font-normal text-center leading-6 text-[#dedede] mt-4 sm:mt-6 md:mt-8"
        style={{ alignSelf: alignmentPreference }}
      >
        {suggestedName}
      </p>
    </div>
  )
}

export default FabricDesignCard
