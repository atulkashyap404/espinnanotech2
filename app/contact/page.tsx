"use client";

export default function ContactPage() {
  return (
    <main className="min-h-screen pt-20 px-4 md:px-6">
      <div className="max-w-7xl mx-auto py-12">
        <h1 className="text-4xl font-bold mb-8">Contact Us</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
            {/* Add contact form here */}
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>
            {/* Add contact information here */}
          </div>
        </div>
      </div>
    </main>
  );
}