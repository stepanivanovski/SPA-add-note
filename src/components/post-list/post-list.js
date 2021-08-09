import PostListItem from '../post-list-item/post-list-item';

import './post-list.css';

const PostList = ({posts, onRemove, onToggleImportant, onToggleLiked}) => {
  return (
    <ul className="app-list list-group"> {
        posts.map((post) => 
          <PostListItem 
            key={post.id} 
            {...post} 
            onRemove = {onRemove}
            onToggleImportant={onToggleImportant}
            onToggleLiked={onToggleLiked}/>
        )     
      }
    </ul>
  )
};

export default PostList;