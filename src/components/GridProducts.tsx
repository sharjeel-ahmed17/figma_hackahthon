import { Star } from "lucide-react"


const GridProducts = () => {
  return (
    <section className=" body-font">
    <div className="max-w-[1240px] px-5 py-24 mx-auto">
        <h2 className='text-center mb-20 font-integBold text-[48px]'>NEW ARRIVALS</h2>
      <div className="flex flex-wrap -m-4">
       <Card/>
       <Card/>
       <Card/>
       <Card/>
       
      </div>
    </div>
  </section>
    
  )
}

export default GridProducts



function Card(){
  return(
    <div className="p-4 md:w-1/4 w-1/2">
    <div className="h-full  border-opacity-60 rounded-lg overflow-hidden">
      <img
        className="md:h-[298px] h-[200px] w-full  object-fill rounded-2xl"
        src="/images/na2.png"
        alt="blog"
      />
      <div className="my-4">
       
        <h3 className="title-font text-[20px] font-satoshBold text-gray-900 mb-3">
        T-SHIRT WITH TAPE DETAILS
        </h3>
        {/* star rating */}
       <div className="flex gap-2 my-3">
        <Star stroke="none" fill="yellow" size='19px'></Star>
        <Star stroke="none" fill="yellow" size='19px'></Star>
        <Star stroke="none" fill="yellow" size='19px'></Star>
        <Star stroke="none" fill="yellow" size='19px'></Star>
        <Star stroke="none" fill="yellow" size='19px'></Star>

        {/* number out of  */}
        <div className="text-[14px] font-satoshi">
          <span >4.5/</span>
          <span className="text-black opacity-60">5</span>
        </div>
 
       </div>
       
       {/* price */}
       <div className="flex gap-3 items-center">
        <p className="font-satoshBold text-[24px]">$120</p>
        <del className="text-[24px] text-carddelcolor font-satoshBold " >$40</del>
        <span className="p-[4px_12px] rounded-full bg-carddisbg text-carddisfg">-20%</span>
       </div>
      </div>
    </div>
  </div>
  )
}