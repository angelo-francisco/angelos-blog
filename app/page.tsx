import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { UserCircle, Search } from "lucide-react";

const summary = [
  {
    year: 2026,
    month: "March"
  },
]

const content = [
  {
    header: summary[0],
    posts: [
      {
        title: "Post 1",
        link: "jaja"
      }
    ]
  },
  {
    header: summary[0],
    posts: [
      {
        title: "Post 2",
        link: "jaja"
      }
    ]
  }
]

export default function Home() {
  return (
    <div className="flex justify-center flex-col items-center p-10">
      <nav className="md:fixed md:left-0 md:top-1/2 md:translate-x-1/2 md:-translate-y-1/2 flex md:flex-col items-center gap-1 border border-black/10 bg-black/5 backdrop-blur-md rounded-full px-3 py-1 shadow-lg">
        <Link href="/" className="group">
          <Image
            src="/logo-dark.png"
            alt="Navbar Blog Page Logo"
            width={42}
            height={42}
            className="transition-transform duration-300 group-hover:scale-110"
          />
        </Link>

        <div className="sm:h-6 sm:w-px md:h-[1px] md:w-6 bg-black/50 md:my-1 md:mx-0 sm:mx-1" />
        <div className="flex items-center gap-4 md:flex-col">

          <Link href="/about-me" className="nav-icon">
            <UserCircle className="w-7 h-7 hover:w-8 hover:h-8 transition-all" />
          </Link>

          <Link href="https://github.com" target="_blank" className="nav-icon">
            <FaGithub className="w-7 h-7 hover:w-8 hover:h-8 transition-all" />
          </Link>

          <Link href="https://linkedin.com" target="_blank" className="nav-icon">
            <FaLinkedin className="w-7 h-7 hover:w-8 hover:h-8 transition-all" />
          </Link>

          <Link href="/search" className="nav-icon sm:mr-1 md:mr-0 md:mb-1">
            <Search className="w-7 h-7 hover:w-8 hover:h-8 transition-all" />
          </Link>
        </div>
      </nav>
      <main className="min-w-full mt-8 md:mt-0 flex flex-col items-center justify-center md:px-80">
        <h1 className="text-6xl logo">Ângelo&apos; Blog</h1>
        <span className="text-xl mt-1">My brain&apos;s backup and thoughts</span>
        <div className="w-full mt-6 flex flex-col">
          <h3 className="font-semibold text-xl">Easy Go to Summary</h3>
          <div className="flex justiy-left items-left gap-3">
            {
              summary.map(t => {
                return (
                  <Link href={`#${t.year}-${t.month}`} className="text-lg underline">
                    <span>{t.month}, {t.year}</span>
                  </Link>
                )
              })
            }
          </div>
        </div>
        <div className="w-full mt-6 flex flex-col justiy-left items-left gap-3">
          {
            content.map(c => {
              return (
                <div className="w-full flex flex-col">
                  <span className="text-2xl font-semibold text-left border-b text-gray-700">{c.header.month}, {c.header.year}</span>
                  <ul className="mt-2 flex flex-col gap-3 list-disc list-inside p-2">
                    {
                      c.posts.map(p => {
                        return (
                          <li>
                            <Link href={p.link} className="text-lg underline text-blue-500">
                              {p.title}
                            </Link>
                          </li>
                        )
                      })
                    }
                  </ul>
                </div>
              )
            })
          }
        </div>
      </main>
    </div>
  );
}
