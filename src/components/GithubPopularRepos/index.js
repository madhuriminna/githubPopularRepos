import {Component} from 'react'
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import LanguageFilterItem from '../LanguageFilterItem'
import RespositoryItem from '../RepositoryItem'
import './index.css'

const languageFiltersData = [
  {id: 'ALL', language: 'All'},
  {id: 'JAVASCRIPT', language: 'Javascript'},
  {id: 'RUBY', language: 'Ruby'},
  {id: 'JAVA', language: 'Java'},
  {id: 'CSS', language: 'CSS'},
]

// Write your code here
class GithubPopularRepos extends Component {
  state = {listType: languageFiltersData[0].id, list: {}, load: true}

  componentDidMount() {
    this.getBody()
  }

  getSelectedList = id => {
    console.log(id)
    this.setState({listType: id, load: true})
  }

  isLoader = () => (
    <div testid="loader" className="loader">
      <Loader type="ThreeDots" color="#0284c7" height={80} width={80} />
    </div>
  )

  getBody = async () => {
    const {list, listType} = this.state

    const githubReposApiUrl = `https://apis.ccbp.in/popular-repos?language=${listType}`
    console.log(githubReposApiUrl)

    const response = await fetch(githubReposApiUrl)
    if (response.ok === true) {
      const data = await response.json()

      const updated = data.popular_repos.map(each => ({
        id: each.id,
        issuesCount: each.issues_count,
        forksCount: each.forks_count,
        starsCount: each.stars_count,
        avatarUrl: each.avatar_url,
        name: each.name,
      }))

      this.setState({list: updated, load: false})
    } else if (response.ok !== 200) {
      this.getImage()
    }
  }

  getSelected = () => {
    const {list} = this.state
    return (
      <ul className="order">
        {list.map(each => (
          <RespositoryItem item={each} key={each.id} />
        ))}
      </ul>
    )
  }

  render() {
    const {listType, load} = this.state
    return (
      <div className="container">
        <h1 className="head">Popular</h1>
        <ul className="unorder">
          {languageFiltersData.map(each => (
            <LanguageFilterItem
              item={each}
              key={each.id}
              getSelectedList={this.getSelectedList}
              listType={listType}
            />
          ))}
        </ul>
        {load ? this.isLoader() : this.getSelected()}
      </div>
    )
  }
}
export default GithubPopularRepos
