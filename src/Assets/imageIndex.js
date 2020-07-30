const ImageIndex = (imageName) => {
    const images = {
        "CruzHacks_2020": require("./CruzHacks_2020.JPG"),
        "Hackathons": require("./Hackathons.JPG"),
        "SASE_WRC": require("./SASE_WRC.jpeg")
    }
    return images[imageName];
}

export default ImageIndex;