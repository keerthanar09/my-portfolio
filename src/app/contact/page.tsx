export default function Contact() {
  const links = [
    {
      label: "Email",
      value: "keerthanarxd24@gmail.com",
      href: "mailto:keerthanarxd24@gmail.com",
      icon: "✉",
    },
    {
      label: "Email (alt)",
      value: "keerthana240904@gmail.com",
      href: "mailto:keerthana240904@gmail.com",
      icon: "✉",
    },
    {
      label: "LinkedIn",
      value: "linkedin.com/in/keerthanarxd",
      href: "https://www.linkedin.com/in/keerthanarxd/",
      icon: "in",
    },
    {
      label: "GitHub",
      value: "github.com/keerthanar09",
      href: "https://github.com/keerthanar09",
      icon: "⌥",
    },
    {
      label: "Phone",
      value: "+91 8123700951",
      href: "tel:+918123700951",
      icon: "☎",
    },
  ];

  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-8">
      <div className="max-w-lg w-full">
        <h1 className="text-4xl font-bold text-white text-center mb-10">Get in touch</h1>


        <div className="flex flex-col gap-4">
          {links.map((item) => (
            <a
              key={item.label}
              href={item.href}
              target={item.href.startsWith("http") ? "_blank" : undefined}
              rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="flex items-center gap-4 p-4 rounded-xl
                         border border-white/10 bg-white/5 backdrop-blur-md
                         hover:bg-white/10 hover:border-green-500/40
                         hover:shadow-md hover:shadow-green-900/20
                         transition-all duration-200 group"
            >
              <span className="w-10 h-10 flex items-center justify-center rounded-lg
                               bg-green-900/40 text-green-300 text-sm font-bold border border-green-700/30
                               group-hover:bg-green-800/50 transition-colors shrink-0">
                {item.icon}
              </span>
              <div className="min-w-0">
                <p className="text-white/40 text-xs uppercase tracking-wider mb-0.5">{item.label}</p>
                <p className="text-white/80 text-sm truncate group-hover:text-green-300 transition-colors">
                  {item.value}
                </p>
              </div>
              <span className="ml-auto text-white/20 group-hover:text-green-400 transition-colors text-lg">→</span>
            </a>
          ))}
        </div>
      </div>
    </main>
  );
}
