import RestaurantImage1 from "../assets/images/Restaurant1.jpeg";
import RestaurantImage2 from "../assets/images/Restaurant2.jpeg";
import RestaurantImage3 from "../assets/images/Restaurant3.jpeg";
import FriedRice from "../assets/images/FriedRice.jpg";
export default [
  {
    Id: 1,
    Name: "BBQ Night",
    Distance: "1.5km",
    Rating: "4.8",
    RatingCount: "1.2k",
    FavoriteFlag: true,
    Placeholder: RestaurantImage1,
    Cuisines: [
      {
        Name: "Chinese",
        Dishes: [
          {
            Name: "Fried rice",
            Description:
              "Fried rice is a dish of cooked rice that has been stir-fried in a wok or a frying pan and is usually mixed with other ingredients such as eggs, vegetables, seafood, or meat.",
            Price: 30,
            Placeholder: FriedRice,
            Count: 0,
          },
          {
            Name: "Mapo tofu",
            Description:
              "Mapo tofu is a popular Chinese dish from Sichuan province.",
            Price: 130,
            Placeholder: FriedRice,
            Count: 0,
          },
          {
            Name: "Spring rolls",
            Description:
              "Spring rolls are rolled appetizers or dim sum commonly found in Chinese and Southeast Asian cuisines.",
            Price: 100,
            Placeholder: FriedRice,
            Count: 0,
          },
        ],
        IsActive: false,
      },
      {
        Name: "Biryani",
        Dishes: [
          {
            Name: "Chicken Biryani",
            Description:
              "A flavorful and aromatic rice dish made with tender chicken pieces, fragrant spices, and basmati rice.",
            Price: 12.99,
            Placeholder: FriedRice,
            Count: 0,
          },
          {
            Name: "Vegetable Biryani",
            Description:
              "A delicious and wholesome rice dish prepared with a mix of fresh vegetables, herbs, and basmati rice.",
            Price: 10.99,
            Placeholder: FriedRice,
            Count: 0,
          },
          {
            Name: "Mutton Biryani",
            Description:
              "Succulent pieces of mutton cooked to perfection, combined with fragrant spices and basmati rice.",
            Price: 14.99,
            Placeholder: FriedRice,
            Count: 0,
          },
          {
            Name: "Shrimp Biryani",
            Description:
              "A seafood delight featuring plump shrimp, aromatic spices, and fragrant basmati rice.",
            Price: 16.99,
            Placeholder: FriedRice,
            Count: 0,
          },
        ],
        IsActive: false,
      },
      {
        Name: "Kashmiri",
        Dishes: [
          {
            Name: "Rogan Josh",
            Description:
              "A classic Kashmiri dish featuring tender pieces of meat, cooked with a rich and aromatic red gravy made from a blend of spices.",
            Price: 14.99,
            Placeholder: FriedRice,
            Count: 0,
          },
          {
            Name: "Gushtaba",
            Description:
              "A traditional Kashmiri dish made with minced mutton, yogurt, and aromatic spices, creating a creamy and flavorful curry.",
            Price: 13.99,
            Placeholder: FriedRice,
            Count: 0,
          },
          {
            Name: "Kashmiri Pulao",
            Description:
              "A fragrant and colorful rice dish made with saffron, dry fruits, and aromatic spices, offering a delightful taste of Kashmir.",
            Price: 10.99,
            Placeholder: FriedRice,
            Count: 0,
          },
          {
            Name: "Dum Aloo",
            Description:
              "Baby potatoes cooked in a rich and spicy tomato-based gravy, a popular vegetarian Kashmiri dish.",
            Price: 11.99,
            Placeholder: FriedRice,
            Count: 0,
          },
        ],
        IsActive: false,
      },
      {
        Name: "American",
        Dishes: [
          {
            Name: "Hamburger",
            Description:
              "A classic American favorite - a ground beef patty served in a bun with various toppings, including lettuce, tomatoes, and cheese.",
            Price: 8.99,
            Placeholder: FriedRice,
            Count: 0,
          },
          {
            Name: "BBQ Ribs",
            Description:
              "Succulent and tender pork or beef ribs, slow-cooked and smothered in barbecue sauce, a finger-licking American delicacy.",
            Price: 15.99,
            Placeholder: FriedRice,
            Count: 0,
          },
          {
            Name: "Macaroni and Cheese",
            Description:
              "Creamy macaroni pasta mixed with a rich cheese sauce, a comforting American side dish or main course.",
            Price: 9.99,
            Placeholder: FriedRice,
            Count: 0,
          },
          {
            Name: "Chicken Fried Steak",
            Description:
              "A Southern classic - a breaded and fried steak, typically served with creamy country gravy and mashed potatoes.",
            Price: 12.99,
            Placeholder: FriedRice,
            Count: 0,
          },
        ],
        IsActive: false,
      },
    ],
  },
  {
    Id: 2,
    Name: "Bella Roma",
    Distance: "2.2km",
    Rating: "4.3",
    RatingCount: "1k",
    FavoriteFlag: false,
    Placeholder: RestaurantImage2,
    Cuisines: [],
  },
  {
    Id: 3,
    Name: "Girl and the Goat",
    Distance: "2.8km",
    Rating: "4.0",
    RatingCount: "865",
    FavoriteFlag: false,
    Placeholder: RestaurantImage3,
    Cuisines: [],
  },
  {
    Id: 4,
    Name: "Hasty Kitchen",
    Distance: "3.5km",
    Rating: "3.8",
    RatingCount: "2k",
    FavoriteFlag: false,
    Placeholder: RestaurantImage1,
    Cuisines: [],
  },
  {
    Id: 5,
    Name: "Cafe Gratitude",
    Distance: "4.3km",
    Rating: "3.5",
    RatingCount: "1.3k",
    FavoriteFlag: false,
    Placeholder: RestaurantImage2,
    Cuisines: [],
  },
];
