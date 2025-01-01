import FeatureSection from '@/components/FeatureSection'
import BlogSection from '@/components/BlogSection'
import { dummyPosts } from "@/components/postdata";

export default function Home() {
  // Extract only the first three posts
  const homePagePosts = dummyPosts.slice(0, 3);

  return (
    <div>
      <div className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
            Welcome to <span className='text-indigo-600'>Tech</span>Blog
          </h1>
          <p className="mt-5 text-xl text-gray-500">
            Stay up-to-date with the latest in web development and technology.
          </p>
        </div>
      </div>
      <FeatureSection />
      {/* Pass only the first three posts to BlogSection */}
      <BlogSection posts={homePagePosts} />
    </div>
  )
}
