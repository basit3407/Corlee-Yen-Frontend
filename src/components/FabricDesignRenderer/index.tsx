import FabricDesignCard from '../FabricDesignCard'
import { theme } from '../../theme'
import { FabricDesignCard as CardType } from '../../@types'

interface Props {
  fabricDesignCardsData: CardType[]
}

const FabricDesignRenderer: React.FC<Props> = ({ fabricDesignCardsData }) => {
  const fabricDesignCardAlignmentPreferences = [
    { alignmentPreference: theme.others.ALIGN_SELF_8FD4E705 },
    {
      determineTextAlignmentBasedOnTheme: (themeValue: string) =>
        themeValue === 'center' ||
        themeValue === 'left' ||
        themeValue === 'right'
          ? themeValue
          : 'center', // Default to center if themeValue doesn't match any of the specified values
      alignmentPreference: theme.others.ALIGN_SELF_AEB2CC55,
    },
    { alignmentPreference: theme.others.ALIGN_SELF_8FD4E705 },
  ]

  return (
    <div className="flex justify-start items-stretch flex-col gap-6 max-w-[628px] grow-0 shrink-0 basis-auto box-border">
      {fabricDesignCardsData.map((data, index) => (
        <FabricDesignCard
          fabricDesignAspect={data.fabricDesignAspect}
          suggestedName={data.suggestedName}
          alignmentPreference={
            fabricDesignCardAlignmentPreferences[index].alignmentPreference
          }
          determineTextAlignmentBasedOnTheme={
            fabricDesignCardAlignmentPreferences[index]
              .determineTextAlignmentBasedOnTheme || (() => 'center')
          } // Provide a default implementation if not provided
          key={index}
        />
      ))}
    </div>
  )
}

export default FabricDesignRenderer
