function MsgBox({ name, colors }) {
  let styles = { color: colors };
  return <h1 style={styles}>hello {name}</h1>;
}

export default MsgBox;
