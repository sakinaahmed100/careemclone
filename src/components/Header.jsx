import Nav from "./Nav"

export default function Header(){
return(
    <>
   <header className="flex items-center px-8 h-10vh">
    <div className="w-10vw mr-12">
    <img src="https://upload-cdn.careem.com/careem_logo_new_36c7f7d5bd.png" alt="" />
    </div>
    <Nav></Nav>
   </header>
    </>
)
}
