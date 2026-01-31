import React from 'react';

const TrustedBy = () => {
  return (
    <section className="bg-[#0b1120] py-16 text-center">
      <p className="text-slate-500 uppercase tracking-widest text-sm mb-8">
        Trusted by leading teams worldwide
      </p>

      <div className="flex justify-center gap-12 text-slate-400 text-lg">
        {["Google", "Slack", "Shopify", "Notion", "GitHub"].map((brand, i) => (
          <span key={i} className="hover:text-[#bef264] transition">
            {brand}
          </span>
        ))}
      </div>
    </section>
  );
};
export default TrustedBy;