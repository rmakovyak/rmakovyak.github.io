import fetch from 'isomorphic-fetch'
import MapMarker from './mapMarker'

export default class PostsCollection {
  constructor(el, map) {
    this.el = el
    this.map = map
    this.list = []
    this.dataUrl = 'data.json'
  }

  add(post) {
    this.list.unshift(post)
    this.renderList()
    this.renderMarkers()
  }

  fetch() {
    fetch(this.dataUrl).then( response => response.json())
      .then( values => {
        this.list = values.items
        this.renderList()
        this.renderMarkers()
      })
  }

  renderList() {
    this.el.innerHTML = `
      <div class='collection-list'>
        ${this.mapItems()}
      </div>
    ` 
  }

  renderMarkers() {
    console.info('rendering map markers');
    for (let post of this.list) {
      new MapMarker(post).open(this.map)
    }
  }

  formatDate(unixTime) {
    return new Date(unixTime).toLocaleTimeString()
  }

  mapItems() {
    return this.list.map((value, key)=>{
      return `
        <div class="box" id=${value.id}>
          <article class="media">
            <div class="media-left">
              <figure class="image is-64x64">
                <img src="http://placehold.it/128x128" alt="Image">
              </figure>
            </div>
            <div class="media-content">
              <div class="content">
                <span>
                  <strong>${value.author}</strong> <small>${this.formatDate(value.dateCreation)}</small>
                  <br>
                  ${value.body}
                </span>
              </div>
              <nav class="level">
                <div class="level-left">
                  <a class="level-item">
                    <span class="icon is-small"><i class="fa fa-thumbs-down"></i></span>
                  </a>
                  <a class="level-item">
                    <span class="icon is-small"><i class="fa fa-thumbs-up"></i></span>
                  </a>
                  <small class="is-pulled-right">      
                      +${value.rate} votes
                    </span>
                  </small>
                </div>
              </nav>
            </div>
          </article>
        </div>
      `
    }).join("")
  }
}