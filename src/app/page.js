export default function Home() {
  const nasaa = [
    {
      name: "nasanbuyan",
      age: 18,
      gender: "male",
    },
    {
      name: "bataa",
      age: 20,
      gender: "male",
    },
  ];
  return (
    <div className="flex justify-center flex-col gap-4">
      {nasaa.map((item) => (
        <div className="flex gap-4">
          <div>{item.name}</div>
          <div>{item.age}</div>
          <div>{item.gender}</div>
        </div>
      ))}
    </div>
  );
}
