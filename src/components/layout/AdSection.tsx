function AdSection({ addData }) {
  const adImg = addData.image || [];
  return (
    <>
      {adImg.map((item) => (
        <a target="_blank" href="#">
          <img src={item.image.url} />
        </a>
      ))}
    </>
  );
}
export default AdSection;
