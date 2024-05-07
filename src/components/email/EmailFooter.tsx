export default function EmailFooter() {
    return (
        <>
            <br/>
            <div style={{display: "flex"}}>
                <a href="https://www.raianmelon.com/" style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    textDecoration: "none",
                    color: "#FED700",
                }}>
                    <img src={'https://www.raianmelon.com/logo.png'} width={50} height={50} alt='Raian Melon'/>
                    <h2 style={{marginLeft: '10px'}} >Raian Melon</h2>
                </a>
            </div>
        </>
    )
}