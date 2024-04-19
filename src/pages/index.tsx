import { useState } from "react";
import { encode } from "../functions/encode";
import { useHash } from "../hooks/useHash";
import './index.css';

export const Home: React.FC = () => {
  const hash = useHash();
  const [encoded, setEncoded] = useState<string>();

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const url = new FormData(e.currentTarget).get('url') as string
    
    let path = new FormData(e.currentTarget).get('path') as string;

    if (!path?.length) {
      path = hash ?? "";
    }
    
    console.log(url, path)
    encode(url, path).then(() => setEncoded(path)).catch(console.error);
  };

  return (
    <section>
      <form onSubmit={onSubmit}>
        <div>
          <label>
            url
            <input type="url" name="url" required />
          </label>
          <label>
            url.solla.dev/
            <input type="text" name="path" placeholder={hash} />
          </label>
        </div>
        <input type="submit" value="encode" />
      </form>
      {encoded ? <a href={encoded}>{`https://url.solla.dev/${encoded}`}</a> : null}
    </section>
  );
}
