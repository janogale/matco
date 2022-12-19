export default function Banner({ size = "text-4xl", text1 = "", text2 = "" }) {
  return (
    <div className="text-center my-8">
      <h1
        className={`${size} font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl`}
      >
        <span className="block">{text1}</span>
        <span className="block text-orange-600">{text2}</span>
      </h1>
    </div>
  );
}
