"use client";

const Footer = () => {
  const socialLinks = [
    {
      name: "Facebook",
      path: "M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z",
      href: "https://www.facebook.com/HaiToanDev/",
    },
    {
      name: "Instagram",
      path: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.981 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z",
      href: "https://www.instagram.com/ndhai_toan/",
    },
    {
      name: "Github",
      path: "M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12",
      href: "https://github.com/Haitoan1998",
    },
    {
      name: "Telegram",
      path: "M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm5.49 8.161c-.156 1.626-.832 5.63-1.17 7.44-.145.765-.429 1.021-.703 1.046-.605.056-1.062-.4-1.646-.782-.917-.596-1.436-.968-2.325-1.553-1.023-.675-.361-1.045.223-1.652.153-.158 2.828-2.592 2.877-2.812.006-.026.012-.126-.048-.179-.06-.053-.15-.035-.213-.021-.09.02-1.517.962-4.28 2.828-.404.279-.771.415-1.099.408-.363-.008-1.06-.205-1.577-.373-.637-.206-1.144-.315-1.099-.665.023-.182.274-.369.753-.56 2.943-1.279 4.904-2.126 5.881-2.542 2.795-1.188 3.377-1.394 3.755-1.394.083 0 .27.02.39.117.1.08.127.188.134.263.008.082.012.23.003.353z",
      href: "https://t.me/haitoan98",
    },
    {
      name: "Twitter",
      path: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z",
      href: "https://x.com/ToanNguyen2910",
    },
  ];

  const menuItems = [
    { name: "About me", id: "aboutme" },
    { name: "Resume", id: "Resume" },
    { name: "Company", id: "Company" },
    { name: "Skills", id: "Skills" },
    { name: "Projects", id: "Projects" },
    { name: "Contact", id: "Contact" },
  ];
  const handleScroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      // Lấy vị trí của phần tử
      const offset = 80; // Khoảng cách bù trừ nếu bạn có Header cố định (Sticky)
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });

      // Đóng menu mobile sau khi click
    }
  };
  return (
    <footer className="w-full bg-[#1a1a20] py-12 border-t border-zinc-800/50 mt-20 font-mono">
      <div className="max-w-7xl mx-auto px-4 flex flex-col items-center">
        {/* --- LOGO --- */}
        <div className="flex items-center gap-3 mb-6 group cursor-default">
          <svg className="w-8 h-8 text-[#b3ff00] transition-transform duration-300 group-hover:scale-110" fill="currentColor" viewBox="0 0 640 512">
            <path d="M278.9 511.5l-61-17.7c-6.4-1.8-10-8.5-8.2-14.9L346.2 8.7c1.8-6.4 8.5-10 14.9-8.2l61 17.7c6.4 1.8 10 8.5 8.2 14.9L293.8 503.3c-1.9 6.4-8.5 10.1-14.9 8.2zm-114-112.2l43.5-46.4c4.6-4.9 4.3-12.7-.8-17.2L117 256l90.6-79.7c5.1-4.5 5.5-12.3.8-17.2l-43.5-46.4c-4.5-4.8-12.1-5.1-17-.6L3.8 247.2c-5.1 4.7-5.1 12.8 0 17.5l144.1 135.1c4.9 4.5 12.5 4.2 17-.6zm471.3-252.1l-43.5 46.4c-4.6 4.9-4.3 12.7.8 17.2L483 256l-90.6 79.7c-5.1 4.5-5.5 12.3-.8 17.2l43.5 46.4c4.5 4.8 12.1 5.1 17 .6l144.1-135.1c5.1-4.7 5.1-12.8 0-17.5L453.1 112.1c-4.9-4.5-12.5-4.2-17 .6z" />
          </svg>
          <span className="text-white text-2xl font-bold tracking-tighter">
            Toan<span className="text-zinc-500">.dev</span>
          </span>
        </div>

        {/* --- SOCIAL ICONS --- */}
        <div className="flex items-center gap-7 mb-10">
          {socialLinks.map((link) => (
            <a href={link.href} key={link.name} className={`text-zinc-500 transition-all duration-300 hover:scale-125 hover:text-white`} aria-label={link.name}>
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d={link.path} />
              </svg>
            </a>
          ))}
        </div>

        {/* --- NAVIGATION --- */}
        <nav className="flex flex-wrap justify-center gap-x-10 gap-y-4 mb-4">
          {menuItems.map((item) => (
            <div
              key={item?.id}
              onClick={() => {
                handleScroll(item?.id);
              }}
              className="text-zinc-500 hover:text-white text-sm transition-colors duration-300 relative group cursor-pointer"
            >
              {item?.name}
              <span className="absolute -bottom-1 left-1/2 w-0 h-[1px] bg-[#b3ff00] transition-all duration-300 group-hover:w-full group-hover:left-0" />
            </div>
          ))}
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
