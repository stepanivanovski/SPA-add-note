import {Component} from 'react';
import './post-status-filter.css'

class PostStatusFilter extends Component {
  constructor(props) {
    super(props);
    this.buttons = [
      {name: 'all', label: 'Все'},
      {name: 'like', label: 'Понравилось'}
    ]
  }

  getButtons() {
    return this.buttons.map(({name, label}) => {
      const active = this.props.filter === name;
      const clazz = active ? 'btn-info' : 'btn-outline-secondary'
      return (
        <button 
          key={name} 
          type='button' 
          className={`btn ${clazz}`}
          onClick={() => this.props.onFilterSelect(name)}>{label}</button>
      )
    })
  }

  render() {
    return (
      <div className="btn-group">
        {this.getButtons()}
      </div>
    )
  }
}

export default PostStatusFilter;