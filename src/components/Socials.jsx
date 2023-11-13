const Socials = () =>{
    return(
        <div  className="flex flex-col gap-20" id="Socials">
            <div className="text-white text-6xl text-center">SOCIALS</div>
            <div className="flex gap-10 justify-evenly">
                <a href="https://github.com/ashmit-coder" target="blank">
                <img src="/images/github.png" alt="github" className="w-20"/>
                </a>
                <a href="https://twitter.com/AshmitJagtap/" target="blank">
                <img src="/images/Twitter1.png" alt="twitter" className="w-20"/>
                </a>
                <a href="https://www.linkedin.com/in/ashmit-jagtap-544587270/" target="blank">
                <img src="/images/linkedin.png" alt="Linkedin" className="w-20"/>
                </a>
            </div>
        </div>
    )
}

export default Socials;