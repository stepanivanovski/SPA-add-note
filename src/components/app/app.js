import React from 'react';

import AppHeader from '../app-header/app-header';
import PostAddForm from '../post-add-form/post-add-form';
import PostList from '../post-list/post-list';
import PostStatusFilter from '../post-status-filter/post-status-filter';
import SearchPanel from '../search-panel/search-panel';

import './app.css';

let data = [
  {label: "Going to learn React", like: false, important: true, id: 1},
  {label: "That is so good", like: true, important: false, id: 2},
  {label: "I need a break...", like: false, important: false, id: 3}
];
  
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data,
      text: '',
      filter: 'all'
    };
    
    this.maxId = 4
    
    this.onRemove = this.onRemove.bind(this);
    this.onAdd = this.onAdd.bind(this);
    this.onToggleImportant = this.onToggleImportant.bind(this);
    this.onToggleLiked = this.onToggleLiked.bind(this);
    this.onUpdateSearch = this.onUpdateSearch.bind(this);
    this.onFilterSelect = this.onFilterSelect.bind(this) 
  }
  
  onAdd(text) {
    data = [
      {
        label: text,
        important: false,
        like: false,
        id: this.maxId++
      },
      ...this.state.data
    ];
    
    this.setState({data})
  }
  
  onRemove(id) {
    data = this.state.data.filter(post => post.id !== id)
    this.setState({data})
    this.calcLikedPost()
  }
  
  calcLikedPost() {
    return this.state.data.filter(item => item.like === true).length;
  } 

  onToggleImportant(id) {
    this.setState(({data}) => {
      const newArr = data.map(item => {
        return (item.id === id) ? ({...item, important:!item.important}) : item
      });
      
      return {
        data: newArr
      }
    })  
  }
  
  onToggleLiked(id) {
    this.setState(({data}) => {
      const newArr = data.map(item => {
        return (item.id === id) ? ({...item, like:!item.like}) : item
      });

      return {
        data: newArr
      }
    });
  }

  searchPost(items, term) {
    if (term.length === 0) {
      return items
    }

    return items.filter((item) => {
      return item.label.includes(term)
    })
  }

  filterPost(items, filter) {
    if (filter === 'like') {
      return items.filter(item => item.like)
    } else {
      return items
    }
  }

  onUpdateSearch(text) {
    this.setState({text})
  }

  onFilterSelect(filter) {
    this.setState({filter})
  }

  render() { 
    const {data, text, filter} = this.state;
    const visiblePosts = this.filterPost(this.searchPost(data, text), filter);

    return (
      <div className='app'>
        <AppHeader 
          total={data.length} 
          liked={this.calcLikedPost()}/>
        <div className="search-panel d-flex">
          <SearchPanel
            onUpdateSearch={this.onUpdateSearch}/>
          <PostStatusFilter
            filter={filter}
            onFilterSelect={this.onFilterSelect}/>
        </div>
        <PostList 
          posts={visiblePosts} 
          onRemove={this.onRemove}
          onToggleImportant={this.onToggleImportant}
          onToggleLiked={this.onToggleLiked}/>
        <PostAddForm onAdd={this.onAdd}/>
      </div>
    )
  }
}

export default App

