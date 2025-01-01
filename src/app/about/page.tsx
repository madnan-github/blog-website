import Image from 'next/image'

export default function AboutPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-extrabold text-gray-900 mb-8">About <span className='text-indigo-600'>Tech</span>Blog</h1>
      
      <div className="grid md:grid-cols-2 gap-8 items-center mb-12">
        <div>
          <Image
            src="/assets/techblog.jpg?height=400&width=600"
            alt="About TechBlog"
            width={600}
            height={400}
            className="rounded-lg shadow-lg"
          />
        </div>
        <div>
          <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
          <p className="text-gray-600 mb-4">
            At TechBlog, our mission is to provide high-quality, up-to-date content on web development, 
            technology, and programming. We strive to create a platform where developers of all levels can 
            learn, share, and grow together.
          </p>
          <p className="text-gray-600">
            Founded in 2023, we've quickly become a go-to resource for developers looking to stay ahead 
            in the fast-paced world of technology. Our team of experienced writers and industry experts 
            work tirelessly to bring you the latest news, tutorials, and insights.
          </p>
        </div>
      </div>

      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Our Team</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { name: 'Muhammad Rameez', role: 'Founder & Editor-in-Chief', image: '/assets/team1.jpg?height=200&width=200' },
            { name: 'Ms Faiza', role: 'Senior Writer', image: '/assets/team2.jpg?height=200&width=200' },
            { name: 'Abdul Rehman', role: 'Technical Editor', image: '/assets/team3.jpg?height=200&width=200' },
          ].map((member) => (
            <div key={member.name} className="text-center">
              <Image
                src={member.image}
                alt={member.name}
                width={200}
                height={200}
                className="rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
              <p className="text-gray-600">{member.role}</p>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-4">Our Values</h2>
        <ul className="list-disc list-inside text-gray-600 space-y-2">
          <li>Providing accurate and reliable information</li>
          <li>Fostering a community of continuous learning</li>
          <li>Promoting best practices in web development</li>
          <li>Encouraging innovation and creativity</li>
          <li>Supporting diversity and inclusion in tech</li>
        </ul>
      </div>
    </div>
  )
}