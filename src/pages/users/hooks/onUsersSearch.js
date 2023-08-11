import moment from 'moment';

export const onUsersSearch = (listings, values)=>{

  let currentListing = listings;


  const simpleByText = (id)=>{
    if(values[id]){
        currentListing = currentListing.filter( item => item[id] ===  values[id] );
      }
  }

  const findByTags = (id)=>{
    if(values[id]){
  
      let selectedTags = values[id];
  
      currentListing = currentListing.filter( item => selectedTags.every( tag => item[id]?.includes(tag) ) );
  
    }
  }
  const findByNum = ()=>{
    if(values.rangeBerth){
    
      currentListing = currentListing.filter((item)=>{
        
        
        const age =moment(new Date()).diff(new Date(item.dateBerth), 'year');
 
        
        if(values.rangeBerth[0] <  age && values.rangeBerth[1] > age){
          return item;
        }
        
      });
    }
  }

  const findByСoincideText = ()=>{
    if(values.city){
      currentListing = currentListing.filter(item=>(item.currentLocation?.address.indexOf(values.city)>-1));
    }
  }


  simpleByText('gender');
  
  findByNum();


  findByСoincideText('city')

  findByTags('goals');
  findByTags('interests');
  

  simpleByText('zodiac');
  simpleByText('work');
  simpleByText('orientation');


    console.log('currentListing', currentListing)
  return currentListing;
}