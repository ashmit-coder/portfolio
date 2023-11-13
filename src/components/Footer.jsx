const Footer = () =>{
    return(
        <div className="bg-[#240054]   text-white text-l flex justify-between items-center p-24 pr-96 pl-32">
            <div className="">
                <a href="#Main">
                    <img src="/images/logo.png" alt="logo"className="w-32"/>
                    </a>
            </div>
            <div className="mr-28">
                <ul className="list-disc">
                <li>
                <a href="https://github.com/ashmit-coder" target="blank">
                Github
                </a>
                </li>
                <li>
                <a href="https://www.linkedin.com/in/ashmit-jagtap-544587270/" target="blank">
                LinkedIn
                </a>
                </li>
                <li>
                <a href="https://twitter.com/AshmitJagtap/" target="blank">
                Twitter
                </a>
                </li>
                </ul>
            </div>
        </div>
    )
};
export default Footer;