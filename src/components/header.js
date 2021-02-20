function Header({headers}){    
    const resultHTML =[];

    headers.forEach(({id,title,link}) => {
        resultHTML.push(<a className="nav__item" href={link} key={id}>{title}</a>)        
    });

    return( <>
        <header>
            <figure>
                <img src="https://i.hizliresim.com/yVsJgW.jpg" alt=""/>
            </figure>
            <nav>
                {resultHTML}    
            </nav>
        </header>        
        </>
    );
}

export default Header