import Image from "next/image";

type ContributorsProps ={
    name: string;
    role: string;
    image: string;
 }

export default function Page() {

  const contributors: ContributorsProps[] = [
    {
      name: "Ridho Awwaludin",
      role: "Web Developer",
      image: "ridho.png"
    },
    {
      name: "Farhan Ramadhan",
      role: "Formula Implementation",
      image: "farhan.png"
    },
    {
      name: "Hasbi Rabbani",
      role: "Manual Guide Writer",
      image: "hasbi.png"
    },
    {
      name: "Briliant Arifin",
      role: "UI/UX Designer",
      image: "brilliant.png"
    },
    {
      name: "Farizal Muztahidin",
      role: "UI/UX Designer",
      image: "farizal.png"
    },
  ];

  return (
    <div className="w-full h-full flex flex-col justify-between dark:text-white relative py-20 items-center">
      <h1 className="text-4xl font-bold text-center">Contributors</h1>
      <div className="grid lg:grid-cols-5 md:grid-cols-2 grid-cols-1 gap-10 mt-10 lg:w-full w-3/4 lg:px-10 px-5">
        {
          contributors.map((contributor, index) => (
            <div key={index} className={`flex flex-col items-center bg-black/20 bg-white/20 p-5 rounded-lg shadow-lg transition-transform transform hover:scale-105 w-full ${index === 4 ? "lg:col-span-1 md:col-span-2 col-span-1" : ""}`}>
              <Image src={`/assets/static/contributors/${contributor.image}`} alt={contributor.name} className="w-34 h-42 rounded-full border border-2 border-black/20 dark:border-white/30 mb-4" width={500} height={500} quality={100}/>
              <h2 className="text-lg font-semibold">{contributor.name}</h2>
              <p className="text-gray-500 dark:text-white/90">{contributor.role}</p>
            </div>
          ))
        }
       
      </div>
    </div>
  );
}