import NoResults from './NoResults';

function Photos(props) {
  console.log("props", props)
  const results = props.results;
  let pics;

  if (results.length) {
    pics = results.map(pic => {
      return (
        <li>
          <img src={`https://farm${pic.farm}.staticflickr.com/${pic.server}/${pic.id}_${pic.secret}_m.jpg`} key={pic.id} alt="" />
        </li>
      );
    });
  } else {
    pics = <NoResults />
  }

  return (
    pics
  );
}

export default Photos;
