import html from '../library/core.js'
import { connect } from '../library/store.js'

const connector = connect()

function Header({todos}) {
    return html`
        <header class="header">
            <h1>todos</h1>
                <input
                    class="new-todo"
                    placeholder="What needs to be done?"
                    autofocus
                    onKeyup="event.keyCode === 13 && dispatch('add', this.value.trim())"
                >
        </header>
    `
}

export default connector(Header)
