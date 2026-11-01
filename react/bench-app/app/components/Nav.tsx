export default function Nav() {
  return(
    <>
      <span className="framework-text">React</span>
      <nav className="site-nav">
        <a href={'/'}>Home</a>
        <a href={'/users'}>Users</a>
        <a href={'/forms'}>Forms (Bench)</a>
      </nav>
    </>
  );
}