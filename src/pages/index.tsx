import { useState } from "react";
import { encode } from "../functions/encode";
import { useHash } from "../hooks/useHash";

export const Home: React.FC = () => {
  const hash = useHash();
  const [encoded, setEncoded] = useState<string>();

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const url = new FormData(e.currentTarget).get('url') as string
    const path = new FormData(e.currentTarget).get('path') as string ?? hash;
    console.log(url, path)
    encode(url, path).then(() => setEncoded(path)).catch(console.error);
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
      {encoded ? <a href={encoded}>{`https://url.solla.dev/${encoded}`}</a> : null}
    </div>
  );
}
