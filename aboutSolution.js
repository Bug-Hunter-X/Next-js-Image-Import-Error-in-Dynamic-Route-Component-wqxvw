```javascript
// pages/about.js
import Image from 'next/image';

function About() {
  return (
    <div>
      <h1>About Page</h1>
      <p>This is the about page.</p>
      <Image src='/image.jpg' alt='About Page Image' width={500} height={300} />
    </div>
  );
}

export default About;
```