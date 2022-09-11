import PropTypes from "prop-types";
import {StatisticsWrapper,StatisticsTitle,StatisticsList,StatisticsListItem,StatisticsDocType,StatisticsValue} from './Statistics.styled'


export const Statistics = ({title, stats}) => {
  return (
    <StatisticsWrapper>
        <StatisticsTitle>{title}</StatisticsTitle>

        <StatisticsList>
        {stats.map(({ id, label, percentage }) => (<StatisticsListItem key={id}>
          <StatisticsDocType>{label}</StatisticsDocType>
          <StatisticsValue>{percentage}%</StatisticsValue>
        </StatisticsListItem>)
        
        )}
        </StatisticsList>
</StatisticsWrapper>
  )
}

Statistics.propTypes = {
  info: PropTypes.exact({
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
  })
}