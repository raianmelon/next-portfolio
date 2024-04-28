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
                    gap: '10px'
                }}>
                    <img src={'https://www.raianmelon.com/logo.png'} width={50} alt='Raian Melon'/>
                    <h2>Raian Melon</h2>
                </a>

            </div>
        </>
    )
}