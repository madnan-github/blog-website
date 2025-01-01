import Link from 'next/link';

const footerData = {
  brand: {
    name: 'TechBlog',
    description: 'Bringing you the latest in web development and technology.',
  },
  sections: [
    {
      title: 'Navigation',
      links: [
        { name: 'Home', href: '/' },
        { name: 'Blog', href: '/blog' },
        { name: 'About', href: '/about' },
      ],
    },
    {
      title: 'Legal',
      links: [
        { name: 'Privacy Policy', href: '/privacypolicy' },
        { name: 'Terms of Service', href: '/terms' },
      ],
    },
  ],
  footerText: '© 2025 TechBlog. All rights reserved.',
};

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          {/* Brand Section */}
          <div className="space-y-8 xl:col-span-1">
            <span className="text-2xl font-bold">{footerData.brand.name}</span>
            <p className="text-gray-300 text-base">{footerData.brand.description}</p>
          </div>

          {/* Links Section */}
          <div className="mt-12 grid grid-cols-2 gap-8 xl:mt-0 xl:col-span-2">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              {footerData.sections.map((section) => (
                <div key={section.title}>
                  <h3 className="text-sm font-semibold text-gray-300 tracking-wider uppercase">
                    {section.title}
                  </h3>
                  <ul className="mt-4 space-y-4">
                    {section.links.map((link) => (
                      <li key={link.name}>
                        <Link href={link.href} className="text-base text-gray-300 hover:text-white">
                          {link.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer Text */}
        <div className="mt-12 border-t border-gray-700 pt-8">
          <p className="text-base text-gray-300 xl:text-center">{footerData.footerText}</p>
        </div>
      </div>
    </footer>
  );
}
