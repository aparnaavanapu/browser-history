import './index.css'
const BrowserItem=(props)=>{
    const {details,deleteSearch}=props
    const {timeAccessed,logoUrl,title,domainUrl,id}=details

    const handleClick=()=>{
        deleteSearch(id)

    }
    
    return (
    <li className="list-item">
        <p className="time">{timeAccessed}</p>
        <img src={logoUrl} alt="logo" className="app-logo" />
        <p className="title">{title}</p>
        <p className="domain-url">{domainUrl}</p>
       <img src="https://assets.ccbp.in/frontend/react-js/delete-img.png" className="delete-icon"   alt="delete" onClick={handleClick}/>
    </li>
    )

}

export default BrowserItem