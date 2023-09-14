
export default function Hero(){
return(
    <>
    <div className="w-100vw h-80vh  flex justify-center my-8">
<div className="w-90vw h-80vh  overflow-hidden rounded-lg lg:rounded-3xl">
    <video src="https://upload-cdn.careem.com/2023_05_05_Careem_New_Brand_Video_Cutdown_04_1920_X1080_Online_Mix_851c26c68a.mp4" 
    className="w-full h-full object-cover rounded-lg lg:rounded-3xl" autoPlay="autoPlay" playsInline loop="loop" muted="muted"></video>
</div>
</div>

    </>
)
}