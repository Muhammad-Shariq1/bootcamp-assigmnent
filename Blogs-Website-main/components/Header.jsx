

function Header (){

    return(
        <>
         <header className="flex justify-around w-full py-4 items-center bg-[#70A4EE] text-white">
            <div><h1 className="text-5xl font-extrabold">BLOGI</h1></div>
            <div>
                <ul className="text-lg flex gap-12 justify-center items-center font-sans">
                    <li>Featured</li>
                    <li>Pricing</li>
                    <li>Contant</li>
                </ul>
            </div>
            <div className="text-lg flex gap-12">
                <button className="">Login</button>
                <button className="border px-8 py-2">Sign up</button>
            </div>
         </header>
        </>
    )
}
export default Header