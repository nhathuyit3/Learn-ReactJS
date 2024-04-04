function showListItem () {
  const ref = useRef(null);

  function handleClick() {
    ref.current.focus();
  }

  return (
    <form>
      <MyInput label="Enter your name:" ref={ref} />
      <button type="button" onClick={handleClick}>
        Edit
      </button>
      <ul>
        <li>Invent new traffic lights</li>
        <li>Rehearse a movie scene</li>
      </ul>
    </form>
  )
}

export default showListItem;