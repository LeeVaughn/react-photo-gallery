import NoResults from './NoResults';

function Photos(props) {
  const results = props.results;
  let pics;

  if (results.length) {
    pics = results.map(pic => {
      return (
        <li key={`${pic.id}`}>
          <img src={`https://farm${pic.farm}.staticflickr.com/${pic.server}/${pic.id}_${pic.secret}_m.jpg`} alt="" />
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
