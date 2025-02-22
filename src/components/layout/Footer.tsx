const Footer = () => {
  const current_date = new Date().getFullYear()
  return (
    <div className="flex justify-between items-center py-10 px-[4%] bg-primary-900 text-white">
      <div className='s'>
        OrogareTVC <span>{current_date}</span>
      </div>
      <div className='s'>Site Map</div>
      <div className='s'>Location</div>
    </div>
  )
}

export default Footer
