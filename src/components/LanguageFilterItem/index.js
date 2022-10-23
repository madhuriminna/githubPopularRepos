// Write your code here
import './index.css'

const LanguageFilterItem = props => {
  const {item, getSeletedList, listType} = props
  const {id, language} = item
  const colorType = id === listType ? 'btn1' : ''
  const getFilter = () => {
    getSeletedList(id)
  }
  return (
    <li className="list">
      <button type="button" className={`btn2 ${colorType}`} onClick={getFilter}>
        {language}
      </button>
    </li>
  )
}
export default LanguageFilterItem
