import PropTypes from "prop-types";
import { TransactionBox,TransactionHead,TransactionList,TransactionDescriptionText,TransactionInfo,TransactionValue } from './transactions.styled'

export const TransactionHistory = ({items}) => {
  return (
<TransactionBox>
  <TransactionHead>
    <TransactionList>
      <TransactionDescriptionText>Type</TransactionDescriptionText>
      <TransactionDescriptionText>Amount</TransactionDescriptionText>
      <TransactionDescriptionText>Currency</TransactionDescriptionText>
    </TransactionList>
      </TransactionHead>
      
      <TransactionInfo>
        {items.map(({id, type, amount, currency}) => (
          <TransactionList key={id}>
            <TransactionValue>{type}</TransactionValue>
            <TransactionValue>{amount}</TransactionValue>
            <TransactionValue>{currency}</TransactionValue>
          </TransactionList>))}
    
      </TransactionInfo>
</TransactionBox>
)
}

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    }))
}