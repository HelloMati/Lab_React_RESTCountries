const Country = ({country, updateVisitedClick}) => {

  const handleClick = () => {
    updateVisitedClick(country.name.common);
  };

  return (
    <li>
      {country.name.common}
      <br />
      <button onClick={handleClick}>Visited</button>
    </li>
  );
};

export default Country;