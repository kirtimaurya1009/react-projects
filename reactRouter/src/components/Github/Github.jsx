import React, { useEffect, useState } from 'react'
import { githubInfoLoader } from '../../gitHubUtil'

function Github() {
    
    const [githubInfo, setGithubInfo] = useState(null);
    useEffect(() => {
        const fetchData = async () => {
            const data = await githubInfoLoader();
            //const json = await data.json();
            //console.log(data);
            setGithubInfo(data);
        };

        fetchData();
    }, []);
//console.log(githubInfo.followers);
    // const [data, setData] = useState([])
    // useEffect(() => {
    //  fetch('https://api.github.com/users/hiteshchoudhary')
    //  .then(response => response.json())
    //  .then(data => {
    //     console.log(data);
    //     setData(data)
    //  })
    // }, [])
    
  return (
    <div>
            {githubInfo && (
               <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>Github followers: {githubInfo.followers}
               <img src={githubInfo.avatar_url} alt="Git picture" width={300} />
               </div>
            )}
        </div>
  )
}

export default Github;



