function AdSection({ addData }) {
  const adImg = addData.image || [];
  console.log(adImg)
  return (
    <section className="mt-10">
      {adImg.map((item) => (
        <a key={item.name} target="_blank" href="#">
          <img src={item.image.url} />
        </a>
      ))}
    </section>
  );
}
export default AdSection;
