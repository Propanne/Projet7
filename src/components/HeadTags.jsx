import { Helmet } from "react-helmet";

function HeadTags() {
  return (
    <div className="HeadTags">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Groupomania - Authentification</title>
        <meta name="description" content="App Description" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Helmet>
    </div>
  );
}

export default HeadTags;
