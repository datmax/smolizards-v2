/*
  This example requires Tailwind CSS v2.0+ 
  
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/aspect-ratio'),
    ],
  }
  ```
*/
const people = [
  {
    name: "Arancino",
    role: "Co-founder",
    imageUrl: "/ara.jpg",
    bio: "A funny living Italian stereotype who is half pizza pasta mafia half genius. So nerd his only real life friend is his cat. Also created smolizards game.",
  },
  {
    name: "Yamak",
    role: "Co-founder",
    imageUrl:
      "https://res.cloudinary.com/mazculo/image/upload/v1649351145/IMG_4316_fn0dkt.jpg",
    bio: "Co founder with the other dummies of the team. Currently giving dumb ideas and mostly busy banning dummies from our discord/rejecting dumb collab requests on twitter.",
  },
  {
    name: "Fiacchit",
    role: "Co-founder, Discord manager",
    imageUrl:
      "https://res.cloudinary.com/mazculo/image/upload/v1649352189/IMG_4319_ljaghx.jpg",
    bio: "Fiacchitt:\nCo-founder, discord manager.\nI have the best ides when I'm sitting on the toilet. \nOwner of the dumb hammer and ready to time you out for a week in discord.",
  },
  {
    name: "Lucy",
    role: "Co-founder, creative director",
    imageUrl:
      "https://res.cloudinary.com/mazculo/image/upload/v1649352195/IMG_4313_ace4ym.jpg",
    bio: "Cybersecurity engineer in the past life. A wannabe Donald Draper in web3.",
  },
  {
    name: "Max",
    role: "Web3 Dev",
    imageUrl: "/bibi.jpeg",
    bio: "When i don't sleep, I do stuff in web3 space. I like cats and I'm lazy. A lot.",
  },
  // More people...
];

export default function Team() {
  return (
    <div className="w-full mx-auto py-12 px-4 max-w-7xl sm:px-6 lg:px-8 lg:py-24 ">
      <div className="space-y-12">
        <ul
          role="list"
          className="space-y-12 lg:grid lg:grid-cols-2 grid-cols-1 lg:items-start lg:gap-x-10 lg:gap-y-14 lg:space-y-0">
          {people.map((person) => (
            <li
              key={person.name}
              className="mb-8  p-4 bg-black bg-opacity-30 backdrop-blur-sm rounded-xl">
              <div className="space-y-4 sm:grid sm:grid-cols-3 sm:gap-6 sm:space-y-0 lg:gap-10">
                <div className="h-0    aspect-w-3 aspect-h-2 sm:aspect-w-4 sm:aspect-h-4">
                  <img
                    className="object-cover shadow-lg rounded"
                    src={person.imageUrl}
                    alt=""
                  />
                </div>
                <div className="sm:col-span-2">
                  <div className="space-y-4">
                    <div className="text-5xl leading-6 font-medium space-y-1 text-white  bb">
                      <h3>{person.name}</h3>
                      <p className=" text-gray-100 text-2xl">{person.role}</p>
                    </div>
                    <div className="text-md">
                      <p className="text-gray-100 text-xl">{person.bio}</p>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
