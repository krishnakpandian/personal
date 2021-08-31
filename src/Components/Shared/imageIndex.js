const ImageIndex = (imageName) => {
    const images = {
        "CruzHacks_2020": require("../../Assets/Life/CruzHacks_2020.JPG"),
        "Hackathons": require("../../Assets/Life/Hackathons.JPG"),
        "SASE_WRC": require("../../Assets/Life/SASE_WRC.jpeg"),
        "Profile": require("../../Assets/Profile.JPG"),
        "BSOE": require("../../Assets/Life/BSOE.png"),
        "Baskin": require("../../Assets/Life/Baskin.jpg"),
        "Tech4Good": require("../../Assets/Life/T4g.png"),
        "Code100": require("../../Assets/Life/Code100.png")
    }
    return images[imageName];
}

export default ImageIndex;