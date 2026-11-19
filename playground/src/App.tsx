import { useState } from 'react';

import 'css-preflight/preflight.css';
import 'css-preflight/mono-elements.css';
import 'css-preflight/font-sans-serif.css';

import './styles.css';

/*
  The playground is intentionally barebones
  to minimize the use of custom css for
  easier css preflight testing.

  The <hr /> element for example is being
  used instead of css for horizontal lines.
*/

export default function App() {
  const [count, setCount] = useState(0);
  return (
    <>
      <hr />
      <h1>Heading 1</h1>
      <h2>Heading 2</h2>
      <h3>Heading 3</h3>
      <h4>Heading 4</h4>
      <h5>Heading 5</h5>
      <h6>Heading 6</h6>
      <hr />
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
        saepe distinctio <code>doloribus obcaecati reiciendis</code>, recusandae
        repudiandae placeat, quam incidunt officiis.
      </p>
      <hr />
      <button
        type="button"
        className="counter"
        onClick={() => setCount((count) => count + 1)}
      >
        Count is {count}
      </button>
      <hr />
    </>
  );
}
