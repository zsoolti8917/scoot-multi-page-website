import React from 'react'
import JobCard from './JobCard'
const Jobs = [

    {
        ID : 1,
        title : "General manager",
        location : "New York",
    },
    {
        ID : 2,
        title : "UI/UX Designer",
        location : "Yokohama, Japan",
    },
    {
        ID : 3,
        title : "Blog Content Copywriter",
        location : "New York, United States",
    },
    {
        ID : 4,
        title : "Graphic Designer",
        location : "New York, United States",
    },
    {
        ID : 5,
        title : "Fleet Supervisor",
        location : "Jakarta, Indonesia",
    },
    {
        ID : 6,
        title : "UX Analyst",
        location : "London, United Kingdom",
    },
]

const JobSelection = () => {
  return (
    <section className='my-10'>
        <div className='max-w-[1110px] mx-auto flex flex-col gap-6 px-6 xl:px-0'>
            {Jobs.map((job) => {
                return <JobCard key={job.ID} title={job.title} location={job.location}/>
            })}
        </div>
    </section>
  )
}

export default JobSelection