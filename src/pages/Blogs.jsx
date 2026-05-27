import React from 'react';

export default function Blogs() {
  const blogs = [
    { title: "The Science Behind Alkaline Water", date: "May 15, 2026", excerpt: "Discover how pH balance affects your body and why hydration matters." },
    { title: "5 Ways to Stay Hydrated This Summer", date: "May 02, 2026", excerpt: "Tips and tricks for maintaining optimal hydration during the hottest months." },
    { title: "Alkaline vs Regular Water: The Showdown", date: "April 20, 2026", excerpt: "We compare the benefits and differences to help you make the right choice." }
  ];

  return (
    <div className="pt-32 pb-20 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto min-h-screen">
      <h1 className="text-display-md md:text-display-lg text-primary text-center mb-12">Hydration Blog</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogs.map((blog, i) => (
          <div key={i} className="bg-surface/50 backdrop-blur-[20px] border border-white/10 rounded-3xl p-6 hover:-translate-y-2 transition-transform duration-300">
            <div className="text-label-sm text-primary mb-2">{blog.date}</div>
            <h3 className="text-title-lg text-white mb-4">{blog.title}</h3>
            <p className="text-body-md text-on-surface-variant mb-6">{blog.excerpt}</p>
            <button className="text-primary font-bold text-label-md flex items-center gap-1 hover:text-white transition-colors">
              Read More <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
