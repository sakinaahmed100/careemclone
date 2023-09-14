
export default function TextCard({props1,props2,props3,props4,imgDiv,data,bullet}){
    return(
        <>
        <div className={`rounded-2xl p-4 ${props1} ${props2} ${props3} ${props4}`}>
            <div className={`text-6xl font-semibold`}>Go</div>
            <div className={`text-3xl font-semibold`}> Anywhere</div>
         
            <ul className={`mt-4 text-2xl font-semibold`}>
            {data?.map((e,i)=>{
                return(
                    <li key={i} className={`flex gap-2 items-center`}>
                    <div className={`w-6 h-6 ${imgDiv}`}>
                    <img className={`rtl:pl-1 rtl:pr-0 invert brightness-0  ${bullet}`} src="https://upload-cdn.careem.com/product_bcef266a29.png" alt="" />
                    </div>
                    <span ><p className="capitalize">{e}</p></span>

                </li>
                )
            })}
          
            </ul>

    </div>
        </>
    )
    }