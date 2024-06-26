import User from "../../store/types/user/User";

const data: User = {
  gid: 1,
  name: "John Doe",
  email: "john.doe@example.com",
  phone: 123456789,
  image: "https://www.conpaas.org/wp-content/uploads/2016/06/team-1.jpg",
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  location: {
    latitude: 37.7749,
    longitude: -122.4194,
    latitudeDelta: 37.7749,
    longitudeDelta: -122.4194,
    radius: 500,
  },
  birthDate: 1013510655,
  phoneVerified: true,
  emailVerified: true,
  creationDate: 1707734655,
  published: 10,
  participated: 23,
  gender: "male",
  lastParticipation: 1710243855,
  favoriteSports: [1, 2],
};

export default data;
