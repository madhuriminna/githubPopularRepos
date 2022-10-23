// Write your code

import './index.css'

const RespositoryItem = props => {
  const {item} = props
  const {issuesCount, forksCount, starsCount, avatarUrl, name} = item
  return (
    <li className="list1">
      <img src={avatarUrl} className="avatarimg" alt={name} />
      <h1 className="h1">{name}</h1>
      <div className="cont">
        <img
          src="https://assets.ccbp.in/frontend/react-js/stars-count-img.png"
          className="img11"
          alt="stars"
        />
        <p className="para">{starsCount}</p>
      </div>
      <div className="cont">
        <img
          src="https://assets.ccbp.in/frontend/react-js/forks-count-img.png"
          className="img11"
          alt="forks"
        />
        <p className="para">{forksCount}</p>
      </div>
      <div className="cont">
        <img
          src="https://assets.ccbp.in/frontend/react-js/issues-count-img.png"
          className="img11"
          alt="open issues"
        />
        <p className="para">{issuesCount}</p>
      </div>
    </li>
  )
}
export default RespositoryItem
