// This is the Link API
import Link from 'next/link';
import fetch from 'isomorphic-unfetch';

// Pass this content as 'props' to child components
const Index = props => (
  <div>
  <h1>Batman TV Shows</h1>
  <ul>
    {props.shows.map(({show}) => (
      <li key={show.id}>
        <Link as={`/p/${show.id}`} href={`/post?id=${show.id}`}>
          <a>{show.name}</a>
        </Link>
      </li>
    ))}
  </ul>
  </div>
);

Index.getInitialProps = async function() {

  const url = 'https://api.tvmaze.com/search/shows?q=batman';

  const res = await fetch(url)
  const data = await res.json()

  console.log(`Show data fetched. Count: ${data.length}`)

  return {
    shows: data
  }
}

export default Index