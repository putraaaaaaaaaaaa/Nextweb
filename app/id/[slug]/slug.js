export default async function querySnapshot = await getDocs(collection(db, "populer"));
querySnapshot.forEach((doc) => {
  const data = doc.data();
  console.log(data.link)
});