export const services = async (method, data, path) => {
  console.log("data", data);
  try {
    const response = await fetch(
      `${process.env.REACT_APP_BASE_URL}${path}`,
      {
        method: method,
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: data ? JSON.stringify(data) : null,
      }
    );
    console.log("response");
    return response.json();
  } catch (err) {
    console.info("err:", err);
  }
};
