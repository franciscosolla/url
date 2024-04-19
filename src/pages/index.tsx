import { useState } from "react";
import { encode } from "../functions/encode";
import { useHash } from "../hooks/useHash";

export const Home: React.FC = () => {
  const hash = useHash();
  const [encodedUrl, setEncodedUrl] = useState<string>();

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const url = new FormData(e.currentTarget).get('url') as string
    const path = new FormData(e.currentTarget).get('path') as string ?? hash;
    console.log(url, path)
    encode(url, path).then(() => setEncodedUrl(`https://url.solla.dev/${path}`)).catch(console.error);
  };

  return (
    <div className="App">
      <form onSubmit={onSubmit}>
        <label>
          URL:
          <input type="url" name="url" required />
        </label>
        <label>
          url.solla.dev/
          <input type="text" name="path" placeholder={hash} />
        </label>
        <input type="submit" value="Encode" />
      </form>
      {encodedUrl ? <a href={encodedUrl}>{encodedUrl}</a> : null}
    </div>
  );
}
