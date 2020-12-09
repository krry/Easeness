const Avatar = ({name, picture}) => {
  return (
    <div className="flex items-center transition-opacity duration-200 opacity-75 cursor-default hover:opacity-100">
      <img src={picture} className="w-10 h-12 mr-2 rounded-full" alt={name} />
      <div className="font-semibold text-md">{name}</div>
    </div>
  )
}

export default Avatar
