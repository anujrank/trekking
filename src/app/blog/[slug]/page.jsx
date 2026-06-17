import blogs from "@/app/blog/blogdata";
import ReactMarkdown from "react-markdown";
import Link from "next/link";

export default async function Page({ params }) {
  const { slug } = await params;

  const blog = blogs.find((item) => item.slug === slug);

  if (!blog) {
    return (
      <div className="max-w-3xl mx-auto py-24 text-center px-4">
        <span className="text-4xl">🔍</span>
        <h1 className="text-2xl font-bold text-gray-900 mt-4">
          Blog Not Found
        </h1>
        <p className="text-gray-500 mt-2">
          We couldn't find the article you're looking for.
        </p>
      </div>
    );
  }

  const relatedBlogs = blogs.filter((item) => item.slug !== slug);

  return (
    <div className="w-full min-h-screen bg-white text-gray-900 overflow-x-hidden">
      {/* HERO */}
      <div className="relative w-full h-[400px] md:h-[500px] overflow-hidden bg-neutral-900">
        {blog.img && (
          <img
            src={blog.img}
            alt={blog.title}
            className="absolute inset-0 w-full h-full object-cover opacity-75"
          />
        )}

        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent z-10" />

        <div className="absolute bottom-0 left-0 right-0 z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
          {blog.region && (
            <span className="inline-block bg-[#] text-white text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-md mb-4">
              {blog.region}
            </span>
          )}

          <h1 className="text-3xl md:text-5xl lg:text-6xl font-black text-white leading-tight max-w-4xl">
            {blog.title}
          </h1>
        </div>
      </div>

      {/* CONTENT */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_320px] gap-10">
          {/* BLOG CONTENT */}
          <div className="min-w-0 space-y-8 overflow-hidden">
            {blog.dis && (
              <div className="border-l-4 border-emerald-500 bg-emerald-50 p-5 rounded-r-xl">
                <p className="text-lg md:text-xl italic text-gray-700 leading-relaxed">
                  {blog.dis}
                </p>
              </div>
            )}

            {/* INFO BAR */}
            <div className="flex flex-wrap gap-4 pb-4 border-b border-gray-200">
              <div className="bg-gray-100 px-4 py-2 rounded-full text-sm font-medium">
                ⏱️ Duration: <span className="font-semibold">{blog.time}</span>
              </div>

              <div className="bg-gray-100 px-4 py-2 rounded-full text-sm font-medium">
                👥 Suitability:{" "}
                <span className="font-semibold">{blog.age}</span>
              </div>
            </div>

            {/* BLOG BODY */}
            <div className="min-w-0 overflow-hidden">
              <article className="max-w-none text-gray-800">
                <ReactMarkdown
                  components={{
                    pre: ({ children }) => (
                      <div className="whitespace-pre-wrap break-words text-lg leading-8 text-gray-700 overflow-hidden">
                        {children}
                      </div>
                    ),

                    code: ({ children }) => (
                      <span className="whitespace-pre-wrap break-words">
                        {children}
                      </span>
                    ),

                    p: ({ children }) => (
                      <p className="mb-6 text-lg leading-8 text-gray-700">
                        {children}
                      </p>
                    ),

                    h1: ({ children }) => (
                      <h1 className="text-4xl font-bold mt-10 mb-6">
                        {children}
                      </h1>
                    ),

                    h2: ({ children }) => (
                      <h2 className="text-3xl font-bold mt-8 mb-5">
                        {children}
                      </h2>
                    ),

                    h3: ({ children }) => (
                      <h3 className="text-2xl font-semibold mt-6 mb-4">
                        {children}
                      </h3>
                    ),
                    h5: ({ children }) => (
                      <h3 className="text-white bg-[#0f6e56] w-fit px-2 py-1 rounded-full">
                        {children}
                      </h3>
                    ),

                    h6: ({ children }) => (
                      <h3 className="text-[#0f6e56] bg-emerald-100 p-5 pt-5 pb-5 border-l-4 border-[#0f6e56]">
                        {children}
                      </h3>
                    ),

                    ul: ({ children }) => (
                      <ul className="list-disc pl-6 space-y-2 mb-6">
                        {children}
                      </ul>
                    ),

                    ol: ({ children }) => (
                      <ol className="list-decimal pl-6 space-y-2 mb-6">
                        {children}
                      </ol>
                    ),

                    li: ({ children }) => (
                      <li className="leading-8">{children}</li>
                    ),

                    img: ({ src, alt }) => (
                      <img
                        src={src}
                        alt={alt}
                        className="w-full h-auto rounded-2xl my-8"
                      />
                    ),
                  }}
                >
                  {blog.content.replace(/^\s+/gm, "")}
                </ReactMarkdown>
              </article>
            </div>
          </div>

          {/* SIDEBAR */}
          <aside className="w-full lg:sticky lg:top-6 self-start">
            <div className="bg-gray-50 border border-gray-200 rounded-2xl p-5 shadow-sm">
              <div className="flex items-center justify-between mb-4 pb-3 border-b border-gray-200">
                <h3 className="font-bold uppercase tracking-wider text-sm">
                  More Adventures
                </h3>

                <span className="bg-blue-100 text-[#52d1a3] text-xs font-bold px-2 py-1 rounded-full">
                  {relatedBlogs.length}
                </span>
              </div>

              <div className="space-y-4">
                {relatedBlogs.map((item) => (
                  <Link
                    key={item.slug}
                    href={`/blog/${item.slug}`}
                    className="group flex gap-3 p-2 rounded-xl hover:bg-white hover:shadow-sm transition-all"
                  >
                    <img
                      src={item.img}
                      alt={item.title}
                      className="w-16 h-16 rounded-lg object-cover bg-gray-200 flex-shrink-0"
                    />

                    <div className="min-w-0">
                      <p className="text-[10px] uppercase tracking-widest font-bold text-[#022c22] mb-1">
                        {item.region}
                      </p>

                      <h4 className="text-sm font-semibold text-gray-900 line-clamp-2 group-hover:text-[#047359] transition-colors">
                        {item.title}
                      </h4>

                      <p className="text-xs text-gray-500 mt-1">
                        ⏱️ {item.time}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
