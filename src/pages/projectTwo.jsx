export default function ProjectTwo() {
    return (
      <main>
          <h2>The Goals App</h2>
          <article>
          <p>This was an Express app I built to help users track their goals. With this app, users are able to quickly create an account and then begin adding goals to their Goals List. Once a goal is accomplished, the user can easily delete it from the list. There is also a feature to generate a random quote via an external API if they are in need of some motivation. </p>

          <img
            src="goalsapp.png"
            alt="Goals App home page"
            className="screenshot"
          />
          <br></br>
          <img
            src="goalsapp2.png"
            alt="Goals App goals page"
            className="screenshot"
          />

          <p>Take a look at the <a href="https://github.com/1650796/the-goals-app-liu/">source code</a>.</p>
          <br></br>
          </article>
      </main>
    )
  }