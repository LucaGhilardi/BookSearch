const Loading = ({loading , searchTerm}) => {
    return ( 
        <div>
        {
            loading && 
            <div style={{color: `black`}}>Looking for<strong>{searchTerm}</strong></div>
          }
        </div>
     );
}
 
export default Loading;