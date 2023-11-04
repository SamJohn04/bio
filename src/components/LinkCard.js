export default function LinkCard({ link, title, src }) {
    return(
        <a href={link}>
            <div className="link-card" target="_blank" rel="noreferrer">
                <img src={src} alt={title}/>
                <h4>{title}</h4>
            </div>
        </a>
    )
}