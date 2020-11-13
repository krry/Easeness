import Link from "next/link";

export default function AboutContent() {
  return (
    <section className="flex-col md:flex-row flex items-center md:justify-between mt-16 mb-16 md:mb-12">
      <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-tight md:leading-none mb-12 text-center md:text-left">
        What is Easeness?
        <br />
        <small>
          <Link href="/">
            <a className="underline hover:text-success duration-200 transition-colors">Take. Me. Home.</a>
          </Link>
        </small>
      </h1>
      <div className="max-w-2xl mx-auto">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold">
          The Great Exhale of 2020
        </h2>
        <p className="text-justify">In 2021, we'll still be guessing, still be arguing. But by 2022, we'll have the space to see what really went on during this "pandemic". We'll understand we had many damaging habits to shed, many hurtful attachments to let go, and opened many wounds that we then had to heal. And we were wounded to begin with, descending as we each do from countless generations of habitual (now institutionalized) violence, oppression, and swelling, mounting, towering ignorance. We had to stay busy to distract ourselves from the horror of our society.</p>
        <h3 className="text-2xl md:text-2xl lg:text-3xl font-bold">From Business to Easeness</h3>
        <p className="text-justify">When this dawned on me—that the drive behind our otherwise inexplicable hurry, the origin of our thirst for progress, the root of our hunger for productivity, were all the same thing—I remembered what we forget. And that is, in a word, Easeness. A.k.a. Abundance. Providence. Bounty. Grace. Mercy. These are words that rarely enter the workplace. The fundamental assumption in the workplace, and in the democracy fueled by <b>MOAR JOBS</b> in which we heartlessly goad each other to participate, is simple:</p>
        <blockquote>
          <p>"We are not okay."</p>
        </blockquote>
      </div>
    </section>
  );
}
