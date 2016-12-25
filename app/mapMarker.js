import InfoBox from './vendor/infobox';

export default class MapMarker {
  constructor(post) {
    this.options = {
        disableAutoPan: false,
        maxWidth: 0,
        pixelOffset: new google.maps.Size(-140, 0),
        zIndex: null,
        boxStyle: {
          padding: "0px 0px 0px 0px",
          width: "252px",
          height: "40px"
        },
        closeBoxURL : "",
        infoBoxClearance: new google.maps.Size(1, 1),
        isHidden: false,
        pane: "floatPane",
        enableEventPropagation: false
    }
    this.post = post
  }

  open(map) {
    let marker = new google.maps.Marker({
      position: this.post.position,
      title: this.post.body
    })
    marker.setMap(map)
    this.options.content = this.renderMapPost()
    let infobox = new InfoBox(this.options)
    infobox.open(map, marker)
  }

  formatDate(unixTime) {
    return new Date(unixTime).toLocaleTimeString()
  }

  renderMapPost() {
    return `<div class="box map-post">
      <article class="media">
        <div class="media-content">
          <div class="content">
            <p>
              <strong>${this.post.author}</strong> 
              <small>${this.formatDate(this.post.dateCreation)}</small>
              <br>
              ${this.post.body}
            </p>
            <p>
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
                  +${this.post.rate} votes
                </span>
              </small>
            </div>
          </nav>
        </div>
      </article>
    </div>`
  }
}