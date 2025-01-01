import Image from 'next/image'

interface AuthorCardProps {
  name: string
  bio: string
  avatarUrl: string
}

const AuthorCard = ({ name, bio, avatarUrl }: AuthorCardProps) => {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
      <div className="p-6">
        <div className="flex items-center mb-4">
          <Image
            src={avatarUrl}
            alt={name}
            width={64}
            height={64}
            className="rounded-full"
          />
          <div className="ml-4">
            <h2 className="text-xl font-semibold">{name}</h2>
            <p className="text-gray-600">Author</p>
          </div>
        </div>
        <p className="text-gray-700">{bio}</p>
      </div>
    </div>
  )
}

export default AuthorCard