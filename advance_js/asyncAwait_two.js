function fetchUserData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ name: "Unuching", url: "youtube.com" });
    }, 3000);
  });
}
async function getUserData() {
  try {
    console.log("Fetching user data...");
    let userData = await fetchUserData();
    console.log("data fetched succesfully");

    console.log("User Data:", userData);
  } catch (error) {
    console.log("Data is error", error);
  }
}
getUserData();
