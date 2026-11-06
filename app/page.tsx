import Image from "next/image";

const services = [
  {
    icon: "🏠",
    title: "Residential Solar",
    hindi: "घरों के लिए सोलर सिस्टम",
    desc: "घर की बिजली बचाएँ और अपनी छत से बिजली बनाएँ।",
  },
  {
    icon: "🏢",
    title: "Commercial Solar",
    hindi: "व्यापार के लिए सोलर",
    desc: "दुकान, ऑफिस और फैक्ट्री के लिए Solar Solutions।",
  },
  {
    icon: "☀️",
    title: "On-Grid Solar",
    hindi: "ऑन ग्रिड सोलर सिस्टम",
    desc: "बिजली बिल कम करने के लिए आधुनिक सोलर सिस्टम।",
  },
  {
    icon: "🔧",
    title: "Solar Maintenance",
    hindi: "सोलर सर्विस एवं मेंटेनेंस",
    desc: "सोलर सिस्टम की देखभाल और तकनीकी सहायता।",
  },
];

const helplines = [
  {
    icon: "🔧",
    title: "सोलर सर्विस के लिए",
    numbers: ["7311191400"],
  },
  {
    icon: "📱",
    title: "ऑनलाइन कार्य हेतु",
    numbers: ["7311191300", "7905348934"],
  },
  {
    icon: "🏦",
    title: "बैंक से संबंधित जानकारी",
    numbers: ["7311191500"],
  },
  {
    icon: "⚡",
    title: "बिजली विभाग से संबंधित जानकारी",
    numbers: ["7311191600"],
  },
  {
    icon: "ℹ️",
    title: "अन्य जानकारी के लिए",
    numbers: ["7311191100", "7311191200", "7311191700"],
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-800">

      {/* HEADER */}
      <header className="sticky top-0 z-50 bg-white shadow-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3">

          <div className="flex items-center gap-3">
            <Image
              src="/logo.png.jpg"
              alt="Prakash Enterprises Logo"
              width={65}
              height={65}
              className="h-14 w-14 object-contain"
            />

            <div>
              <h1 className="text-lg font-extrabold text-green-800 md:text-2xl">
                PRAKASH ENTERPRISES
              </h1>
              <p className="text-xs font-medium text-gray-500">
                Solar Solutions | Basti
              </p>
            </div>
          </div>

          <nav className="hidden gap-5 font-semibold lg:flex">
            <a href="#home" className="hover:text-green-700">Home</a>
            <a href="#about" className="hover:text-green-700">About</a>
            <a href="#services" className="hover:text-green-700">Services</a>
            <a href="#packages" className="hover:text-green-700">Packages</a>
            <a href="#subsidy" className="hover:text-green-700">PM Surya Ghar</a>
            <a href="#helpline" className="hover:text-green-700">Helpline</a>
            <a href="#contact" className="hover:text-green-700">Contact</a>
          </nav>

          <a
            href="tel:7311191300"
            className="rounded-lg bg-yellow-400 px-3 py-2 text-sm font-bold text-black hover:bg-yellow-300"
          >
            Call Now
          </a>
        </div>
      </header>

      {/* HERO SECTION */}
      <section
        id="home"
        className="relative overflow-hidden bg-gradient-to-br from-green-950 via-green-800 to-emerald-600 px-5 py-24 text-white md:py-36"
      >
        <div className="relative z-10 mx-auto max-w-7xl">

          <p className="mb-5 inline-block rounded-full bg-white/15 px-5 py-2 text-sm font-semibold">
            ☀️ CLEAN ENERGY • BRIGHT FUTURE
          </p>

          <h2 className="max-w-3xl text-4xl font-extrabold leading-tight md:text-6xl">
            अब अपनी छत पर लगवाएँ
            <span className="text-yellow-300"> Solar System</span>
          </h2>

          <p className="mt-6 max-w-2xl text-lg text-green-50 md:text-xl">
            घर और व्यवसाय के लिए भरोसेमंद Solar Solutions।
            <br />
            Save Electricity, Save Money & Go Green!
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <a
              href="https://wa.me/917311191300?text=Namaste%2C%20mujhe%20Solar%20System%20ki%20jankari%20chahiye."
              className="rounded-lg bg-yellow-400 px-7 py-4 font-bold text-black shadow-lg hover:bg-yellow-300"
            >
              WhatsApp Enquiry →
            </a>

            <a
              href="tel:7311191300"
              className="rounded-lg border-2 border-white px-7 py-4 font-bold text-white hover:bg-white hover:text-green-900"
            >
              📞 Call: 7311191300
            </a>
          </div>
        </div>

        <div className="pointer-events-none absolute -right-20 -top-20 h-96 w-96 rounded-full bg-yellow-300/10 blur-3xl" />
      </section>

      {/* FEATURES */}
      <section className="bg-green-50 px-5 py-12">
        <div className="mx-auto grid max-w-6xl gap-6 text-center sm:grid-cols-3">

          <div>
            <div className="text-3xl">☀️</div>
            <h3 className="mt-2 font-bold text-green-900">Clean Energy</h3>
            <p className="text-sm text-gray-600">स्वच्छ और हरित ऊर्जा</p>
          </div>

          <div>
            <div className="text-3xl">💰</div>
            <h3 className="mt-2 font-bold text-green-900">Save Electricity</h3>
            <p className="text-sm text-gray-600">बिजली बिल में बचत</p>
          </div>

          <div>
            <div className="text-3xl">🔧</div>
            <h3 className="mt-2 font-bold text-green-900">Professional Service</h3>
            <p className="text-sm text-gray-600">बेहतर इंस्टॉलेशन सहायता</p>
          </div>

        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="px-5 py-20">
        <div className="mx-auto max-w-5xl text-center">

          <p className="font-bold uppercase tracking-widest text-green-700">
            About Our Company
          </p>

          <h2 className="mt-3 text-3xl font-extrabold text-green-950 md:text-4xl">
            Prakash Enterprises Solar Solutions
          </h2>

          <p className="mx-auto mt-6 max-w-3xl leading-8 text-gray-600">
            Prakash Enterprises में आपका स्वागत है।
            हम घरों और व्यवसायों के लिए Solar Energy Solutions
            उपलब्ध कराने के उद्देश्य से काम करते हैं।
            हमारा लक्ष्य है स्वच्छ ऊर्जा को बढ़ावा देना
            और ग्राहकों को सोलर सिस्टम की सही जानकारी देना।
          </p>

          <p className="mt-3 font-semibold text-green-800">
            आपका भरोसा, हमारी जिम्मेदारी!
          </p>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="bg-gray-50 px-5 py-20">
        <div className="mx-auto max-w-7xl">

          <div className="mb-12 text-center">
            <p className="font-bold text-green-700">OUR SERVICES</p>

            <h2 className="mt-2 text-3xl font-extrabold text-green-950">
              हमारी सोलर सेवाएँ
            </h2>

            <p className="mt-3 text-gray-600">
              Solar Solutions for Every Need
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service) => (
              <div
                key={service.title}
                className="rounded-2xl bg-white p-7 shadow-md transition hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="text-5xl">{service.icon}</div>

                <h3 className="mt-5 text-xl font-bold text-green-900">
                  {service.title}
                </h3>

                <p className="mt-2 font-semibold text-green-700">
                  {service.hindi}
                </p>

                <p className="mt-3 text-sm leading-6 text-gray-600">
                  {service.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SOLAR PACKAGES */}
      <section id="packages" className="bg-white px-5 py-20">
        <div className="mx-auto max-w-7xl">

          <div className="mb-12 text-center">
            <p className="font-bold text-green-700">SOLAR PACKAGES</p>

            <h2 className="mt-3 text-3xl font-extrabold text-green-950">
              हमारे Solar Packages
            </h2>

            <p className="mt-3 text-gray-600">
              Choose the Right Solar System for Your Home
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {["1 kW", "2 kW", "3 kW", "5 kW", "7 kW", "10 kW"].map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-green-100 p-7 text-center shadow-md hover:shadow-xl"
              >
                <div className="text-4xl">☀️</div>

                <h3 className="mt-4 text-2xl font-bold text-green-800">
                  {item}
                </h3>

                <p className="mt-2 text-gray-600">
                  Rooftop Solar System
                </p>

                <p className="mt-2 text-sm text-gray-500">
                  कीमत और जानकारी के लिए संपर्क करें
                </p>

                <a
                  href={`https://wa.me/917311191300?text=${encodeURIComponent("Namaste, mujhe " + item + " Solar System ki quotation chahiye.")}`}
                  className="mt-6 inline-block rounded-lg bg-green-800 px-6 py-3 font-bold text-white"
                >
                  Get Quotation
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PM SURYA GHAR */}
      <section id="subsidy" className="bg-green-900 px-5 py-20 text-white">
        <div className="mx-auto max-w-5xl text-center">

          <div className="text-5xl">🏡</div>

          <h2 className="mt-5 text-3xl font-extrabold md:text-4xl">
            PM Surya Ghar Muft Bijli Yojana
          </h2>

          <h3 className="mt-3 text-xl font-semibold text-yellow-300">
            पीएम सूर्य घर मुफ्त बिजली योजना
          </h3>

          <p className="mx-auto mt-5 max-w-3xl leading-8 text-green-100">
            Rooftop Solar Scheme की जानकारी प्राप्त करें।
            पात्रता, सब्सिडी और इंस्टॉलेशन प्रक्रिया के बारे में
            जानकारी के लिए हमसे संपर्क करें।
          </p>

          <a
            href="https://pmsuryaghar.gov.in/"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-block rounded-lg bg-yellow-400 px-7 py-4 font-bold text-black hover:bg-yellow-300"
          >
            Official Government Portal →
          </a>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="px-5 py-20">
        <div className="mx-auto max-w-5xl text-center">

          <p className="font-bold text-green-700">GET IN TOUCH</p>

          <h2 className="mt-3 text-3xl font-extrabold text-green-950">
            हमसे संपर्क करें
          </h2>

          <p className="mt-4 text-gray-600">
            अपने घर या व्यवसाय के लिए Solar System की जानकारी लें।
          </p>

          <div className="mt-10 rounded-2xl bg-green-50 p-8 shadow-sm">

            <h3 className="text-2xl font-bold text-green-900">
              PRAKASH ENTERPRISES
            </h3>

            <p className="mt-2 text-gray-600">
              Solar Solutions | Basti, Uttar Pradesh
            </p>

            <p className="mt-6 text-xl font-bold text-gray-800">
              📞 7311191300
            </p>

            <div className="mt-7 flex flex-wrap justify-center gap-4">
              <a
                href="tel:7311191300"
                className="rounded-lg bg-green-800 px-7 py-3 font-bold text-white hover:bg-green-700"
              >
                Call Now
              </a>

              <a
                href="https://wa.me/917311191300?text=Namaste%2C%20mujhe%20Solar%20System%20ki%20jankari%20chahiye."
                className="rounded-lg bg-green-600 px-7 py-3 font-bold text-white hover:bg-green-500"
              >
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CUSTOMER HELPLINE SECTION */}
      <section id="helpline" className="bg-green-50 px-5 py-20">
        <div className="mx-auto max-w-6xl">

          <div className="text-center">
            <p className="font-bold text-green-700">
              CUSTOMER SUPPORT
            </p>

            <h2 className="mt-3 text-3xl font-extrabold text-green-950 md:text-4xl">
              ग्राहक सहायता केंद्र
            </h2>

            <p className="mx-auto mt-5 max-w-3xl leading-8 text-gray-700">
              प्रिय ग्राहक,<br />
              सोलर सेवा हेतु प्रकाश इंटरप्राइजेज पर विश्वास जताने
              के लिए आपका धन्यवाद। ☀️
            </p>

            <p className="mt-3 text-gray-600">
              आगे की ऑनलाइन प्रक्रिया एवं सहायता के लिए नीचे दिए
              गए नंबरों पर संपर्क करें।
            </p>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">

            {helplines.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl bg-white p-7 text-center shadow-md transition hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="text-4xl">{item.icon}</div>

                <h3 className="mt-4 text-lg font-bold text-green-900">
                  {item.title}
                </h3>

                <div className="mt-5 flex flex-col gap-3">
                  {item.numbers.map((number) => (
                    <a
                      key={number}
                      href={`tel:${number}`}
                      className="rounded-lg bg-green-800 px-4 py-3 font-bold text-white hover:bg-green-700"
                    >
                      📞 {number}
                    </a>
                  ))}
                </div>
              </div>
            ))}

          </div>

          <div className="mt-12 rounded-2xl bg-green-900 px-6 py-10 text-center text-white shadow-lg">

            <h3 className="text-2xl font-extrabold text-yellow-300">
              PRAKASH ENTERPRISES
            </h3>

            <p className="mt-3 text-green-100">
              🙏 कृपया आवश्यकता अनुसार सही नंबर पर संपर्क करें।
            </p>

            <p className="mt-3 text-lg font-semibold">
              आपका भरोसेमंद सोलर पार्टनर ☀️
            </p>

            <a
              href="tel:8948502501"
              className="mt-6 inline-block rounded-lg bg-yellow-400 px-8 py-4 font-extrabold text-black hover:bg-yellow-300"
            >
              📞 मुख्य संपर्क: 8948502501
            </a>
          </div>

        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-gray-950 px-5 py-8 text-center text-white">

        <h3 className="text-xl font-bold text-yellow-300">
          PRAKASH ENTERPRISES
        </h3>

        <p className="mt-2 text-sm text-gray-300">
          Solar Solutions | Basti, Uttar Pradesh
        </p>

        <p className="mt-4 text-xs text-gray-400">
          © {new Date().getFullYear()} Prakash Enterprises. All Rights Reserved.
        </p>
      </footer>

      {/* FLOATING WHATSAPP */}
      <a
        href="https://wa.me/917311191300"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="fixed bottom-6 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-green-500 text-3xl text-white shadow-xl hover:scale-110"
      >
        ☎
      </a>

    </main>
  );
}