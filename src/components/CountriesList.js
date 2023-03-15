import Country from '../components/Country';

const CountriesList = ({countries, updateVisitedClick}) => {
    
    const countryComponents = countries.map((country, index) => {
        return <Country country={country} key={index} updateVisitedClick={updateVisitedClick}/>;
  });
  
        return (
            <>
            <ul>
                {countryComponents} 
            </ul>
            </>
        )
}
 
export default CountriesList;