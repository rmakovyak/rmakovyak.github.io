export default class CreatePostForm {
  constructor(map, postsCollection) {
    this.map = map
    this.formId = "createPostForm"
    this.postsCollection = postsCollection
  }

  getRandomInRange(from, to, fixed) {
      return (Math.random() * (to - from) + from).toFixed(fixed) * 1;
  }

  create() { 
    let content = document.querySelector(`#${this.formId} [name=post]`)
    let myLatlng = new google.maps.LatLng(
        this.getRandomInRange(40,65,3),
        this.getRandomInRange(8,20,3))

    this.postsCollection.add({
      id: 300,
      dateCreation: new Date(),
      body: content.value,
      author: "John Smith",
      rate: 0,
      position: myLatlng
    })

    content.value = ''
  }

  initListeners() {
    console.info('createPostForm lister attached')
    document.getElementById(this.formId)
      .addEventListener('submit', (e) => {
        e.preventDefault();
        this.create()
      })
    document.querySelector(`#${this.formId} [name=post]`)
      .onkeyup = (e) => {
        e = e || event;
        if (e.keyCode === 13) {
          this.create()
        }
        return true;
       }
  }

  render() {
    return `
        <form id="${this.formId}">
            <label class="label">Share your thoughts:</label>
            <p class="control">
              <textarea name="post" class="textarea" placeholder="Your post" ></textarea>
            </p>
            <p class="control">
              <button class="button is-primary is-pulled-right is-outlined">Submit</button>
            </p>
        </form>
      `
  }
}

