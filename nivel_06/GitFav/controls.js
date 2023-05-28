import { GithubUsers } from "./githubUser.js"


//Estruturação dos dados
export class Favorite {
  constructor(root) {
    this.root = document.querySelector(root)
    this.load()

  }

  save() {
    localStorage.setItem('@github-favorites:', JSON.stringify(this.entries))
  }

  load() {
    this.entries = JSON.parse(localStorage.getItem('@github-favorites:')) || [];
  }

  async add(username) {
    try {
      const userExist = this.entries.find(entry => entry.login === username)

      if (userExist) {
        throw new Error('Usuário já foi adicionado')
      }

      const user = await GithubUsers.search(username)
      if (user.login === undefined) {
        throw new Error('Usuário inexistente')
      }
      this.entries = [user, ...this.entries]
      this.update()
      this.save()

    } catch (error) {
      alert(error)
    }



  }

  delete(user) {
    const filteredEntries = this.entries.filter(entry => entry.login != user.login)
    this.entries = filteredEntries
    this.update()
  }
}

//Eventos html
export class FavoritesView extends Favorite {
  constructor(root) {
    super(root)

    this.tbody = document.querySelector('table tbody')
    this.onadd()
    this.update()
  }

  onadd() {
    const addButton = this.root.querySelector('.search button')
    addButton.onclick = () => {
      const { value } = this.root.querySelector('.search input')
      this.add(value)
    }
  }

  update() {
    this.removeAllTr()
    this.entries.forEach(user => {
      const row = this.createRow()


      row.querySelector('.user img').src = `https://github.com/${user.login}.png `
      row.querySelector('.user img').alt = `Foto de ${user.login}`

      row.querySelector('.user_content p').textContent = user.name
      row.querySelector('.user_content a').textContent = `/${user.login}`
      row.querySelector('.user_content a').href = user.login
      row.querySelector('.repositories').textContent = user.public_repos
      row.querySelector('.followers').textContent = user.followers

      row.querySelector('.remove button').onclick = () => {
        const isOk = confirm('Deseja apagar esse usuário?')

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
              <img src="https://github.com/maykbrito.png" alt="">
              <div class="user_content">
                <p>Mayk Brito</p>
                <a href="https://github.com/maykbrito">/maykbrito</a>
              </div>
            </td>
            <td class="repositories">1234</td>
            <td class="followers">1234</td>
            <td class="remove">
              <button>Remove</button>
            </td>
    `
    return tr
  }

  removeAllTr() {
    this.tbody.querySelectorAll('tr').forEach(
      tr => tr.remove()
    )
  }
}