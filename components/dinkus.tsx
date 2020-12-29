const Dinkus = (props) => {
  const {text} = props
  return (
    <hr
      className="dinkus mt-32 mb-24 rounded-full h-6 leading-none relative outline-none border-0 opacity-75 text-center"
      data-content={text}
    />
  )
}

export default Dinkus
