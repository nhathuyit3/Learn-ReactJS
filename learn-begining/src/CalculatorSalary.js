function CalculatorSalary () {
  function handleClick() {
    console.log("You clicked me")
  }

  return (
    <div className="calcuTableSalary">
      <button onClick={handleClick}></button>
    </div>
  )
}

export default CalculatorSalary