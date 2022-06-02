export function linkEmail(p_email, p_subject, p_body) {
    // let ex1 = "mailto:accladeram@gmail.com?subject=Insert your subject &body=Some body text here";
    let email = "", subject = "", body = "";
    email = p_email.toString();
    subject = p_subject.toString();
    body = p_body.toString();
    email = email.trim();
    subject = subject.trim();
    body = body.trim();
    subject = subject.replaceAll("%", "%25");
    subject = subject.replaceAll(" ", "%20");
    subject = subject.replaceAll("&", "%26");
    subject = subject.replaceAll("=", "%3D");
    subject = subject.replaceAll("?", "%3F");
    body = body.replaceAll("%", "%25");
    body = body.replaceAll(" ", "%20");
    body = body.replaceAll("&", "%26");
    body = body.replaceAll("=", "%3D");
    body = body.replaceAll("?", "%3F");
    return `mailto:${email}?subject=${subject} &body=${body}`
}

export function linkPhoneNumberCall(p_number) {
    // let ex1 = "tel:123-456-7890";
    let number = "";
    number = p_number.toString();
    number = number.trim();
    number = number.replaceAll(" ", "");
    number = number.replaceAll("-", "");
    number = number.replaceAll("+", "");
    return `tel:${number}`;
}

export function linkWhatsApp(p_number, p_msg) {
    // let whatsappHref = "https://api.whatsapp.com/send?phone=59173190823&text=Hello, more information!";
    let number = "", msg = "";
    number = p_number.toString();
    msg = p_msg.toString();
    number = number.replaceAll(" ", "");
    number = number.replaceAll("-", "");
    number = number.replaceAll("+", "");
    msg = msg.replaceAll("%", "%25");
    msg = msg.replaceAll(" ", "%20");
    msg = msg.replaceAll("&", "%26");
    msg = msg.replaceAll("=", "%3D");
    msg = msg.replaceAll("?", "%3F");
    msg = msg.trim();
    number = number.trim();
    return `https://api.whatsapp.com/send?phone=${number}&text=${msg}`;
}

function linkGoogleMaps(){
    // https://www.google.com/maps/@-17.7915573,-63.178627,15z
    // https://www.google.com/maps/@{latitud},{longitud},{zoom}z
    //
    /*ZOOM Levels
    1: World
5: Landmass/continent
10: City
15: Streets
20: Buildings
    */ 

}






export function linkLinkedin(p_username) {
    if (!p_username) return;
    let username = "";
    username = p_username.toString().trim();
    // let ex1 = "https://www.linkedin.com/in/yanetmolinaguirre-4156a6133/";
    // let ex2 = "https://www.linkedin.com/in/maria-laura-amelunge/";
    // let ex3 = "https://www.linkedin.com/in/raquelbalderrama/";
    return `https://www.linkedin.com/in/${username}/`;
}

export function linkFacebook(p_username) {
    if (!p_username) return;
    let username = "";
    username = p_username.toString().trim();
    // let ex1 = "https://www.facebook.com/carolina.claderamelgar/";
    // let ex2 = "https://www.facebook.com/samantha.jimenezestikle";
    return `https://www.facebook.com/${username}`;
}

export function linkTwitter(p_username) {
    if (!p_username) return;
    let username = "";
    username = p_username.toString().trim();
    // let ex1 = "https://twitter.com/elonmusk?s=20&t=YtNUZBx1Yq0v1zKII8LPjw";
    // let ex2 = "https://twitter.com/elonmusk";
    // let ex3 = "https://twitter.com/mariela45933419";
    return `https://twitter.com/${username}`;
}

export function linkTwitch(p_username) {
    if (!p_username) return;
    let username = "";
    username = p_username.toString().trim();
    // let ex1 = "https://www.twitch.tv/dutchj";
    // let ex2 = "https://www.twitch.tv/falsomarielamendez";
    return `https://www.twitch.tv/${username}`;
}

export function linkTiktok(p_username) {
    if (!p_username) return;
    let username = "";
    username = p_username.toString().trim();
    // let ex1 = "https://www.tiktok.com/@jedielsoncosta";
    // let ex2 = "https://www.tiktok.com/@zezinho_neto";
    return `https://www.tiktok.com/@${username}`;
}

export function linkInstagram(p_username) {
    if (!p_username) return;
    let username = "";
    username = p_username.toString().trim();
    // let ex1 = "https://www.instagram.com/iamtabithabrown/";
    // let ex2 = "https://www.instagram.com/nimai_delgado/";
    // let ex3 = "https://www.instagram.com/frommybowl/?hl=en";
    return `https://www.instagram.com/${username}`
}

export function linkDiscord(channel) {
    // let ex1 = "https://discord.com/channels/363985050578190336/912209612638388244";
    // let ex2 = "https://discord.com/channels/595999872222756885/712994461956833360";
    return `https://discord.com/channels/${channel}`;
}

export function linkSpotifyPodcast(idPodcast) {
    // let ex1 = "https://open.spotify.com/user/12183392185?si=a5e877116d1a442e&nd=1";
    // let ex2 = "https://open.spotify.com/user/12186893985?si=938291ecf5544904&nd=1";
    // let exArtist1 = "https://open.spotify.com/artist/0BW2fNxPUjTmidG1SgnK8X?si=N6hleiMoTHai4zfeE3pUIg&nd=1";
    // let exArtist2 = "https://open.spotify.com/artist/790FomKkXshlbRYZFtlgla?si=ThHPRQhXTVeiaJxACNy_xA&nd=1";
    // let exPodcast = "https://open.spotify.com/show/1w9Me4TrRiDOuK3OsJ2VAW?si=b088acab74164243";
    // let exPodcats2 = "https://open.spotify.com/show/0KUjSzqMyxrTyXuw15j4e8";
    return `https://open.spotify.com/show/${idPodcast}`;
}

export function linkYoutube(channel) {
    // let ex1 = "https://www.youtube.com/c/AlFondoHaySitio";
    // let ex2 = "https://www.youtube.com/c/consuelopersonalshop";
    // let ex3 = "https://www.youtube.com/channel/UCoEiJtcmyv_IC3mgQL22yXg";
    // let ex4 = "https://www.youtube.com/channel/UCChMGCqNLPD-QA5caC690aQ";
    return `https://www.youtube.com/channel/${channel}`;
}