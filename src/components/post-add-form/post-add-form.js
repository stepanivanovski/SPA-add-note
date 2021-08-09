import {Component} from 'react';

import './post-add-form.css';

class PostAddForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ''
    }

    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    const text = e.target.value;
    this.setState({text})
  }

  onSubmit(e) {
    e.preventDefault();
    this.props.onAdd(this.state.text);

    this.setState({
      text: ''
    })
  }

  render() {
    return (
      <form 
        className="bottom-panel d-flex"
        onSubmit={this.onSubmit}
      >
        <input
          onChange={(e) => this.onChange(e)}
          type="text"
          required
          placeholder="О чем вы думаете сейчас?"
          className="form-control new-post-label"
          value={this.state.text}
        />
        <button
          type="submit"
          className="btn btn-outline-secondary"
        >Добавить</button>
      </form>
    )
  }
}

export default PostAddForm; 