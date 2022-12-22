export default function Page({ params }: any) {
  console.log(params);
  return (
    <div>
      <h1>This is Car {params.carId}</h1>
    </div>
  );
}
