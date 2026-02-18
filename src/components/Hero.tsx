import { content } from './content';

const Hero = () => {
  const { profile } = content;
  
  return (
    <section className="py-20 text-center bg-white dark:bg-gray-900">
      <h1 className="text-5xl font-extrabold text-gray-900 dark:text-white mb-4">
        {profile.name}
      </h1>
      <p className="text-xl text-blue-600 font-medium mb-6">{profile.title}</p>
      <p className="max-w-2xl mx-auto text-gray-600 dark:text-gray-400 mb-8 px-4">
        {profile.bio}
      </p>
      <div className="flex justify-center gap-6">
        <a href={profile.links.github} target="_blank" className="hover:text-blue-500 transition-colors dark:text-gray-300">GitHub</a>
        <a href={profile.links.linkedin} target="_blank" className="hover:text-blue-500 transition-colors dark:text-gray-300">LinkedIn</a>
      </div>
    </section>
  );
};

export default Hero;