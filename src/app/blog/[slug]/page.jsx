import blogs from "@/app/blog/blogdata";
import ReactMarkdown from "react-markdown";

export default async function Page({ params }) {
  const { slug } = await params;

  const blog = blogs.find((item) => item.slug === slug);

  if (!blog) {
    return (
      <div className="max-w-3xl mx-auto py-24 text-center">
        <span className="text-4xl">🔍</span>
        <h1 className="text-2xl font-bold text-gray-900 mt-4">Blog Not Found</h1>
        <p className="text-gray-500 mt-2">We couldn't find the article you're looking for.</p>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto py-12 px-5 antialiased">
      {/* Category / Region */}
      <div className="flex items-center gap-2 mb-3">
        <span className="inline-flex items-center rounded-md bg-blue-50 px-2.5 py-1 text-xs font-semibold text-blue-700 ring-1 ring-inset ring-blue-700/10">
          {blog.region}
        </span>
      </div>

      {/* Title */}
      <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight leading-tight mb-4">
        {blog.title}
      </h1>

      {/* Description / Subtitle */}
      <p className="text-xl text-gray-600 leading-relaxed font-normal mb-6 border-l-4 border-gray-200 pl-4 italic">
        {blog.dis}
      </p>

      {/* Metadata Badges */}
      <div className="flex flex-wrap gap-4 items-center text-sm text-gray-600 mb-10 pb-6 border-b border-gray-100">
        <div className="flex items-center gap-1.5 bg-gray-50 px-3 py-1.5 rounded-full border border-gray-100">
          <span>⏱️</span>
          <span className="font-medium">{blog.time}</span>
        </div>
        <div className="flex items-center gap-1.5 bg-gray-50 px-3 py-1.5 rounded-full border border-gray-100">
          <span>👥</span>
          <span className="font-medium">{blog.age}</span>
        </div>
      </div>

      {/* Feature Image */}
     <div className="max-w-4xl mx-auto space-y-5">
      <img src={blog.img} alt="" />
     <p>{blog.dis}</p>
     <p>{blog.content}</p>
     </div>
    </div>
  );
}