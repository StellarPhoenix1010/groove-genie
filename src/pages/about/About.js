export default function About() {
    const backgroundstyle = {
        // width: "100%",
        // minHeight: "calc(100vh - 80px)",
        // height: "auto",
        // display: "flex",
        // flexDirection: "column",
        // align-items: "center",
        paddingTop: "20px",
        paddingBottom: "20px",
        color: "white",
        backgroundColor: "#121417",
    };

    const elementsStyle = {
        width: "75%",
        margin: "auto",
    };

    return (
        <div style={backgroundstyle}>
            <div style={elementsStyle}>
                <img
                    class="img-fluid"
                    src="./assets/media/gridsample.gif"
                ></img>
            </div>
        </div>
    );
}
