import styles from '../styles/package'
import map from './map'
import CreatePostForm from './createPostForm'
import PostsCollection from './postsCollection'

map.render()
let postsCollection = new PostsCollection(
  document.getElementById('postsFeed'), 
  map.getCanvas()
)
postsCollection.fetch()

let form = new CreatePostForm(map.getCanvas(), postsCollection)
document.getElementById('createPost').innerHTML = form.render()
form.initListeners()


