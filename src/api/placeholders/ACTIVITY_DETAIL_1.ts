export default {
  gid: 1,
  place: {
    lat: 37.7749,
    lng: -122.4194,
    radius: 500,
  },
  creationDate: 1709492837,
  startDate: 1712164031,
  endDate: 171217431,
  admin: 1,
  price: 200,
  access: "public",
  name: "Activity 1",
  description: "This is a placeholder activity.",
  sport: {
    gid: 1,
    name: "Fútbol",
    icon: "https://i.pinimg.com/564x/95/b3/99/95b39952cb3adbcb58a1ae99680bdf35.jpg",
  },
  type: "normal",
  teams: 2,
  playersPerTeam: 5,
  closed: false,
  chat: 1,
  score: null,
  status: "pending",
  teamPlayers: [
    {
      name: "A",
      players: [
        {
          gid: 1,
          name: "John Doe",
          image:
            "https://www.conpaas.org/wp-content/uploads/2016/06/team-1.jpg",
        },
        {
          gid: 2,
          name: "Mary Pond",
          image:
            "https://www.conpaas.org/wp-content/uploads/2016/06/team-2.jpg",
        },
      ],
    },
    {
      name: "B",
      players: [
        {
          gid: 3,
          name: "John Smith",
          image:
            "https://www.conpaas.org/wp-content/uploads/2016/06/team-3.jpg",
        },
        {
          gid: 4,
          name: "Rory Williams",
          image:
            "https://www.conpaas.org/wp-content/uploads/2016/06/team-4.jpg",
        },
        {
          gid: 5,
          name: "Clara Oswald",
          image:
            "https://www.conpaas.org/wp-content/uploads/2016/06/team-5.jpg",
        },
      ],
    },
  ],
};
