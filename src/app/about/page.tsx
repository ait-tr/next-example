export default async function About() {
  // const BASE_URL = process.env.BASE_URL;
  // const res = await fetch(BASE_URL + "/api/hello");
  // const { message } = await res.json();
  return (
    <div className="px-28 py-20">
      <h2>О проекте</h2>
      <p>Платформа для онлайн-обучения различным видам спорта</p>
      {/* <p>{message}</p> */}
    </div>
  );
}
