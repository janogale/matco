export default function Banner({ size = "text-2xl", text1 = "", text2 = "" }) {
  return (
    <div className="text-center py-12 ">
      <h1
        className={`${size} font-bold tracking-tight text-sky-600 sm:text-4xl md:text-5xl`}
      >
        <span className="block mb-2">{text1}</span>
        <span className="block text-green-600">{text2}</span>
      </h1>
    </div>
  );
}
