import { getJobs } from "@/api/apiJobs";
import useFetch from "@/hooks/use-fetch";
import { useEffect } from "react";


const JobListing = () => {


    const {
      fn:fnjobs,
      data:dataJobs,
      loading:loadingJobs,
    } = useFetch(getJobs , {})

    console.log(dataJobs);
    
    useEffect(() => {
      fnjobs
    },[])

    return <div>JobListing</div>

  }
  

export default JobListing