const ImageIndex = (imageName) => {
    const images = {
        "CruzHacks_2020": require("../../Assets/CruzHacks_2020.JPG"),
        "Hackathons": require("../../Assets/Hackathons.JPG"),
        "SASE_WRC": require("../../Assets/SASE_WRC.jpeg"),
        "Profile": require("../../Assets/Profile.JPG"),
        "BSOE": require("../../Assets/BSOE.png"),
        "Baskin": require("../../Assets/Baskin.jpg"),
        "Tech4Good": require("../../Assets/T4g.png")
    }
    return images[imageName];
}

export default ImageIndex;