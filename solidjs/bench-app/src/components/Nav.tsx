export default function Nav() {
  return(
    <>
      <span class="framework-text">SolidJS</span>
      <nav class="site-nav">
        <a href={'/'}>Home</a>
        <a href={'/users'}>Users</a>
        <a href={'/forms'}>Forms (Bench)</a>
      </nav>
    </>
  );
}