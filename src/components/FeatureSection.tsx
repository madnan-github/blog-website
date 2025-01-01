import { Newspaper, Users, Zap } from 'lucide-react'

const features = [
  {
    name: 'Latest News',
    description: 'Stay up-to-date with the latest trends and news in web development.',
    icon: Newspaper,
  },
  {
    name: 'Community Driven',
    description: 'Join a thriving community of developers and share your knowledge.',
    icon: Users,
  },
  {
    name: 'Fast and Responsive',
    description: 'Enjoy a lightning-fast, responsive reading experience on any device.',
    icon: Zap,
  },
]

const FeatureSection = () => {
  return (
    <div className="bg-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Features</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            A better way to stay informed
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Discover why TechBlog is the go-to platform for developers and tech enthusiasts.
          </p>
        </div>

        <div className="mt-10">
          <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
            {features.map((feature) => (
              <div key={feature.name} className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                    <feature.icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <p className="ml-16 text-lg leading-6 font-medium text-gray-900">{feature.name}</p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-500">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}

export default FeatureSection