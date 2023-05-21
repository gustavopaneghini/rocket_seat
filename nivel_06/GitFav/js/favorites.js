import { GithubUsers } from "./githubUser.js"

export class Favorite {
  constructor(root) {
    this.root = document.querySelector(root)
    this.load()
  }

  load() {

    this.entries = JSON.parse(localStorage.getItem('@github-favorites:') || [])

  }

  save() {
    localStorage.setItem('@github-favorites:', JSON.stringify(this.entries))
  }

  delete(user) {
    const filteredEntries = this.entries.filter(entry => entry.login != user.login)
    this.entries = filteredEntries
    this.update()
  }

  add(username) {
    GithubUsers.search(username)
  }
}

export class FavoriteView extends Favorite {
  constructor(root) {
    super(root)
    this.tbody = this.root.querySelector('table tbody')
    this.update()
  }

  update() {
    this.removeAllTr()

    this.entries.forEach(user => {
      const row = this.createRow()

      row.querySelector('.user img').src = `https://github.com/${user.login}.png`
      row.querySelector('.username-link p').textContent = user.name
      row.querySelector('.username-link a').href = `https://github.com/${user.login}`
      row.querySelector('.username-link a').textContent = user.login
      row.querySelector('.repositories').textContent = user.public_repos
      row.querySelector('.followers').textContent = user.followers

      row.querySelector('.remove button').onclick = () => {
        const isOk = confirm("Deseja excluir da lista?")

        if (isOk) {
          this.delete(user)
        }

      }
      this.tbody.append(row)
    })

  }

  createRow() {
    const tr = document.createElement('tr')

    tr.innerHTML = `
        <td class="user">
        <div class="img-person">
        <img src="https://github.com/maykbrito.png" alt="">
        </div>
        <div class="username-link">
        <p>Mayk Brito</p>
        <a href="">/maykbrito</a>
        </div>
        </td>
        <td class="repositories">123</td>
        <td class="followers">1234</td>
        <td class="remove">
        <button>Remover</button>
        </td>
      `
    return tr

  }

  removeAllTr() {
    this.tbody.querySelectorAll('tr').forEach(tr => {
      tr.remove()
    })
  }
}