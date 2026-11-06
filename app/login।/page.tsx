const roles = [
  {
    title: "Admin Login",
    description: "पूरी वेबसाइट और ऑफिस का नियंत्रण",
    icon: "🔐",
    link: "/login/admin",
  },
  {
    title: "Manager Login",
    description: "ऑफिस और टीम मैनेजमेंट",
    icon: "👨‍💼",
    link: "/login/manager",
  },
  {
    title: "Staff Login",
    description: "उपस्थिति और काम की रिपोर्ट",
    icon: "👷",
    link: "/login/staff",
  },
  {
    title: "Customer Login",
    description: "अपने सोलर प्रोजेक्ट की जानकारी",
    icon: "🏠",
    link: "/login/customer",
  },
];

export default function LoginPage() {
  return (
    <main className="min-h-screen bg-green-50 px-5 py-12">
      <div className="mx-auto max-w-xl">
        <a href="/" className="font-semibold text-green-800">
          ← Home पर वापस जाएँ
        </a>

        <div className="mt-8 rounded-2xl bg-white p-8 shadow-lg">
          <h1 className="text-center text-3xl font-bold text-green-800">
            PRAKASH ENTERPRISES
          </h1>

          <p className="mt-2 text-center text-gray-500">
            Solar Management Portal
          </p>

          <h2 className="mt-10 text-center text-xl font-bold">
            अपना Login चुनें
          </h2>

          <div className="mt-6 space-y-4">
            {roles.map((role) => (
              <a
                key={role.title}
                href={role.link}
                className="flex items-center gap-4 rounded-xl border border-green-200 p-5 transition hover:bg-green-50"
              >
                <span className="text-3xl">{role.icon}</span>
                <div>
                  <h3 className="font-bold text-gray-900">
                    {role.title}
                  </h3>
                  <p className="text-sm text-gray-500">
                    {role.description}
                  </p>
                </div>
                <span className="ml-auto text-green-700">→</span>
              </a>
            ))}
          </div>

          <p className="mt-8 text-center text-sm text-gray-500">
            Belhara, Walterganj, Basti
          </p>
          <p className="mt-2 text-center font-semibold text-green-800">
            7311191300
          </p>
        </div>
      </div>
    </main>
  );
}