export default function PrivacyPolicy() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-extrabold text-gray-900 mb-6">Privacy Policy</h1>
      
      <div className="prose prose-lg">
        <p>Last updated: {new Date().toLocaleDateString()}</p>
        
        <h2>1. Introduction</h2>
        <p>Welcome to DynamicBlog. We respect your privacy and are committed to protecting your personal data.</p>
        
        <h2>2. Data We Collect</h2>
        <p>We may collect and process the following data:</p>
        <ul>
          <li>Personal identification information (Name, email address, etc.)</li>
          <li>Usage data (How you interact with our website)</li>
          <li>Cookies and tracking technologies</li>
        </ul>
        
        <h2>3. How We Use Your Data</h2>
        <p>We use your data to:</p>
        <ul>
          <li>Provide and maintain our service</li>
          <li>Notify you about changes to our service</li>
          <li>Provide customer support</li>
          <li>Gather analysis or valuable information to improve our service</li>
        </ul>
        
        <h2>4. Data Security</h2>
        <p>We implement appropriate security measures to protect your personal data against unauthorized access or alteration.</p>
        
        <h2>5. Your Rights</h2>
        <p>You have the right to access, update, or delete your personal information. Please contact us to exercise these rights.</p>
        
        <h2>6. Changes to This Policy</h2>
        <p>We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page.</p>
        
        <h2>7. Contact Us</h2>
        <p>If you have any questions about this Privacy Policy, please contact us at privacy@dynamicblog.com.</p>
      </div>
    </div>
  )
}