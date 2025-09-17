import { hydrate, prerender as ssr } from 'preact-iso'

import preactLogo from './assets/preact.svg'
import './style.css'

export function App() {
  return (
    <main>
      <nav>
        <a href="">Link</a>
        <a href="">Link</a>
      </nav>
      <section id={'hero'}>
        <h1>Hi, I'm Jack</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis laboriosam quis sed consequuntur quos
          voluptatibus corrupti modi iste necessitatibus provident ut repellat, totam animi tempora aspernatur
          repudiandae officiis magnam quod!
        </p>
        <button>Say Hello</button>
      </section>
    </main>
  )
}

function Resource(props) {
  return (
    <a href={props.href} target="_blank" class="resource">
      <h2>{props.title}</h2>
      <p>{props.description}</p>
    </a>
  )
}

if (typeof window !== 'undefined') {
  hydrate(<App />, document.getElementById('app'))
}

export async function prerender(data) {
  return await ssr(<App {...data} />)
}
