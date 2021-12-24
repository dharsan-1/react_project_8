import {Component} from 'react'
import './index.css'

class LightDarkMode extends Component {
  state = {isDark: true}

  onChangeTheme = () => {
    this.setState(prevState => ({isDark: !prevState.isDark}))
  }

  render() {
    const {isDark} = this.state
    const checkingBack = isDark ? 'dark' : 'white'
    const woedings = isDark ? 'light-theme' : 'dark-theme'
    return (
      <div className="background">
        <div className={checkingBack}>
          <h1>click to change mode</h1>
          <button className="bu" type="button" onClick={this.onChangeTheme}>
            {woedings}
          </button>
        </div>
      </div>
    )
  }
}

export default LightDarkMode
