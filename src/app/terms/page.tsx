export default function TermsOfService() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-extrabold text-gray-900 mb-6">Terms of Service</h1>
      
      <div className="prose prose-lg">
        <p className="pb-4">Last updated: {new Date().toLocaleDateString()}</p>
        
        <h2>1. Acceptance of Terms</h2>
        <p>By accessing or using DynamicBlog, you agree to be bound by these Terms of Service.</p>
        
        <h2>2. Description of Service</h2>
        <p>DynamicBlog provides a platform for reading and sharing blog posts related to web development and technology.</p>
        
        <h2>3. User Responsibilities</h2>
        <p>You are responsible for your use of the service and any content you post. You agree not to post content that is illegal, offensive, or violates the rights of others.</p>
        
        <h2>4. Intellectual Property</h2>
        <p>The content on DynamicBlog, including text, graphics, logos, and software, is the property of DynamicBlog or its content suppliers and is protected by copyright laws.</p>
        
        <h2>5. Limitation of Liability</h2>
        <p>DynamicBlog shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of or inability to use the service.</p>
        
        <h2>6. Termination</h2>
        <p>We reserve the right to terminate or suspend your account and access to the service at our sole discretion, without notice, for conduct that we believe violates these Terms of Service or is harmful to other users, us, or third parties, or for any other reason.</p>
        
        <h2>7. Changes to Terms</h2>
        <p>We may modify these Terms of Service at any time. Your continued use of the service after any such changes constitutes your acceptance of the new Terms of Service.</p>
        
        <h2>8. Governing Law</h2>
        <p>These Terms of Service shall be governed by and construed in accordance with the laws of [Your Jurisdiction], without regard to its conflict of law provisions.</p>
        
        <h2>9. Contact Us</h2>
        <p>If you have any questions about these Terms of Service, please contact us at terms@dynamicblog.com.</p>
      </div>
    </div>
  )
}