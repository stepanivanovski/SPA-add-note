import {Component} from 'react';

import './search-panel.css';

class SearchPanel extends Component {
  constructor(props) {
    super(props);

    this.onChange = this.onChange.bind(this);
  }

  onChange(e) {
    const text = e.target.value;
    this.props.onUpdateSearch(text)
  }

  render() {
    return (
      <input
        className="form-control search-input"
        type="text"
        placeholder="Поиск по записям"
        onChange={this.onChange}
      />
    );
  }
}

export default SearchPanel;