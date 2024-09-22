import { useUser } from '@clerk/clerk-react'
import React from 'react'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from './ui/card'
import { HeartIcon, MapPinIcon, TrashIcon } from 'lucide-react'
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom'

const JobCard = ({
  job,
  isMyJob = false,
  isSavedInit = false,
  onJobSaved = () => {}
}) => {
  const {user} = useUser()
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex justify-between font-bold">
          {job.title}
        {isMyJob && (
          <TrashIcon 
          fill='red'
          size={18}
          className='text-red-300 cursor-pointer'
          />
        )}
      </CardTitle>
      </CardHeader>

        <CardContent className="flex flex-col gap-4 flex-1">
          <div className='flex justify-between'>
            {job.company && <img src={job.company.logo_url} className='h-6' />}
            <div className='flex gap-2 items-center'>
              <MapPinIcon size={15}/> {job.location}
            </div>
          </div>
        <hr />
        {job.description.substring(0, job.description.indexOf("."))}
        </CardContent>
        <CardFooter>
          <Link to={`/job/${job.id}`} className="flex-1">
          <Button className="w-full" variant="secondary">
            More Details
          </Button>
          </Link>

          <HeartIcon size={20} stroke='red' fill='red' />
        </CardFooter>


    </Card>
  )
}

export default JobCard