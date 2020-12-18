import Image from 'next/image'

const Avatar = ({name, picture}) => {
  return (
    <div className="flex items-center transition-opacity duration-200 opacity-75 cursor-default hover:opacity-100">
      <Image src={picture} className="w-10 h-12 rounded-full" height={64} width={48} alt={name} />
      <div className="ml-2 font-semibold text-md">{name}</div>
    </div>
  )
}

export default Avatar
