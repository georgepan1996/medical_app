//  import Firebase from "./lib/firebase";
// import { useEffect, useState } from "react";
// // import { SnapshotViewIOS } from "react-native";
// // export async function getRestaurants(restaurantsRetrieved) {
// //   var restaurantList = [];

// //   var snapshot = await firebase.firestore().collection("Restaurants").get();

// //   snapshot.forEach((doc) => {
// //     restaurantList.push(doc.data());
// //   });

// //   restauantsRetrieved(restaurantList);
// // }
// export default () => {
//   const [restaurantsList, setRestaurantsList] = useState([]); //Initialise restaurant list with setter
//   const [errorMessage, setErrorMessage] = useState("");

//   const getRestaurants = async () => {
//     try {
//       const list = [];
//       var snapshot = await Firebase.firestore().collection("Restaurants").get();
//       console.log("Here");
//       snapshot.forEach((doc) => {
//         list.push(doc.data());
//       });
//       setRestaurantsList(list);
//     } catch (e) {
//       setErrorMessage(
//         "There's nae bleeding restaurants, I told you to upload them!"
//       );
//     }
//   };

//   //Call when component is rendered
//   useEffect(() => {
//     getRestaurants();
//   }, []);

//   return (

//   <View style={tailwind('py-10 px-5')}>
//     <Text style={tailwind('text-4xl font-bold')}>
//       {restaurantsList}
//     </Text>
