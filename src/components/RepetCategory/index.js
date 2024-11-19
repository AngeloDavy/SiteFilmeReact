import Card from "../Card";
import Category from "../Category";
import videos from "../../json/videos.json";
import Carousel from "../Carousel";

const categories = [
  "Geografia",
  "Como fazer e usar",
  "Astronomia e Geografia",
  "Climatologia, Meteorologia, Vegetação",
  "Geologia e Hidrografia",
];

function filterCategory(id) {
  return videos.filter((video) => video.category === categories[id]);
}

function CategoryMap() {
  return (
    <>
      {categories.map((category, index) => (
        <Category category={category} key={index}>
          <Carousel>
          {filterCategory(index).map((video) => (
            <Card id={video.id} key={video.id} />
          ))}
        </Carousel>
        </Category>
      ))}
    </>
  );
}

export default CategoryMap;
