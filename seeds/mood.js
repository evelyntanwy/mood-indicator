exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("mood")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("mood").insert([
        {
          id: 1,
          name: "Happy",
          image: "/images/happydany.jpg",
          quotes: "That's great. Stay PAWsitive!",
        },
        {
          id: 2,
          name: "Okay",
          image: "/images/okaydany.jpg",
          quotes: "It's okay to feel meow. You might just need a paws.",
        },
        {
          id: 3,
          name: "Sad",
          image: "/images/saddany.jpg",
          quotes:
            "You might be exhausted fur-real. Not everything needs to be purrfect. \n Why are cats so good at video games? \n Because they have 9 lives.",
        },
      ]);
    });
};
