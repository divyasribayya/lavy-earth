import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <>
      <header className="text-gray-600 body-font shadow-md">
        <div className="container max-w-7xl mx-auto flex items-center justify-between p-5">
          {/* LEFT - Logo */}
          <Link href="/" className="flex items-center">
            <Image src="/img/logo.png" alt="Logo" width={80} height={80} />
          </Link>

          {/* RIGHT - Nav */}
          <nav className="flex justify-end space-x-5">
            {[
              { href: "/", label: "Home" },
              { href: "/about", label: "About Us" },
              { href: "/products", label: "Products" },
              { href: "/", label: "Services" },
              { href: "/contact", label: "Contact Us" },
            ].map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="relative group px-2 py-1 hover:text-gray-900 transition-colors hover:underline hover:underline-offset-4 hover:decoration-2"
              >
                {item.label}
                <span className="absolute left-0 -bottom-1 w-full h-0.5 bg-gray-900 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded hidden" />
              </Link>
            ))}
          </nav>

          {/* Optional right side */}
          <div className="w-[100px]">{/* Optional right side */}</div>
        </div>
      </header>
    </>
  );
}
