import fs from 'fs/promises';

async function fetchData() {
  try {
    const response = await fetch("https://fakestoreapi.com/products");
    const data = await response.json();

    await fs.writeFile("file.txt", JSON.stringify(data));
    console.log("Data saved to file.txt");
  } catch (error) {
    console.log("Error:", error);
  } finally {
    console.log("This code runs finally");
  }
}

fetchData();