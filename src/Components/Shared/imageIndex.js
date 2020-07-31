const ImageIndex = (imageName) => {
    const images = {
        "CruzHacks_2020": require("../../Assets/CruzHacks_2020.JPG"),
        "Hackathons": require("../../Assets/Hackathons.JPG"),
        "SASE_WRC": require("../../Assets/SASE_WRC.jpeg"),
        "Profile": require("../../Assets/Profile.JPG")
    }
    return images[imageName];
}

export default ImageIndex;