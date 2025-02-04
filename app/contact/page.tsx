// app/contact/page.tsx
export default function ContactPage() {
  return (
    <section className="space-y-6">
      <h2 className="text-3xl font-bold text-green-600">Contact Us</h2>
      <form className="space-y-4">
        <div>
          <label className="block text-gray-700">Name</label>
          <input type="text" className="w-full border rounded p-2" />
        </div>
        <div>
          <label className="block text-gray-700">Email</label>
          <input type="email" className="w-full border rounded p-2" />
        </div>
        <div>
          <label className="block text-gray-700">Message</label>
          <textarea className="w-full border rounded p-2" rows={4}></textarea>
        </div>
        <button type="submit" className="bg-green-600 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-green-700">
          Send Message
        </button>
      </form>
    </section>
  );
}
